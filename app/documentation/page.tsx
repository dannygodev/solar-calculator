import Link from "next/link";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-800/80 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Solar Calculator
            </Link>
            <div className="flex gap-6">
              <Link
                href="/documentation"
                className="text-blue-600 dark:text-blue-400 transition-colors font-medium"
              >
                Documentation
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 mb-8 font-medium"
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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Documentation
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Learn how to use the Solar Calculator and understand the calculations
        </p>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Getting Started
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Solar Energy Calculator helps you determine the optimal photovoltaic system
              size for your energy needs. Simply input your consumption data and location
              information to receive detailed recommendations.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Navigate to the Calculator page</li>
              <li>Fill in all required fields with your data</li>
              <li>Click &quot;Calculate System&quot; to view results</li>
              <li>Review the recommended system specifications</li>
            </ol>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Input Parameters
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Monthly Consumption (kWh)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your average monthly electricity consumption in kilowatt-hours. You can find
                  this on your electricity bill. For example, a typical household might use
                  300-500 kWh per month.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Daily Sunshine Hours
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The average number of peak sun hours per day in your location. This varies by
                  geographic location and season. You can find this data from solar radiation
                  databases or local meteorological services. Typical values range from 3-7 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your geographic location (city, state, or country). This helps contextualize
                  the results, though the calculations primarily rely on the sunshine hours you
                  provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Solar Module Capacity (W)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The power rating of individual solar panels you plan to use, measured in watts.
                  Modern solar panels typically range from 300W to 450W. Higher wattage panels
                  mean fewer panels needed for the same system size.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  System Losses (%)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The expected energy loss due to factors like inverter efficiency, wiring,
                  shading, dust, and temperature. A typical value is 15-25%. Higher quality
                  systems and optimal conditions result in lower losses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Battery Autonomy (days)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The number of days your battery system should power your home without sunlight.
                  Typical values are 1-3 days. Higher autonomy provides more backup power but
                  requires larger, more expensive battery banks.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Understanding Results
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  System Size (kW)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The total capacity of your solar panel system in kilowatts. This is calculated
                  by multiplying the number of panels by the individual panel capacity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Number of Panels
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The recommended number of solar panels needed to meet your energy requirements,
                  accounting for sunshine hours and system losses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Battery Capacity (kWh)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The required battery storage capacity to provide the specified days of autonomy.
                  This ensures you have power during cloudy periods or at night.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Estimated Daily Production (kWh)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The expected average daily energy production from your solar system, accounting
                  for sunshine hours and system losses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Estimated Monthly Production (kWh)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The projected monthly energy production from your solar system. Compare this
                  with your monthly consumption to ensure adequate coverage.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 border border-yellow-200 dark:border-yellow-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Important Notes
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  These calculations provide estimates only. Actual performance may vary based on
                  installation quality, local weather patterns, and system maintenance.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  Always consult with a certified solar installer for a professional assessment
                  and system design tailored to your specific situation.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>
                  Local regulations, building codes, and utility interconnection requirements
                  may affect your final system design and installation.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions or need assistance with the calculator, please visit our{" "}
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold">
                Contact Page
              </Link>{" "}
              to get in touch with our team.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
