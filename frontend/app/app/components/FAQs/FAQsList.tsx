import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "../../lib/faqs";

const FAQList = () => {
  return (
    <div className="bg-[#bfc7b0] px-6 sm:px-6 py-6 rounded-3xl w-4/5 max-w-4xl mx-auto my-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">FAQ’s</h2>
      {faqs.preguntas.map((faq, index) => (
        <FAQItem key={index} question={faq.pregunta} answer={faq.respuesta} />
      ))}
    </div>
  );
};

export default FAQList;
