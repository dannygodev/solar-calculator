"use client";

import Link from "next/link";
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
    : "bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700";
  
  const textClass = isLightVariant ? "text-white" : "text-gray-900 dark:text-white";
  const linkClass = isLightVariant 
    ? "text-white hover:text-emerald-300" 
    : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400";
  const activeClass = isLightVariant 
    ? "text-emerald-300" 
    : "text-emerald-600 dark:text-emerald-400";

  return (
    <nav className={bgClass}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${textClass}`}>
            <span className="hidden md:inline">{t.nav.title}</span>
            <span className="md:hidden">P&G</span>
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
              className={`${textClass} p-2 hover:bg-white/10 rounded-lg transition-colors`}
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 top-[73px]"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden fixed top-[73px] left-0 right-0 z-50 ${
            isLightVariant ? 'bg-white/98' : 'bg-white dark:bg-gray-800'
          } backdrop-blur-lg shadow-2xl max-h-[calc(100vh-73px)] overflow-y-auto border-t ${
            isLightVariant ? 'border-white/20' : 'border-gray-200 dark:border-gray-700'
          }`}>
            <div className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 px-5 rounded-xl text-base ${
                    currentPage === link.key 
                      ? `${isLightVariant ? 'text-emerald-600 bg-emerald-50 font-semibold' : 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-semibold'}` 
                      : `${isLightVariant ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600'}`
                  } transition-all duration-200 font-medium`}
                >
                  {link.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 px-5 rounded-xl text-base ${
                    currentPage === "admin"
                      ? `${isLightVariant ? 'text-emerald-600 bg-emerald-50 font-semibold' : 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-semibold'}` 
                      : `${isLightVariant ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600'}`
                  } transition-all duration-200 font-medium`}
                >
                  Admin
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-4 px-5 rounded-xl text-base ${
                    isLightVariant ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600'
                  } transition-all duration-200 font-medium`}
                >
                  {t.nav.logout}
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 px-5 rounded-xl text-base ${
                    currentPage === "login"
                      ? `${isLightVariant ? 'text-emerald-600 bg-emerald-50 font-semibold' : 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 font-semibold'}` 
                      : `${isLightVariant ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600'}`
                  } transition-all duration-200 font-medium`}
                >
                  {t.nav.login}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
