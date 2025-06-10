import { FaHeart, FaRegHeart } from "react-icons/fa";

export const RelatedPlantItem: React.FC<{
  title: string;
  subtitle: string;
  isFav: boolean;
}> = ({ title, subtitle, isFav }) => (
  <div className="flex justify-between items-center border-b border-gray-300 py-4">
    <div className="flex items-center gap-4">
      <div className="bg-gray-200 w-10 h-10 rounded-lg flex items-center justify-center">🌱</div>
      <div className="text-left">
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
        <div className="text-xs text-gray-500">Supporting line text lorem ipsum</div>
      </div>
    </div>
    <div className="text-[#899878]">{isFav ? <FaHeart /> : <FaRegHeart />}</div>
  </div>
);
