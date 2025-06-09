// PlantCard.jsx
import React from "react";
interface Props {
    name: string;
    image: string;
    isFav: boolean;
}

const PlantCard = ({ name, image, isFav }: Props) => {
  return (
    <div className="w-48 rounded-2xl shadow-md p-4 bg-[#f7f7e8] flex flex-col items-center justify-between">
      <div
        className="w-40 h-40 rounded-xl mb-3"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full flex justify-between items-center px-1">
        <span className="text-sm font-medium text-black">{name || "Plant Name"}</span>
        <span className="text-xl">
          {isFav ? "❤️" : "🖤"}
        </span>
      </div>
    </div>
  );
};

export default PlantCard;
