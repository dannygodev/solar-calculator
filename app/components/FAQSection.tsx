"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
  image: string;
}

export default function FAQSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs: FAQItem[] = [
    {
      question: t.faq?.q1 || "¿Funcionan los paneles si está nublado?",
      answer: t.faq?.a1 || "Sí, los paneles modernos captan radiación difusa. Aunque la producción baja un 10-20%, siguen generando energía.",
      image: "/solar-cloudy.jpg"
    },
    {
      question: t.faq?.q2 || "¿Qué pasa si se va la luz?",
      answer: t.faq?.a2 || "Si tienes baterías, el sistema actúa como respaldo automático. Si es un sistema solo de red (Grid-Tie), se apaga por seguridad.",
      image: "/battery-backup.jpg"
    },
    {
      question: t.faq?.q3 || "¿Cuánto duran los equipos?",
      answer: t.faq?.a3 || "Los paneles tienen una vida útil de 25-30 años. Los inversores 10-15 años y las baterías de Litio 10 años (6000 ciclos).",
      image: "/solar-durability.jpg"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-4">
            {t.faq?.title || "Preguntas Frecuentes"}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            {t.faq?.subtitle || "Todo lo que necesitas saber sobre sistemas solares"}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Questions (Accordion) */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-primary-navy text-white'
                        : 'bg-white text-primary-navy hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Answer - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Image */}
            <div className="hidden md:block sticky top-24">
              <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="relative h-96">
                  <Image
                    src={faqs[activeIndex].image}
                    alt={faqs[activeIndex].question}
                    fill
                    className="object-cover transition-opacity duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "/solar-panels2.png";
                    }}
                  />
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent"></div>
                </div>
                <div className="p-6 bg-accent-orange">
                  <p className="text-white font-semibold text-center">
                    {faqs[activeIndex].question}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
