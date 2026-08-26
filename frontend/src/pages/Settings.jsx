import React, { useState } from "react";

export default function Settings() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-white">Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 dark:text-slate-400 mb-1">Full Name</label>
            <input
              defaultValue="John Doe"
              className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-slate-400 mb-1">Email</label>
            <input
              defaultValue="john@example.com"
              className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#135AAD]"
            />
          </div>
        </div>
        <button className="text-sm px-4 py-2 bg-[#135AAD] text-white rounded-lg hover:bg-[#0f4a8f]">
          Save Profile
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-white">Notifications</h2>
        {[
          { label: "Push Notifications", state: push, set: setPush },
          { label: "Email Alerts", state: email, set: setEmail },
          { label: "Auto-Save Reports", state: autoSave, set: setAutoSave },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-slate-300">{item.label}</span>
            <button
              onClick={() => item.set(!item.state)}
              className={`w-11 h-6 rounded-full transition relative ${
                item.state ? "bg-[#135AAD]" : "bg-gray-300 dark:bg-slate-600"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition ${
                  item.state ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 shadow-sm space-y-3">
        <h2 className="text-sm font-semibold text-gray-800 dark:text-white">System Info</h2>
        <div className="text-sm text-gray-600 dark:text-slate-400 space-y-1">
          <p>
            Model version: <span className="font-medium text-gray-800 dark:text-slate-200">v2.1.4</span>
          </p>
          <p>
            Last training: <span className="font-medium text-gray-800 dark:text-slate-200">May 2024</span>
          </p>
          <p>
            Status: <span className="text-green-600 font-medium">Online</span>
          </p>
        </div>
      </div>
    </div>
  );
}