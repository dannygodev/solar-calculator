"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "es")}
        className="appearance-none bg-white/20 dark:bg-gray-700/50 text-white border border-white/30 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 font-medium hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <option value="en" className="bg-gray-800 text-white">
          English
        </option>
        <option value="es" className="bg-gray-800 text-white">
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
