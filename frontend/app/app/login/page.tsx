"use client";
import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignInForm";
import { ImageForm } from "./components/ImageForm";
import { Sign } from "crypto";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#f5f5ef] min-h-screen flex flex-col">
    <NavBar />
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f5ef]">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsLogin(true)} />
      )}
      <ImageForm />
    </div>
    <Footer />
    </div>
  );
};

export default Login;
