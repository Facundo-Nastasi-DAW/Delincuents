"use client";
import React, { useState } from "react";

interface LoginFormSectionProps {
  onSubmit?: (email: string, password: string) => void;
  onSwitch: () => void;
}



export const LoginForm: React.FC<LoginFormSectionProps> = ({ onSubmit, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(email, password);
    else console.log({ email, password });
  };
  

  return (
    <div className="md:w-1/2 flex flex-col justify-center items-center px-10 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md"
      >
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

        <button
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
        <button onClick={onSwitch} className="px-4 py-2 bg-[#899878] text-white rounded-2xl hover:bg-[#E4E6C3] hover:text-black">          Sign Up
        </button>
      </div>
    </div>
  );
};
