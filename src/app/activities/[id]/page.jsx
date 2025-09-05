"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getActivityById, joinActivity, leaveActivity } from "@/action/details";
import Footer from "@/components/ui/footer";
import "./activites-deatail.scss";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [activity, setActivity] = useState(null);
  const [user, setUser] = useState(null);
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  // Restore user from JWT token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload.data); // your API includes user info in `data`
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  // Fetch activity data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getActivityById(id);
        setActivity(data);

        if (user) {
          const isJoined = data.users?.some((u) => u.id === user.id) || false;
          setJoined(isJoined);
        }
      } catch (error) {
        console.error("Error fetching activity:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id, user]);

  const handleJoin = async () => {
    if (!user) {
      router.push(`/login-form?redirect=/activities/${id}`);
      return;
    }
    if (!activity?.id) return;

    try {
      await joinActivity(user.id, activity.id);
      setJoined(true);
      alert("Successfully joined the activity!");
    } catch (error) {
      console.error("Failed to join activity:", error.message);
      alert("Failed to join activity: " + error.message);
    }
  };

  const handleLeave = async () => {
    if (!user) {
      router.push(`/login-form?redirect=/activities/${id}`);
      return;
    }
    if (!activity?.id) return;

    try {
      await leaveActivity(user.id, activity.id);
      setJoined(false);
      alert("You have left the activity");
    } catch (error) {
      console.error("Failed to leave activity:", error.message);
      alert("Failed to leave activity: " + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!activity) return <p>Activity not found.</p>;

  const isEligible =
    user &&
    user.age >= activity.minAge &&
    user.age <= activity.maxAge &&
    !joined;

  return (
    <div className="detail-page">
      <div className="image-container">
        <img
          src={activity?.asset?.url || "/placeholder.png"}
          alt={activity.name}
          className="activity-image"
        />
        <button className="tilmeld-button" onClick={joined ? handleLeave : handleJoin}>
          {joined ? "Leave" : "Tilmeld"}
        </button>
      </div>

      <div className="activity-info">
        <h2>{activity.name}</h2>
        <p>
          <strong>
            Age: {activity.minAge} - {activity.maxAge}
          </strong>
        </p>
        <p>{activity.time}</p>
        <p>{activity.description}</p>
      </div>

      {user && (
        <button
          className="detail-button"
          onClick={joined ? handleLeave : handleJoin}
          disabled={!isEligible && !joined}
        >
          {joined ? "Leave Activity" : "Register"}
        </button>
      )}

      {!user && (
        <button
          className="detail-button"
          onClick={() => router.push(`/login-form?redirect=/activities/${id}`)}
        >
          Tilmeld (Login Required)
        </button>
      )}

      <Footer />
    </div>
  );
}
