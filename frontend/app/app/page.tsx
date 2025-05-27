'use client';
import Image from "next/image";
import NavBar from "./components/NavBar";
//import dotenv from "dotenv";
import { useState, useEffect, use } from "react";
import { getPlants, getPlantById } from "./api/apiPlants";
import dotenv from "dotenv";

dotenv.config();


export default function Home() {
  const [plants, setPlants] = useState({});

  const fetchPlants = async () => {
    const response = await getPlantById('1');
    if (!response.ok) {
      throw new Error('Failed to fetch plants');
    }
    const plants = await response.json();
    // setPlants(plants.data); // generic
    setPlants(plants); // especific

  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div>
      <NavBar />
      {/* {plants.length > 0 && plants.map((plant, idx) => (
        <span key={idx}>
          {plant.common_name}
        </span>
      ))} */}
      {plants && (
        <span>
          {plants.common_name}
        </span>

      )}
    </div>
  )
}
