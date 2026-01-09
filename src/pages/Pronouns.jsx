import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pronouns = () => {
  // Exercise state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Structured pronoun data: 5 rows x 3 columns (singular, dual, plural)
  const pronounTable = [
    {
      rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
      color: "purple",
      singular: {
        separate: "هُوَ",
        attached: ["ـهُ"],
        en: "He / His"
      },
      dual: {
        separate: "هُمَا",
        attached: ["ـهُمَا", "ـا"],
        en: "They two (m)"
      },
      plural: {
        separate: "هُمْ",
        attached: ["ـهُمْ", "ـوا"],
        en: "They (m)"
      }
    },
    {
      rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
      color: "pink",
      singular: {
        separate: "هِيَ",
        attached: ["ـهَا"],
        en: "She / Her"
      },
      dual: {
        separate: "هُمَا",
        attached: ["ـهُمَا", "ـتَا"],
        en: "They two (f)"
      },
      plural: {
        separate: "هُنَّ",
        attached: ["ـهُنَّ", "ـنَ"],
        en: "They (f)"
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
      color: "blue",
      singular: {
        separate: "أَنْتَ",
        attached: ["ـكَ", "ـتَ"],
        en: "You (m.s)"
      },
      dual: {
        separate: "أَنْتُمَا",
        attached: ["ـكُمَا", "ـتُمَا"],
        en: "You two (m)"
      },
      plural: {
        separate: "أَنْتُمْ",
        attached: ["ـكُمْ", "ـتُمْ"],
        en: "You (m.pl)"
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
      color: "rose",
      singular: {
        separate: "أَنْتِ",
        attached: ["ـكِ", "ـتِ"],
        en: "You (f.s)"
      },
      dual: {
        separate: "أَنْتُمَا",
        attached: ["ـكُمَا", "ـتُمَا"],
        en: "You two (f)"
      },
      plural: {
        separate: "أَنْتُنَّ",
        attached: ["ـكُنَّ", "ـتُنَّ"],
        en: "You (f.pl)"
      }
    },
    {
      rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
      color: "emerald",
      singular: {
        separate: "أَنَا",
        attached: ["ـي", "ـنِي", "ـتُ"],
        en: "I / Me"
      },
      dual: {
        separate: "—",
        attached: [],
        en: "—"
      },
      plural: {
        separate: "نَحْنُ",
        attached: ["ـنَا"],
        en: "We / Us"
      }
    }
  ];

  // Examples with Quranic verses and simple sentences
  const examples = [
    {
      sentence: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say: He is Allah, the One.",
      source: "سُورَةُ الْإِخْلَاصِ",
      pronoun: "هُوَ",
      pronounType: "Separate (3rd m.s)",
      highlight: "هُوَ"
    },
    {
      sentence: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "You alone we worship, and You alone we ask for help.",
      source: "سُورَةُ الْفَاتِحَةِ",
      pronoun: "إِيَّاكَ",
      pronounType: "Separate Accusative (2nd m.s)",
      highlight: "إِيَّاكَ"
    },
    {
      sentence: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
      translation: "Our Lord, give us good in this world.",
      source: "سُورَةُ الْبَقَرَةِ",
      pronoun: "ـنَا",
      pronounType: "Attached (1st pl.)",
      highlight: "نَا"
    },
    {
      sentence: "أَنَا طَالِبٌ",
      translation: "I am a student.",
      source: "Simple Sentence",
      pronoun: "أَنَا",
      pronounType: "Separate (1st s.)",
      highlight: "أَنَا"
    },
    {
      sentence: "هِيَ مُعَلِّمَةٌ",
      translation: "She is a teacher.",
      source: "Simple Sentence",
      pronoun: "هِيَ",
      pronounType: "Separate (3rd f.s)",
      highlight: "هِيَ"
    },
    {
      sentence: "كِتَابُهُ جَدِيدٌ",
      translation: "His book is new.",
      source: "Simple Sentence",
      pronoun: "ـهُ",
      pronounType: "Attached (3rd m.s)",
      highlight: "هُ"
    },
    {
      sentence: "ذَهَبْتُ إِلَى الْمَدْرَسَةِ",
      translation: "I went to the school.",
      source: "Simple Sentence",
      pronoun: "ـتُ",
      pronounType: "Attached (1st s.)",
      highlight: "تُ"
    },
    {
      sentence: "نَحْنُ مُسْلِمُونَ",
      translation: "We are Muslims.",
      source: "Simple Sentence",
      pronoun: "نَحْنُ",
      pronounType: "Separate (1st pl.)",
      highlight: "نَحْنُ"
    }
  ];

  // Quiz questions - simple and effective
  const quizQuestions = [
    {
      type: "identify",
      question: "What does هُوَ mean?",
      questionAr: "مَا مَعْنَى هُوَ؟",
      options: ["I", "He", "She", "We"],
      correct: 1
    },
    {
      type: "identify",
      question: "What does أَنَا mean?",
      questionAr: "مَا مَعْنَى أَنَا؟",
      options: ["You", "He", "I", "They"],
      correct: 2
    },
    {
      type: "identify",
      question: "What does نَحْنُ mean?",
      questionAr: "مَا مَعْنَى نَحْنُ؟",
      options: ["We", "You (pl.)", "They", "I"],
      correct: 0
    },
    {
      type: "choose",
      question: "Choose the pronoun for 'She':",
      questionAr: "اخْتَرِ الضَّمِيرَ لِـ 'She':",
      options: ["هُوَ", "هِيَ", "أَنْتَ", "هُمْ"],
      correct: 1
    },
    {
      type: "choose",
      question: "Choose the pronoun for 'You' (masculine singular):",
      questionAr: "اخْتَرِ الضَّمِيرَ لِـ 'You' (مُذَكَّر مُفْرَد):",
      options: ["أَنَا", "هُوَ", "أَنْتَ", "نَحْنُ"],
      correct: 2
    },
    {
      type: "choose",
      question: "Choose the pronoun for 'They' (masculine):",
      questionAr: "اخْتَرِ الضَّمِيرَ لِـ 'They' (مُذَكَّر):",
      options: ["هُنَّ", "هُمْ", "أَنْتُمْ", "نَحْنُ"],
      correct: 1
    },
    {
      type: "attached",
      question: "In كِتَابُهُ (his book), what is the attached pronoun?",
      questionAr: "فِي كِتَابُهُ، مَا الضَّمِيرُ الْمُتَّصِلُ؟",
      options: ["ـي", "ـهُ", "ـكَ", "ـنَا"],
      correct: 1
    },
    {
      type: "attached",
      question: "In ذَهَبْتُ (I went), what is the attached pronoun?",
      questionAr: "فِي ذَهَبْتُ، مَا الضَّمِيرُ الْمُتَّصِلُ؟",
      options: ["ـتُ", "ـتَ", "ـنَا", "ـوا"],
      correct: 0
    },
    {
      type: "fill",
      question: "___ طَالِبٌ (I am a student)",
      questionAr: "أَكْمِلِ الْفَرَاغَ:",
      options: ["هُوَ", "أَنَا", "هِيَ", "نَحْنُ"],
      correct: 1
    },
    {
      type: "fill",
      question: "___ مُعَلِّمُونَ (We are teachers)",
      questionAr: "أَكْمِلِ الْفَرَاغَ:",
      options: ["أَنَا", "هُمْ", "نَحْنُ", "أَنْتُمْ"],
      correct: 2
    }
  ];

  const colorMap = {
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      header: 'bg-purple-100',
      text: 'text-purple-800',
      light: 'text-purple-600'
    },
    pink: {
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      header: 'bg-pink-100',
      text: 'text-pink-800',
      light: 'text-pink-600'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      header: 'bg-blue-100',
      text: 'text-blue-800',
      light: 'text-blue-600'
    },
    rose: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      header: 'bg-rose-100',
      text: 'text-rose-800',
      light: 'text-rose-600'
    },
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      header: 'bg-emerald-100',
      text: 'text-emerald-800',
      light: 'text-emerald-600'
    }
  };

  const PronounCell = ({ data, colors }) => {
    if (data.separate === '—') {
      return (
        <div className="text-center py-3 text-gray-400">
          —
        </div>
      );
    }

    return (
      <div className="text-center py-2 sm:py-3">
        <div className="arabic-text text-2xl sm:text-3xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
          {data.separate}
        </div>
        <div className="text-xs text-gray-500 mb-1">
          {data.en}
        </div>
        {data.attached.length > 0 && (
          <div className={`arabic-text text-sm sm:text-base ${colors.light}`} style={{ fontFamily: 'var(--font-arabic)' }}>
            {data.attached.join(' / ')}
          </div>
        )}
      </div>
    );
  };

  // Quiz handlers
  const handleAnswerSelect = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-3 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              الضَّمَائِرُ
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">Arabic Pronouns</p>
          </div>
          <div className="w-8"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-3 sm:px-4 py-4">
        {/* Column Headers */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl overflow-hidden">
          <div className="grid grid-cols-4">
            <div className="p-2 sm:p-3 text-center border-r border-white/20">
              <span className="text-xs sm:text-sm font-medium opacity-80">Type</span>
            </div>
            <div className="p-2 sm:p-3 text-center border-r border-white/20">
              <div className="arabic-text text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>مُفْرَدٌ</div>
              <span className="text-xs opacity-80">Singular</span>
            </div>
            <div className="p-2 sm:p-3 text-center border-r border-white/20">
              <div className="arabic-text text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>مُثَنًّى</div>
              <span className="text-xs opacity-80">Dual</span>
            </div>
            <div className="p-2 sm:p-3 text-center">
              <div className="arabic-text text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>جَمْعٌ</div>
              <span className="text-xs opacity-80">Plural</span>
            </div>
          </div>
        </div>

        {/* Pronoun Rows */}
        <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 overflow-hidden">
          {pronounTable.map((row, idx) => {
            const colors = colorMap[row.color];
            const isLast = idx === pronounTable.length - 1;

            return (
              <div
                key={idx}
                className={`grid grid-cols-4 ${!isLast ? 'border-b border-gray-200' : ''}`}
              >
                <div className={`${colors.header} ${colors.text} p-2 sm:p-3 flex flex-col justify-center items-center border-r border-gray-200`}>
                  <div className="arabic-text text-sm sm:text-base font-bold text-center leading-tight" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {row.rowName.ar}
                  </div>
                  <div className="text-xs mt-0.5 opacity-75 text-center">
                    {row.rowName.en}
                  </div>
                </div>
                <div className={`${colors.bg} border-r border-gray-200`}>
                  <PronounCell data={row.singular} colors={colors} />
                </div>
                <div className={`${colors.bg} border-r border-gray-200`}>
                  <PronounCell data={row.dual} colors={colors} />
                </div>
                <div className={colors.bg}>
                  <PronounCell data={row.plural} colors={colors} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 bg-white rounded-xl border border-gray-200 p-3 sm:p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Legend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="arabic-text text-lg text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>هُوَ</span>
              <span>= Separate pronoun (الضَّمِيرُ الْمُنْفَصِلُ)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="arabic-text text-sm text-purple-600" style={{ fontFamily: 'var(--font-arabic)' }}>ـهُ / ـتُ</span>
              <span>= Attached pronoun (الضَّمِيرُ الْمُتَّصِلُ)</span>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 sm:p-4">
            <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
              أَمْثِلَةٌ
            </h2>
            <p className="text-emerald-100 text-center text-sm">Examples</p>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
            {examples.map((example, idx) => (
              <div key={idx} className={`p-3 rounded-lg border ${idx % 2 === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-teal-50 border-teal-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <p className="arabic-text text-lg sm:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {example.sentence}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 italic">{example.translation}</p>
                    <p className="text-xs text-gray-500 mt-1">{example.source}</p>
                  </div>
                  <div className="flex-shrink-0 text-center sm:text-right">
                    <span className="inline-block px-3 py-1 bg-white rounded-full shadow-sm">
                      <span className="arabic-text text-lg font-bold text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {example.pronoun}
                      </span>
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{example.pronounType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Exercise Section */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 sm:p-4">
            <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
              تَمَارِينُ
            </h2>
            <p className="text-blue-100 text-center text-sm">Practice Exercises</p>
          </div>

          <div className="p-4 sm:p-6">
            {!quizComplete ? (
              <>
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="text-center mb-6">
                  <p className="arabic-text text-lg text-gray-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {currentQ.questionAr}
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-gray-800">
                    {currentQ.question}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {currentQ.options.map((option, idx) => {
                    let buttonClass = "p-4 rounded-xl border-2 text-center transition-all ";

                    if (showResult) {
                      if (idx === currentQ.correct) {
                        buttonClass += "border-green-500 bg-green-50 text-green-700";
                      } else if (idx === selectedAnswer && idx !== currentQ.correct) {
                        buttonClass += "border-red-500 bg-red-50 text-red-700";
                      } else {
                        buttonClass += "border-gray-200 bg-gray-50 text-gray-400";
                      }
                    } else {
                      if (idx === selectedAnswer) {
                        buttonClass += "border-blue-500 bg-blue-50 text-blue-700";
                      } else {
                        buttonClass += "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        disabled={showResult}
                        className={buttonClass}
                      >
                        <span className="arabic-text text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Result Feedback */}
                {showResult && (
                  <div className={`p-3 rounded-lg mb-4 text-center ${
                    selectedAnswer === currentQ.correct
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {selectedAnswer === currentQ.correct ? (
                      <p className="font-semibold">Correct! Excellent!</p>
                    ) : (
                      <p className="font-semibold">
                        Not quite. The answer is: <span className="arabic-text text-xl" style={{ fontFamily: 'var(--font-arabic)' }}>{currentQ.options[currentQ.correct]}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-3">
                  {!showResult ? (
                    <button
                      onClick={handleCheckAnswer}
                      disabled={selectedAnswer === null}
                      className={`px-6 py-2 rounded-lg font-medium transition-all ${
                        selectedAnswer !== null
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
                    >
                      {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Quiz Complete */
              <div className="text-center py-6">
                <div className="text-6xl mb-4">
                  {score >= quizQuestions.length * 0.8 ? '🌟' : score >= quizQuestions.length * 0.5 ? '👍' : '📚'}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
                <p className="text-lg text-gray-600 mb-4">
                  You scored <span className="font-bold text-blue-600">{score}</span> out of <span className="font-bold">{quizQuestions.length}</span>
                </p>
                <div className="mb-6">
                  {score === quizQuestions.length && (
                    <p className="text-green-600 font-semibold">Perfect Score! Excellent work!</p>
                  )}
                  {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && (
                    <p className="text-green-600 font-semibold">Great job! You know your pronouns well!</p>
                  )}
                  {score >= quizQuestions.length * 0.5 && score < quizQuestions.length * 0.8 && (
                    <p className="text-amber-600 font-semibold">Good effort! Keep practicing!</p>
                  )}
                  {score < quizQuestions.length * 0.5 && (
                    <p className="text-blue-600 font-semibold">Review the table above and try again!</p>
                  )}
                </div>
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4">
          <h3 className="arabic-text text-base sm:text-lg font-bold text-amber-800 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
            نَصَائِحُ لِلتَّعَلُّمِ
          </h3>
          <p className="text-sm font-semibold text-amber-700 mb-2">Tips for Learning:</p>
          <ul className="text-xs sm:text-sm text-amber-700 space-y-1">
            <li>• Start by memorizing the separate pronouns (هُوَ، هِيَ، أَنْتَ، أَنَا، نَحْنُ)</li>
            <li>• Practice attaching pronouns to simple words like كِتَاب (book) → كِتَابُهُ (his book)</li>
            <li>• Listen to Quran recitation to hear pronouns in context</li>
            <li>• Make simple sentences using one pronoun at a time</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Pronouns;
