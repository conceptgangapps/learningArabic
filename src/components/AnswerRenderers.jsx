// Answer Renderer Components - Updated for new data structure
// Each component handles a specific answer type with consistent styling

import React from 'react';

// Helper component for bilingual text
export const BilingualText = ({ ar, en, className = "" }) => (
  <div className={className}>
    <p className="arabic-text text-lg sm:text-xl mb-1 text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{ar}</p>
    <p className="text-gray-600 text-xs sm:text-sm">{en}</p>
  </div>
);

// Note answer type
export const NoteRenderer = ({ answers }) => (
  <div className="space-y-3 sm:space-y-4">
    {answers.map((answer, idx) => (
      <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 p-3 sm:p-4 rounded-r-lg">
        <p className="arabic-text text-xl sm:text-2xl text-gray-800 mb-2 leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
          {answer.ar}
        </p>
        <p className="text-gray-600 text-sm sm:text-base">{answer.en}</p>
      </div>
    ))}
  </div>
);

// Islamic months answer type
export const IslamicMonthsRenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.title && (
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-emerald-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
        <p className="text-emerald-600">{answers.title.en}</p>
      </div>
    )}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {answers.months.map((month, idx) => (
        <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{month.number}</span>
            <span className="text-2xl text-emerald-800 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{month.ar}</span>
          </div>
          <p className="text-emerald-700 font-medium">{month.en}</p>
          <p className="text-sm text-emerald-600 mt-1 italic">{month.meaning}</p>
        </div>
      ))}
    </div>
  </div>
);

// Arabic numbers answer type
export const ArabicNumbersRenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.title && (
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-blue-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
        <p className="text-blue-600">{answers.title.en}</p>
      </div>
    )}
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-3 py-2 text-center text-blue-800">#</th>
            <th className="px-3 py-2 text-center text-blue-800">Digit</th>
            <th className="px-3 py-2 text-right text-blue-800">Arabic</th>
            <th className="px-3 py-2 text-left text-blue-800">English</th>
          </tr>
        </thead>
        <tbody>
          {answers.numbers.map((num, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-3 py-2 text-center text-gray-600">{num.numeral}</td>
              <td className="px-3 py-2 text-center text-2xl text-blue-600" style={{ fontFamily: 'var(--font-arabic)' }}>{num.digit}</td>
              <td className="px-3 py-2 text-right text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{num.ar}</td>
              <td className="px-3 py-2 text-left text-gray-600">{num.en}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Demonstrative Pronouns renderer (أَسْمَاءُ الْإِشَارَةِ)
export const DemonstrativePronounsRenderer = ({ answers }) => (
  <div className="space-y-6">
    {answers.title && (
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
        <p className="text-purple-600">{answers.title.en}</p>
      </div>
    )}
    {answers.categories?.map((category, idx) => (
      <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4">
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-purple-800" style={{ fontFamily: 'var(--font-arabic)' }}>{category.type.ar}</h4>
          <p className="text-purple-600 text-sm">{category.type.en}</p>
        </div>
        <div className="space-y-3">
          {category.examples.map((example, exIdx) => (
            <div key={exIdx} className="bg-white rounded-lg p-3 border border-purple-100 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {example.pronoun}
                </span>
                <span className="text-purple-700 text-sm">{example.usage}</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 mb-2">
                <p className="text-xl text-purple-900 text-right leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {example.verse}
                </p>
              </div>
              <p className="text-gray-700 text-sm italic mb-1">{example.translation}</p>
              <p className="text-purple-600 text-xs" style={{ fontFamily: 'var(--font-arabic)' }}>{example.surah}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Dual types answer type (الْمُثَنَّى)
export const DualTypesRenderer = ({ answers }) => {
  const renderCategory = (category, colorClass) => {
    if (!category) return null;
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className={`${colorClass} text-white p-4`}>
          <h4 className="text-xl font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{category.title.ar}</h4>
          <p className="text-sm opacity-90">{category.title.en}</p>
        </div>
        <div className="divide-y divide-gray-100">
          {category.examples.map((ex, idx) => (
            <div key={idx} className="p-4 hover:bg-gray-50">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                <span className="text-gray-600">({ex.en})</span>
              </div>
              {ex.verse && ex.verse !== "—" && (
                <div className="bg-emerald-50 rounded p-2 mb-2">
                  <p className="text-sm text-emerald-800" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.verse}</p>
                  <p className="text-xs text-emerald-600">{ex.surah}</p>
                </div>
              )}
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.sentence}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {answers.introduction && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-lg text-blue-800 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.introduction.ar}</p>
          <p className="text-sm text-blue-600">{answers.introduction.en}</p>
        </div>
      )}
      {renderCategory(answers.haqiqi, 'bg-violet-600')}
      {renderCategory(answers.soori, 'bg-teal-600')}
      {renderCategory(answers.ma3nawi, 'bg-amber-600')}
    </div>
  );
};

// Family vocabulary answer type
export const FamilyVocabRenderer = ({ answers }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
    {answers.map((item, idx) => (
      <div key={idx} className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
        <p className="text-2xl sm:text-3xl text-rose-800 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</p>
        <p className="text-sm text-rose-600">{item.en}</p>
      </div>
    ))}
  </div>
);

// Simple table answer type (ar/en pairs)
export const TableRenderer = ({ answers }) => (
  <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
    <table className="w-full border-collapse min-w-[300px]">
      <thead>
        <tr className="bg-emerald-100">
          <th className="border border-emerald-300 p-1.5 sm:p-2 text-center w-8 sm:w-12 text-xs sm:text-sm">#</th>
          <th className="border border-emerald-300 p-1.5 sm:p-2 text-right text-sm sm:text-base">الْعَرَبِيَّةُ</th>
          <th className="border border-emerald-300 p-1.5 sm:p-2 text-left text-xs sm:text-sm">English</th>
        </tr>
      </thead>
      <tbody>
        {answers.map((a, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="border border-gray-300 p-1.5 sm:p-2 text-center w-8 sm:w-12 text-xs sm:text-sm">{i + 1}</td>
            <td className="border border-gray-300 p-2 sm:p-3 text-right font-arabic text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>{a.ar}</td>
            <td className="border border-gray-300 p-1.5 sm:p-2 text-left text-gray-700 text-xs sm:text-sm">{a.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// 3-column table answer type
export const Table3ColRenderer = ({ answers, headers }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-teal-100">
          <th className="border border-teal-300 p-2 text-center w-12">#</th>
          {headers && headers.map((h, i) => (
            <th key={i} className="border border-teal-300 p-2 text-center" style={{ fontFamily: i === 0 ? 'var(--font-arabic)' : 'inherit' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {answers.map((a, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="border border-gray-300 p-2 text-center w-12">{i + 1}</td>
            <td className="border border-gray-300 p-3 text-right font-arabic text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>{a.ar}</td>
            <td className="border border-gray-300 p-2 text-center" style={{ fontFamily: 'var(--font-arabic)' }}>{a.sign}</td>
            <td className="border border-gray-300 p-2 text-left text-gray-700">{a.en}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Numbers answer type (with masculine/feminine forms)
export const NumbersRenderer = ({ answers }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-blue-100">
          <th className="border border-blue-300 p-2 text-center">الرَّقْمُ</th>
          <th className="border border-blue-300 p-2 text-right">الْمُذَكَّرُ</th>
          <th className="border border-blue-300 p-2 text-right">الْمُؤَنَّثُ</th>
          <th className="border border-blue-300 p-2 text-left">English</th>
        </tr>
      </thead>
      <tbody>
        {answers.map((item, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="border border-gray-300 p-2 text-center text-2xl text-blue-600" style={{ fontFamily: 'var(--font-arabic)' }}>
              {item.num || item.number}
            </td>
            <td className="border border-gray-300 p-2 text-right text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>
              {item.masc || item.arabic}
            </td>
            <td className="border border-gray-300 p-2 text-right text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>
              {item.fem || item.arabic}
            </td>
            <td className="border border-gray-300 p-2 text-left text-gray-700">
              {item.en || item.english}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Q&A answer type (handles both old and new format)
export const QARenderer = ({ answers }) => (
  <div className="space-y-3 sm:space-y-4">
    {answers.map((qa, idx) => (
      <div key={idx} className="border rounded-lg overflow-hidden">
        <div className="bg-blue-50 p-2.5 sm:p-3 border-b">
          <div className="flex justify-between items-start gap-2">
            <span className="bg-blue-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm flex-shrink-0">س{idx + 1}</span>
            <p className="text-base sm:text-lg font-arabic text-right flex-1" style={{ fontFamily: 'var(--font-arabic)' }}>
              {qa.q_ar || qa.question?.ar}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 text-left mt-1">{qa.q_en || qa.question?.en}</p>
        </div>
        <div className="bg-green-50 p-2.5 sm:p-3">
          <div className="flex justify-between items-start gap-2">
            <span className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm flex-shrink-0">ج</span>
            <p className="text-base sm:text-lg font-arabic text-right flex-1" style={{ fontFamily: 'var(--font-arabic)' }}>
              {qa.a_ar || qa.answer?.ar}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 text-left mt-1">{qa.a_en || qa.answer?.en}</p>
        </div>
      </div>
    ))}
  </div>
);

// Gender list answer type (handles both formats)
export const GenderListRenderer = ({ answers }) => {
  // Check if new format (object with masculine/feminine arrays)
  if (answers.masculine && answers.feminine) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
          <h4 className="font-bold text-blue-800 mb-2 sm:mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-arabic)' }}>الْمُذَكَّرُ (Masculine)</h4>
          <div className="space-y-2">
            {answers.masculine.map((item, idx) => (
              <div key={idx} className="bg-white p-2 sm:p-3 rounded shadow-sm">
                <span className="text-base sm:text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
                <span className="text-gray-500 ml-2 text-xs sm:text-sm">({item.en})</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-pink-50 rounded-lg p-3 sm:p-4">
          <h4 className="font-bold text-pink-800 mb-2 sm:mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-arabic)' }}>الْمُؤَنَّثُ (Feminine)</h4>
          <div className="space-y-2">
            {answers.feminine.map((item, idx) => (
              <div key={idx} className="bg-white p-2 sm:p-3 rounded shadow-sm">
                <span className="text-base sm:text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
                <span className="text-gray-500 ml-2 text-xs sm:text-sm">({item.en})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Old format (array of objects with masculine/feminine properties)
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-pink-100">
          <tr>
            <th className="px-4 py-3 text-left text-pink-800 font-medium">Masculine (مذكر)</th>
            <th className="px-4 py-3 text-left text-pink-800 font-medium">Feminine (مؤنث)</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3">
                <span className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.masculine.ar}</span>
                <span className="text-gray-500 ml-2">({item.masculine.en})</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.feminine.ar}</span>
                <span className="text-gray-500 ml-2">({item.feminine.en})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Pronoun groups answer type (handles both formats)
export const PronounGroupsRenderer = ({ answers }) => {
  // Check if new format (object with secondPerson/thirdPerson)
  if (answers.secondPerson || answers.thirdPerson) {
    return (
      <div className="space-y-6">
        {answers.secondPerson && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-100 p-3 border-b border-gray-200">
              <h4 className="font-bold text-purple-800">
                <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>ضَمَائِرُ الْمُخَاطَبِ</span>
                <span className="mx-2">-</span>
                <span>Second Person Pronouns</span>
              </h4>
            </div>
            <div className="p-4 space-y-2">
              {answers.secondPerson.map((item, idx) => (
                <div key={idx} className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</p>
                  <p className="text-sm text-gray-600">{item.en}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {answers.thirdPerson && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-indigo-100 p-3 border-b border-gray-200">
              <h4 className="font-bold text-indigo-800">
                <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>ضَمَائِرُ الْغَائِبِ</span>
                <span className="mx-2">-</span>
                <span>Third Person Pronouns</span>
              </h4>
            </div>
            <div className="p-4 space-y-2">
              {answers.thirdPerson.map((item, idx) => (
                <div key={idx} className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</p>
                  <p className="text-sm text-gray-600">{item.en}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Old format (array with category and pronouns)
  return (
    <div className="space-y-6">
      {answers.map((group, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-purple-100 p-3 border-b border-gray-200">
            <h4 className="font-bold text-purple-800">
              <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>{group.category.ar}</span>
              <span className="mx-2">-</span>
              <span>{group.category.en}</span>
            </h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {group.pronouns.map((pronoun, pIdx) => (
                <div key={pIdx} className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-xl text-purple-700 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {pronoun.ar}
                  </div>
                  <div className="text-sm text-gray-600">{pronoun.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Number categories answer type (singular/dual/plural)
export const NumberCategoriesRenderer = ({ answers }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
    {answers.singular && (
      <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
        <h4 className="font-bold text-blue-800 mb-2 sm:mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-arabic)' }}>الْمُفْرَدُ (Singular)</h4>
        <div className="space-y-2">
          {answers.singular.map((item, idx) => (
            <div key={idx} className="bg-white p-2 sm:p-3 rounded shadow-sm text-center">
              <span className="text-lg sm:text-xl text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
              <span className="text-gray-500 block text-xs sm:text-sm">({item.en})</span>
            </div>
          ))}
        </div>
      </div>
    )}
    {answers.dual && (
      <div className="bg-green-50 rounded-lg p-3 sm:p-4">
        <h4 className="font-bold text-green-800 mb-2 sm:mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-arabic)' }}>الْمُثَنَّى (Dual)</h4>
        <div className="space-y-2">
          {answers.dual.map((item, idx) => (
            <div key={idx} className="bg-white p-2 sm:p-3 rounded shadow-sm text-center">
              <span className="text-lg sm:text-xl text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
              <span className="text-gray-500 block text-xs sm:text-sm">({item.en})</span>
            </div>
          ))}
        </div>
      </div>
    )}
    {answers.plural && (
      <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
        <h4 className="font-bold text-purple-800 mb-2 sm:mb-3 text-center text-sm sm:text-base" style={{ fontFamily: 'var(--font-arabic)' }}>الْجَمْعُ (Plural)</h4>
        <div className="space-y-2">
          {answers.plural.map((item, idx) => (
            <div key={idx} className="bg-white p-2 sm:p-3 rounded shadow-sm text-center">
              <span className="text-lg sm:text-xl text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
              <span className="text-gray-500 block text-xs sm:text-sm">({item.en})</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Present verbs answer type (Quranic verses format)
export const PresentVerbsRenderer = ({ answers }) => {
  // Check if array format (Quranic verses)
  if (Array.isArray(answers)) {
    return (
      <div className="space-y-4">
        {answers.map((verb, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-teal-100 p-3 flex items-center justify-between">
              <div>
                <span className="text-2xl text-teal-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.ar}</span>
                <span className="text-gray-600 ml-2">({verb.en})</span>
              </div>
              {verb.root && (
                <span className="text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded" style={{ fontFamily: 'var(--font-arabic)' }}>
                  الْجَذْرُ: {verb.root}
                </span>
              )}
            </div>
            {verb.verse && (
              <div className="p-3 bg-gray-50">
                <p className="text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.verse}</p>
                {verb.surah && <p className="text-sm text-gray-500">{verb.surah}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Old format (verb table with conjugations)
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-teal-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-teal-800">
          <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb?.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.verb?.en}</span>
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Pronoun</th>
              <th className="px-4 py-3 text-right text-gray-600 font-medium">Form</th>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {answers.conjugations?.map((conj, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.pronoun}</td>
                <td className="px-4 py-3 text-right text-xl text-teal-700" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.form}</td>
                <td className="px-4 py-3 text-gray-600">{conj.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Imperative verbs answer type (Quranic format)
export const ImperativeVerbsRenderer = ({ answers }) => {
  // Check if array format (Quranic verses)
  if (Array.isArray(answers)) {
    return (
      <div className="space-y-4">
        {answers.map((verb, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-100 p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl text-orange-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.ar}</span>
                  <span className="text-gray-600 ml-2">({verb.en})</span>
                </div>
                {verb.root && (
                  <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded" style={{ fontFamily: 'var(--font-arabic)' }}>
                    الْجَذْرُ: {verb.root}
                  </span>
                )}
              </div>
              {verb.present && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">المضارع:</span>{' '}
                  <span style={{ fontFamily: 'var(--font-arabic)' }}>{verb.present}</span>
                </p>
              )}
            </div>
            {verb.verse && verb.verse !== "—" && (
              <div className="p-3 bg-gray-50">
                <p className="text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.verse}</p>
                {verb.surah && verb.surah !== "—" && <p className="text-sm text-gray-500">{verb.surah}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Old format with verb object and conjugations
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-orange-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-orange-800">
          <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb?.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.verb?.en}</span>
        </h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {answers.conjugations?.map((conj, idx) => (
            <div key={idx} className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">{conj.pronoun}</div>
              <div className="text-2xl text-orange-700 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.form}</div>
              <div className="text-sm text-gray-600">{conj.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Essay answer type (handles both formats)
export const EssayRenderer = ({ answers, title }) => {
  // New format: answers is array of paragraphs
  if (Array.isArray(answers)) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {title && (
          <div className="bg-indigo-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-indigo-800">
              <span className="arabic-text text-xl" style={{ fontFamily: 'var(--font-arabic)' }}>{title.ar}</span>
              <span className="mx-2">-</span>
              <span>{title.en}</span>
            </h4>
          </div>
        )}
        <div className="p-6 space-y-4">
          {answers.map((para, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
              <p className="arabic-text text-xl text-gray-800 leading-relaxed mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                {para.ar}
              </p>
              <p className="text-gray-600 italic">{para.en}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Old format: answers has title and paragraphs
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-indigo-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-indigo-800">
          <span className="arabic-text text-xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title?.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.title?.en}</span>
        </h4>
      </div>
      <div className="p-6 space-y-6">
        {answers.paragraphs?.map((para, idx) => (
          <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
            <p className="arabic-text text-xl text-gray-800 leading-relaxed mb-3" style={{ fontFamily: 'var(--font-arabic)' }}>
              {para.ar}
            </p>
            <p className="text-gray-600 italic">{para.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hamza table answer type (handles both formats)
export const HamzaTableRenderer = ({ answers }) => {
  // New format with hamzaWasl and hamzaQat arrays
  if (answers.hamzaWasl || answers.hamzaQat) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {answers.hamzaWasl && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-emerald-100 p-4 border-b">
              <h4 className="font-bold text-emerald-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                هَمْزَةُ الْوَصْلِ (Hamzat al-Wasl)
              </h4>
            </div>
            <div className="p-4 space-y-3">
              {answers.hamzaWasl.map((item, idx) => (
                <div key={idx} className="bg-emerald-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
                    <span className="text-gray-600">({item.en})</span>
                  </div>
                  {item.context && (
                    <p className="text-sm text-gray-600 bg-white p-2 rounded" style={{ fontFamily: 'var(--font-arabic)' }}>{item.context}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {answers.hamzaQat && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-rose-100 p-4 border-b">
              <h4 className="font-bold text-rose-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                هَمْزَةُ الْقَطْعِ (Hamzat al-Qat')
              </h4>
            </div>
            <div className="p-4 space-y-3">
              {answers.hamzaQat.map((item, idx) => (
                <div key={idx} className="bg-rose-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl text-rose-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.ar}</span>
                    <span className="text-gray-600">({item.en})</span>
                  </div>
                  {item.context && (
                    <p className="text-sm text-gray-600 bg-white p-2 rounded" style={{ fontFamily: 'var(--font-arabic)' }}>{item.context}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Old format with title, explanation, and verbs
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-fuchsia-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-fuchsia-800">
          <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title?.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.title?.en}</span>
        </h4>
        {answers.explanation && (
          <p className="text-fuchsia-700 mt-1">
            <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.explanation.ar}</span>
            <span className="text-gray-500 ml-2">({answers.explanation.en})</span>
          </p>
        )}
      </div>
      <div className="p-4 space-y-4">
        {answers.verbs?.map((verb, idx) => (
          <div key={idx} className="bg-fuchsia-50 p-4 rounded-lg">
            <div className="font-bold text-fuchsia-800 mb-3">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.type.ar}</span>
              <span className="mx-2">-</span>
              <span>{verb.type.en}</span>
            </div>
            <div className="mb-3">
              <span className="text-2xl text-fuchsia-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.example.ar}</span>
              <span className="text-gray-500 ml-2">({verb.example.en})</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-2 rounded">
                <div className="text-xs text-gray-500 mb-1">Past</div>
                <div className="text-lg text-fuchsia-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.conjugation.past}</div>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="text-xs text-gray-500 mb-1">Present</div>
                <div className="text-lg text-fuchsia-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.conjugation.present}</div>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="text-xs text-gray-500 mb-1">Imperative</div>
                <div className="text-lg text-fuchsia-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.conjugation.imperative}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sound and weak verbs answer type (handles complex structure)
export const SoundWeakVerbsRenderer = ({ answers }) => {
  // New format with soundVerbs containing categories
  if (answers.soundVerbs?.categories) {
    return (
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-green-100 p-4 border-b">
            <h4 className="text-lg font-bold text-green-800">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.soundVerbs.title?.ar}</span>
              <span className="mx-2">-</span>
              <span>{answers.soundVerbs.title?.en}</span>
            </h4>
          </div>
          <div className="p-4 space-y-6">
            {answers.soundVerbs.categories.map((category, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">
                  <span style={{ fontFamily: 'var(--font-arabic)' }}>{category.type.ar}</span>
                  <span className="mx-2">-</span>
                  <span>{category.type.en}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  <span style={{ fontFamily: 'var(--font-arabic)' }}>{category.description.ar}</span>
                  <br />
                  <span className="text-gray-500">{category.description.en}</span>
                </p>
                <div className="space-y-2">
                  {category.verbs.map((verb, vIdx) => (
                    <div key={vIdx} className="bg-white p-3 rounded border">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.ar}</span>
                        <span className="text-gray-600">({verb.en})</span>
                      </div>
                      {verb.verse && (
                        <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.verse}</p>
                      )}
                      {verb.surah && (
                        <p className="text-xs text-gray-400">{verb.surah}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Old format with soundVerbs and weakVerbs
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {answers.soundVerbs && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-green-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-green-800">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.soundVerbs.title?.ar}</span>
              <span className="mx-2">-</span>
              <span>{answers.soundVerbs.title?.en}</span>
            </h4>
          </div>
          <div className="p-4">
            {answers.soundVerbs.explanation && (
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.soundVerbs.explanation.ar}</p>
                <p className="text-gray-600 mt-1">{answers.soundVerbs.explanation.en}</p>
              </div>
            )}
            <div className="space-y-2">
              {answers.soundVerbs.examples?.map((ex, idx) => (
                <div key={idx} className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-xl text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                  <span className="text-gray-500 ml-2">({ex.en})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {answers.weakVerbs && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-red-800">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.weakVerbs.title?.ar}</span>
              <span className="mx-2">-</span>
              <span>{answers.weakVerbs.title?.en}</span>
            </h4>
          </div>
          <div className="p-4">
            {answers.weakVerbs.explanation && (
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.weakVerbs.explanation.ar}</p>
                <p className="text-gray-600 mt-1">{answers.weakVerbs.explanation.en}</p>
              </div>
            )}
            <div className="space-y-2">
              {answers.weakVerbs.examples?.map((ex, idx) => (
                <div key={idx} className="bg-red-50 px-4 py-2 rounded-lg">
                  <span className="text-xl text-red-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                  <span className="text-gray-500 ml-2">({ex.en})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Verb table answer type
export const VerbTableRenderer = ({ answers }) => {
  // Handle array format (list of verbs with past/present/imperative)
  if (Array.isArray(answers)) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-teal-100">
            <tr>
              <th className="px-3 py-2 text-right text-teal-800" style={{ fontFamily: 'var(--font-arabic)' }}>الْفِعْلُ</th>
              <th className="px-3 py-2 text-right text-teal-800" style={{ fontFamily: 'var(--font-arabic)' }}>الْمَاضِي</th>
              <th className="px-3 py-2 text-right text-teal-800" style={{ fontFamily: 'var(--font-arabic)' }}>الْمُضَارِعُ</th>
              <th className="px-3 py-2 text-right text-teal-800" style={{ fontFamily: 'var(--font-arabic)' }}>الْأَمْرُ</th>
              <th className="px-3 py-2 text-left text-teal-800">Meaning</th>
              <th className="px-3 py-2 text-right text-teal-800" style={{ fontFamily: 'var(--font-arabic)' }}>الْآيَةُ</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((verb, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-3 py-2 text-right text-lg font-bold text-teal-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.ar}</td>
                <td className="px-3 py-2 text-right text-teal-600" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.past}</td>
                <td className="px-3 py-2 text-right text-teal-600" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.present}</td>
                <td className="px-3 py-2 text-right text-teal-600" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.imperative}</td>
                <td className="px-3 py-2 text-left text-gray-600">{verb.en}</td>
                <td className="px-3 py-2 text-right">
                  {verb.verse && (
                    <div>
                      <p className="text-gray-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.verse}</p>
                      <p className="text-xs text-teal-600" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.surah}</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Original format with verb and conjugations
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-teal-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-teal-800">
          <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb?.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.verb?.en}</span>
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Pronoun</th>
              <th className="px-4 py-3 text-right text-gray-600 font-medium" style={{ fontFamily: 'var(--font-arabic)' }}>Form</th>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {answers.conjugations?.map((conj, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.pronoun}</td>
                <td className="px-4 py-3 text-right text-xl text-teal-700" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.form}</td>
                <td className="px-4 py-3 text-gray-600">{conj.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Daily life sentences answer type
export const DailyLifeSentencesRenderer = ({ answers }) => (
  <div className="space-y-2 sm:space-y-3">
    {answers.map((sentence, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-2 sm:gap-4">
          <div className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">
            {idx + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg sm:text-xl text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>{sentence.ar}</p>
            <p className="text-gray-600 text-xs sm:text-base">{sentence.en}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Ordinal numbers answer type (supports both formats)
export const OrdinalNumbersRenderer = ({ answers }) => {
  if (!Array.isArray(answers)) return null;

  // Check if using new format (num, masc_ord, fem_ord, masc_example, fem_example)
  const isNewFormat = answers[0] && 'num' in answers[0];

  if (isNewFormat) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-2 py-2 text-center text-blue-800 font-medium">#</th>
              <th className="px-2 py-2 text-left text-blue-800 font-medium">Ordinal (M)</th>
              <th className="px-2 py-2 text-left text-blue-800 font-medium">Example (M)</th>
              <th className="px-2 py-2 text-left text-blue-800 font-medium">Ordinal (F)</th>
              <th className="px-2 py-2 text-left text-blue-800 font-medium">Example (F)</th>
              <th className="px-2 py-2 text-left text-blue-800 font-medium">English</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-2 py-2 text-center font-bold text-blue-600" style={{ fontFamily: 'var(--font-arabic)' }}>{item.num}</td>
                <td className="px-2 py-2">
                  <span className="text-base text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.masc_ord}</span>
                </td>
                <td className="px-2 py-2">
                  <span className="text-base text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.masc_example}</span>
                </td>
                <td className="px-2 py-2">
                  <span className="text-base text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.fem_ord}</span>
                </td>
                <td className="px-2 py-2">
                  <span className="text-base text-pink-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.fem_example}</span>
                </td>
                <td className="px-2 py-2 text-gray-600">{item.en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Legacy format
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-3 text-center text-blue-800 font-medium">#</th>
            <th className="px-4 py-3 text-left text-blue-800 font-medium">Masculine (مذكر)</th>
            <th className="px-4 py-3 text-left text-blue-800 font-medium">Feminine (مؤنث)</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 text-center font-bold text-blue-600">{item.number}</td>
              <td className="px-4 py-3">
                <span className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.masculine?.ar}</span>
                <span className="text-gray-500 ml-2">({item.masculine?.en})</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.feminine?.ar}</span>
                <span className="text-gray-500 ml-2">({item.feminine?.en})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Interrogative sentences answer type (supports both array and categories-based structure)
export const InterrogativeSentencesRenderer = ({ answers }) => {
  // Handle categories-based structure (متى/ماذا/أين with questions)
  if (answers && answers.categories) {
    return (
      <div className="space-y-6">
        {answers.title && (
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-cyan-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
            <p className="text-cyan-600">{answers.title.en}</p>
          </div>
        )}
        {answers.categories.map((category, catIdx) => (
          <div key={catIdx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-cyan-600 text-white p-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{category.particle.ar}</span>
                <span className="text-lg">{category.particle.en}</span>
              </div>
              <p className="text-sm mt-1 opacity-90" style={{ fontFamily: 'var(--font-arabic)' }}>{category.pattern.ar}</p>
              <p className="text-xs opacity-80">{category.pattern.en}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {category.questions.map((q, qIdx) => (
                <div key={qIdx} className="p-3 hover:bg-gray-50">
                  <div className="mb-2">
                    <p className="text-lg text-cyan-800" style={{ fontFamily: 'var(--font-arabic)' }}>{q.q_ar}</p>
                    <p className="text-sm text-gray-600">{q.q_en}</p>
                  </div>
                  <div className="bg-emerald-50 rounded p-2 mt-2">
                    <p className="text-sm text-gray-500 mb-1">Answer:</p>
                    <p className="text-base text-emerald-800" style={{ fontFamily: 'var(--font-arabic)' }}>{q.a_ar}</p>
                    <p className="text-sm text-emerald-600">{q.a_en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Handle legacy array-based structure
  if (!Array.isArray(answers)) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {answers.map((item, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-cyan-100 p-2.5 sm:p-3 border-b border-gray-200">
            <span className="text-lg sm:text-xl text-cyan-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.question.ar}</span>
            <span className="mx-1 sm:mx-2 text-gray-400">-</span>
            <span className="text-cyan-700 text-sm sm:text-base">{item.question.en}</span>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Example:</p>
            <p className="text-base sm:text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.example.ar}</p>
            <p className="text-gray-600 text-xs sm:text-base">{item.example.en}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Grammar review answer type
export const GrammarReviewRenderer = ({ answers }) => {
  // Helper function to render a single section
  const renderSection = (topic, idx) => (
    <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-violet-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-violet-800">
          <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{topic.topic?.ar || topic.title?.ar}</span>
          <span className="mx-2">-</span>
          <span>{topic.topic?.en || topic.title?.en}</span>
        </h4>
      </div>
      <div className="p-4">
        {topic.explanation && (
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{topic.explanation.ar}</p>
            <p className="text-gray-600 mt-1">{topic.explanation.en}</p>
          </div>
        )}
        {topic.examples && (
          <div className="flex flex-wrap gap-3">
            {topic.examples.map((ex, exIdx) => (
              <div key={exIdx} className="bg-violet-50 px-4 py-2 rounded-lg">
                <span className="text-lg text-violet-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                <span className="text-gray-500 ml-2">({ex.en})</span>
              </div>
            ))}
          </div>
        )}
        {topic.content && (
          <div className="space-y-3">
            {topic.content.map((item, cIdx) => (
              <div key={cIdx} className="bg-violet-50 p-3 rounded-lg">
                <div className="font-medium text-violet-800 mb-1">
                  <span style={{ fontFamily: 'var(--font-arabic)' }}>{item.term?.ar}</span>
                  <span className="mx-2">-</span>
                  <span>{item.term?.en}</span>
                </div>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{item.definition?.ar}</p>
                <p className="text-gray-500 text-sm">{item.definition?.en}</p>
                {item.example && (
                  <div className="mt-2 p-2 bg-white rounded">
                    <p className="text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{item.example.ar}</p>
                    <p className="text-xs text-gray-500">{item.example.en}</p>
                    {item.example.surah && <p className="text-xs text-violet-500">{item.example.surah}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Check if it's an array format
  if (Array.isArray(answers)) {
    return (
      <div className="space-y-6">
        {answers.map((topic, idx) => renderSection(topic, idx))}
      </div>
    );
  }

  // Object format with sections array
  if (answers.sections && Array.isArray(answers.sections)) {
    return (
      <div className="space-y-6">
        {answers.sections.map((topic, idx) => renderSection(topic, idx))}
      </div>
    );
  }

  // Fallback for other object formats
  return (
    <div className="space-y-6">
      {Object.entries(answers).map(([key, section], idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-violet-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-violet-800">{key}</h4>
          </div>
          <div className="p-4">
            <pre className="text-sm overflow-auto">{JSON.stringify(section, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

// Weak verb types answer type (supports both formats)
export const WeakVerbTypesRenderer = ({ answers }) => {
  // Handle new format with title and categories
  if (answers && answers.categories) {
    return (
      <div className="space-y-6">
        {answers.title && (
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-rose-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
            <p className="text-rose-600">{answers.title.en}</p>
          </div>
        )}
        {answers.categories.map((category, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-rose-600 text-white p-4">
              <h4 className="text-lg font-bold">
                <span style={{ fontFamily: 'var(--font-arabic)' }}>{category.type.ar}</span>
                <span className="mx-2">-</span>
                <span>{category.type.en}</span>
              </h4>
              <p className="text-sm mt-1 opacity-90" style={{ fontFamily: 'var(--font-arabic)' }}>{category.description.ar}</p>
              <p className="text-xs opacity-80">{category.description.en}</p>
              {category.marker && (
                <div className="mt-2 bg-rose-700 px-3 py-1 rounded inline-block">
                  <span className="text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{category.marker.ar}</span>
                  <span className="mx-1">-</span>
                  <span className="text-xs">{category.marker.en}</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-right">Past</th>
                      <th className="px-3 py-2 text-right">Present</th>
                      <th className="px-3 py-2 text-left">English</th>
                      <th className="px-3 py-2 text-center">Root</th>
                      <th className="px-3 py-2 text-right">Quranic Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.verbs.map((verb, vIdx) => (
                      <tr key={vIdx} className={vIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-2 text-lg text-rose-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.ar}</td>
                        <td className="px-3 py-2 text-lg text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.present}</td>
                        <td className="px-3 py-2 text-gray-700">{verb.en}</td>
                        <td className="px-3 py-2 text-center text-gray-500" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.root}</td>
                        <td className="px-3 py-2">
                          <p className="text-sm text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{verb.verse}</p>
                          <p className="text-xs text-gray-500">{verb.surah}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Handle legacy array format
  if (!Array.isArray(answers)) return null;

  return (
    <div className="space-y-6">
      {answers.map((type, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-rose-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-rose-800">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{type.type?.ar}</span>
              <span className="mx-2">-</span>
              <span>{type.type?.en}</span>
            </h4>
          </div>
          <div className="p-4">
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{type.explanation?.ar}</p>
              <p className="text-gray-600 mt-1">{type.explanation?.en}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {type.examples?.map((ex, exIdx) => (
                <div key={exIdx} className="bg-rose-50 px-4 py-2 rounded-lg">
                  <span className="text-xl text-rose-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                  <span className="text-gray-500 ml-2">({ex.en})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Mithal Wawi verbs answer type
export const MithalWawiVerbsRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-amber-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-amber-800">
        <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb?.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.verb?.en}</span>
      </h4>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-gray-600 font-medium">Tense</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium">Pronoun</th>
            <th className="px-4 py-3 text-right text-gray-600 font-medium">Form</th>
            <th className="px-4 py-3 text-left text-gray-600 font-medium">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {answers.conjugations?.map((conj, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 text-gray-600">{conj.tense}</td>
              <td className="px-4 py-3 text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.pronoun}</td>
              <td className="px-4 py-3 text-right text-xl text-amber-700" style={{ fontFamily: 'var(--font-arabic)' }}>{conj.form}</td>
              <td className="px-4 py-3 text-gray-600">{conj.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Speaking practice answer type
export const SpeakingPracticeRenderer = ({ answers }) => {
  // New format: object with sections containing title and sentences
  if (answers.sections) {
    return (
      <div className="space-y-6">
        {answers.sections.map((section, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-sky-100 p-3 border-b border-gray-200">
              <h4 className="text-lg font-bold text-sky-800 text-center">
                <span style={{ fontFamily: 'var(--font-arabic)' }}>{section.title.ar}</span>
                <span className="text-gray-600 font-normal text-sm mx-2">- {section.title.en}</span>
              </h4>
            </div>
            <div className="p-4 space-y-3">
              {section.sentences?.map((sentence, sIdx) => (
                <div key={sIdx} className="bg-sky-50 p-3 rounded-lg border-r-4 border-sky-400">
                  <p className="text-lg text-gray-800 text-right leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>{sentence.ar}</p>
                  <p className="text-gray-600 text-sm text-left mt-1">{sentence.en}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Old format: array with situation and dialogues
  return (
    <div className="space-y-6">
      {answers.map((practice, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-sky-100 p-4 border-b border-gray-200">
            <h4 className="text-lg font-bold text-sky-800">
              <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{practice.situation.ar}</span>
              <span className="mx-2">-</span>
              <span>{practice.situation.en}</span>
            </h4>
          </div>
          <div className="p-4 space-y-3">
            {practice.dialogues.map((dialogue, dIdx) => (
              <div key={dIdx} className={`p-3 rounded-lg ${dialogue.speaker === 'أ' ? 'bg-sky-50 ml-0 mr-12' : 'bg-gray-50 mr-0 ml-12'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${dialogue.speaker === 'أ' ? 'bg-sky-500' : 'bg-gray-500'}`}>
                    {dialogue.speaker}
                  </span>
                  <span className="text-sm text-gray-500">Speaker {dialogue.speaker}</span>
                </div>
                <p className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{dialogue.ar}</p>
                <p className="text-gray-600 text-sm">{dialogue.en}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Writing paragraphs answer type
export const WritingParagraphsRenderer = ({ answers }) => {
  // Handle both array format and object with paragraphs array
  const paragraphs = Array.isArray(answers) ? answers : (answers.paragraphs || []);

  return (
    <div className="space-y-6">
      {paragraphs.map((para, idx) => {
        // Support both field naming conventions: topic/paragraph and title/content
        const title = para.topic || para.title;
        const content = para.paragraph || para.content;

        return (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-lime-100 p-4 border-b border-gray-200">
              <h4 className="text-lg font-bold text-lime-800">
                <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{title?.ar}</span>
                <span className="mx-2">-</span>
                <span>{title?.en}</span>
              </h4>
            </div>
            <div className="p-6">
              <p className="arabic-text text-xl text-gray-800 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
                {content?.ar}
              </p>
              <p className="text-gray-600 italic border-t border-gray-100 pt-4">
                {content?.en}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Sound verbs extraction answer type (Quranic sound verbs)
export const SoundVerbsExtractionRenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.map((v, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-indigo-100 p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm">{i + 1}</span>
            <div className="text-center flex-1">
              <span className="text-2xl font-bold text-indigo-800" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verb}</span>
              <span className="mx-2 text-gray-400">-</span>
              <span className="text-gray-700">{v.en}</span>
            </div>
            {v.root && (
              <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{v.root}</span>
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="text-xs text-gray-500 mb-1">الْمَاضِي</div>
              <div className="text-xl text-blue-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verb}</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="text-xs text-gray-500 mb-1">الْمُضَارِعُ</div>
              <div className="text-xl text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.present}</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-xs text-gray-500 mb-1">الْأَمْرُ</div>
              <div className="text-xl text-orange-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.imperative}</div>
            </div>
          </div>
          {v.verse && (
            <div className="bg-gray-50 p-3 rounded-lg border-r-4 border-indigo-400">
              <p className="text-lg text-right leading-relaxed text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verse}</p>
              {v.surah && <p className="text-sm text-gray-500 text-left mt-2">{v.surah}</p>}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Hamzated verbs extraction answer type (verbs with hamza categorized)
export const HamzatedVerbsExtractionRenderer = ({ answers }) => {
  const categoryColors = [
    { header: "bg-blue-100", headerText: "text-blue-800", light: "bg-blue-50", border: "border-blue-400", badge: "bg-blue-500" },
    { header: "bg-purple-100", headerText: "text-purple-800", light: "bg-purple-50", border: "border-purple-400", badge: "bg-purple-500" },
    { header: "bg-teal-100", headerText: "text-teal-800", light: "bg-teal-50", border: "border-teal-400", badge: "bg-teal-500" }
  ];
  return (
    <div className="space-y-6">
      {answers.title && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold text-gray-800 text-center" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
          <p className="text-gray-600 text-center mt-1">{answers.title.en}</p>
        </div>
      )}
      {answers.categories?.map((cat, cIdx) => {
        const colors = categoryColors[cIdx % categoryColors.length];
        return (
          <div key={cIdx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className={`${colors.header} p-3 border-b border-gray-200`}>
              <h4 className={`text-lg font-bold ${colors.headerText} text-center`} style={{ fontFamily: 'var(--font-arabic)' }}>
                {cat.type.ar}
                <span className="text-gray-600 font-normal text-sm mx-2">- {cat.type.en}</span>
              </h4>
              {cat.description && (
                <p className="text-sm text-gray-600 text-center mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>{cat.description.ar}</p>
              )}
            </div>
            <div className="p-4 space-y-4">
              {cat.verbs?.map((v, vIdx) => (
                <div key={vIdx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className={`${colors.light} p-3 border-b border-gray-200`}>
                    <div className="flex items-center justify-between">
                      <span className={`${colors.badge} text-white px-2 py-1 rounded text-sm`}>{vIdx + 1}</span>
                      <div className="text-center flex-1">
                        <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verb}</span>
                        <span className="mx-2 text-gray-400">-</span>
                        <span className="text-gray-600">{v.en}</span>
                      </div>
                      {v.root && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{v.root}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-xs text-gray-500 mb-1">الْمَاضِي</div>
                        <div className="text-xl text-blue-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verb}</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="text-xs text-gray-500 mb-1">الْمُضَارِعُ</div>
                        <div className="text-xl text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.present}</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <div className="text-xs text-gray-500 mb-1">الْأَمْرُ</div>
                        <div className="text-xl text-orange-700" style={{ fontFamily: 'var(--font-arabic)' }}>{v.imperative}</div>
                      </div>
                    </div>
                    {v.verse && (
                      <div className={`${colors.light} p-3 rounded-lg border-r-4 ${colors.border}`}>
                        <div className="text-xs text-gray-500 mb-2 text-right">الشَّاهِدُ الْقُرْآنِيُّ:</div>
                        <p className="text-lg text-right leading-relaxed text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{v.verse}</p>
                        {v.surah && <p className="text-sm text-gray-500 text-left mt-2">{v.surah}</p>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Q&A Introductions answer type (35/40 questions format with sections)
export const QaIntroductionsRenderer = ({ answers }) => {
  const sectionColors = [
    { header: "bg-emerald-100", headerText: "text-emerald-800", light: "bg-emerald-50", badge: "bg-emerald-500" },
    { header: "bg-blue-100", headerText: "text-blue-800", light: "bg-blue-50", badge: "bg-blue-500" },
    { header: "bg-purple-100", headerText: "text-purple-800", light: "bg-purple-50", badge: "bg-purple-500" },
    { header: "bg-amber-100", headerText: "text-amber-800", light: "bg-amber-50", badge: "bg-amber-500" }
  ];
  let questionCounter = 0;
  return (
    <div className="space-y-6">
      {answers.title && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold text-gray-800 text-center" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
          <p className="text-gray-600 text-center mt-1">{answers.title.en}</p>
        </div>
      )}
      {answers.sections?.map((section, sIdx) => {
        const colors = sectionColors[sIdx % sectionColors.length];
        return (
          <div key={sIdx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className={`${colors.header} p-3 border-b border-gray-200`}>
              <h4 className={`text-lg font-bold ${colors.headerText} text-center`} style={{ fontFamily: 'var(--font-arabic)' }}>
                {section.title.ar}
                {section.title.en && <span className="text-gray-600 font-normal text-sm mx-2">- {section.title.en}</span>}
              </h4>
            </div>
            <div className="p-4 space-y-4">
              {section.questions?.map((q, qIdx) => {
                questionCounter++;
                return (
                  <div key={qIdx} className="border rounded-lg overflow-hidden">
                    <div className={`${colors.light} p-3 border-b`}>
                      <div className="flex justify-between items-start">
                        <span className={`${colors.badge} text-white px-2 py-1 rounded text-sm`}>س{questionCounter}</span>
                        <p className="text-lg flex-1 mr-3 text-right" style={{ fontFamily: 'var(--font-arabic)' }}>{q.q_ar}</p>
                      </div>
                      <p className="text-sm text-gray-600 text-left mt-1">{q.q_en}</p>
                    </div>
                    <div className="bg-green-50 p-3">
                      <div className="flex justify-between items-start">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">ج</span>
                        <p className="text-lg flex-1 mr-3 text-right text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{q.a_ar}</p>
                      </div>
                      <p className="text-sm text-gray-600 text-left mt-1">{q.a_en}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Present verb answers answer type (verb + object + time)
export const PresentVerbAnswersRenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.map((s, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-green-100 p-4 border-b border-gray-200">
          <div className="flex items-start gap-3">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">{i + 1}</span>
            <div className="flex-1">
              <p className="text-xl text-right leading-relaxed text-green-800" style={{ fontFamily: 'var(--font-arabic)' }}>{s.ar}</p>
              <p className="text-gray-600 text-left mt-2">{s.en}</p>
            </div>
          </div>
        </div>
        <div className="p-3 bg-gray-50">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">الْفِعْلُ</div>
              <div className="text-lg text-blue-600 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{s.verb}</div>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">الْمَفْعُولُ</div>
              <div className="text-lg text-purple-600 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{s.object}</div>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">الظَّرْفُ</div>
              <div className="text-lg text-orange-600 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{s.time}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// New verbs sentences answer type (verb with sentence and structure)
export const NewVerbsSentencesRenderer = ({ answers }) => (
  <div className="space-y-6">
    {answers.map((item, i) => (
      <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-purple-100 p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">{i + 1}</span>
            <div className="text-center flex-1">
              <span className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.verb.ar}</span>
              <span className="mx-3 text-gray-400">|</span>
              <span className="text-lg text-gray-700">{item.verb.en}</span>
            </div>
            {item.verb.root && (
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>{item.verb.root}</span>
            )}
          </div>
        </div>
        <div className="p-4 bg-purple-50">
          <div className="bg-white p-4 rounded-lg border-r-4 border-purple-400 mb-3">
            <p className="text-xl text-right leading-relaxed text-purple-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.sentence.ar}</p>
            <p className="text-gray-600 text-left mt-2">{item.sentence.en}</p>
          </div>
          {item.structure && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-center text-gray-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.structure.ar}</p>
              <p className="text-xs text-center text-gray-500 mt-1">{item.structure.en}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Pronoun distinction answer type (attached vs separate pronouns)
export const PronounDistinctionRenderer = ({ answers }) => {
  const mainColors = [
    { header: "bg-indigo-100", headerText: "text-indigo-800", light: "bg-indigo-50", border: "border-indigo-400" },
    { header: "bg-emerald-100", headerText: "text-emerald-800", light: "bg-emerald-50", border: "border-emerald-400" }
  ];
  const subColors = [
    { header: "bg-blue-100", headerText: "text-blue-800", light: "bg-blue-50", border: "border-blue-400", badge: "bg-blue-500" },
    { header: "bg-purple-100", headerText: "text-purple-800", light: "bg-purple-50", border: "border-purple-400", badge: "bg-purple-500" },
    { header: "bg-teal-100", headerText: "text-teal-800", light: "bg-teal-50", border: "border-teal-400", badge: "bg-teal-500" },
    { header: "bg-amber-100", headerText: "text-amber-800", light: "bg-amber-50", border: "border-amber-400", badge: "bg-amber-500" }
  ];
  return (
    <div className="space-y-8">
      {answers.title && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-bold text-gray-800 text-center" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</h3>
          <p className="text-gray-600 text-center mt-1">{answers.title.en}</p>
        </div>
      )}
      {answers.categories?.map((cat, cIdx) => {
        const mainColor = mainColors[cIdx % mainColors.length];
        return (
          <div key={cIdx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className={`${mainColor.header} p-4 border-b border-gray-200`}>
              <h3 className={`text-xl font-bold ${mainColor.headerText} text-center`} style={{ fontFamily: 'var(--font-arabic)' }}>{cat.type.ar}</h3>
              <p className="text-gray-600 text-center text-sm mt-1">{cat.type.en}</p>
              {cat.description && (
                <p className="text-gray-500 text-center text-sm mt-2" style={{ fontFamily: 'var(--font-arabic)' }}>{cat.description.ar}</p>
              )}
            </div>
            <div className={`p-4 ${mainColor.light} space-y-6`}>
              {cat.subcategories?.map((sub, sIdx) => {
                const subColor = subColors[sIdx % subColors.length];
                return (
                  <div key={sIdx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <div className={`${subColor.header} p-3 border-b border-gray-200`}>
                      <h4 className={`text-lg font-bold ${subColor.headerText} text-right`} style={{ fontFamily: 'var(--font-arabic)' }}>{sub.subtype.ar}</h4>
                      <p className="text-gray-600 text-sm">{sub.subtype.en}</p>
                    </div>
                    <div className={`p-3 ${subColor.light} space-y-3`}>
                      {sub.pronouns?.map((p, pIdx) => (
                        <div key={pIdx} className={`bg-white p-4 rounded-lg border-r-4 ${subColor.border}`}>
                          <div className="flex items-start gap-3">
                            <span className={`${subColor.badge} text-white px-3 py-1 rounded-full text-sm font-bold`}>{pIdx + 1}</span>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-gray-600 text-sm">{p.type_en}</span>
                                <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{p.pronoun}</span>
                              </div>
                              {p.verse && (
                                <div className={`${subColor.light} p-3 rounded border-r-2 ${subColor.border}`}>
                                  <p className="text-lg text-right leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>{p.verse}</p>
                                  {p.surah && <p className="text-xs text-gray-500 text-left mt-1">{p.surah}</p>}
                                  {p.en && <p className="text-sm text-gray-600 text-left mt-1">{p.en}</p>}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Pronoun examples answer type (pronouns with sentences and analysis)
export const PronounExamplesRenderer = ({ answers }) => {
  const colors = [
    { header: "bg-blue-100", headerText: "text-blue-800", light: "bg-blue-50", border: "border-blue-400" },
    { header: "bg-emerald-100", headerText: "text-emerald-800", light: "bg-emerald-50", border: "border-emerald-400" },
    { header: "bg-purple-100", headerText: "text-purple-800", light: "bg-purple-50", border: "border-purple-400" },
    { header: "bg-amber-100", headerText: "text-amber-800", light: "bg-amber-50", border: "border-amber-400" },
    { header: "bg-rose-100", headerText: "text-rose-800", light: "bg-rose-50", border: "border-rose-400" }
  ];
  return (
    <div className="space-y-6">
      {answers.map((item, i) => {
        const color = colors[i % colors.length];
        return (
          <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className={`${color.header} p-4 border-b border-gray-200`}>
              <div className="flex items-center justify-between">
                <span className={`${color.headerText} bg-white px-4 py-2 rounded-full text-lg font-bold`}>{item.number}</span>
                <div className="text-center flex-1">
                  <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{item.pronoun.ar}</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span className="text-lg text-gray-700">{item.pronoun.en}</span>
                </div>
                <span className={`${color.light} ${color.headerText} px-3 py-1 rounded-full text-sm`} style={{ fontFamily: 'var(--font-arabic)' }}>{item.pronoun.type_ar}</span>
              </div>
            </div>
            <div className={`p-4 ${color.light}`}>
              <div className={`bg-white p-4 rounded-lg border-r-4 ${color.border} mb-3`}>
                <p className="text-xl text-right leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>{item.sentence.ar}</p>
                <p className="text-gray-600 text-left mt-2">{item.sentence.en}</p>
              </div>
              {item.analysis && (
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm text-center text-gray-700" style={{ fontFamily: 'var(--font-arabic)' }}>{item.analysis.ar}</p>
                  {item.analysis.en && <p className="text-xs text-center text-gray-500 mt-1">{item.analysis.en}</p>}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Main answer renderer that selects the appropriate component
export const AnswerRenderer = ({ answerType, answers, task }) => {
  switch (answerType) {
    case 'note':
      return <NoteRenderer answers={answers} />;
    case 'familyVocab':
      return <FamilyVocabRenderer answers={answers} />;
    case 'dualTypes':
      return <DualTypesRenderer answers={answers} />;
    case 'islamicMonths':
      return <IslamicMonthsRenderer answers={answers} />;
    case 'arabicNumbers':
      return <ArabicNumbersRenderer answers={answers} />;
    case 'demonstrativePronouns':
      return <DemonstrativePronounsRenderer answers={answers} />;
    case 'table':
      return <TableRenderer answers={answers} />;
    case 'table3col':
      return <Table3ColRenderer answers={answers} headers={task?.headers} />;
    case 'numbers':
      return <NumbersRenderer answers={answers} />;
    case 'qa':
      return <QARenderer answers={answers} />;
    case 'pronounGroups':
      return <PronounGroupsRenderer answers={answers} />;
    case 'numberCategories':
      return <NumberCategoriesRenderer answers={answers} />;
    case 'verbTable':
      return <VerbTableRenderer answers={answers} />;
    case 'presentVerbs':
      return <PresentVerbsRenderer answers={answers} />;
    case 'imperativeVerbs':
      return <ImperativeVerbsRenderer answers={answers} />;
    case 'genderList':
      return <GenderListRenderer answers={answers} />;
    case 'essay':
      return <EssayRenderer answers={answers} title={task?.title} />;
    case 'dailyLifeSentences':
    case 'dailyLifeSentences30':
      return <DailyLifeSentencesRenderer answers={answers} />;
    case 'ordinalNumbers':
      return <OrdinalNumbersRenderer answers={answers} />;
    case 'interrogativeSentences':
      return <InterrogativeSentencesRenderer answers={answers} />;
    case 'grammarReview':
      return <GrammarReviewRenderer answers={answers} />;
    case 'weakVerbTypes':
      return <WeakVerbTypesRenderer answers={answers} />;
    case 'mithalWawiVerbs':
      return <MithalWawiVerbsRenderer answers={answers} />;
    case 'soundWeakVerbs':
      return <SoundWeakVerbsRenderer answers={answers} />;
    case 'speakingPractice':
      return <SpeakingPracticeRenderer answers={answers} />;
    case 'writingParagraphs':
      return <WritingParagraphsRenderer answers={answers} />;
    case 'hamzaTable':
      return <HamzaTableRenderer answers={answers} />;
    case 'soundVerbsExtraction':
      return <SoundVerbsExtractionRenderer answers={answers} />;
    case 'qaIntroductions':
    case 'qaIntroductions40':
      return <QaIntroductionsRenderer answers={answers} />;
    case 'hamzatedVerbsExtraction':
      return <HamzatedVerbsExtractionRenderer answers={answers} />;
    case 'presentVerbAnswers':
      return <PresentVerbAnswersRenderer answers={answers} />;
    case 'newVerbsSentences':
      return <NewVerbsSentencesRenderer answers={answers} />;
    case 'pronounDistinction':
      return <PronounDistinctionRenderer answers={answers} />;
    case 'pronounExamples':
      return <PronounExamplesRenderer answers={answers} />;
    default:
      return (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-yellow-800">Unknown answer type: {answerType}</p>
          <pre className="text-sm mt-2 overflow-auto max-h-96">{JSON.stringify(answers, null, 2)}</pre>
        </div>
      );
  }
};

export default AnswerRenderer;
