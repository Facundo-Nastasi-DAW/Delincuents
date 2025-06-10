// SearchComponent.tsx
"use client";
import { useState } from "react";
import { Searchbar } from "./SearchBar";
import PlantCard from "./PlantCard";
import PlantCarousel from "./PlantCarousel";

export interface Plant {
    common_name: string;
    isFav: boolean;
    default_image?: {
        regular_url?: string;
    };
}

interface SearchComponentProps {
  Plants: Plant[];
}

export const SearchComponent = ({ Plants }: SearchComponentProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredPlants = Plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full">
      <Searchbar handleInput={handleInput} searchInput={searchInput} />

      {searchInput.trim() === "" ? (
        // Si no hay texto, mostramos el carrusel
        <div className="w-full">
          <PlantCarousel Plants={Plants} />
        </div>
      ) : (
        // Si hay texto, mostramos resultados filtrados
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <PlantCard
                key={index}
                name={plant.common_name}
                image={plant.default_image?.regular_url || "https://via.placeholder.com/150"}   
                isFav={plant.isFav}
              />
            ))
          ) : (
            <p className="text-gray-500 mt-4">No s'han trobat plantes.</p>
          )}
        </div>
      )}
    </div>
  );
};
