interface Props {
  name: string;
  rating: number;
  description: string;
}

export const PlantInfo: React.FC<Props> = ({ name, rating, description }) => (
  <div>
    <h2 className="text-4xl font-bold text-green-900 mb-2">{name}</h2>
    <p className="text-lg text-yellow-600 mb-4">⭐ {rating} / 5</p>
    <p className="text-lg md:text-xl leading-relaxed text-gray-700">{description}</p>
  </div>
);
