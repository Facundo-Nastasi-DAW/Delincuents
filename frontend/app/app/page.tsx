'use client';
import Image from "next/image";
import NavBar from "./components/NavBar";
//import dotenv from "dotenv";
import { useState, useEffect, use } from "react";
import { getPlants, getPlantById } from "./api/apiPlants";
import dotenv from "dotenv";
import PlantCarousel from "./components/PlantCarousel";
import { HeroBanner } from "./components/HeroBanner";
import { SearchComponent } from "./components/SeachComponent";
import { Footer } from "./components/Footer";
import FaqsComponent from "./components/FAQs/FAQsList";
// Import the Plant type from a shared location
export interface Plant {
    common_name: string;
    isFav: boolean;
    default_image?: {
        regular_url?: string;
    };
}

export interface Plants {
    Plants: Plant[];
}

dotenv.config();


export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);

const fetchPlants = async () => {
  const response = await getPlants();
  if (!response.ok) {
    throw new Error('Failed to fetch plants');
  }
  const data = await response.json();
  setPlants(data.data as Plant[]); // ensure it's an array

};

useEffect(() => {
  fetchPlants();
}, []);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavBar />
        <HeroBanner />
        <SearchComponent Plants={plants}/>
        <FaqsComponent />
        <Footer />
      </main>
    </div>
  )
}
