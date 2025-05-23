"use client";
import { useState } from "react";
import { Searchbar } from "./SearchBar"

export const SearchComponent = () => {

        const [searchInput, setSearchInput] = useState("");
        const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="flex flex-row justify-center">
            <Searchbar handleInput={handleInput} searchInput={searchInput}/>
        </div>
    )
}