"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import LanguageSelector from "./LanguageSelector";

interface NavigationProps {
  currentPage?: "home" | "about" | "calculator" | "products" | "gallery" | "contact" | "documentation" | "login" | "admin";
  variant?: "light" | "dark";
}

export default function Navigation({ currentPage, variant = "light" }: NavigationProps) {
  const { t } = useLanguage();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const navLinks = [
    { href: "/about", label: t.nav.aboutUs, key: "about" },
    { href: "/calculator", label: t.nav.calculator, key: "calculator" },
    { href: "/products", label: t.nav.products, key: "products" },
    { href: "/gallery", label: t.nav.gallery, key: "gallery" },
    { href: "/contact", label: t.nav.contact, key: "contact" },
  ];

  const isLightVariant = variant === "light";
  const bgClass = isLightVariant 
    ? "bg-white/10 backdrop-blur-md border-b border-white/20" 
    : "bg-primary-navy";
  
  const textClass = isLightVariant ? "text-white" : "text-white";
  const linkClass = isLightVariant 
    ? "text-white hover:text-accent-orange" 
    : "text-white hover:text-accent-orange";
  const activeClass = "text-accent-orange";

  return (
    <>
      <nav className={bgClass}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="P&G Logo"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] rounded-lg"
              />
              <span className={`text-2xl font-bold ${textClass} hidden md:inline`}>
                P&G
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`${currentPage === link.key ? activeClass : linkClass} transition-colors font-medium`}
                >
                  {link.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`${currentPage === "admin" ? activeClass : linkClass} transition-colors font-medium`}
                >
                  Admin
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className={`${linkClass} transition-colors font-medium`}
                >
                  {t.nav.logout}
                </button>
              ) : (
                <Link
                  href="/login"
                  className={`${currentPage === "login" ? activeClass : linkClass} transition-colors font-medium`}
                >
                  {t.nav.login}
                </Link>
              )}
              <LanguageSelector />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSelector />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${textClass} p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Portal style */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm z-[9998] animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu - Slide from right */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br ${
          isLightVariant 
            ? 'from-white via-gray-50 to-gray-100' 
            : 'from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
        } shadow-2xl z-[9999] transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className={`p-6 border-b ${isLightVariant ? 'border-gray-200' : 'border-gray-200 dark:border-gray-700'}`}>
          <div className="flex items-center justify-between">
            <h2 className={`text-xl font-bold ${isLightVariant ? 'text-gray-900' : 'text-gray-900 dark:text-white'}`}>
              Menu
            </h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-xl ${isLightVariant ? 'hover:bg-gray-200 text-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'} transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="overflow-y-auto h-[calc(100%-88px)] p-4">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center gap-3 py-4 px-5 rounded-2xl text-base font-medium transition-all duration-200 ${
                  currentPage === link.key 
                    ? 'bg-gradient-to-r from-png-orange to-png-orange-light text-white shadow-lg shadow-png-orange/30 scale-[1.02]' 
                    : `${isLightVariant ? 'text-gray-800 hover:bg-gray-200 active:scale-95' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95'}`
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentPage === link.key ? 'bg-white' : 'bg-png-orange group-hover:scale-150'
                }`} />
                {link.label}
              </Link>
            ))}
            
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center gap-3 py-4 px-5 rounded-2xl text-base font-medium transition-all duration-200 ${
                  currentPage === "admin"
                    ? 'bg-gradient-to-r from-png-blue to-png-blue-light text-white shadow-lg shadow-png-blue/30 scale-[1.02]' 
                    : `${isLightVariant ? 'text-gray-800 hover:bg-gray-200 active:scale-95' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95'}`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentPage === "admin" ? 'bg-white' : 'bg-png-blue group-hover:scale-150'
                }`} />
                Admin
              </Link>
            )}

            <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className={`group flex items-center gap-3 w-full text-left py-4 px-5 rounded-2xl text-base font-medium transition-all duration-200 ${
                  isLightVariant ? 'text-red-600 hover:bg-red-50 active:scale-95' : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 active:scale-95'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-all" />
                {t.nav.logout}
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center gap-3 py-4 px-5 rounded-2xl text-base font-medium transition-all duration-200 ${
                  currentPage === "login"
                    ? 'bg-gradient-to-r from-png-orange to-png-orange-light text-white shadow-lg shadow-png-orange/30 scale-[1.02]' 
                    : `${isLightVariant ? 'text-gray-800 hover:bg-gray-200 active:scale-95' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95'}`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentPage === "login" ? 'bg-white' : 'bg-png-orange group-hover:scale-150'
                }`} />
                {t.nav.login}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
