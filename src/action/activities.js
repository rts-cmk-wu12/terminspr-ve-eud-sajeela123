const BASE_URL = "http://localhost:4000/api/v1";
 
export async function fetchActivities() {
    const response = await fetch(`${BASE_URL}/activities`, {   //${BASE_URL}/activities is a template string that combines
    //  the base URL with the "activities" endpoint.
    method: "GET",    
    });
    if (!response.ok) throw new Error("Fail to fetch");
    return response.json(); //Converts the raw HTTP response into JSON and returns it.
//response.json() itself returns a promise, so because the function is async, it will resolve to the parsed JSON object.
}
 
export async function login(username,password) {
    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username,password}),
    });
 
    if (!response.ok) throw new Error("login failed");
    return response.json();
}
 