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
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-700 text-black dark:text-white"
        placeholder="Escriu un comentari..."
      />
      <button
        onClick={handleSubmit}
        className="bg-[#899878] hover:bg-[#E4E6C3] hover:text-black text-white px-4 py-2 rounded-xl"
      >
        Envia
      </button>
    </div>
  );
};
