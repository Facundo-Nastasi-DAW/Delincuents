import React, { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export const NewCommentInput: React.FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base sm:text-lg bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#899878]"
        placeholder="Escriu un comentari..."
      />
      <button
        onClick={handleSubmit}
        className="bg-[#899878] text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#E4E6C3] hover:text-black transition-colors"
      >
        Envia
      </button>
    </div>
  );
};
