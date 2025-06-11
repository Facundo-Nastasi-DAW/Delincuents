"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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

export default function PlantDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [plant, setPlant] = useState<Plant | null>(null);
  const [error, setError] = useState<string | null>(null);

 const fetchPlantById = async (id: string) => {
  try {
    const response = await getPlantById(id);
    const json = await response.json();

    console.log('Respuesta completa del fetch:', json); // 👈 importante

    setPlant({
      id: json.id.toString(),
      name: json.common_name,
      description: json.description,
      image: json.default_image?.regular_url || '',
      rating: 0, // No hay rating en el JSON, puedes poner uno fijo o calcular
      water: json.watering,
      sun: json.sunlight?.join(', ') || '',
      temp: 'N/A', // No hay temperatura clara, puedes poner un valor por defecto
});

  } catch (err: any) {
    console.error('Error en fetchPlantById:', err);
    setError(err.message || 'Unknown error');
  }
};


  useEffect(() => {
    if (id) {
      fetchPlantById(id);
      console.log(plant)
    }
  }, [id]);

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
        <CommentSection plantId={plant.id} />
      </main>
      <Footer />
    </div>
  );
}
