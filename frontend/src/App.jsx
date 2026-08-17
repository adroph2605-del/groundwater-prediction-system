import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

// Placeholder pages - replace with real components later
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">{t('app.name')}</h1>
      <p className="text-gray-600 mb-6">{t('app.tagline')}</p>

      <div className="flex gap-3 mb-8">
        <button
          onClick={() => i18n.changeLanguage('sw')}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Kiswahili
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          English
        </button>
      </div>

      <p className="text-sm text-gray-500">
        Current language / Lugha ya sasa: <strong>{i18n.language}</strong>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
