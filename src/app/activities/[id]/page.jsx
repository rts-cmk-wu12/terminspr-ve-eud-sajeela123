import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ActivityDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchActivity = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/v1/activities/${id}`);
        if (!res.ok) throw new Error('Activity not found');
        const data = await res.json();
        setActivity(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchActivity();
  }, [id]);

  if (error) return <div>❌ Error: {error}</div>;
  if (!activity) return <div>⏳ Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{activity.title}</h1>
      <p>{activity.description}</p>
      <p><strong>Date:</strong> {activity.date}</p>
      <p><strong>Location:</strong> {activity.location}</p>
    </div>
  );
};

export default ActivityDetail;
