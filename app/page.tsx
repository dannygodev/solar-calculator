"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import FAQSection from "./components/FAQSection";

export default function Home() {

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation currentPage="home" variant="dark" />
      
      {/* Hero Section - Split Screen Design */}
      <section className="py-12 md:py-20 lg:py-32 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* 2-Column Grid for Desktop */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text Content */}
              <div className="text-center lg:text-left space-y-6">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/icon.png"
                    alt="P&G Logo"
                    width={200}
                    height={200}
                    className="mx-auto lg:mx-0 rounded-lg drop-shadow-lg"
                    priority
                    quality={75}
                  />
                </div>
                
                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight">
                  P&G
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Liderando la revolución de energía renovable con soluciones solares innovadoras para Cuba.
                </p>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/calculator"
                    className="inline-block bg-accent-orange text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Calcular Mi Sistema Solar
                  </Link>
                </div>
              </div>
              
              {/* Right Column: Image Content */}
              <div className="relative h-64 md:h-96 lg:h-[500px]">
                <Image
                  src="/solar-panel-4.png"
                  alt="Solar Panel System"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy text-center mb-16">
              ¿Por Qué Elegirnos?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">Ingeniería Experta</h3>
                <p className="text-gray-600">Diseño e instalación profesional certificada con atención a cada detalle</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">Monitoreo 24/7</h3>
                <p className="text-gray-600">Supervisión constante de tu sistema solar para máximo rendimiento</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">Garantía Total</h3>
                <p className="text-gray-600">Respaldo completo en equipos y servicio para tu tranquilidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-primary-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">P&G Soluciones Integrales</h3>
              <p className="text-gray-300">Transformando el futuro energético de Cuba</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
              <p className="text-gray-300 mb-2">hamilton@grupopg.com</p>
              <p className="text-gray-300 mb-2">+53 63405387</p>
              <p className="text-gray-300">Calle 23 y G #970, Vedado, La Habana, Cuba</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Síguenos</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com/grupopg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors">Facebook</a>
                <a href="https://instagram.com/grupopg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors">Instagram</a>
                <a href="https://wa.me/5363405387" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-orange transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
