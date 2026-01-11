"use client";

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import Navigation from "./components/Navigation";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative">
      <Image
        src="/solar-panels.jpg"
        alt="Solar Panels Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      
      <Navigation currentPage="home" variant="light" />

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl">
              {t.home.companyName}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-lg font-light">
              {t.home.tagline}
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow">
              {t.home.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
