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
    <div className="w-4/5 sm:w-4/5 rounded-2xl p-4 bg-[var(--color-secondary-green)] my-6">
      <input
        className="w-full text-base sm:text-lg p-4 rounded-2xl bg-white border border-gray-300 text-gray-900 focus:border-[var(--color-primary-green)] focus:outline-none"
        type="text"
        id="search"
        placeholder="Search for a product..."
        onChange={handleInput}
        value={searchInput}
      />
    </div>
  );
};
