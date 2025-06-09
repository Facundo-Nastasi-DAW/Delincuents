import React, { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export const CommentInput: React.FC<Props> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md resize-none dark:bg-gray-700 dark:text-white"
        rows={2}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escriu un comentari..."
      />
      <button
        className="self-end bg-[#899878] text-white px-4 py-1 rounded hover:bg-[#E4E6C3] hover:text-black"
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
};
