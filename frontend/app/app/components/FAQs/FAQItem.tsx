import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full rounded-xl shadow p-4 mb-4 bg-[#f7f7e8] transition-all ${
        isOpen ? "shadow-inner" : ""
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong className="text-md">{question}</strong>
        <span className="text-xl">{isOpen ? "↑" : "↓"}</span>
      </div>
      {isOpen && (
        <p className="mt-3 text-sm text-gray-700">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
