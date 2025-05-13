
import NavBar from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <SearchBar onSearch={function (query: string): void {
        throw new Error("Function not implemented.");
      } }/>
    </>
  );
}
