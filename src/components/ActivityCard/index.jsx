'use client';
import { useRouter } from 'next/navigation';

export default function ActivityCard({ activity }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/activity/${activity.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={activity.asset.url} alt={activity.name} className="image-card" />
      <div className="description">
        <h3>{activity.name}</h3>
        <p>{`${activity.minAge}–${activity.maxAge} år`}</p>
      </div>
    </div>
  );
}
