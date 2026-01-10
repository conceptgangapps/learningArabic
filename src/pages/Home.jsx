import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const menuItems = [
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
    },
    {
      title: { ar: "تَصْرِيفُ الْمُضَارِعِ", en: "Mudari Conjugation" },
      description: "Practice present tense verb conjugations",
      path: "/mudari-conjugation",
      icon: "🔄",
      color: "bg-teal-500 hover:bg-teal-600 active:bg-teal-700",
      available: true
    },
    {
      title: { ar: "صِيغَةُ الْأَمْرِ", en: "Amr Conjugation" },
      description: "Practice imperative (command) verb forms",
      path: "/amr-conjugation",
      icon: "📢",
      color: "bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
      available: true
    },
    {
      title: { ar: "صِيغَةُ النَّهْيِ", en: "Nahi Conjugation" },
      description: "Practice prohibition (negative imperative) forms",
      path: "/nahi-conjugation",
      icon: "🚫",
      color: "bg-red-500 hover:bg-red-600 active:bg-red-700",
      available: true
    },
    {
      title: { ar: "أناشيد عربية", en: "Arabic Rhymes" },
      description: "Arabic rhymes and lullabies with translations",
      path: "/rhymes",
      icon: "🎵",
      color: "bg-rose-500 hover:bg-rose-600 active:bg-rose-700",
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

        {/* Info Section - Two Columns */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* About This App */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <span>📖</span>
              <span>About This App</span>
            </h3>
            <div className="text-gray-600 text-sm sm:text-base">
              <p>
                This app is designed to help Arabic learners on their journey to master the Arabic language.
                Whether you're studying Classical Arabic, Quranic vocabulary, or building foundational grammar skills,
                this app provides interactive tools and resources to support your learning.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
              <span>📬</span>
              <span>Contact Us</span>
            </h3>
            <div className="space-y-3 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <a href="mailto:abirhasanzoha@gmail.com" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                  abirhasanzoha@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/8801747824702" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                  +8801747824702
                </a>
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
