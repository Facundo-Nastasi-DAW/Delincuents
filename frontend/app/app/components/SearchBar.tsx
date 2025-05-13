import React from "react"

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search..." }) => {

const [query, setQuery] = React.useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(query)
    }
  }

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-grow bg-transparent focus:outline-none text-gray-700 dark:text-gray-200 placeholder-gray-500"
      />
    </div>
  )
}