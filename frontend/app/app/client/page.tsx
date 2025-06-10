"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { HeroClient } from "./components/HeroClient";
import { SearchComponent } from "../components/SeachComponent";
import { getPlants } from "../api/apiPlants";
import { ClientPlants } from "./components/ClientPlants";
import { Footer } from "../components/Footer";
// Update the import path below if the actual path is different
// import HeroClient from "../components/HeroClient"; // Update the path if needed
// Please update the path below to the correct location of HeroClient, for example:

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
const ClientPage: React.FC = () => {

    
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

console.log("Helena", plants);
  return (
    <div className="bg-[#f5f5ef] min-h-screen flex flex-col">
      <NavBar />

      <main className="flex flex-col items-center p-4">
        <HeroClient userName="Helena" />
          <SearchComponent Plants={plants} />
      </main>

      <Footer />
    </div>
  );
};

export default ClientPage;
