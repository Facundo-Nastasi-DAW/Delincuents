
import { Footer } from "../components/Footer";
import { PlantDetailCard } from "./components/PlantDetailCard";
import { RelatedPlantsList } from "./components/RelatedPlantList";
import NavBar from "../components/NavBar";
import { CommentSection } from "./components/CommentSection";

export default function PlantDetailPage() {
  const plant = {
    name: "Monstera Deliciosa",
    description: "random plant info...",
    image: "/img/monstera.jpg",
    rating: 5,
    water: 0,
    sun: 0,
    temp: 0,
  };

  const related = [
    { id: 1, title: "List item", subtitle: "Category • 1.2 miles", isFav: false },
    { id: 2, title: "List item", subtitle: "Category • 1.2 miles", isFav: true },
    { id: 3, title: "List item", subtitle: "Category • 1.2 miles", isFav: false },
  ];

  return (
    <div className="bg-[#f5f5ef] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center p-6">
        <PlantDetailCard
          name={plant.name}
          description={plant.description}
          image={plant.image}
          rating={plant.rating}
          water={plant.water}
          sun={plant.sun}
          temp={plant.temp}
        />
        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
