"use client";
import { useEffect, useState } from 'react';
import { getPlantById } from '../../api/apiPlants'; 
import NavBar from '@/app/components/NavBar';
import { PlantDetailCard } from './components/PlantDetailCard';
import { CommentSection } from './components/CommentSection';
import { Footer } from '@/app/components/Footer';


interface Plant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  water: string;
  sun: string;
  temp: string;
}
const PlantDetail = ({ plantId }: { plantId: string }) => {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPlantById = async (id: string) => {
    try {
      const response = await getPlantById(id);
      if (!response.ok) {
        throw new Error('Failed to fetch plant by ID');
      }
      const data = await response.json();
      setPlant(data.data as Plant);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    }
  };

  useEffect(() => {
    fetchPlantById(plantId);
  }, [plantId]);

  if (error) return <p>Error: {error}</p>;
  if (!plant) return <p>Loading...</p>;
  return (
    <div className="bg-[#f5f5ef] min-h-screen flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center p-6">
        <PlantDetailCard
          id={plant.id}
          name={plant.name}
          description={plant.description}
          image={plant.image}
          rating={plant.rating}
          water={plant.water}
          sun={plant.sun}
          temp={plant.temp}
        />
        {/* <CommentSection plantId={plant.id} /> */}
        <CommentSection/>
      </main>
      <Footer />
    </div>
  );
}
