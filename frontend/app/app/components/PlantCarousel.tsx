import React, { useEffect, useRef } from "react";
import PlantCard from "./PlantCard";
import { getPlants } from "../api/apiPlants";

interface Plant {
  common_name: string;
  isFav: boolean;
  default_image?: {
    regular_url?: string;
  };
  id: string
}

interface Props {
  Plants: Plant[];
}

type ScrollDirection = "left" | "right";

const PlantCarousel = ({ Plants }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: ScrollDirection) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto relative w-4/5 py-6">
      {/* Flecha Izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#f7f7e8] rounded-full shadow-lg p-3 text-2xl hover:scale-105 transition-transform"
        aria-label="Scroll Left"
      >
        ←
      </button>

      {/* Contenedor de tarjetas */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 sm:px-16 scroll-smooth no-scrollbar"
      >
        {Plants.map((plant, index) => (
          <PlantCard
            key={index}
            id={plant.id}
            name={plant.common_name}
            image={plant.default_image?.regular_url || "https://via.placeholder.com/150"}
            isFav={plant.isFav}
          />
        ))}
      </div>

      {/* Flecha Derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#f7f7e8] rounded-full shadow-lg p-3 text-2xl hover:scale-105 transition-transform"
        aria-label="Scroll Right"
      >
        →
      </button>
    </div>
  );
};

export default PlantCarousel;
