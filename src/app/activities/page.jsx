"use client"
import React, { useEffect, useState } from 'react';
import "./activity.scss"

import ActivityCard from '@/components/ActivityCard';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
  fetch('http://localhost:4000/api/v1/activities')
    .then(res => res.json())
    .then(data => {
      console.log("Fetched activities:", data); // 👈 Check this in DevTools
      setActivities(data);
    })
    .catch(err => console.error('Error fetching activities:', err));
}, []);

  return (
    <div className="container">
      <h1 className="header">Aktiviteter</h1>
      <div className="scroll-area">
        {activities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    
    </div>
  );
}

export default App;
