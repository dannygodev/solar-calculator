"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "es")}
        className="appearance-none bg-primary-navy text-white border border-accent-orange rounded-lg px-4 py-2 pr-8 font-bold hover:bg-accent-orange transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-orange"
      >
        <option value="en" className="bg-primary-navy text-white">
          English
        </option>
        <option value="es" className="bg-primary-navy text-white">
          Español
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
