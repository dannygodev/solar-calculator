"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="gallery" variant="dark" />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-png-orange hover:text-png-orange-dark dark:text-png-orange-light dark:hover:text-png-orange-light mb-8 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t.gallery.backToHome}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.gallery.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.gallery.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 bg-gradient-to-br from-png-orange-light to-png-orange">
                <Image
                  src="/solar-panels.jpg"
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <button className="text-png-orange dark:text-png-orange-light font-semibold hover:text-emerald-700 dark:hover:text-png-orange-light transition-colors">
                  {t.gallery.viewDetails} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-r from-png-orange-dark to-png-orange rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.gallery.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.gallery.cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-png-orange bg-white rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {t.gallery.cta.calculatorButton}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              {t.gallery.cta.quoteButton}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
