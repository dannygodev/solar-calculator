"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Calculator() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    monthlyConsumption: "",
    sunshineHours: "",
    moduleCapacity: "",
    losses: "",
    batteryAutonomy: "",
  });

  const [result, setResult] = useState<{
    systemSize: number;
    numberOfPanels: number;
    batteryCapacity: number;
    estimatedMonthlyProduction: number;
    estimatedDailyProduction: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateSystem = (e: React.FormEvent) => {
    e.preventDefault();

    const monthlyConsumption = parseFloat(formData.monthlyConsumption);
    const sunshineHours = parseFloat(formData.sunshineHours);
    const moduleCapacity = parseFloat(formData.moduleCapacity);
    const losses = parseFloat(formData.losses) / 100;
    const batteryAutonomy = parseFloat(formData.batteryAutonomy);

    if (
      isNaN(monthlyConsumption) ||
      isNaN(sunshineHours) ||
      isNaN(moduleCapacity) ||
      isNaN(losses) ||
      isNaN(batteryAutonomy)
    ) {
      alert("Please fill in all fields with valid numbers.");
      return;
    }

    const dailyConsumption = monthlyConsumption / 30;
    const energyPerPanel = (moduleCapacity * sunshineHours * (1 - losses)) / 1000;
    const numberOfPanels = Math.ceil(dailyConsumption / energyPerPanel);
    const systemSize = (numberOfPanels * moduleCapacity) / 1000;
    const batteryCapacity = dailyConsumption * batteryAutonomy;
    const estimatedDailyProduction = numberOfPanels * energyPerPanel;
    const estimatedMonthlyProduction = estimatedDailyProduction * 30;

    setResult({
      systemSize: parseFloat(systemSize.toFixed(2)),
      numberOfPanels,
      batteryCapacity: parseFloat(batteryCapacity.toFixed(2)),
      estimatedMonthlyProduction: parseFloat(estimatedMonthlyProduction.toFixed(2)),
      estimatedDailyProduction: parseFloat(estimatedDailyProduction.toFixed(2)),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="calculator" variant="dark" />
      <main className="container mx-auto px-4 py-8">
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
          {t.calculator.backToHome}
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {t.calculator.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            {t.calculator.subtitle}
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={calculateSystem} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="monthlyConsumption"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.calculator.form.monthlyConsumption}
                  </label>
                  <input
                    type="number"
                    id="monthlyConsumption"
                    name="monthlyConsumption"
                    value={formData.monthlyConsumption}
                    onChange={handleInputChange}
                    required
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t.calculator.form.monthlyConsumptionPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sunshineHours"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.calculator.form.sunshineHours}
                  </label>
                  <input
                    type="number"
                    id="sunshineHours"
                    name="sunshineHours"
                    value={formData.sunshineHours}
                    onChange={handleInputChange}
                    required
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t.calculator.form.sunshineHoursPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="moduleCapacity"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.calculator.form.moduleCapacity}
                  </label>
                  <input
                    type="number"
                    id="moduleCapacity"
                    name="moduleCapacity"
                    value={formData.moduleCapacity}
                    onChange={handleInputChange}
                    required
                    step="1"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t.calculator.form.moduleCapacityPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="losses"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.calculator.form.losses}
                  </label>
                  <input
                    type="number"
                    id="losses"
                    name="losses"
                    value={formData.losses}
                    onChange={handleInputChange}
                    required
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t.calculator.form.lossesPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="batteryAutonomy"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.calculator.form.batteryAutonomy}
                  </label>
                  <input
                    type="number"
                    id="batteryAutonomy"
                    name="batteryAutonomy"
                    value={formData.batteryAutonomy}
                    onChange={handleInputChange}
                    required
                    step="0.1"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={t.calculator.form.batteryAutonomyPlaceholder}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-xl hover:shadow-emerald-500/50 transform hover:scale-[1.02] transition-all duration-300 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400"
              >
                {t.calculator.form.calculateButton}
              </button>
            </form>
          </div>

          {result && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.calculator.results.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t.calculator.results.systemSize}
                  </p>
                  <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    {result.systemSize} kW
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t.calculator.results.numberOfPanels}
                  </p>
                  <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                    {result.numberOfPanels}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t.calculator.results.batteryCapacity}
                  </p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {result.batteryCapacity} kWh
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t.calculator.results.dailyProduction}
                  </p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {result.estimatedDailyProduction} kWh
                  </p>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-green-50 dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t.calculator.results.monthlyProduction}
                  </p>
                  <p className="text-3xl font-bold text-lime-600 dark:text-lime-400">
                    {result.estimatedMonthlyProduction} kWh
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>{t.calculator.results.note}</strong> {t.calculator.results.noteText}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
