import ActivityCard from "@/components/activity-card";
import SearchBar from "@/components/search-bar";
export const metadata = {
    title: "Search",
    description: "Search Activities.",

};

export default async function SearchPage ({ searchParams}){
     const searchedTerm = searchParams.search;
     const response = await fetch("http://localhost:4000/api/v1/activities");
     const activities = await response.json();


     const filteredActivities = sreachTerm
     ? activities.filter((activity) =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    :activities;

    return(


  <div className="page">
            <h1 className="page-heading">Aktiviteter</h1>
            <div className="search-bar-container">
<SearchBar/>

            </div>
            <div className="list">
                {loading? (
                    <p>Loading..</p>
 
                ) :(
                    activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
 
                    ))
                )
 
                }
            </div>
 
           
            
        </div>








    )
}