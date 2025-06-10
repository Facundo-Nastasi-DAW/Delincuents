import React from "react";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  image: string;
  isFav: boolean;
}

const PlantCard = ({ id, name, image, isFav }: Props) => {
  return (
    <Link href={`/plantDetail/${id}`}>
      <div className="w-64 rounded-2xl shadow-lg p-5 bg-[#f7f7e8] flex flex-col items-center justify-between cursor-pointer hover:shadow-xl transition-shadow">
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
    </Link>
  );
};

export default PlantCard;
