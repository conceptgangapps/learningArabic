import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import qiratData from '../data/qiratArRashida.json';

const QiratVocabulary = () => {
  const [language, setLanguage] = useState('bn');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Extract unique chapters from data
  const chapters = useMemo(() => {
    const chapterMap = new Map();
    qiratData.forEach(item => {
      if (!chapterMap.has(item.book)) {
        chapterMap.set(item.book, item.chapter);
      }
    });
    return Array.from(chapterMap.entries()).map(([book, chapter]) => ({
      book,
      chapter
    }));
  }, []);

  // Filter data based on selections
  const filteredData = useMemo(() => {
    return qiratData.filter(item => {
      const chapterMatch = selectedChapter === 'all' || item.book === selectedChapter;
      const typeMatch = selectedType === 'all' || item.type === selectedType;
      return chapterMatch && typeMatch;
    });
  }, [selectedChapter, selectedType]);

  // UI Labels
  const uiLabels = {
    title: { ar: 'مفردات قراءة الراشدة', en: 'Qirat ar Rashida Vocabulary' },
    selectLanguage: 'Translation',
    languages: { bn: 'বাংলা', en: 'English', ur: 'اردو' },
    filters: {
      chapter: { bn: 'অধ্যায়', en: 'Chapter', ur: 'باب' },
      type: { bn: 'প্রকার', en: 'Type', ur: 'قسم' },
      all: { bn: 'সব', en: 'All', ur: 'سب' }
    },
    types: {
      word: { bn: 'শব্দ', en: 'Word', ur: 'لفظ' },
      harf: { bn: 'হরফ', en: 'Particle', ur: 'حرف' },
      tasreef: { bn: 'তাসরীফ', en: 'Verb', ur: 'تصریف' }
    },
    wordLabels: {
      mujakkar: { bn: 'মুযাক্কার', en: 'Masculine', ur: 'مذکر' },
      muannas: { bn: 'মুআন্নাস', en: 'Feminine', ur: 'مؤنث' },
      wahid: { bn: 'একবচন', en: 'Singular', ur: 'واحد' },
      muthanna: { bn: 'দ্বিবচন', en: 'Dual', ur: 'مثنی' },
      jama: { bn: 'বহুবচন', en: 'Plural', ur: 'جمع' }
    },
    verbLabels: {
      madi: { bn: 'মাযী', en: 'Past', ur: 'ماضی' },
      mudari: { bn: 'মুযারে', en: 'Present', ur: 'مضارع' },
      masdar: { bn: 'মাসদার', en: 'Verbal Noun', ur: 'مصدر' },
      amr: { bn: 'আমর', en: 'Imperative', ur: 'امر' },
      nahi: { bn: 'নাহী', en: 'Prohibition', ur: 'نہی' },
      root: { bn: 'মূল', en: 'Root', ur: 'مادہ' },
      form: { bn: 'বাব', en: 'Form', ur: 'باب' }
    },
    results: { bn: 'টি ফলাফল', en: 'results', ur: 'نتائج' }
  };

  const getLanguageFont = (lang) => {
    switch(lang) {
      case 'bn': return 'var(--font-bengali)';
      case 'ur': return 'var(--font-urdu)';
      default: return 'inherit';
    }
  };

  const isRtl = language === 'ur';

  const getMeaning = (item) => {
    switch(language) {
      case 'bn': return item.bangla;
      case 'ur': return item.urdu;
      default: return item.english;
    }
  };

  // Color scheme based on type
  const getTypeColor = (type) => {
    switch(type) {
      case 'tasreef':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          badge: 'bg-purple-500',
          text: 'text-purple-700',
          light: 'text-purple-500'
        };
      case 'harf':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          badge: 'bg-amber-500',
          text: 'text-amber-700',
          light: 'text-amber-500'
        };
      default: // word
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          badge: 'bg-emerald-500',
          text: 'text-emerald-700',
          light: 'text-emerald-500'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Fixed Top Bars */}
      <div className="sticky top-0 z-50 bg-white">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-3 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              {uiLabels.title.ar}
            </h1>
            <p className="text-sm text-gray-500">{uiLabels.title.en}</p>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Filters Section */}
        <div className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              {/* Left: Filters */}
              <div className="flex items-center gap-2">
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="h-9 w-40 px-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="all">{uiLabels.filters.all[language]}</option>
                  {chapters.map(({ book, chapter }) => (
                    <option key={book} value={book}>
                      {chapter}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="h-9 px-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="all">{uiLabels.filters.all[language]}</option>
                  <option value="word">{uiLabels.types.word[language]}</option>
                  <option value="harf">{uiLabels.types.harf[language]}</option>
                  <option value="tasreef">{uiLabels.types.tasreef[language]}</option>
                </select>
              </div>

              {/* Center: Word Count */}
              <span className="text-sm text-gray-500 font-medium">{filteredData.length}</span>

              {/* Right: Language Selector */}
              <div className="flex rounded-lg overflow-hidden border border-gray-300 h-9">
                {Object.entries(uiLabels.languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={`px-3 text-sm font-medium transition-colors ${
                      language === code
                        ? 'bg-teal-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                    style={code !== 'en' ? { fontFamily: getLanguageFont(code) } : {}}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary List */}
      <main className="max-w-4xl mx-auto px-3 py-4 sm:py-6">
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {filteredData.map((item, index) => {
            const colors = getTypeColor(item.type);

            if (item.type === 'tasreef') {
              return <VerbCard key={index} item={item} colors={colors} meaning={getMeaning(item)} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />;
            } else {
              return <WordCard key={index} item={item} colors={colors} meaning={getMeaning(item)} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />;
            }
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">📚</div>
            <p className="text-gray-500">No vocabulary found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-8">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-gray-500 text-xs sm:text-sm">
          <p className="arabic-text mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
            والله أعلم بالصواب
          </p>
          <p>And Allah knows best</p>
        </div>
      </footer>
    </div>
  );
};

// Word Card Component (for word and harf types)
const WordCard = ({ item, colors, meaning, language, getLanguageFont, isRtl }) => {
  const hasMujakkar = item.male_singular || item.male_dual || item.male_plural;
  const hasMuannas = item.female_singular || item.female_dual || item.female_plural;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      {/* Arabic Forms */}
      <div className="arabic-text space-y-2" style={{ fontFamily: 'var(--font-arabic)' }}>
        {/* Mujakkar row */}
        {hasMujakkar && (
          <div className="flex items-center gap-3">
            <span className={`${colors.badge} text-white text-xs px-2 py-0.5 rounded`}>مذ</span>
            <div className="flex-1 text-right text-2xl text-gray-800">
              {[item.male_singular, item.male_dual, item.male_plural].filter(Boolean).join(' ، ')}
            </div>
          </div>
        )}

        {/* Muannas row */}
        {hasMuannas && (
          <div className="flex items-center gap-3">
            <span className={`${colors.badge} text-white text-xs px-2 py-0.5 rounded`}>مؤ</span>
            <div className="flex-1 text-right text-2xl text-gray-800">
              {[item.female_singular, item.female_dual, item.female_plural].filter(Boolean).join(' ، ')}
            </div>
          </div>
        )}
      </div>

      {/* Meaning */}
      {meaning && (
        <div
          className={`${colors.text} text-base mt-3 pt-3 border-t border-gray-100`}
          style={{ fontFamily: getLanguageFont(language), direction: isRtl ? 'rtl' : 'ltr' }}
        >
          {meaning}
        </div>
      )}
    </div>
  );
};

// Verb Card Component (for tasreef type)
const VerbCard = ({ item, colors, meaning, language, getLanguageFont, isRtl }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      {/* Conjugations */}
      <div className="arabic-text text-right text-2xl text-gray-800 leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
        {[item.past, item.present, item.masdar, item.imperative, item.prohibition].filter(Boolean).join(' ، ')}
      </div>

      {/* Root & Form */}
      <div className="flex items-center gap-4 mt-3 arabic-text text-lg text-gray-600" style={{ fontFamily: 'var(--font-arabic)' }}>
        {item.root && (
          <span>{item.root}</span>
        )}
        {item.form && (
          <span>{item.form}</span>
        )}
      </div>

      {/* Meaning */}
      {meaning && (
        <div
          className={`${colors.text} text-base mt-3 pt-3 border-t border-gray-100`}
          style={{ fontFamily: getLanguageFont(language), direction: isRtl ? 'rtl' : 'ltr' }}
        >
          {meaning}
        </div>
      )}
    </div>
  );
};

export default QiratVocabulary;
