// components/MyPlantsSection.tsx
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
}
export const ClientPlants: React.FC<MyPlantsSectionProps> = ({ clientPlants }) => {
  return (
    <section className="w-full bg-[#bfc7b0] py-10 px-6 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-white mb-6">My Plants</h3>
      <PlantCarousel Plants={clientPlants} />
      <button className="mt-6 px-6 py-2 bg-[#f5f5ef] text-black rounded-full shadow hover:bg-white">
        View All
      </button>
    </section>
  );
};
