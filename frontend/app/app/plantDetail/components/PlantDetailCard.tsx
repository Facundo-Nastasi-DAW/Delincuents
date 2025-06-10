import { PlantImage } from "./PlantImage";
import { PlantInfo } from "./PlantInfo";
import { PlantStats } from "./PlantStats";

interface Props {
  name: string;
  description: string;
  image: string;
  rating: number;
  water: string;
  sun: string;
  temp: string;
}

export const PlantDetailCard: React.FC<Props> = (props) => (
  <div className="bg-[#f5f5df] rounded-3xl p-6 shadow-md max-w-5xl mx-auto mt-8">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0">
        <PlantImage src={props.image} alt={props.name} />
      </div>
      <PlantInfo name={props.name} rating={props.rating} description={props.description} />
    </div>
    <PlantStats water={props.water} sun={props.sun} temp={props.temp} />
  </div>
);
