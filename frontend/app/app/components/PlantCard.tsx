import React from "react";

interface Props {
  name: string;
  image: string;
  isFav: boolean;
}

const PlantCard = ({ name, image, isFav }: Props) => {
  return (
    <div className="w-64 rounded-2xl shadow-lg p-5 bg-[#f7f7e8] flex flex-col items-center justify-between">
      <div
        className="w-56 h-56 rounded-xl mb-4"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-full flex justify-between items-center px-2">
        <span className="text-lg font-semibold text-black truncate">{name || "Plant Name"}</span>
        <span className="text-2xl">
          {isFav ? "❤️" : "🖤"}
        </span>
      </div>
    </div>
  );
};

export default PlantCard;
