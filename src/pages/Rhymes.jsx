import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { rhymesData, uiLabels } from '../data/rhymesData';

const Rhymes = () => {
  const [currentPage, setCurrentPage] = useState('list');
  const [selectedPoemId, setSelectedPoemId] = useState(null);
  const [language, setLanguage] = useState('bn'); // bn, en, ur

  const handleSelectPoem = (id) => {
    setSelectedPoemId(id);
    setCurrentPage('detail');
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    setSelectedPoemId(null);
  };

  const selectedPoem = rhymesData.find(p => p.id === selectedPoemId);

  const getLanguageFont = (lang) => {
    switch(lang) {
      case 'bn': return 'var(--font-bengali)';
      case 'ur': return 'var(--font-urdu)';
      default: return 'inherit';
    }
  };

  const isRtl = language === 'ur';

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
              <span>&larr;</span>
              <span>{uiLabels.home}</span>
            </Link>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{uiLabels.selectLanguage}:</span>
              <div className="flex rounded-lg overflow-hidden border border-gray-200">
                {Object.entries(uiLabels.languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(code)}
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      language === code
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
              <span className="arabic-text text-3xl sm:text-4xl text-rose-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                أناشيد عربية
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">{uiLabels.pageTitle}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {currentPage === 'list' ? (
        <PoemList
          poems={rhymesData}
          onSelectPoem={handleSelectPoem}
          language={language}
          getLanguageFont={getLanguageFont}
        />
      ) : (
        <PoemDetail
          poem={selectedPoem}
          onBack={handleBackToList}
          language={language}
          getLanguageFont={getLanguageFont}
          isRtl={isRtl}
        />
      )}

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

// Poem List Component
const PoemList = ({ poems, onSelectPoem, language, getLanguageFont }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-6 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-gray-600">{uiLabels.pageSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {poems.map(poem => (
          <div
            key={poem.id}
            onClick={() => onSelectPoem(poem.id)}
            className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
          >
            <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full mb-3">
              {poem.type[language]}
            </span>
            <h2 className="arabic-text text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
              {poem.title}
            </h2>
            <h3
              className="text-lg font-semibold text-rose-600 mb-3"
              style={{ fontFamily: getLanguageFont(language), direction: language === 'ur' ? 'rtl' : 'ltr' }}
            >
              {poem.titleTranslations[language]}
            </h3>
            <p
              className="text-gray-600 text-sm mb-4"
              style={{ fontFamily: getLanguageFont(language), direction: language === 'ur' ? 'rtl' : 'ltr' }}
            >
              {poem.description[language]}
            </p>
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span
                className="text-gray-500 text-sm"
                style={{ fontFamily: getLanguageFont(language) }}
              >
                {uiLabels.source}: {poem.origin[language]}
              </span>
              <span className="text-rose-500 text-xl">&rarr;</span>
            </div>
          </div>
        ))}
      </div>

      {poems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>{uiLabels.noPoems}</p>
        </div>
      )}
    </main>
  );
};

// Poem Detail Component
const PoemDetail = ({ poem, onBack, language, getLanguageFont, isRtl }) => {
  const [activeTab, setActiveTab] = useState('poem');

  if (!poem) return null;

  const tabs = [
    { id: 'poem', label: uiLabels.tabs.poem, icon: '📜' },
    { id: 'words', label: uiLabels.tabs.words, icon: '📖' },
    { id: 'explanation', label: uiLabels.tabs.explanation, icon: '💡' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      <button
        onClick={onBack}
        className="text-rose-600 hover:text-rose-700 mb-6 flex items-center gap-2"
      >
        <span>&larr;</span>
        <span>{uiLabels.backToList}</span>
      </button>

      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 text-white text-sm px-4 py-1 rounded-full mb-3">
          {poem.type[language]}
        </span>
        <h1 className="arabic-text text-3xl sm:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}>
          {poem.title}
        </h1>
        <h2
          className="text-xl sm:text-2xl font-semibold text-rose-600 mb-2"
          style={{ fontFamily: getLanguageFont(language), direction: isRtl ? 'rtl' : 'ltr' }}
        >
          {poem.titleTranslations[language]}
        </h2>
        <p className="text-gray-500" style={{ fontFamily: getLanguageFont(language) }}>
          {uiLabels.source}: {poem.origin[language]}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200 pb-2 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-rose-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
        {activeTab === 'poem' && (
          <PoemTab poem={poem} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />
        )}
        {activeTab === 'words' && (
          <WordsTab poem={poem} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />
        )}
        {activeTab === 'explanation' && (
          <ExplanationTab poem={poem} language={language} getLanguageFont={getLanguageFont} isRtl={isRtl} />
        )}
      </div>
    </main>
  );
};

// Poem Tab Component
const PoemTab = ({ poem, language, getLanguageFont, isRtl }) => {
  return (
    <div>
      {/* Column Headers */}
      <div className="grid grid-cols-2 gap-4 mb-4 pb-3 border-b-2 border-rose-300">
        <div
          className="text-center font-semibold text-rose-600"
          style={{ fontFamily: getLanguageFont(language) }}
        >
          {uiLabels.headers.translation}
        </div>
        <div className="text-center font-semibold text-rose-600 arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
          {uiLabels.headers.arabic}
        </div>
      </div>

      {/* Lines */}
      <div className="space-y-2">
        {poem.lines.map((line, idx) => (
          <div key={idx} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 last:border-0">
            <div
              className="text-gray-700 leading-relaxed"
              style={{
                fontFamily: getLanguageFont(language),
                direction: isRtl ? 'rtl' : 'ltr',
                textAlign: isRtl ? 'right' : 'left'
              }}
            >
              {line[language]}
            </div>
            <div
              className="arabic-text text-lg text-gray-800 leading-loose"
              style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl', textAlign: 'right' }}
            >
              {line.arabic}
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Embed Section */}
      {poem.videoId && (
        <div className="mt-10">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-red-500">▶</span>
              Listen to the Rhyme
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          {/* Video Container */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl overflow-hidden">
            {/* Decorative glow effect */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* Video wrapper with aspect ratio */}
            <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${poem.videoId}?rel=0&modestbranding=1`}
                title={poem.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Open in YouTube Button */}
          <div className="mt-4 text-center">
            <a
              href={`https://www.youtube.com/watch?v=${poem.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 text-sm transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              <span>{uiLabels.watchOnYoutube}</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Words Tab Component
const WordsTab = ({ poem, language, getLanguageFont, isRtl }) => {
  const [expandedLine, setExpandedLine] = useState(0);

  return (
    <div className="space-y-3">
      {poem.wordAnalysis.map((analysis, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedLine(expandedLine === idx ? -1 : idx)}
            className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
              expandedLine === idx
                ? 'bg-rose-500 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="font-semibold whitespace-nowrap">{uiLabels.lineNumber} {idx + 1}</span>
            <span
              className="flex-1 text-right arabic-text overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
            >
              {analysis.line}
            </span>
            <span className="text-sm">{expandedLine === idx ? '▼' : '▶'}</span>
          </button>

          {expandedLine === idx && (
            <div className="p-4 bg-white">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-3 mb-2 pb-2 border-b border-gray-200 font-semibold text-sm text-gray-600">
                <div className="text-center">{uiLabels.word}</div>
                <div className="text-center">{uiLabels.meaning}</div>
                <div>{uiLabels.grammar}</div>
              </div>

              {/* Table Rows */}
              {analysis.words.map((word, widx) => (
                <div key={widx} className="grid grid-cols-3 gap-3 py-2 border-b border-gray-100 last:border-0 items-center">
                  <div
                    className="text-center arabic-text text-lg text-gray-800"
                    style={{ fontFamily: 'var(--font-arabic)', direction: 'rtl' }}
                  >
                    {word.arabic}
                  </div>
                  <div
                    className="text-center text-rose-600 font-medium"
                    style={{ fontFamily: getLanguageFont(language), direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {word.meaning[language]}
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: getLanguageFont(language), direction: isRtl ? 'rtl' : 'ltr' }}
                  >
                    {word.grammar[language]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Explanation Tab Component
const ExplanationTab = ({ poem, language, getLanguageFont, isRtl }) => {
  const { explanation } = poem;
  const textDirection = isRtl ? 'rtl' : 'ltr';
  const textAlign = isRtl ? 'right' : 'left';

  return (
    <div className="space-y-6" style={{ direction: textDirection }}>
      {/* Explanation Sections */}
      {explanation.sections.map((section, idx) => (
        <div key={idx} className="bg-gray-50 rounded-xl p-5 border-l-4 border-rose-400">
          <h3
            className="text-lg font-bold text-gray-800 mb-3"
            style={{ fontFamily: getLanguageFont(language), textAlign }}
          >
            {section.title[language]}
          </h3>
          <p
            className="text-gray-600 leading-relaxed whitespace-pre-line"
            style={{ fontFamily: getLanguageFont(language), textAlign }}
          >
            {section.content[language]}
          </p>
        </div>
      ))}

      {/* Deep Meaning */}
      <div className="bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl p-6 text-white">
        <h3
          className="text-xl font-bold mb-4"
          style={{ fontFamily: getLanguageFont(language), textAlign }}
        >
          {explanation.deepMeaning.title[language]}
        </h3>
        <div className="space-y-3">
          {explanation.deepMeaning.points.map((point, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">
                {idx + 1}
              </span>
              <div style={{ fontFamily: getLanguageFont(language), textAlign }}>
                <strong>{point.title[language]}</strong>
                <span className="text-white/85"> — {point.content[language]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Connection */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <h3
          className="text-lg font-bold text-amber-700 mb-3"
          style={{ fontFamily: getLanguageFont(language), textAlign }}
        >
          {explanation.culturalConnection.title[language]}
        </h3>
        <p
          className="text-gray-600 leading-relaxed whitespace-pre-line"
          style={{ fontFamily: getLanguageFont(language), textAlign }}
        >
          {explanation.culturalConnection.content[language]}
        </p>
      </div>
    </div>
  );
};

export default Rhymes;
