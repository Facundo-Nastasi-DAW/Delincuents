"use client";
import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignInForm";
import { ImageForm } from "./components/ImageForm";
import { Sign } from "crypto";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f5ef]">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsLogin(true)} />
      )}
      <ImageForm />
    </div>
  );
};

export default Login;
