
import Link from "next/link";
import "./activitycard.scss";
//import Image from "next/image";
 
export default function ActivityCard({activity}) {
    return(
        <Link href={`/activities/${activity.id}`} className="card-link">
      
        <div className="card">
            <img src={activity.asset.url} alt={activity.name} className="image-card" />
            <div className="description">
                <h3>{activity.name}</h3>
                <p>{` ${activity.minAge}–${activity.maxAge}år`}</p>
            </div>
        </div>
        
        </Link>
    );
}