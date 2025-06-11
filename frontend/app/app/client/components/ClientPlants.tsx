import React from "react";
import PlantCarousel from "../../components/PlantCarousel";

interface MyPlantsSectionProps {
  clientPlants: Plant[];
}

interface Plant {
  common_name: string;
  isFav: boolean;
  default_image?: {
    regular_url?: string;
  };
  id: string;
}

export const ClientPlants: React.FC<MyPlantsSectionProps> = ({ clientPlants }) => {
  return (
    <section className="w-full bg-[#bfc7b0] py-12 px-6 flex flex-col items-center gap-8">
      <div className="w-full max-w-screen-xl">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
          My Plants
        </h3>
        <PlantCarousel Plants={clientPlants} />
        <div className="flex justify-center">
          <button className="mt-8 px-6 py-3 text-lg bg-[#f5f5ef] text-black rounded-full shadow hover:bg-white transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};
