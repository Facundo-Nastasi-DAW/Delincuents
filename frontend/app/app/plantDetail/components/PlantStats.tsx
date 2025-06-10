import { JSX } from "react";
import { FaTint, FaSun, FaThermometerHalf } from "react-icons/fa";

interface StatsProps {
  water: string;
  sun: string;
  temp: string;
}

export const PlantStats: React.FC<StatsProps> = ({ water, sun, temp }) => (
  <div className="flex justify-around text-center mt-8 text-[#899878]">
    <Stat icon={<FaTint size={32} />} label="WATER" value={water} />
    <Stat icon={<FaSun size={32} />} label="SUN" value={sun} />
    <Stat icon={<FaThermometerHalf size={32} />} label="TEMP." value={temp} />
  </div>
);

const Stat: React.FC<{ icon: JSX.Element; label: string; value: string }> = ({ icon, label, value }) => (
  <div>
    <div className="mx-auto">{icon}</div>
    <div className="text-sm">{label}</div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);
