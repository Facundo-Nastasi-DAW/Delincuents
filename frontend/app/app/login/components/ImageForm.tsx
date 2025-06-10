"use client";
import React, { useEffect, useState } from "react";

const quotes = [
  "Las plantas también hablan, solo hay que escucharlas.",
  "Cuidar una planta es cuidar un pedacito del planeta.",
  "El verde es el color de la vida.",
  "Quien planta un jardín, planta felicidad.",
  "Cada hoja guarda una historia que aún no se ha contado.",
];

export const ImageForm: React.FC = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="relative w-full bg-black h-[500px] md:w-1/2 md:h-auto">
      <img
        src="https://plantasfaitful.com.ar/wp-content/uploads/2020/11/125227076_196429512002782_1735799394435079393_n-819x1024.jpg"
        alt="background plant"
        className="absolute inset-0 w-full h-full opacity-50 object-cover z-0"
        style={{ display: "block" }}
      />
      <div className="absolute inset-0 bg-opacity-90 flex items-center justify-center z-10 p-8">
        <p className="text-white text-lg text-center italic max-w-lg">{`“${quote}”`}</p>
      </div>
    </div>
  );
};
