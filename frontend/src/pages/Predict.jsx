import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const initialForm = {
  latitude: "",
  longitude: "",
  resistivity: "",
  rockType: "",
  elevation: "",
  rainfall: "",
};

export default function Predict() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        potential: "HIGH",
        depth: "45 – 60 metres",
        formation: "Fractured Basement Rock",
        aquifer: "GOOD",
        yield: "MEDIUM – HIGH",
        quality: "GOOD",
        ph: "7.1 – 7.5",
        salinity: "LOW",
        confidence: 86,
        recommendation: "Suitable for further drilling",
      });
      setLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setForm(initialForm);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("predict.title")}
        </h1>
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {t("predict.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Site Data</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                  {t("predict.latitude")}
                </label>
                <input
                  type="number"
                  step="any"
                  name="latitude"
                  value={form.latitude}
                  onChange={handleChange}
                  placeholder="-6.1630"
                  required
                  className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                  {t("predict.longitude")}
                </label>
                <input
                  type="number"
                  step="any"
                  name="longitude"
                  value={form.longitude}
                  onChange={handleChange}
                  placeholder="35.7516"
                  required
                  className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                {t("predict.resistivity")}
              </label>
              <input
                type="number"
                name="resistivity"
                value={form.resistivity}
                onChange={handleChange}
                placeholder="245.6"
                className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                {t("predict.rockType")}
              </label>
              <select
                name="rockType"
                value={form.rockType}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
              >
                <option value="">Select type</option>
                <option value="basement">Basement / Fractured</option>
                <option value="alluvial">Alluvial</option>
                <option value="sedimentary">Sedimentary</option>
                <option value="volcanic">Volcanic</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                  {t("predict.elevation")}
                </label>
                <input
                  type="number"
                  name="elevation"
                  value={form.elevation}
                  onChange={handleChange}
                  placeholder="1120"
                  className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">
                  {t("predict.rainfall")}
                </label>
                <input
                  type="number"
                  name="rainfall"
                  value={form.rainfall}
                  onChange={handleChange}
                  placeholder="850"
                  className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg text-sm transition disabled:opacity-60"
              >
                {loading ? t("common.loading") : t("predict.submit")}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                {t("predict.reset")}
              </button>
            </div>
          </form>

          {loading && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <p className="text-sm font-medium text-[#135AAD] mb-2">GROUNDWATER SCAN</p>
              <div className="space-y-1 text-xs text-gray-600 dark:text-slate-400 mb-3">
                <p>GPS ................ ✓</p>
                <p>Location ........... ✓</p>
                <p>Elevation .......... ✓</p>
                <p>Environmental data . ✓</p>
                <p>Geological data .... ✓</p>
                <p>Sensor data ........ ✓</p>
              </div>
              <div className="w-full bg-blue-100 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-[#135AAD] h-2 rounded-full animate-pulse" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Processing... 75%</p>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {result ? (
            <>
              <div className="bg-[#135AAD] text-white px-6 py-4">
                <p className="text-xs uppercase tracking-wider text-blue-200">Groundwater Assessment</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-semibold">Water Potential</p>
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {result.potential}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {[
                  ["Expected Depth", result.depth],
                  ["Geological Formation", result.formation],
                  ["Aquifer Potential", result.aquifer],
                  ["Expected Yield", result.yield],
                  ["Predicted Water Quality", result.quality],
                  ["pH", result.ph],
                  ["Salinity", result.salinity],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm border-b border-gray-100 dark:border-slate-800 pb-2">
                    <span className="text-gray-500 dark:text-slate-400">{label}</span>
                    <span className="font-semibold text-gray-800 dark:text-slate-200">{value}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-slate-400">Confidence</span>
                    <span className="font-semibold text-gray-800 dark:text-slate-200">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${result.confidence}%` }} />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium uppercase">Recommendation</p>
                  <p className="text-sm text-green-800 dark:text-green-300 mt-0.5">{result.recommendation}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[420px] text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-4">
                💧
              </div>
              <p className="text-gray-500 dark:text-slate-400 text-sm">
                Fill in the form and click <strong>Predict Now</strong> to see results here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}