import { RelatedPlantItem } from "./RelatedPlantItem";

export const RelatedPlantsList: React.FC<{
  items: { id: number; title: string; subtitle: string; isFav: boolean }[];
}> = ({ items }) => (
  <div className="bg-[#f5f5df] rounded-3xl p-6 shadow-md max-w-5xl mx-auto mt-8">
    {items.map((item) => (
      <RelatedPlantItem
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        isFav={item.isFav}
      />
    ))}
  </div>
);
