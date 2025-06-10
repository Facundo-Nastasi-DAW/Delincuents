// PlantCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import PlantCard from "./PlantCard";
// Import getPlants from its module (update the path as needed)
import { getPlants } from "../api/apiPlants";

interface Plant {
    common_name: string;
    isFav: boolean;
    default_image?: {
        regular_url?: string;
    };
}
interface Props {
    Plants: Plant[];
}
type ScrollDirection = "left" | "right";

const PlantCarousel = ({ Plants }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  

const scroll = (direction: ScrollDirection) => {
    if (containerRef.current) {
        const scrollAmount = 250;
        containerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    }
};
console.log(Plants);

  return (
    <div className="relative w-full py-4">
      {/* Flecha Izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#f7f7e8] rounded-full shadow p-2 text-xl"
      >
        ←
      </button>

      {/* Contenedor de tarjetas */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto px-12 scroll-smooth no-scrollbar"
      >
        {Plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.common_name}
            image={plant.default_image?.regular_url || "https://via.placeholder.com/150"}
            isFav={plant.isFav}
          />
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f7f7e8] rounded-full shadow p-2 text-xl"
      >
        →
      </button>
    </div>
  );
};

export default PlantCarousel;
