"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import Navigation from "../components/Navigation";

export default function Login() {
  const { t } = useLanguage();
  const { login, signup } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const success = await login(formData.email, formData.password);
      if (success) {
        router.push("/products");
      } else {
        setError(t.auth.login.error);
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError("Please fill in all fields");
        return;
      }
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) {
        router.push("/products");
      } else {
        setError(t.auth.signup.error);
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation currentPage="login" variant="dark" />

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-md">
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

        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-navy mb-3">
              {isLogin ? t.auth.login.title : t.auth.signup.title}
            </h1>
            <p className="text-gray-600">
              {isLogin ? t.auth.login.subtitle : t.auth.signup.subtitle}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-primary-navy mb-2"
                >
                  {t.auth.signup.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border-2 border-primary-navy rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-300"
                  placeholder={t.auth.signup.namePlaceholder}
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-primary-navy mb-2"
              >
                {isLogin ? t.auth.login.email : t.auth.signup.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-primary-navy rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-300"
                placeholder={isLogin ? t.auth.login.emailPlaceholder : t.auth.signup.emailPlaceholder}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-primary-navy mb-2"
              >
                {isLogin ? t.auth.login.password : t.auth.signup.password}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-primary-navy rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-300"
                placeholder={isLogin ? t.auth.login.passwordPlaceholder : t.auth.signup.passwordPlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isLogin ? t.auth.login.loginButton : t.auth.signup.signupButton}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? t.auth.login.noAccount : t.auth.signup.hasAccount}{" "}
              <button
                onClick={toggleMode}
                className="text-accent-orange font-bold hover:text-orange-600 transition-colors"
              >
                {isLogin ? t.auth.login.signupLink : t.auth.signup.loginLink}
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
