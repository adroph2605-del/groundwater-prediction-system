import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

export default function Landing() {
  const { dark, toggle } = useTheme();
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#135AAD] flex items-center justify-center text-white text-sm font-bold">
              GP
            </div>
            <span className="font-semibold text-sm">Groundwater Prediction System</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-[#135AAD]">Features</a>
            <a href="#how" className="hover:text-[#135AAD]">How It Works</a>
            <a href="#coverage" className="hover:text-[#135AAD]">Coverage</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`text-xs px-2 py-1 rounded-full border ${
                i18n.language === "en"
                  ? "bg-[#135AAD] text-white border-[#135AAD]"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("sw")}
              className={`text-xs px-2 py-1 rounded-full border ${
                i18n.language && i18n.language.startsWith("sw")
                  ? "bg-[#135AAD] text-white border-[#135AAD]"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              SW
            </button>
            <Link
              to="/app"
              className="ml-1 text-sm px-4 py-2 rounded-lg bg-[#135AAD] text-white font-medium hover:bg-[#0f4a8f]"
            >
              Launch App
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#135AAD] via-[#1a6bc4] to-[#0d4a8c] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs bg-white/15 px-3 py-1 rounded-full mb-4">
              AI-Powered · Tanzania Water Sector
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find Water.
              <br />
              <span className="text-[#F48936]">Before You Drill.</span>
            </h1>
            <p className="mt-4 text-blue-100 text-base max-w-md">
              The most accurate groundwater prediction platform for well drillers in Tanzania.
              Enter your site geology — get a precise aquifer assessment in seconds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/app/predict"
                className="px-5 py-2.5 rounded-lg bg-[#E2397C] hover:bg-[#c92e6a] font-medium text-sm"
              >
                Start Free Prediction
              </Link>
              <Link
                to="/app"
                className="px-5 py-2.5 rounded-lg border border-white/40 hover:bg-white/10 text-sm"
              >
                Launch App
              </Link>
            </div>
            <div className="mt-8 flex gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold">1,240+</p>
                <p className="text-blue-200 text-xs">Sites Analysed</p>
              </div>
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-blue-200 text-xs">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold">26</p>
                <p className="text-blue-200 text-xs">Regions</p>
              </div>
            </div>
          </div>

          {/* Assessment card */}
          <div className="bg-white text-slate-800 rounded-2xl shadow-2xl p-5 max-w-sm mx-auto w-full">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Groundwater Assessment</p>
                <p className="text-sm font-semibold">Dodoma Region · Site TZ-0842</p>
              </div>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Ready
              </span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500">GROUNDWATER SCAN</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full">
                <div className="h-1.5 bg-[#135AAD] rounded-full" style={{ width: "75%" }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-xs mb-3">
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-slate-500">WATER POTENTIAL</p>
                <p className="font-bold text-green-600 text-sm">HIGH</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2">
                <p className="text-slate-500">DEPTH</p>
                <p className="font-bold text-[#135AAD] text-sm">45–60m</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-2">
                <p className="text-slate-500">YIELD</p>
                <p className="font-bold text-[#F48936] text-sm">MEDIUM–HIGH</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-2">
                <p className="text-slate-500">QUALITY</p>
                <p className="font-bold text-[#E2397C] text-sm">GOOD</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500">Confidence Score</span>
                <span className="font-semibold">86%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full">
                <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "86%" }} />
              </div>
            </div>
            <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 mt-2">
              Suitable for further drilling
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#135AAD] bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold">Everything a driller needs.</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm">
            From raw resistivity readings to drill-ready site assessments — the complete workflow in one platform.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl p-6 bg-blue-50 dark:bg-blue-900/20 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Model trained on 8,400+ boreholes across Tanzania delivers predictions with 89% field-validated accuracy.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-pink-50 dark:bg-pink-900/20 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold mb-2">Full Tanzania Coverage</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                All 26 regions mapped with elevation data, rainfall layers, and regional geology databases.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-orange-50 dark:bg-orange-900/20 border border-slate-100 dark:border-slate-800">
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Aquifer depth, expected yield, water quality, and geological formation in under 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E2397C] bg-pink-50 dark:bg-pink-900/30 px-3 py-1 rounded-full">
            Process
          </span>
          <h2 className="mt-3 text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
            Four simple steps from survey data to drill decision.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {[
              { n: "01", title: "Enter Site Data", desc: "Input GPS, resistivity, rock type, elevation, and rainfall.", color: "#135AAD" },
              { n: "02", title: "System Processes Geology", desc: "Cross-references inputs against 8,400+ historical boreholes.", color: "#E2397C" },
              { n: "03", title: "Get Your Assessment", desc: "Receive depth, yield, quality, and confidence in under 3 seconds.", color: "#F48936" },
              { n: "04", title: "Drill with Confidence", desc: "Use the report to advise your client and plan the borehole.", color: "#135AAD" },
            ].map((s) => (
              <div key={s.n} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                <span className="text-2xl font-bold" style={{ color: s.color }}>{s.n}</span>
                <h3 className="font-semibold mt-2 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#135AAD] bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            Coverage
          </span>
          <h2 className="mt-3 text-3xl font-bold">All 26 regions. One platform.</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { v: "26", l: "Regions" },
              { v: "8,400+", l: "Training Boreholes" },
              { v: "89%", l: "Field Accuracy" },
              { v: "3s", l: "Prediction Time" },
              { v: "v3.2", l: "Model Version" },
              { v: "2", l: "Languages" },
            ].map((s) => (
              <div key={s.l} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <p className="text-2xl font-bold text-[#135AAD]">{s.v}</p>
                <p className="text-xs text-slate-500 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#135AAD] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to find water?</h2>
          <p className="mt-3 text-blue-100 text-sm">
            Join well drillers across Tanzania using predictions to save time and reduce failed boreholes.
          </p>
          <div className="mt-6">
            <Link
              to="/app/predict"
              className="px-6 py-2.5 rounded-lg bg-[#E2397C] hover:bg-[#c92e6a] font-medium text-sm"
            >
              Start Free Prediction
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs">
          <p className="text-white font-semibold mb-2">Groundwater Prediction System</p>
          <p>© 2026 · Tanzania · English & Kiswahili</p>
        </div>
      </footer>
    </div>
  );
}