"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Documentation() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="documentation" variant="dark" />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 mb-8 font-medium"
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
          {t.documentation.backToHome}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t.documentation.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          {t.documentation.subtitle}
        </p>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.documentation.gettingStarted.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t.documentation.gettingStarted.description}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {t.documentation.gettingStarted.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.documentation.inputParameters.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.monthlyConsumption.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.monthlyConsumption.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.sunshineHours.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.sunshineHours.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.location.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.location.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.moduleCapacity.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.moduleCapacity.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.losses.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.losses.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.inputParameters.batteryAutonomy.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.inputParameters.batteryAutonomy.description}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.documentation.understandingResults.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.understandingResults.systemSize.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.understandingResults.systemSize.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.understandingResults.numberOfPanels.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.understandingResults.numberOfPanels.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.understandingResults.batteryCapacity.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.understandingResults.batteryCapacity.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.understandingResults.dailyProduction.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.understandingResults.dailyProduction.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.documentation.understandingResults.monthlyProduction.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t.documentation.understandingResults.monthlyProduction.description}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 border border-yellow-200 dark:border-yellow-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.documentation.importantNotes.title}
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {t.documentation.importantNotes.notes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.documentation.needHelp.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t.documentation.needHelp.description}{" "}
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold">
                {t.documentation.needHelp.contactLink}
              </Link>{" "}
              {t.documentation.needHelp.descriptionEnd}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
