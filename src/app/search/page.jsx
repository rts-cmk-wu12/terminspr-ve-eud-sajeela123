import ActivityCard from "@/components/activity-card";
import SearchBar from "@/components/search-bar";
import "./search.scss"
import Footer from "@/components/ui/footer";

export const metadata = {
    title: "Search",
    description: "Search Activities.",

};

export default async function SearchPage ({ searchParams}){
     const searchedTerm = searchParams?.search || "";
     
     const response = await fetch("http://localhost:4000/api/v1/activities");
     const activities = await response.json();


     const filteredActivities = searchedTerm
     ? activities.filter((activity) =>
        activity.name.toLowerCase().includes(searchedTerm.toLowerCase())
    )

    :activities;

    return(


  <div className="page-container">
            <h1 className="page-heading">Søg</h1>
           
            <div className="searchbar-wrapper">
    <SearchBar/>
            </div>
            <ul className="activities-list">
                {filteredActivities.length === 0 ?(
                    <p>No activites found</p>
                ) : (
               filteredActivities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
 
                    ))
                )
 
                }
            </ul>
 
           
         <Footer/>   
        </div>








    )
}