import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  rating: number;
  description: string;
}

export const PlantInfo: React.FC<Props> = ({ name, rating, description }) => (
  <div className="flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="text-lg font-bold text-[#899878]">{rating}/5</div>
      </div>
      <div className="text-yellow-500 flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);
