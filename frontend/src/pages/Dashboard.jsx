import React from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const trendData = [
  { month: "Jan", predictions: 18, success: 14 },
  { month: "Feb", predictions: 22, success: 17 },
  { month: "Mar", predictions: 28, success: 22 },
  { month: "Apr", predictions: 25, success: 20 },
  { month: "May", predictions: 32, success: 26 },
  { month: "Jun", predictions: 30, success: 24 },
];

const barData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 18 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 19 },
  { name: "Sat", value: 8 },
  { name: "Sun", value: 5 },
];

const recent = [
  { site: "Dodoma Central", date: "2026-08-20", status: "High", color: "bg-green-100 text-green-700" },
  { site: "Singida North", date: "2026-08-19", status: "Medium", color: "bg-yellow-100 text-yellow-700" },
  { site: "Tabora East", date: "2026-08-18", status: "High", color: "bg-green-100 text-green-700" },
  { site: "Morogoro", date: "2026-08-17", status: "Low", color: "bg-red-100 text-red-700" },
  { site: "Arusha Rural", date: "2026-08-16", status: "High", color: "bg-green-100 text-green-700" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Overview of groundwater predictions across Tanzania
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Predictions", value: "241", sub: "+12 this week", color: "text-[#135AAD]" },
          { label: "Successful Sites", value: "187", sub: "77% success rate", color: "text-green-600" },
          { label: "Avg. Confidence", value: "83%", sub: "Model accuracy", color: "text-blue-600" },
          { label: "Active Regions", value: "12", sub: "Across basins", color: "text-purple-600" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 shadow-sm"
          >
            <p className="text-xs text-gray-500 dark:text-slate-400 uppercase tracking-wide">{s.label}</p>
            <p className={`text-3xl font-bold mt-1 ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">
            Monthly Prediction Trends
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="predictions" stroke="#135AAD" strokeWidth={2} name="Predictions" />
              <Line type="monotone" dataKey="success" stroke="#16A34A" strokeWidth={2} name="Successful" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#135AAD" radius={[4, 4, 0, 0]} name="Predictions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 dark:border-slate-800">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
            Recent Activity & Groundwater Analysis
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 dark:text-slate-400 uppercase bg-gray-50 dark:bg-slate-800">
                <th className="px-5 py-3">Site</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.site} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                  <td className="px-5 py-3 font-medium text-gray-800 dark:text-slate-200">{r.site}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-slate-400">{r.date}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${r.color}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}