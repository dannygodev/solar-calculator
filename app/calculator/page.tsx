"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [roofType, setRoofType] = useState<'flat' | 'pitched' | 'tile'>('pitched');
  const [result, setResult] = useState<{
    numberOfPanels: number;
    yearlySavings: number;
  } | null>(null);

  const roofTypes = [
    { id: 'flat', label: 'Techo Plano', icon: '▭' },
    { id: 'pitched', label: 'Techo Inclinado', icon: '⌂' },
    { id: 'tile', label: 'Techo de Tejas', icon: '⌂' },
  ];

  const calculateSystem = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple calculation based on monthly bill
    const avgKwhCost = 0.12; // $0.12 per kWh
    const monthlyKwh = monthlyBill / avgKwhCost;
    const dailyKwh = monthlyKwh / 30;
    const sunHours = 5; // Average sun hours
    const panelWattage = 400; // 400W panels
    const systemEfficiency = 0.85;
    
    const panelsNeeded = Math.ceil(dailyKwh / ((panelWattage * sunHours * systemEfficiency) / 1000));
    const yearlySavings = Math.round(monthlyBill * 12 * 0.8); // 80% savings estimate
    
    setResult({
      numberOfPanels: panelsNeeded,
      yearlySavings: yearlySavings,
    });
  };

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
            <form onSubmit={calculateSystem} className="space-y-10">
              {/* Monthly Bill Slider */}
              <div>
                <label className="block text-lg font-bold text-primary-navy mb-4">
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
                <label className="block text-lg font-bold text-primary-navy mb-4">
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

              <button
                type="submit"
                className="w-full bg-accent-orange text-white font-bold text-lg py-5 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calcular Mi Sistema Solar
              </button>
            </form>
          </div>

          {/* Results Section */}
          {result && (
            <div className="bg-white rounded-2xl p-8 md:p-12 mt-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
                Tus Resultados
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-light-gray p-8 rounded-xl">
                  <p className="text-sm font-bold text-primary-navy mb-2">
                    Paneles Estimados
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-primary-navy">
                    {result.numberOfPanels}
                  </p>
                </div>
                <div className="bg-light-gray p-8 rounded-xl">
                  <p className="text-sm font-bold text-primary-navy mb-2">
                    Ahorro Anual
                  </p>
                  <p className="text-6xl md:text-7xl font-bold text-accent-orange">
                    ${result.yearlySavings}
                  </p>
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
