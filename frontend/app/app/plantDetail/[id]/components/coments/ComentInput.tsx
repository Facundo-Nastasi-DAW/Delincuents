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
    <div className="flex flex-col gap-3">
      <textarea
        className="w-full p-4 text-base rounded-lg border bg-white border-gray-300 resize-none dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#899878]"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escriu un comentari..."
      />
      <button
        className="self-end bg-[#899878] text-white text-base font-medium px-6 py-2 rounded-lg hover:bg-[#E4E6C3] hover:text-black transition-colors duration-200"
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
};
