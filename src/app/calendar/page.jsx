import CalendarCard from "@/components/clandar-card";
import Footer from "@/components/ui/footer";
import "./clandar.scss"; 

import { cookies } from "next/headers";

export default async function CalendarPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");
  const role = cookieStore.get("landrup_role");

  const baseUrl = process.env.BASE_URL;

  let calendarData = [];

  if (role?.value === "default") {
    const res = await fetch(`${baseUrl}/api/v1/users/${userId?.value}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token?.value,
      },
    });

    const userData = await res.json();

    calendarData =
      userData.activities?.map((activity) => ({
        id: activity.id,
        name: activity.name,
        description: activity.description,
        weekday: activity.weekday,
        time: activity.time,
      })) || [];
  } else if (role?.value === "instructor") {
    const res = await fetch(`${baseUrl}/api/v1/activities`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token?.value,
      },
    });
    const activitiesData = await res.json();

    const filteredActivitesByInstructor = activitiesData.filter(
      (activity) => activity.instructorId == userId?.value
    );

    calendarData = filteredActivitesByInstructor.map((activity) => ({
      id: activity.id,
      name: activity.name,
      description: activity.description,
      weekday: activity.weekday,
      time: activity.time,
      maxParticipants: activity.maxParticipants,
    }));
  }

  return (
    <>
     

      <div className="calendar-page-container">
        <CalendarCard calendarData={calendarData} />
         <Footer />
      </div>
     
    </>
  );
}
