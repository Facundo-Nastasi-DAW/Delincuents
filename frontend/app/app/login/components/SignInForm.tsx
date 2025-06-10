"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

interface SignUpFormSectionProps {
  onSwitch: () => void;
}

export const SignUpForm: React.FC<SignUpFormSectionProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (password !== confirm) {
    setError("Passwords do not match.");
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        USERNAME: username,
        EMAIL: email,
        PASSWORD: password,
        NAME: name,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.detail || "Error al registrar.");
      return;
    }

    const data = await res.json();

    Cookies.set("token", data.token, { path: "/" });
    Cookies.set("username", data.name || data.username, { path: "/" });

    alert(`Succesful registration. Welcome, ${data.name || data.username}!`);
  } catch (err) {
    console.error(err);
    setError("An unexpected error occurred while registering");
  }
};


  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center px-10 py-16">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          className="w-full mb-4 p-2.5 border border-gray-300 rounded-xl"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button type="submit" className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition">
          Create an account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">Do you have an account?</p>
        <button
          type="button"
          className="mt-2 px-4 py-2 bg-[#899878] text-white rounded-2xl hover:bg-[#E4E6C3] hover:text-black"
          onClick={onSwitch}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
