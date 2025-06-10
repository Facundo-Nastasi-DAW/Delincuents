import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full rounded-xl shadow-md p-6 mb-6 bg-[#f7f7e8] transition-all duration-300 ${
        isOpen ? "shadow-inner" : ""
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong className="text-xl sm:text-2xl text-[var(--color-text)]">
          {question}
        </strong>
        <span className="text-2xl">{isOpen ? "↑" : "↓"}</span>
      </div>
      {isOpen && (
        <p className="mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
