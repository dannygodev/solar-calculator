"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Calculator() {
  // New Inputs as per requirements
  const [monthlyConsumption, setMonthlyConsumption] = useState(500); // kWh
  const [sunHours, setSunHours] = useState(5.0); // HSP
  const [maxPower, setMaxPower] = useState(5); // kW
  const [backupHours, setBackupHours] = useState(4); // Hours
  
  const [result, setResult] = useState<{
    panelsNeeded: number;
    inverterSize: number;
    batteryCapacity: number;
  } | null>(null);

  // Engineering Formulas - Reactive calculation
  useEffect(() => {
    // dailyUsage = monthlyConsumption / 30
    const dailyUsage = monthlyConsumption / 30;
    
    // panelsNeeded = Math.ceil((dailyUsage / (sunHours * 0.80)) * 1000 / 550)
    // Assumes 550W Panels with 80% efficiency
    const panelsNeeded = Math.ceil((dailyUsage / (sunHours * 0.80)) * 1000 / 550);
    
    // inverterSize = maxPower * 1.20 (20% Safety margin)
    const inverterSize = parseFloat((maxPower * 1.20).toFixed(2));
    
    // batteryCapacity = (dailyUsage / 24) * backupHours / 0.90 (90% DoD)
    const batteryCapacity = parseFloat(((dailyUsage / 24) * backupHours / 0.90).toFixed(2));
    
    setResult({
      panelsNeeded,
      inverterSize,
      batteryCapacity,
    });
  }, [monthlyConsumption, sunHours, maxPower, backupHours]);

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
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/solar-panels2-removebg-preview.png"
                  alt="Solar Calculator Helper"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
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
            <div className="space-y-10">
              {/* Input 1: Monthly Consumption (kWh) */}
              <div>
                <label className="block text-lg font-bold text-primary-navy mb-4">
                  Consumo Mensual (kWh)
                </label>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-navy">{monthlyConsumption}</span>
                  <span className="text-xl text-gray-500"> kWh</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={monthlyConsumption}
                  onChange={(e) => setMonthlyConsumption(Number(e.target.value))}
                  className="w-full h-3 bg-light-gray rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F48C26 0%, #F48C26 ${((monthlyConsumption - 100) / 1900) * 100}%, #F5F7FA ${((monthlyConsumption - 100) / 1900) * 100}%, #F5F7FA 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>100 kWh</span>
                  <span>2000 kWh</span>
                </div>
              </div>

              {/* Input 2: Peak Sun Hours (HSP) */}
              <div>
                <label className="block text-lg font-bold text-primary-navy mb-4">
                  Horas Sol Pico (HSP)
                </label>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-navy">{sunHours.toFixed(1)}</span>
                  <span className="text-xl text-gray-500"> HSP</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="7.0"
                  step="0.1"
                  value={sunHours}
                  onChange={(e) => setSunHours(Number(e.target.value))}
                  className="w-full h-3 bg-light-gray rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F48C26 0%, #F48C26 ${((sunHours - 3.0) / 4.0) * 100}%, #F5F7FA ${((sunHours - 3.0) / 4.0) * 100}%, #F5F7FA 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>3.0 HSP</span>
                  <span>7.0 HSP</span>
                </div>
              </div>

              {/* Input 3: Max Power (kW) */}
              <div>
                <label className="block text-lg font-bold text-primary-navy mb-4">
                  Potencia Instantánea (kW)
                </label>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-navy">{maxPower}</span>
                  <span className="text-xl text-gray-500"> kW</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={maxPower}
                  onChange={(e) => setMaxPower(Number(e.target.value))}
                  className="w-full h-3 bg-light-gray rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F48C26 0%, #F48C26 ${((maxPower - 1) / 19) * 100}%, #F5F7FA ${((maxPower - 1) / 19) * 100}%, #F5F7FA 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 kW</span>
                  <span>20 kW</span>
                </div>
              </div>

              {/* Input 4: Backup Hours */}
              <div>
                <label className="block text-lg font-bold text-primary-navy mb-4">
                  Autonomía (Horas)
                </label>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-navy">{backupHours}</span>
                  <span className="text-xl text-gray-500"> h</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="1"
                  value={backupHours}
                  onChange={(e) => setBackupHours(Number(e.target.value))}
                  className="w-full h-3 bg-light-gray rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #F48C26 0%, #F48C26 ${(backupHours / 24) * 100}%, #F5F7FA ${(backupHours / 24) * 100}%, #F5F7FA 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>0 h</span>
                  <span>24 h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section - 3 Card Grid */}
          {result && (
            <div className="bg-white rounded-2xl p-8 md:p-12 mt-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
                Resultados del Sistema
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1: Panels */}
                <div className="bg-light-gray p-8 rounded-xl text-center">
                  <p className="text-sm font-semibold text-primary-navy mb-3">
                    Paneles Solares
                  </p>
                  <p className="text-5xl font-bold text-accent-orange mb-2">
                    {result.panelsNeeded}
                  </p>
                  <p className="text-xs text-gray-500">Paneles de 550W</p>
                </div>
                
                {/* Card 2: Inverter */}
                <div className="bg-light-gray p-8 rounded-xl text-center">
                  <p className="text-sm font-semibold text-primary-navy mb-3">
                    Inversor
                  </p>
                  <p className="text-5xl font-bold text-accent-orange mb-2">
                    {result.inverterSize}
                  </p>
                  <p className="text-xs text-gray-500">kW (con margen 20%)</p>
                </div>
                
                {/* Card 3: Batteries */}
                <div className="bg-light-gray p-8 rounded-xl text-center">
                  <p className="text-sm font-semibold text-primary-navy mb-3">
                    Baterías
                  </p>
                  <p className="text-5xl font-bold text-accent-orange mb-2">
                    {result.batteryCapacity}
                  </p>
                  <p className="text-xs text-gray-500">kWh (DoD 90%)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Trust/Benefits Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-2">Ingeniería Experta</h3>
                <p className="text-gray-600">Diseño e instalación profesional certificada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-2">Monitoreo 24/7</h3>
                <p className="text-gray-600">Supervisión constante de tu sistema solar</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-2">Garantía Total</h3>
                <p className="text-gray-600">Respaldo completo en equipos y servicio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">P&G Soluciones Integrales</h3>
              <p className="text-gray-300">Transformando el futuro energético de Cuba</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-300">hamilton@grupopg.com</p>
              <p className="text-gray-300">+53 63405387</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-accent-orange transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
