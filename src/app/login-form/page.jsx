
"use client";

import React, { useState } from "react"; 
import { useRouter } from "next/navigation";
import { login } from "@/action/auth";



import "./login.scss";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      router.push("/activities");
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="background-overlay">
        <img src="/Rectangle 5.png" alt="Overlay" className="overlay-image" />
      </div>
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
