import {cookies} from "next/headers";
import Link from "next/link";


export default async function CalenderCard({calenderData}) {
    const cookiesStore = await cookies();
    const role = cookiesStore.get("landrup_role");

    return(
        <>
      {!calenderData || calenderData.length < 1 ? (

<div>
No Activites available for this user

</div>
      ) : (
<div>
{calenderData.map((activity)    => (

<Link
href={`/kalender/${activity. id}`}
key={activity.id}
className="card"
>
    <div className="class-title">
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