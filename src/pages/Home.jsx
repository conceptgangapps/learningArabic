import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const menuItems = [
    {
      title: { ar: "المنهج", en: "Syllabus" },
      description: "View the complete Arabic course syllabus",
      path: "/syllabus",
      icon: "📚",
      color: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
      available: false
    },
    {
      title: { ar: "حل الواجبات", en: "Syllabus Answers" },
      description: "Homework solutions organized by week and day",
      path: "/syllabus-answers",
      icon: "✅",
      color: "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700",
      available: true
    },
    {
      title: { ar: "الضَّمَائِرُ", en: "Pronouns (Domir)" },
      description: "Learn Arabic pronouns with Quranic examples",
      path: "/pronouns",
      icon: "👤",
      color: "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700",
      available: true
    },
    {
      title: { ar: "تَصْرِيفُ الْمَاضِي", en: "Madi Conjugation" },
      description: "Practice past tense verb conjugations",
      path: "/madi-conjugation",
      icon: "📝",
      color: "bg-purple-500 hover:bg-purple-600 active:bg-purple-700",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
              <span className="arabic-text text-3xl sm:text-4xl text-emerald-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                تعلم اللغة العربية
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">Learn Arabic Language</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 border border-gray-100 w-full sm:w-auto">
            <p className="arabic-text text-xl sm:text-2xl text-gray-700 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
              بسم الله الرحمن الرحيم
            </p>
            <p className="text-gray-600 italic text-sm sm:text-base">In the name of Allah, the Most Gracious, the Most Merciful</p>
            <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-4 sm:pt-6">
              <p className="text-gray-700 text-sm sm:text-base">
                Welcome to your Arabic learning journey. Select a section below to begin.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.available ? (
                <Link
                  to={item.path}
                  className={`block ${item.color} text-white rounded-xl p-5 sm:p-6 shadow-lg transform transition-all duration-200 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl active:scale-[0.98]`}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <h2 className="arabic-text text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {item.title.ar}
                  </h2>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title.en}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{item.description}</p>
                </Link>
              ) : (
                <div className={`block bg-gray-300 text-gray-500 rounded-xl p-5 sm:p-6 shadow-lg cursor-not-allowed relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded">
                    Coming Soon
                  </div>
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 opacity-50">{item.icon}</div>
                  <h2 className="arabic-text text-xl sm:text-2xl font-bold mb-1 opacity-60" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {item.title.ar}
                  </h2>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 opacity-60">{item.title.en}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 sm:mt-12 bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
            <span>📖</span>
            <span>About This App</span>
          </h3>
          <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <p>
              This application is designed to help students learn Arabic language with a focus on
              Classical Arabic and Quranic vocabulary.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>Homework solutions with translations</li>
                  <li>Verb conjugation tables</li>
                  <li>Grammar explanations</li>
                  <li>Bilingual content (Arabic/English)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Font Support:</h4>
                <ul className="space-y-1 text-xs sm:text-sm">
                  <li><span style={{ fontFamily: 'var(--font-arabic)' }}>العربية</span> - Noto Naskh Arabic</li>
                  <li><span style={{ fontFamily: 'var(--font-bengali)' }}>বাংলা</span> - Noto Serif Bengali</li>
                  <li><span style={{ fontFamily: 'var(--font-urdu)' }}>اردو</span> - Noto Nastaliq Urdu</li>
                  <li>English - Roboto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-8 sm:mt-12">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm">
          <p className="arabic-text mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
            والله أعلم بالصواب
          </p>
          <p>And Allah knows best</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
