
import { serverFetchWithAuth } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function KalenderDetails({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;

  const kalenderActivityId = (await params).id;
  const cookieStore = await cookies();
  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");

  if (role.value !== "instructor") {
    redirect("/");
  }

  const data = await serverFetchWithAuth(
    `${baseUrl}/api/v1/users/${userId.value}/roster/${kalenderActivityId}`,
    token.value
  );

  return (
    <div className="details-wrapper">
      <PageHeader indhold={data.name} />

      <h1 className="details-title">Junior Fitness Dan...</h1>

      {Array.isArray(data) && data.length > 0 ? (
        data.map((user) => (
          <div
            key={`${user.firstname}-${user.lastname}-${user.activity}`}
            className="user-card"
          >
            <div className="user-name">
              {user.firstname} {user.lastname}
            </div>
          </div>
        ))
      ) : (
        <div className="no-users">
          Ingen brugere tilmeldt denne aktivitet.
        </div>
      )}
    </div>
  );
}
