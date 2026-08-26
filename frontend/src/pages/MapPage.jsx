import React from "react";

const points = [
  { name: "Dodoma", x: 55, y: 48, level: "HIGH" },
  { name: "Singida", x: 48, y: 35, level: "MEDIUM" },
  { name: "Tabora", x: 35, y: 42, level: "HIGH" },
  { name: "Morogoro", x: 68, y: 55, level: "LOW" },
  { name: "Arusha", x: 62, y: 22, level: "HIGH" },
  { name: "Mbeya", x: 42, y: 72, level: "MEDIUM" },
  { name: "Mwanza", x: 38, y: 18, level: "HIGH" },
];

const color = {
  HIGH: "bg-green-500",
  MEDIUM: "bg-yellow-400",
  LOW: "bg-red-500",
};

export default function MapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Site Map</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400">Prediction sites across Tanzania</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm p-4">
        <div className="relative w-full h-[480px] bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-green-200 dark:border-slate-600 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, #86efac 1px, transparent 1px), linear-gradient(to bottom, #86efac 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <p className="absolute top-3 left-4 text-xs font-semibold text-green-800 dark:text-green-300 bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded">
            Tanzania · East Africa
          </p>
          {points.map((p) => (
            <div
              key={p.name}
              className="absolute flex flex-col items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className={`w-3.5 h-3.5 rounded-full ${color[p.level]} ring-2 ring-white shadow`} />
              <span className="mt-1 text-[10px] font-medium text-gray-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 rounded shadow-sm">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4 text-xs text-gray-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-green-500" /> High potential
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-yellow-400" /> Medium
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" /> Low
          </div>
        </div>
      </div>
    </div>
  );
}