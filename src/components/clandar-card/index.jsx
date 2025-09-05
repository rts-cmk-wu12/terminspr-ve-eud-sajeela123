import { cookies } from "next/headers";
import Link from "next/link";
import "./clandarcard.scss";

export default async function CalendarCard({ calendarData }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <>
      {!calendarData || calendarData.length < 1 ? (
        <div className="card-empty">
          No Activities available
        </div>
      ) : (
        <div>
          {calendarData.map((activity) => (
            <Link
              href={`/calendar/${activity.id}`}
              key={activity.id}
              className="card"
            >
              <div className="card-title">
                {activity.name}
              </div>
              <div className="card-subtitle">
                {activity.weekday} {activity.time}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
