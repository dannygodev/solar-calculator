"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation currentPage="gallery" variant="dark" />

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
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

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
            {t.gallery.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.gallery.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            >
              <div className="relative h-64 bg-light-gray">
                <Image
                  src="/solar-panels.jpg"
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="text-accent-orange font-bold hover:text-orange-600 transition-colors">
                  {t.gallery.viewDetails} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-primary-navy rounded-2xl p-8 md:p-12 text-white text-center" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.gallery.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.gallery.cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-accent-orange rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              {t.gallery.cta.calculatorButton}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-navy bg-white rounded-full hover:bg-light-gray transition-all duration-300"
            >
              {t.gallery.cta.quoteButton}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
