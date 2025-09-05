// actions/auth.js
export async function login(username, password) {
  const res = await fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  return res.json(); // contains the token
}
