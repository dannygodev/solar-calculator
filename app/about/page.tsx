"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation currentPage="about" variant="dark" />

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
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
          {t.about.backToHome}
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 className="text-3xl font-bold text-primary-navy mb-6">
              {t.about.mission.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              {t.about.mission.paragraph1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.about.mission.paragraph2}
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
              {t.about.whyChooseUs.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light-gray p-6 rounded-xl border-2 border-transparent hover:border-accent-orange transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-accent-orange rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      {t.about.whyChooseUs.expertInstallation.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.about.whyChooseUs.expertInstallation.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-xl border-2 border-transparent hover:border-accent-orange transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-accent-orange rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      {t.about.whyChooseUs.premiumTechnology.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.about.whyChooseUs.premiumTechnology.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-xl border-2 border-transparent hover:border-accent-orange transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-accent-orange rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      {t.about.whyChooseUs.costEffective.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.about.whyChooseUs.costEffective.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-xl border-2 border-transparent hover:border-accent-orange transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-accent-orange rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy mb-2">
                      {t.about.whyChooseUs.support.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.about.whyChooseUs.support.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary-navy rounded-2xl p-8 md:p-12 text-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t.about.commitment.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-white/90 text-center max-w-3xl mx-auto">
              {t.about.commitment.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
                <p className="text-white/90">{t.about.commitment.stats.installations}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">5+</p>
                <p className="text-white/90">{t.about.commitment.stats.experience}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
                <p className="text-white/90">{t.about.commitment.stats.satisfaction}</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 md:p-12 text-center" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h2 className="text-3xl font-bold text-primary-navy mb-6">
              {t.about.getStarted.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.about.getStarted.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-accent-orange rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.about.getStarted.calculatorButton}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-navy bg-white border-2 border-primary-navy rounded-full hover:bg-light-gray transition-all duration-300"
              >
                {t.about.getStarted.contactButton}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
