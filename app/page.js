"use client";
import { useState } from "react";
import React from "react";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length == 0) {
      setErrorMessage("Username cannot be blank.");
      setError(true);
    } else if (password.length == 0) {
      setErrorMessage("Password cannot be blank.");
      setError(true);
    } else {
      if (username === "user") {
        window.location.href = "/user";
      } else if (username === "admin") {
        window.location.href = "/admin";
      } else {
        setErrorMessage("Username is invalid.");
        setError(true);
      }
    }
  };

  return (
    <main className="flex flex-col w-full h-full justify-between my-16 p-32">
      <form className="flex flex-col w-full h-full justify-between" onSubmit={handleSubmit}>
        <h1 className="my-4 text-6xl font-bold">Welcome to our application.</h1>
        <h2 className="my-4">Please log in to continue.</h2>
        {error && <p className="my-4 p-4 bg-red-100 rounded-md">{errorMessage}</p>}
        <input
          className="w-64 my-4 p-2 bg-gray-600 text-white rounded-md"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
          className="w-64 my-4 p-2 bg-gray-600 text-white rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button className="w-24 my-4 p-2 bg-blue-400 rounded-md" type="submit">Log In</button>
      </form>
    </main>
  );
}


export default Home;

