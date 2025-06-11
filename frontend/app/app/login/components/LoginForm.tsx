"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

interface LoginFormSectionProps {
  onSubmit?: (username: string, password: string) => void;
  onSwitch: () => void;
}

export const LoginForm: React.FC<LoginFormSectionProps> = ({ onSubmit, onSwitch }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        USERNAME: userName,
        PASSWORD: password,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.detail || "Login failed");
      return;
    }

    const data = await res.json();

    // Guardar token y username en cookies
    Cookies.set("token", data.token, { path: "/" });
    Cookies.set("username", data.name || data.username, { path: "/" });

    alert(`Welcome, ${data.name || data.username}!`);
    window.location.href = "/"; // 
  } catch (err) {
    console.error(err);
    setError("There was an error.");
  }
};

  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center px-10 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md"
      >
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={onSubmit ? () => onSubmit(userName, password) : undefined}
          type="submit"
          className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
        >
          Sign In
        </button>

        <div className="text-right mt-2">
          <a href="#" className="text-sm text-gray-700 underline">Forgot password?</a>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">You don't have an account?</p>
        <button onClick={onSwitch} className="px-4 py-2 bg-[#899878] text-white rounded-2xl hover:bg-[#E4E6C3] hover:text-black">
          Sign Up
        </button>
      </div>
    </div>
  );
};