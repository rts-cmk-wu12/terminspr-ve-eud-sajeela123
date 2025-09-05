import "./clanderdetail.scss"; 

export default async function activityOverview({ params }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
  const activity = await response.json();
  const registeredUsers = activity.users || [];

  return (
    <section className="activity-overview">
      <Header title={activity.name} />
      <ul className="user-list">
        {registeredUsers.map((user) => (
          <li key={user.id} className="user-list-item">
            {user.firstname} {user.lastname}
          </li>
        ))}
      </ul>
    </section>
  );
}
