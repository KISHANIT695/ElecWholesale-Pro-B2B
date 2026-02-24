// client/src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="font-sans">
      {/* Header like Amazon */}
      <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold italic">ElecWholesale</h1>
        <div className="flex gap-4">
          <button onClick={() => changeLanguage('hi')} className="text-sm">हिन्दी</button>
          <button onClick={() => changeLanguage('en')} className="text-sm">English</button>
          <input type="text" placeholder={t('search_placeholder')} className="p-2 rounded text-black w-96" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">{t('trending_wholesale')}</h2>
        {/* Product Grid - यहाँ अमेज़न जैसा ग्रिड आएगा */}
      </main>
    </div>
  );
}
export default App;
