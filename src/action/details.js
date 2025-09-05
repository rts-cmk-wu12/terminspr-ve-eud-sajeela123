const BASE_URL = "http://localhost:4000/api/v1";
 
export async function getActivityById(id) {
    const response = await fetch(`${BASE_URL}/activities/${id}`);
    if(!response.ok) throw new Error("failed to fetch");
    return response.json();
}
 
export async function joinActivity(userId, activityId){
    const response = await fetch(`${BASE_URL}/users/${userId}/activities/${activityId}`, {
        method:"POST",
        headers:{
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6InVzZXIzIiwicGFzc3dvcmQiOiIkMmEkMTUkT01EVS44ZXRSaGY1N2ZEbVJudS9JdWhpbk5NUUpsSjh1amRVSm94RzRKWXZwdFVMNFdDZW0iLCJmaXJzdG5hbWUiOiJNYXJ0aW4iLCJsYXN0bmFtZSI6IlBvdWxzZW4iLCJhZ2UiOjIxLCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiJ9LCJpYXQiOjE2MzIzOTM0MTUsImV4cCI6MTYzMjM5NzAxNX0.WNiaflNk5_6tTOvIaNrOO9XkdG70ptBNt6sJIUBhlJg`,
        },
    });
 
    if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Join failed: ${response.status} - ${errorText}`);
  }
 
 
 
    return response.json();
}
 
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6InVzZXIzIiwicGFzc3dvcmQiOiIkMmEkMTUkT01EVS44ZXRSaGY1N2ZEbVJudS9JdWhpbk5NUUpsSjh1amRVSm94RzRKWXZwdFVMNFdDZW0iLCJmaXJzdG5hbWUiOiJNYXJ0aW4iLCJsYXN0bmFtZSI6IlBvdWxzZW4iLCJhZ2UiOjIxLCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiJ9LCJpYXQiOjE2MzIzOTM0MTUsImV4cCI6MTYzMjM5NzAxNX0.WNiaflNk5_6tTOvIaNrOO9XkdG70ptBNt6sJIUBhlJg";
 
export async function leaveActivity(userId, activityId) {
    const response = await fetch(`${BASE_URL}/users/${userId}/activities/${activityId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
    });
 
     if (!response.ok) {
    const text = await response.text();
    throw new Error(`Leave failed: ${response.status} - ${text}`);
     }
   return response.json();
}