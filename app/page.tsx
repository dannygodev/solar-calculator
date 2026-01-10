"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

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
      
      <nav className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              {t.nav.title}
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/documentation"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                {t.nav.documentation}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-300 transition-colors font-medium"
              >
                {t.nav.contact}
              </Link>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
          <div className="text-center mb-12 backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t.home.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
              {t.home.subtitle}
            </p>
          </div>

          <Link
            href="/calculator"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            {t.home.startButton}
          </Link>
        </div>
      </main>
    </div>
  );
}
