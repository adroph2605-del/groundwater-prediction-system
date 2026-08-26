import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();

  const navItems = [
    { to: "/app", label: t("nav.dashboard"), icon: "D" },
    { to: "/app/predict", label: t("nav.predict"), icon: "P" },
    { to: "/app/history", label: t("nav.history"), icon: "H" },
    { to: "/app/map", label: t("nav.map"), icon: "M" },
    { to: "/app/settings", label: t("nav.settings"), icon: "S" },
  ];

  return (
    <aside className="w-56 min-h-screen bg-[#135AAD] dark:bg-slate-900 text-white flex flex-col">
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">
            GP
          </div>
          <div>
            <p className="text-xs font-semibold leading-tight">GROUNDWATER</p>
            <p className="text-[10px] text-blue-200 leading-tight">PREDICTION SYSTEM</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/app"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-white text-[#135AAD] shadow-sm"
                  : "text-blue-100 hover:bg-white/10"
              }`
            }
          >
            <span className="w-6 h-6 rounded bg-white/20 flex items-center justify-center text-xs">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-white/10">
        <p className="text-[10px] uppercase tracking-wider text-blue-200 mb-1">Model Status</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-blue-100">Online · v2.1.4</span>
        </div>
      </div>
    </aside>
  );
}