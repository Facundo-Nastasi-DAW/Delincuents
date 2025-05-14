import { Footer } from "./components/Footer";
import { HeroBanner } from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import { SearchComponent } from "./components/SeachComponent";

export default function Home() {
  
  return (
    <>
      <NavBar/>
      <HeroBanner/>
      <SearchComponent/>
      <Footer/>
    </>
  )
}
