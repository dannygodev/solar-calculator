"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Calculator() {
  const { t } = useLanguage();
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [roofType, setRoofType] = useState<'flat' | 'pitched' | 'tile'>('pitched');
  const [formData, setFormData] = useState({
    sunshineHours: "5",
    moduleCapacity: "400",
    losses: "15",
    batteryAutonomy: "2",
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

  const roofTypes = [
    { id: 'flat', label: 'Techo Plano', icon: '▭' },
    { id: 'pitched', label: 'Techo Inclinado', icon: '⌂' },
    { id: 'tile', label: 'Techo de Tejas', icon: '⌂' },
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation currentPage="calculator" variant="dark" />
      
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
                Transforma el Sol en Ahorro
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Calcula tu sistema solar ideal en segundos.
              </p>
              <a
                href="#calculator"
                className="inline-block bg-accent-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300"
              >
                Ir a la Calculadora
              </a>
            </div>
            <div className="hidden md:block">
              <div className="w-full h-64 bg-gradient-to-br from-primary-navy to-blue-900 rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-accent-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20" id="calculator">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-2 text-center">
            Calculadora Solar
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Descubre cuánto puedes ahorrar con energía solar
          </p>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <form onSubmit={calculateSystem} className="space-y-10">
              {/* Monthly Bill Slider */}
              <div>
                <label className="block text-sm font-semibold text-primary-navy mb-4">
                  Tu Factura Mensual de Electricidad
                </label>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-navy">${monthlyBill}</span>
                  <span className="text-xl text-gray-500">/mes</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-light-gray rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F48C26 0%, #F48C26 ${((monthlyBill - 50) / 450) * 100}%, #F5F7FA ${((monthlyBill - 50) / 450) * 100}%, #F5F7FA 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$50</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Roof Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-primary-navy mb-4">
                  Tipo de Techo
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {roofTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setRoofType(type.id as 'flat' | 'pitched' | 'tile')}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        roofType === type.id
                          ? 'bg-primary-navy border-accent-orange text-white shadow-lg'
                          : 'bg-white border-primary-navy text-primary-navy hover:border-accent-orange'
                      }`}
                    >
                      <div className="text-4xl mb-2">{type.icon}</div>
                      <div className="text-sm font-medium">{type.label}</div>
                    </button>
                  ))}
                </div>
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
                className="w-full bg-accent-orange text-white font-bold text-lg py-5 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calcular Mi Sistema Solar
              </button>
            </form>
          </div>

          {result && (
            <div className="bg-white rounded-2xl p-8 md:p-12 mt-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
                Tus Resultados
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-light-gray p-8 rounded-xl">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Paneles Estimados
                  </p>
                  <p className="text-4xl font-bold text-primary-navy">
                    {result.numberOfPanels}
                  </p>
                </div>
                <div className="bg-light-gray p-8 rounded-xl">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Ahorro Anual
                  </p>
                  <p className="text-4xl font-bold text-accent-orange">
                    ${(monthlyBill * 12 * 0.8).toFixed(0)}
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
