import React from "react";

const records = [
  { id: "PR-001", site: "Dodoma Central", lat: -6.163, lon: 35.752, depth: "52 m", potential: "HIGH", date: "2026-08-20", status: "Completed" },
  { id: "PR-002", site: "Singida North", lat: -4.817, lon: 34.748, depth: "68 m", potential: "MEDIUM", date: "2026-08-19", status: "Completed" },
  { id: "PR-003", site: "Tabora East", lat: -5.017, lon: 32.800, depth: "45 m", potential: "HIGH", date: "2026-08-18", status: "Completed" },
  { id: "PR-004", site: "Morogoro", lat: -6.822, lon: 37.661, depth: "90 m", potential: "LOW", date: "2026-08-17", status: "Completed" },
  { id: "PR-005", site: "Arusha Rural", lat: -3.387, lon: 36.683, depth: "38 m", potential: "HIGH", date: "2026-08-16", status: "Completed" },
  { id: "PR-006", site: "Mbeya South", lat: -8.909, lon: 33.460, depth: "55 m", potential: "MEDIUM", date: "2026-08-15", status: "Completed" },
  { id: "PR-007", site: "Mwanza West", lat: -2.517, lon: 32.900, depth: "42 m", potential: "HIGH", date: "2026-08-14", status: "Completed" },
];

const badge = {
  HIGH: "bg-green-100 text-green-700",
  MEDIUM: "bg-yellow-100 text-yellow-700",
  LOW: "bg-red-100 text-red-700",
};

export default function History() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Prediction History</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">Past groundwater assessments</p>
        </div>
        <button className="text-sm px-4 py-2 bg-[#135AAD] text-white rounded-lg hover:bg-[#0f4a8f]">
          Export CSV
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 dark:text-slate-400 uppercase bg-gray-50 dark:bg-slate-800 border-b dark:border-slate-700">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Site</th>
                <th className="px-5 py-3">Coordinates</th>
                <th className="px-5 py-3">Depth</th>
                <th className="px-5 py-3">Potential</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                  <td className="px-5 py-3 font-mono text-xs text-gray-500 dark:text-slate-400">{r.id}</td>
                  <td className="px-5 py-3 font-medium text-gray-800 dark:text-slate-200">{r.site}</td>
                  <td className="px-5 py-3 text-gray-500 dark:text-slate-400 text-xs">
                    {r.lat.toFixed(3)}, {r.lon.toFixed(3)}
                  </td>
                  <td className="px-5 py-3 text-gray-700 dark:text-slate-300">{r.depth}</td>
                  <td className="px-5 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${badge[r.potential]}`}>
                      {r.potential}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-500 dark:text-slate-400">{r.date}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs text-green-600 font-medium">{r.status}</span>
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