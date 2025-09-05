import CalenderCard from "@/components/clander-card";

import { cookies } from "next/headers";

export default async function kalender() {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("landrup_token");
    const userId = cookiesStore.get("landrup_userid");
    const role = cookiesStore.get("land_role");

    const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;

    let calenderData;

    if(role.value === "default") {

const res = await fetch(`${baseUrl}/api/v1/users/${userId.value}`, {

method: "Get",

headers: {

    Authorization: "Bearer " + token.value,

},

});

const userData = await res.json();


    const filteredActivitiesByInstructor = activitiesData.filter(
      (activity) => activity.instructorId == userId.value
    );

 calenderData = filteredActivitiesByInstructor.map((activity) => ({
      id: activity.id,
      name: activity.name,
      description: activity.description,
      weekday: activity.weekday,
      time: activity.time,
    }));

    }


return(

<>
<h1>Kalender</h1>
{role.value === "instructor" ? (

<div className="login-role">Login dom instructor</div>
) : (

<div className="login-role">Logind som bruger</div>


)}

<div className="kalender_container">
<CalenderCard calenderData={calenderData}/>

</div>
<Footer/>

</>

);

}
















