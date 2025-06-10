// components/FAQList.tsx
import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "../../lib/faqs";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

const FAQList = () => {
  return (
    <div className="bg-[#bfc7b0] p-8 rounded-3xl max-w-[70%] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ’s</h2>
      {faqs.preguntas.map((faq, index) => (
        <FAQItem key={index} question={faq.pregunta} answer={faq.respuesta} />
      ))}
    </div>
  );
};

export default FAQList;
