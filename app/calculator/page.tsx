"use client";

import { useState } from "react";
import Link from "next/link";

export default function Calculator() {
  const [formData, setFormData] = useState({
    monthlyConsumption: "",
    sunshineHours: "",
    location: "",
    moduleCapacity: "",
    losses: "",
    batteryAutonomy: "",
  });

  const [result, setResult] = useState<{
    systemSize: number;
    numberOfPanels: number;
    batteryCapacity: number;
    estimatedProduction: number;
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

    const dailyConsumption = monthlyConsumption / 30;
    const energyPerPanel = (moduleCapacity * sunshineHours * (1 - losses)) / 1000;
    const numberOfPanels = Math.ceil(dailyConsumption / energyPerPanel);
    const systemSize = (numberOfPanels * moduleCapacity) / 1000;
    const batteryCapacity = dailyConsumption * batteryAutonomy;
    const estimatedProduction = numberOfPanels * energyPerPanel * 30;

    setResult({
      systemSize: parseFloat(systemSize.toFixed(2)),
      numberOfPanels,
      batteryCapacity: parseFloat(batteryCapacity.toFixed(2)),
      estimatedProduction: parseFloat(estimatedProduction.toFixed(2)),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
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
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Solar System Calculator
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Enter your details to calculate your photovoltaic system requirements
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={calculateSystem} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="monthlyConsumption"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Monthly Consumption (kWh)
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
                    placeholder="e.g., 300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sunshineHours"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Daily Sunshine Hours
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
                    placeholder="e.g., 5.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="e.g., California, USA"
                  />
                </div>

                <div>
                  <label
                    htmlFor="moduleCapacity"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Solar Module Capacity (W)
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
                    placeholder="e.g., 400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="losses"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    System Losses (%)
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
                    placeholder="e.g., 15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="batteryAutonomy"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Battery Autonomy (days)
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
                    placeholder="e.g., 2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              >
                Calculate System
              </button>
            </form>
          </div>

          {result && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Calculation Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    System Size
                  </p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {result.systemSize} kW
                  </p>
                </div>

                <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Number of Panels
                  </p>
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {result.numberOfPanels}
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Battery Capacity
                  </p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {result.batteryCapacity} kWh
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Estimated Monthly Production
                  </p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {result.estimatedProduction} kWh
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> These calculations are estimates based on the
                  information provided. For a precise system design, please consult with a
                  certified solar installer.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
