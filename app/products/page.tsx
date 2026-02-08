"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import Navigation from "../components/Navigation";

export default function Products() {
  const { t, language } = useLanguage();
  const { isAuthenticated } = useAuth();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    initializeProducts();
  }, []);

  const initializeProducts = () => {
    const savedProducts = localStorage.getItem("products");
    const productsVersion = localStorage.getItem("productsVersion");
    const currentVersion = "v2";
    
    if (savedProducts && productsVersion === currentVersion) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const defaultProducts = [
    {
      id: 1,
      name: "Panel Solar SRNE 450W Monocristalino",
      nameEn: "SRNE 450W Monocrystalline Solar Panel",
      description: "Panel de alta eficiencia SRNE con tecnología PERC",
      descriptionEn: "SRNE high-efficiency panel with PERC technology",
      price: "$299",
      image: "/solar-panel-1.jpg",
      category: "Paneles Solares",
      categoryEn: "Solar Panels",
      brand: "SRNE",
    },
    {
      id: 2,
      name: "Inversor Híbrido SRNE HESP 5kW",
      nameEn: "SRNE HESP 5kW Hybrid Inverter",
      description: "Inversor híbrido SRNE con almacenamiento integrado",
      descriptionEn: "SRNE hybrid inverter with integrated storage",
      price: "$1,450",
      image: "/inverter-1.jpg",
      category: "Inversores",
      categoryEn: "Inverters",
      brand: "SRNE",
    },
    {
      id: 3,
      name: "Batería SRNE EOC 10.24kWh LiFePO4",
      nameEn: "SRNE EOC 10.24kWh LiFePO4 Battery",
      description: "Sistema de almacenamiento SRNE de litio-ferrofosfato",
      descriptionEn: "SRNE lithium iron phosphate storage system",
      price: "$3,200",
      image: "/battery-1.jpg",
      category: "Baterías",
      categoryEn: "Batteries",
      brand: "SRNE",
    },
    {
      id: 4,
      name: "Inversor Off-Grid SRNE ASP 8kW",
      nameEn: "SRNE ASP 8kW Off-Grid Inverter",
      description: "Inversor autónomo SRNE para sistemas aislados",
      descriptionEn: "SRNE standalone inverter for off-grid systems",
      price: "$1,850",
      image: "/inverter-2.jpg",
      category: "Inversores",
      categoryEn: "Inverters",
      brand: "SRNE",
    },
    {
      id: 5,
      name: "Controlador MPPT SRNE ML Series 60A",
      nameEn: "SRNE ML Series 60A MPPT Controller",
      description: "Controlador de carga SRNE con seguimiento MPPT",
      descriptionEn: "SRNE charge controller with MPPT tracking",
      price: "$280",
      image: "/controller-1.jpg",
      category: "Controladores",
      categoryEn: "Controllers",
      brand: "SRNE",
    },
    {
      id: 6,
      name: "Batería SRNE EOS 5.12kWh",
      nameEn: "SRNE EOS 5.12kWh Battery",
      description: "Batería compacta SRNE para sistemas residenciales",
      descriptionEn: "SRNE compact battery for residential systems",
      price: "$1,650",
      image: "/battery-2.jpg",
      category: "Baterías",
      categoryEn: "Batteries",
      brand: "SRNE",
    },
    {
      id: 7,
      name: "Inversor Grid-Tie SRNE HF 3-5kW",
      nameEn: "SRNE HF 3-5kW Grid-Tie Inverter",
      description: "Inversor de conexión a red SRNE de alta frecuencia",
      descriptionEn: "SRNE high-frequency grid-connected inverter",
      price: "$980",
      image: "/inverter-3.jpg",
      category: "Inversores",
      categoryEn: "Inverters",
      brand: "SRNE",
    },
    {
      id: 8,
      name: "Controlador PWM SRNE HP Series 30A",
      nameEn: "SRNE HP Series 30A PWM Controller",
      description: "Controlador económico SRNE para sistemas pequeños",
      descriptionEn: "SRNE economical controller for small systems",
      price: "$85",
      image: "/controller-2.jpg",
      category: "Controladores",
      categoryEn: "Controllers",
      brand: "SRNE",
    },
    {
      id: 9,
      name: "Sistema SRNE EOV 5-6kW Todo-en-Uno",
      nameEn: "SRNE EOV 5-6kW All-in-One System",
      description: "Sistema completo SRNE con inversor y batería integrados",
      descriptionEn: "SRNE complete system with integrated inverter and battery",
      price: "$4,200",
      image: "/solar-kit.jpg",
      category: "Sistemas Completos",
      categoryEn: "Complete Systems",
      brand: "SRNE",
    },
  ];
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      localStorage.setItem("productsVersion", "v2");
      setProducts(defaultProducts);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="products" variant="dark" />

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
          {t.products.backToHome}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.products.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-56 bg-gradient-to-br from-png-orange-light to-png-orange">
                <Image
                  src={product.image}
                  alt={language === "es" ? product.name : product.nameEn}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                    {language === "es" ? product.category : product.categoryEn}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {language === "es" ? product.name : product.nameEn}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {language === "es" ? product.description : product.descriptionEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-png-orange dark:text-png-orange-light">
                    {product.price}
                  </span>
                  {isAuthenticated ? (
                    <button className="bg-gradient-to-r from-png-orange to-png-orange-light text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                      {t.products.addToCart}
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="bg-gray-400 dark:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      {t.products.loginToOrder}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-png-orange-dark to-png-orange rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "es" 
              ? "¿Necesitas una cotización personalizada?" 
              : "Need a Custom Quote?"}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === "es"
              ? "Contáctanos para recibir asesoramiento profesional y precios especiales en compras al por mayor."
              : "Contact us for professional advice and special pricing on bulk purchases."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-png-orange bg-white rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {language === "es" ? "Contáctanos Ahora" : "Contact Us Now"}
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              {language === "es" ? "Calcular Sistema" : "Calculate System"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
