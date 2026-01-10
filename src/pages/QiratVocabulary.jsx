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
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-3 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-3 py-3 space-y-3">
          {/* Language Selector */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm text-gray-600 font-medium">{uiLabels.selectLanguage}:</span>
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              {Object.entries(uiLabels.languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${
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

          {/* Chapter & Type Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Chapter Filter */}
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">{uiLabels.filters.chapter[language]}</label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">{uiLabels.filters.all[language]}</option>
                {chapters.map(({ book, chapter }) => (
                  <option key={book} value={book}>
                    {chapter}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="sm:w-48">
              <label className="block text-xs text-gray-500 mb-1">{uiLabels.filters.type[language]}</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">{uiLabels.filters.all[language]}</option>
                <option value="word">{uiLabels.types.word[language]}</option>
                <option value="harf">{uiLabels.types.harf[language]}</option>
                <option value="tasreef">{uiLabels.types.tasreef[language]}</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-xs text-gray-500">
            {filteredData.length} {uiLabels.results[language]}
          </div>
        </div>
      </div>

      {/* Vocabulary List */}
      <main className="max-w-4xl mx-auto px-3 py-4 sm:py-6">
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {filteredData.map((item, index) => {
            const colors = getTypeColor(item.type);

            if (item.type === 'tasreef') {
              return <VerbCard key={index} item={item} colors={colors} labels={uiLabels} meaning={getMeaning(item)} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />;
            } else {
              return <WordCard key={index} item={item} colors={colors} labels={uiLabels} meaning={getMeaning(item)} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />;
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
const WordCard = ({ item, colors, labels, meaning, language, getLanguageFont, isRtl }) => {
  const hasMujakkar = item.male_singular || item.male_dual || item.male_plural;
  const hasMuannas = item.female_singular || item.female_dual || item.female_plural;

  const renderForms = (forms) => {
    const validForms = forms.filter(f => f);
    return validForms.map((form, idx) => (
      <span key={idx}>
        {form}
        {idx < validForms.length - 1 && <span className="text-gray-300 mx-1">•</span>}
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex">
        {/* Left color bar */}
        <div className={`w-1 ${colors.badge}`}></div>

        <div className="flex-1 p-3">
          {/* Arabic forms first */}
          <div className="arabic-text text-right space-y-1 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            {/* Mujakkar */}
            {hasMujakkar && (
              <div className="flex items-center gap-2 flex-row-reverse">
                <span className={`text-[10px] ${colors.light} w-10 text-left`}>مذكر</span>
                <span className="text-xl text-gray-800 flex-1 text-right">
                  {renderForms([item.male_singular, item.male_dual, item.male_plural])}
                </span>
              </div>
            )}

            {/* Muannas */}
            {hasMuannas && (
              <div className="flex items-center gap-2 flex-row-reverse">
                <span className={`text-[10px] ${colors.light} w-10 text-left`}>مؤنث</span>
                <span className="text-xl text-gray-800 flex-1 text-right">
                  {renderForms([item.female_singular, item.female_dual, item.female_plural])}
                </span>
              </div>
            )}
          </div>

          {/* Meaning below */}
          <div
            className={`${colors.text} text-sm`}
            style={{
              fontFamily: getLanguageFont(language),
              direction: isRtl ? 'rtl' : 'ltr'
            }}
          >
            {meaning || '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Verb Card Component (for tasreef type)
const VerbCard = ({ item, colors, labels, meaning, language, getLanguageFont, isRtl }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex">
        {/* Left color bar */}
        <div className={`w-1 ${colors.badge}`}></div>

        <div className="flex-1 p-3">
          {/* Verb Conjugations - inline - Arabic first */}
          <div className="arabic-text text-xl text-gray-800 text-right mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            {[item.past, item.present, item.masdar, item.imperative, item.prohibition].filter(Boolean).map((form, idx, arr) => (
              <span key={idx}>
                {form}
                {idx < arr.length - 1 && <span className="text-gray-300 mx-1">•</span>}
              </span>
            ))}
          </div>

          {/* Root & Form row */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            {item.root && (
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                <span className={colors.light}>مادہ:</span> {item.root}
              </span>
            )}
            {item.form && (
              <span>
                <span className={colors.light}>باب:</span> {item.form}
              </span>
            )}
          </div>

          {/* Meaning below */}
          <div
            className={`${colors.text} text-sm`}
            style={{
              fontFamily: getLanguageFont(language),
              direction: isRtl ? 'rtl' : 'ltr'
            }}
          >
            {meaning || '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QiratVocabulary;
