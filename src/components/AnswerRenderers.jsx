// Answer Renderer Components - Separated from data
// Each component handles a specific answer type with consistent styling

import React from 'react';

// Helper component for bilingual text
export const BilingualText = ({ ar, en, className = "" }) => (
  <div className={className}>
    <p className="arabic-text text-xl mb-1 text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{ar}</p>
    <p className="text-gray-600 text-sm">{en}</p>
  </div>
);

// Note answer type
export const NoteRenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.map((answer, idx) => (
      <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <p className="arabic-text text-2xl text-gray-800 mb-2 leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
          {answer.ar}
        </p>
        <p className="text-gray-600">{answer.en}</p>
      </div>
    ))}
  </div>
);

// Numbers answer type
export const NumbersRenderer = ({ answers }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
    {answers.map((item, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="text-3xl text-emerald-600 font-bold mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
          {item.number}
        </div>
        <div className="text-lg text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
          {item.arabic}
        </div>
        <div className="text-sm text-gray-500">{item.english}</div>
      </div>
    ))}
  </div>
);

// Q&A answer type
export const QARenderer = ({ answers }) => (
  <div className="space-y-4">
    {answers.map((qa, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-blue-50 p-4 border-b border-gray-200">
          <p className="font-medium text-blue-800 mb-1">Question {idx + 1}:</p>
          <BilingualText ar={qa.question.ar} en={qa.question.en} />
        </div>
        <div className="p-4 bg-green-50">
          <p className="font-medium text-green-800 mb-1">Answer:</p>
          <BilingualText ar={qa.answer.ar} en={qa.answer.en} />
        </div>
      </div>
    ))}
  </div>
);

// Pronoun groups answer type
export const PronounGroupsRenderer = ({ answers }) => (
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

// Verb table answer type
export const VerbTableRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-teal-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-teal-800">
        <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.verb.en}</span>
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
          {answers.conjugations.map((conj, idx) => (
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

// Present verbs answer type (similar to verb table)
export const PresentVerbsRenderer = ({ answers }) => (
  <VerbTableRenderer answers={answers} />
);

// Imperative verbs answer type
export const ImperativeVerbsRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-orange-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-orange-800">
        <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.verb.en}</span>
      </h4>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {answers.conjugations.map((conj, idx) => (
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

// Gender list answer type
export const GenderListRenderer = ({ answers }) => (
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

// Essay answer type
export const EssayRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-indigo-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-indigo-800">
        <span className="arabic-text text-xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.title.en}</span>
      </h4>
    </div>
    <div className="p-6 space-y-6">
      {answers.paragraphs.map((para, idx) => (
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

// Daily life sentences answer type
export const DailyLifeSentencesRenderer = ({ answers }) => (
  <div className="space-y-3">
    {answers.map((sentence, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <div className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            {idx + 1}
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>{sentence.ar}</p>
            <p className="text-gray-600">{sentence.en}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Ordinal numbers answer type
export const OrdinalNumbersRenderer = ({ answers }) => (
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

// Interrogative sentences answer type
export const InterrogativeSentencesRenderer = ({ answers }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {answers.map((item, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-cyan-100 p-3 border-b border-gray-200">
          <span className="text-xl text-cyan-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.question.ar}</span>
          <span className="mx-2 text-gray-400">-</span>
          <span className="text-cyan-700">{item.question.en}</span>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">Example:</p>
          <p className="text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{item.example.ar}</p>
          <p className="text-gray-600">{item.example.en}</p>
        </div>
      </div>
    ))}
  </div>
);

// Grammar review answer type
export const GrammarReviewRenderer = ({ answers }) => (
  <div className="space-y-6">
    {answers.map((topic, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-violet-100 p-4 border-b border-gray-200">
          <h4 className="text-lg font-bold text-violet-800">
            <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{topic.topic.ar}</span>
            <span className="mx-2">-</span>
            <span>{topic.topic.en}</span>
          </h4>
        </div>
        <div className="p-4">
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{topic.explanation.ar}</p>
            <p className="text-gray-600 mt-1">{topic.explanation.en}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {topic.examples.map((ex, exIdx) => (
              <div key={exIdx} className="bg-violet-50 px-4 py-2 rounded-lg">
                <span className="text-lg text-violet-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
                <span className="text-gray-500 ml-2">({ex.en})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Weak verb types answer type
export const WeakVerbTypesRenderer = ({ answers }) => (
  <div className="space-y-6">
    {answers.map((type, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-rose-100 p-4 border-b border-gray-200">
          <h4 className="text-lg font-bold text-rose-800">
            <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{type.type.ar}</span>
            <span className="mx-2">-</span>
            <span>{type.type.en}</span>
          </h4>
        </div>
        <div className="p-4">
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{type.explanation.ar}</p>
            <p className="text-gray-600 mt-1">{type.explanation.en}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {type.examples.map((ex, exIdx) => (
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

// Mithal Wawi verbs answer type
export const MithalWawiVerbsRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-amber-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-amber-800">
        <span className="arabic-text text-2xl" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.verb.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.verb.en}</span>
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
          {answers.conjugations.map((conj, idx) => (
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

// Sound and weak verbs answer type
export const SoundWeakVerbsRenderer = ({ answers }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-green-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-green-800">
          <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.soundVerbs.title.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.soundVerbs.title.en}</span>
        </h4>
      </div>
      <div className="p-4">
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.soundVerbs.explanation.ar}</p>
          <p className="text-gray-600 mt-1">{answers.soundVerbs.explanation.en}</p>
        </div>
        <div className="space-y-2">
          {answers.soundVerbs.examples.map((ex, idx) => (
            <div key={idx} className="bg-green-50 px-4 py-2 rounded-lg">
              <span className="text-xl text-green-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
              <span className="text-gray-500 ml-2">({ex.en})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-red-100 p-4 border-b border-gray-200">
        <h4 className="text-lg font-bold text-red-800">
          <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.weakVerbs.title.ar}</span>
          <span className="mx-2">-</span>
          <span>{answers.weakVerbs.title.en}</span>
        </h4>
      </div>
      <div className="p-4">
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <p className="text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.weakVerbs.explanation.ar}</p>
          <p className="text-gray-600 mt-1">{answers.weakVerbs.explanation.en}</p>
        </div>
        <div className="space-y-2">
          {answers.weakVerbs.examples.map((ex, idx) => (
            <div key={idx} className="bg-red-50 px-4 py-2 rounded-lg">
              <span className="text-xl text-red-700" style={{ fontFamily: 'var(--font-arabic)' }}>{ex.ar}</span>
              <span className="text-gray-500 ml-2">({ex.en})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Speaking practice answer type
export const SpeakingPracticeRenderer = ({ answers }) => (
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

// Writing paragraphs answer type
export const WritingParagraphsRenderer = ({ answers }) => (
  <div className="space-y-6">
    {answers.map((para, idx) => (
      <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-lime-100 p-4 border-b border-gray-200">
          <h4 className="text-lg font-bold text-lime-800">
            <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{para.topic.ar}</span>
            <span className="mx-2">-</span>
            <span>{para.topic.en}</span>
          </h4>
        </div>
        <div className="p-6">
          <p className="arabic-text text-xl text-gray-800 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-arabic)' }}>
            {para.paragraph.ar}
          </p>
          <p className="text-gray-600 italic border-t border-gray-100 pt-4">
            {para.paragraph.en}
          </p>
        </div>
      </div>
    ))}
  </div>
);

// Hamza table answer type
export const HamzaTableRenderer = ({ answers }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <div className="bg-fuchsia-100 p-4 border-b border-gray-200">
      <h4 className="text-lg font-bold text-fuchsia-800">
        <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.title.ar}</span>
        <span className="mx-2">-</span>
        <span>{answers.title.en}</span>
      </h4>
      <p className="text-fuchsia-700 mt-1">
        <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>{answers.explanation.ar}</span>
        <span className="text-gray-500 ml-2">({answers.explanation.en})</span>
      </p>
    </div>
    <div className="p-4 space-y-4">
      {answers.verbs.map((verb, idx) => (
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

// Main answer renderer that selects the appropriate component
export const AnswerRenderer = ({ answerType, answers }) => {
  switch (answerType) {
    case 'note':
      return <NoteRenderer answers={answers} />;
    case 'numbers':
      return <NumbersRenderer answers={answers} />;
    case 'qa':
      return <QARenderer answers={answers} />;
    case 'pronounGroups':
      return <PronounGroupsRenderer answers={answers} />;
    case 'verbTable':
      return <VerbTableRenderer answers={answers} />;
    case 'presentVerbs':
      return <PresentVerbsRenderer answers={answers} />;
    case 'imperativeVerbs':
      return <ImperativeVerbsRenderer answers={answers} />;
    case 'genderList':
      return <GenderListRenderer answers={answers} />;
    case 'essay':
      return <EssayRenderer answers={answers} />;
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
    default:
      return (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <p className="text-yellow-800">Unknown answer type: {answerType}</p>
          <pre className="text-sm mt-2 overflow-auto">{JSON.stringify(answers, null, 2)}</pre>
        </div>
      );
  }
};

export default AnswerRenderer;
