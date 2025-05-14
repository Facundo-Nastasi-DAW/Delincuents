"use client"
import React from "react"

interface SearchbarProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
}

export const Searchbar = ({
  handleInput,
  searchInput,
}: SearchbarProps) => {
  return (
    <div className="flex flex-row w-8/10 h-16 rounded-2xl p-4 bg-[var(--color-secondary-green)] m-4 justify-center">
      <input
        className="g-gray-50 border bg-white border-gray-300 text-gray-900 text-sm rounded-2xl focus:border-[var(--color-primary-green)] w-full p-2.5 "
        type="text"
        id="search"
        placeholder="Search for a product..."
        onChange={handleInput}
        value={searchInput}
      />
    </div>
  );
};