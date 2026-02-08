"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navigation from "../components/Navigation";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="contact" variant="dark" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
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
          {t.contact.backToHome}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t.contact.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contact.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder={t.contact.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {submitted && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-green-800 dark:text-green-300 text-center font-medium">
                    {t.contact.form.successMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-png-orange via-png-orange-light to-png-orange-dark text-white font-semibold py-4 px-6 rounded-lg hover:shadow-xl hover:shadow-png-orange/50 transform hover:scale-[1.02] transition-all duration-300 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400"
              >
                {t.contact.form.sendButton}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-png-orange dark:text-png-orange-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.contact.info.email}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@solarcalculator.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.contact.info.phone}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.contact.info.office}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.contact.info.officeAddress.street}
                    <br />
                    {t.contact.info.officeAddress.city}
                    <br />
                    {t.contact.info.officeAddress.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl shadow-lg p-8 border border-orange-200 dark:border-png-orange-dark">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t.contact.info.businessHours}
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="flex justify-between">
                  <span>{t.contact.info.hours.weekdays}</span>
                  <span className="font-semibold">{t.contact.info.hours.weekdaysTime}</span>
                </p>
                <p className="flex justify-between">
                  <span>{t.contact.info.hours.saturday}</span>
                  <span className="font-semibold">{t.contact.info.hours.saturdayTime}</span>
                </p>
                <p className="flex justify-between">
                  <span>{t.contact.info.hours.sunday}</span>
                  <span className="font-semibold">{t.contact.info.hours.sundayTime}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
