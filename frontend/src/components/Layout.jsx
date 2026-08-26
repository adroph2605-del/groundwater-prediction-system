import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { dark, toggle } = useTheme();
  const { i18n } = useTranslation();

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-6">
          <div className="text-sm text-gray-500 dark:text-slate-400">
            Groundwater Prediction System · Tanzania
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`text-xs px-3 py-1.5 rounded-full border ${
                i18n.language === "en"
                  ? "bg-[#135AAD] text-white border-[#135AAD]"
                  : "border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("sw")}
              className={`text-xs px-3 py-1.5 rounded-full border ${
                i18n.language && i18n.language.startsWith("sw")
                  ? "bg-[#135AAD] text-white border-[#135AAD]"
                  : "border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300"
              }`}
            >
              SW
            </button>
            <div className="w-8 h-8 rounded-full bg-[#135AAD] text-white flex items-center justify-center text-xs font-semibold">
              JD
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}