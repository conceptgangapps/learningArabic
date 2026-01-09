import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MudariConjugation = () => {
  // Screen navigation: 'chart' | 'verbs' | 'quiz'
  const [currentScreen, setCurrentScreen] = useState('chart');

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);

  // Verb practice state
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [showAllConjugations, setShowAllConjugations] = useState(false);
  const [currentConjugationIndex, setCurrentConjugationIndex] = useState(0);

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Base conjugation chart using يَنْصُرُ as model (فَعَلَ - يَفْعُلُ pattern)
  const conjugationChart = [
    {
      rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
      color: "purple",
      singular: {
        form: "يَفْعُلُ", example: "يَنْصُرُ", meaning: "He helps",
        pronoun: "هُوَ", prefix: "يَـ", suffix: "—", prefixAr: "يَاء",
        base: "ـنْصُرُ", pattern: "Add prefix يَـ (ya) for 'he'",
        patternAr: "نُضِيفُ يَاءَ الْمُضَارَعَةِ (يَـ) فِي أَوَّلِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "يَفْعُلَانِ", example: "يَنْصُرَانِ", meaning: "They two (m) help",
        pronoun: "هُمَا", prefix: "يَـ", suffix: "ـَانِ", prefixAr: "يَاء", suffixAr: "أَلِف + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix يَـ and suffix ـَانِ for dual",
        patternAr: "نُضِيفُ يَاءً فِي الْأَوَّلِ وَأَلِفًا وَنُونًا (ـَانِ) فِي الْآخِرِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "يَفْعُلُونَ", example: "يَنْصُرُونَ", meaning: "They (m) help",
        pronoun: "هُمْ", prefix: "يَـ", suffix: "ـُونَ", prefixAr: "يَاء", suffixAr: "وَاو + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix يَـ and suffix ـُونَ for masculine plural",
        patternAr: "نُضِيفُ يَاءً فِي الْأَوَّلِ وَوَاوًا وَنُونًا (ـُونَ) فِي الْآخِرِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
      color: "pink",
      singular: {
        form: "تَفْعُلُ", example: "تَنْصُرُ", meaning: "She helps",
        pronoun: "هِيَ", prefix: "تَـ", suffix: "—", prefixAr: "تَاء",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ (ta) for 'she'",
        patternAr: "نُضِيفُ تَاءَ الْمُضَارَعَةِ (تَـ) فِي أَوَّلِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "تَفْعُلَانِ", example: "تَنْصُرَانِ", meaning: "They two (f) help",
        pronoun: "هُمَا", prefix: "تَـ", suffix: "ـَانِ", prefixAr: "تَاء", suffixAr: "أَلِف + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـَانِ for feminine dual",
        patternAr: "نُضِيفُ تَاءً فِي الْأَوَّلِ وَأَلِفًا وَنُونًا (ـَانِ) فِي الْآخِرِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "يَفْعُلْنَ", example: "يَنْصُرْنَ", meaning: "They (f) help",
        pronoun: "هُنَّ", prefix: "يَـ", suffix: "ـْنَ", prefixAr: "يَاء", suffixAr: "نُون",
        base: "ـنْصُرُ", pattern: "Add prefix يَـ and suffix ـْنَ for feminine plural",
        patternAr: "نُضِيفُ يَاءً فِي الْأَوَّلِ وَنُونًا (ـْنَ) فِي الْآخِرِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
      color: "blue",
      singular: {
        form: "تَفْعُلُ", example: "تَنْصُرُ", meaning: "You (m) help",
        pronoun: "أَنْتَ", prefix: "تَـ", suffix: "—", prefixAr: "تَاء",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ (ta) for masculine 'you'",
        patternAr: "نُضِيفُ تَاءَ الْمُضَارَعَةِ (تَـ) فِي أَوَّلِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "تَفْعُلَانِ", example: "تَنْصُرَانِ", meaning: "You two help",
        pronoun: "أَنْتُمَا", prefix: "تَـ", suffix: "ـَانِ", prefixAr: "تَاء", suffixAr: "أَلِف + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـَانِ for dual 'you two'",
        patternAr: "نُضِيفُ تَاءً فِي الْأَوَّلِ وَأَلِفًا وَنُونًا (ـَانِ) فِي الْآخِرِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "تَفْعُلُونَ", example: "تَنْصُرُونَ", meaning: "You (m.pl) help",
        pronoun: "أَنْتُمْ", prefix: "تَـ", suffix: "ـُونَ", prefixAr: "تَاء", suffixAr: "وَاو + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـُونَ for masculine plural 'you all'",
        patternAr: "نُضِيفُ تَاءً فِي الْأَوَّلِ وَوَاوًا وَنُونًا (ـُونَ) فِي الْآخِرِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
      color: "rose",
      singular: {
        form: "تَفْعُلِينَ", example: "تَنْصُرِينَ", meaning: "You (f) help",
        pronoun: "أَنْتِ", prefix: "تَـ", suffix: "ـِينَ", prefixAr: "تَاء", suffixAr: "يَاء + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـِينَ for feminine 'you'",
        patternAr: "نُضِيفُ تَاءً فِي الْأَوَّلِ وَيَاءً وَنُونًا (ـِينَ) فِي الْآخِرِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "تَفْعُلَانِ", example: "تَنْصُرَانِ", meaning: "You two help",
        pronoun: "أَنْتُمَا", prefix: "تَـ", suffix: "ـَانِ", prefixAr: "تَاء", suffixAr: "أَلِف + نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـَانِ (same as masculine)",
        patternAr: "نُضِيفُ تَاءً وَ(ـَانِ) - مُشْتَرَكٌ بَيْنَ الْمُذَكَّرِ وَالْمُؤَنَّثِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "تَفْعُلْنَ", example: "تَنْصُرْنَ", meaning: "You (f.pl) help",
        pronoun: "أَنْتُنَّ", prefix: "تَـ", suffix: "ـْنَ", prefixAr: "تَاء", suffixAr: "نُون",
        base: "ـنْصُرُ", pattern: "Add prefix تَـ and suffix ـْنَ for feminine plural 'you all'",
        patternAr: "نُضِيفُ تَاءً فِي الْأَوَّلِ وَنُونًا (ـْنَ) فِي الْآخِرِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
      color: "emerald",
      singular: {
        form: "أَفْعُلُ", example: "أَنْصُرُ", meaning: "I help",
        pronoun: "أَنَا", prefix: "أَ", suffix: "—", prefixAr: "هَمْزَة",
        base: "ـنْصُرُ", pattern: "Add prefix أَ (hamza) for 'I'",
        patternAr: "نُضِيفُ هَمْزَةَ الْمُضَارَعَةِ (أَ) فِي أَوَّلِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "—", example: "—", meaning: "—",
        pronoun: "—", prefix: "—", suffix: "—", prefixAr: "—",
        base: "—", pattern: "No dual form for 1st person",
        patternAr: "لَا مُثَنَّى لِلْمُتَكَلِّمِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "نَفْعُلُ", example: "نَنْصُرُ", meaning: "We help",
        pronoun: "نَحْنُ", prefix: "نَـ", suffix: "—", prefixAr: "نُون",
        base: "ـنْصُرُ", pattern: "Add prefix نَـ (nun) for 'we'",
        patternAr: "نُضِيفُ نُونَ الْمُضَارَعَةِ (نَـ) فِي أَوَّلِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    }
  ];

  // Verb categories - Sahih (صحيح) verbs only for Mudari
  const verbCategories = [
    {
      id: "salim",
      name: { ar: "الصَّحِيحُ السَّالِمُ", en: "Sound Verb (Salim)" },
      description: "No weak letters, hamza, or doubled letters",
      color: "emerald",
      verbs: [
        {
          root: "ن-ص-ر",
          base: "يَنْصُرُ",
          madiBase: "نَصَرَ",
          meaning: { ar: "أَعَانَ", en: "to help" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَنْصُرُ" },
            { pronoun: "هِيَ", form: "تَنْصُرُ" },
            { pronoun: "هُمَا (م)", form: "يَنْصُرَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَنْصُرَانِ" },
            { pronoun: "هُمْ", form: "يَنْصُرُونَ" },
            { pronoun: "هُنَّ", form: "يَنْصُرْنَ" },
            { pronoun: "أَنْتَ", form: "تَنْصُرُ" },
            { pronoun: "أَنْتِ", form: "تَنْصُرِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَنْصُرَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَنْصُرُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَنْصُرْنَ" },
            { pronoun: "أَنَا", form: "أَنْصُرُ" },
            { pronoun: "نَحْنُ", form: "نَنْصُرُ" }
          ]
        },
        {
          root: "ك-ت-ب",
          base: "يَكْتُبُ",
          madiBase: "كَتَبَ",
          meaning: { ar: "سَطَّرَ", en: "to write" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَكْتُبُ" },
            { pronoun: "هِيَ", form: "تَكْتُبُ" },
            { pronoun: "هُمَا (م)", form: "يَكْتُبَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَكْتُبَانِ" },
            { pronoun: "هُمْ", form: "يَكْتُبُونَ" },
            { pronoun: "هُنَّ", form: "يَكْتُبْنَ" },
            { pronoun: "أَنْتَ", form: "تَكْتُبُ" },
            { pronoun: "أَنْتِ", form: "تَكْتُبِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَكْتُبَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَكْتُبُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَكْتُبْنَ" },
            { pronoun: "أَنَا", form: "أَكْتُبُ" },
            { pronoun: "نَحْنُ", form: "نَكْتُبُ" }
          ]
        },
        {
          root: "ج-ل-س",
          base: "يَجْلِسُ",
          madiBase: "جَلَسَ",
          meaning: { ar: "قَعَدَ", en: "to sit" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَجْلِسُ" },
            { pronoun: "هِيَ", form: "تَجْلِسُ" },
            { pronoun: "هُمَا (م)", form: "يَجْلِسَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَجْلِسَانِ" },
            { pronoun: "هُمْ", form: "يَجْلِسُونَ" },
            { pronoun: "هُنَّ", form: "يَجْلِسْنَ" },
            { pronoun: "أَنْتَ", form: "تَجْلِسُ" },
            { pronoun: "أَنْتِ", form: "تَجْلِسِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَجْلِسَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَجْلِسُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَجْلِسْنَ" },
            { pronoun: "أَنَا", form: "أَجْلِسُ" },
            { pronoun: "نَحْنُ", form: "نَجْلِسُ" }
          ]
        },
        {
          root: "ذ-ه-ب",
          base: "يَذْهَبُ",
          madiBase: "ذَهَبَ",
          meaning: { ar: "مَضَى", en: "to go" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَذْهَبُ" },
            { pronoun: "هِيَ", form: "تَذْهَبُ" },
            { pronoun: "هُمَا (م)", form: "يَذْهَبَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَذْهَبَانِ" },
            { pronoun: "هُمْ", form: "يَذْهَبُونَ" },
            { pronoun: "هُنَّ", form: "يَذْهَبْنَ" },
            { pronoun: "أَنْتَ", form: "تَذْهَبُ" },
            { pronoun: "أَنْتِ", form: "تَذْهَبِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَذْهَبَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَذْهَبُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَذْهَبْنَ" },
            { pronoun: "أَنَا", form: "أَذْهَبُ" },
            { pronoun: "نَحْنُ", form: "نَذْهَبُ" }
          ]
        },
        {
          root: "ف-ت-ح",
          base: "يَفْتَحُ",
          madiBase: "فَتَحَ",
          meaning: { ar: "أَزَالَ الْإِغْلَاقَ", en: "to open" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَفْتَحُ" },
            { pronoun: "هِيَ", form: "تَفْتَحُ" },
            { pronoun: "هُمَا (م)", form: "يَفْتَحَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَفْتَحَانِ" },
            { pronoun: "هُمْ", form: "يَفْتَحُونَ" },
            { pronoun: "هُنَّ", form: "يَفْتَحْنَ" },
            { pronoun: "أَنْتَ", form: "تَفْتَحُ" },
            { pronoun: "أَنْتِ", form: "تَفْتَحِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَفْتَحَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَفْتَحُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَفْتَحْنَ" },
            { pronoun: "أَنَا", form: "أَفْتَحُ" },
            { pronoun: "نَحْنُ", form: "نَفْتَحُ" }
          ]
        },
        {
          root: "خ-ر-ج",
          base: "يَخْرُجُ",
          madiBase: "خَرَجَ",
          meaning: { ar: "بَرَزَ", en: "to exit" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَخْرُجُ" },
            { pronoun: "هِيَ", form: "تَخْرُجُ" },
            { pronoun: "هُمَا (م)", form: "يَخْرُجَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَخْرُجَانِ" },
            { pronoun: "هُمْ", form: "يَخْرُجُونَ" },
            { pronoun: "هُنَّ", form: "يَخْرُجْنَ" },
            { pronoun: "أَنْتَ", form: "تَخْرُجُ" },
            { pronoun: "أَنْتِ", form: "تَخْرُجِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَخْرُجَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَخْرُجُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَخْرُجْنَ" },
            { pronoun: "أَنَا", form: "أَخْرُجُ" },
            { pronoun: "نَحْنُ", form: "نَخْرُجُ" }
          ]
        },
        {
          root: "د-خ-ل",
          base: "يَدْخُلُ",
          madiBase: "دَخَلَ",
          meaning: { ar: "وَلَجَ", en: "to enter" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَدْخُلُ" },
            { pronoun: "هِيَ", form: "تَدْخُلُ" },
            { pronoun: "هُمَا (م)", form: "يَدْخُلَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَدْخُلَانِ" },
            { pronoun: "هُمْ", form: "يَدْخُلُونَ" },
            { pronoun: "هُنَّ", form: "يَدْخُلْنَ" },
            { pronoun: "أَنْتَ", form: "تَدْخُلُ" },
            { pronoun: "أَنْتِ", form: "تَدْخُلِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَدْخُلَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَدْخُلُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَدْخُلْنَ" },
            { pronoun: "أَنَا", form: "أَدْخُلُ" },
            { pronoun: "نَحْنُ", form: "نَدْخُلُ" }
          ]
        },
        {
          root: "ع-ل-م",
          base: "يَعْلَمُ",
          madiBase: "عَلِمَ",
          meaning: { ar: "عَرَفَ", en: "to know" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَعْلَمُ" },
            { pronoun: "هِيَ", form: "تَعْلَمُ" },
            { pronoun: "هُمَا (م)", form: "يَعْلَمَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَعْلَمَانِ" },
            { pronoun: "هُمْ", form: "يَعْلَمُونَ" },
            { pronoun: "هُنَّ", form: "يَعْلَمْنَ" },
            { pronoun: "أَنْتَ", form: "تَعْلَمُ" },
            { pronoun: "أَنْتِ", form: "تَعْلَمِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَعْلَمَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَعْلَمُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَعْلَمْنَ" },
            { pronoun: "أَنَا", form: "أَعْلَمُ" },
            { pronoun: "نَحْنُ", form: "نَعْلَمُ" }
          ]
        }
      ]
    },
    {
      id: "mahmuz-faa",
      name: { ar: "الْمَهْمُوزُ الْفَاءِ", en: "Hamzated (First Letter)" },
      description: "First root letter is hamza (ء)",
      color: "blue",
      verbs: [
        {
          root: "أ-ك-ل",
          base: "يَأْكُلُ",
          madiBase: "أَكَلَ",
          meaning: { ar: "تَنَاوَلَ", en: "to eat" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَأْكُلُ" },
            { pronoun: "هِيَ", form: "تَأْكُلُ" },
            { pronoun: "هُمَا (م)", form: "يَأْكُلَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَأْكُلَانِ" },
            { pronoun: "هُمْ", form: "يَأْكُلُونَ" },
            { pronoun: "هُنَّ", form: "يَأْكُلْنَ" },
            { pronoun: "أَنْتَ", form: "تَأْكُلُ" },
            { pronoun: "أَنْتِ", form: "تَأْكُلِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَأْكُلَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَأْكُلُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَأْكُلْنَ" },
            { pronoun: "أَنَا", form: "آكُلُ" },
            { pronoun: "نَحْنُ", form: "نَأْكُلُ" }
          ]
        },
        {
          root: "أ-خ-ذ",
          base: "يَأْخُذُ",
          madiBase: "أَخَذَ",
          meaning: { ar: "تَنَاوَلَ", en: "to take" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَأْخُذُ" },
            { pronoun: "هِيَ", form: "تَأْخُذُ" },
            { pronoun: "هُمَا (م)", form: "يَأْخُذَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَأْخُذَانِ" },
            { pronoun: "هُمْ", form: "يَأْخُذُونَ" },
            { pronoun: "هُنَّ", form: "يَأْخُذْنَ" },
            { pronoun: "أَنْتَ", form: "تَأْخُذُ" },
            { pronoun: "أَنْتِ", form: "تَأْخُذِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَأْخُذَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَأْخُذُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَأْخُذْنَ" },
            { pronoun: "أَنَا", form: "آخُذُ" },
            { pronoun: "نَحْنُ", form: "نَأْخُذُ" }
          ]
        },
        {
          root: "أ-م-ر",
          base: "يَأْمُرُ",
          madiBase: "أَمَرَ",
          meaning: { ar: "طَلَبَ", en: "to command" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَأْمُرُ" },
            { pronoun: "هِيَ", form: "تَأْمُرُ" },
            { pronoun: "هُمَا (م)", form: "يَأْمُرَانِ" },
            { pronoun: "هُمَا (ف)", form: "تَأْمُرَانِ" },
            { pronoun: "هُمْ", form: "يَأْمُرُونَ" },
            { pronoun: "هُنَّ", form: "يَأْمُرْنَ" },
            { pronoun: "أَنْتَ", form: "تَأْمُرُ" },
            { pronoun: "أَنْتِ", form: "تَأْمُرِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَأْمُرَانِ" },
            { pronoun: "أَنْتُمْ", form: "تَأْمُرُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَأْمُرْنَ" },
            { pronoun: "أَنَا", form: "آمُرُ" },
            { pronoun: "نَحْنُ", form: "نَأْمُرُ" }
          ]
        }
      ]
    },
    {
      id: "mahmuz-lam",
      name: { ar: "الْمَهْمُوزُ اللَّامِ", en: "Hamzated (Last Letter)" },
      description: "Last root letter is hamza (ء)",
      color: "indigo",
      verbs: [
        {
          root: "ق-ر-أ",
          base: "يَقْرَأُ",
          madiBase: "قَرَأَ",
          meaning: { ar: "تَلَا", en: "to read" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَقْرَأُ" },
            { pronoun: "هِيَ", form: "تَقْرَأُ" },
            { pronoun: "هُمَا (م)", form: "يَقْرَآنِ" },
            { pronoun: "هُمَا (ف)", form: "تَقْرَآنِ" },
            { pronoun: "هُمْ", form: "يَقْرَأُونَ" },
            { pronoun: "هُنَّ", form: "يَقْرَأْنَ" },
            { pronoun: "أَنْتَ", form: "تَقْرَأُ" },
            { pronoun: "أَنْتِ", form: "تَقْرَئِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَقْرَآنِ" },
            { pronoun: "أَنْتُمْ", form: "تَقْرَأُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَقْرَأْنَ" },
            { pronoun: "أَنَا", form: "أَقْرَأُ" },
            { pronoun: "نَحْنُ", form: "نَقْرَأُ" }
          ]
        },
        {
          root: "ب-د-أ",
          base: "يَبْدَأُ",
          madiBase: "بَدَأَ",
          meaning: { ar: "شَرَعَ", en: "to begin" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَبْدَأُ" },
            { pronoun: "هِيَ", form: "تَبْدَأُ" },
            { pronoun: "هُمَا (م)", form: "يَبْدَآنِ" },
            { pronoun: "هُمَا (ف)", form: "تَبْدَآنِ" },
            { pronoun: "هُمْ", form: "يَبْدَأُونَ" },
            { pronoun: "هُنَّ", form: "يَبْدَأْنَ" },
            { pronoun: "أَنْتَ", form: "تَبْدَأُ" },
            { pronoun: "أَنْتِ", form: "تَبْدَئِينَ" },
            { pronoun: "أَنْتُمَا", form: "تَبْدَآنِ" },
            { pronoun: "أَنْتُمْ", form: "تَبْدَأُونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَبْدَأْنَ" },
            { pronoun: "أَنَا", form: "أَبْدَأُ" },
            { pronoun: "نَحْنُ", form: "نَبْدَأُ" }
          ]
        }
      ]
    },
    {
      id: "mudhaaf",
      name: { ar: "الْمُضَعَّفُ", en: "Doubled Verb (Mudha'af)" },
      description: "2nd and 3rd root letters are the same",
      color: "purple",
      verbs: [
        {
          root: "ر-د-د",
          base: "يَرُدُّ",
          madiBase: "رَدَّ",
          meaning: { ar: "أَرْجَعَ", en: "to return" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَرُدُّ" },
            { pronoun: "هِيَ", form: "تَرُدُّ" },
            { pronoun: "هُمَا (م)", form: "يَرُدَّانِ" },
            { pronoun: "هُمَا (ف)", form: "تَرُدَّانِ" },
            { pronoun: "هُمْ", form: "يَرُدُّونَ" },
            { pronoun: "هُنَّ", form: "يَرْدُدْنَ" },
            { pronoun: "أَنْتَ", form: "تَرُدُّ" },
            { pronoun: "أَنْتِ", form: "تَرُدِّينَ" },
            { pronoun: "أَنْتُمَا", form: "تَرُدَّانِ" },
            { pronoun: "أَنْتُمْ", form: "تَرُدُّونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَرْدُدْنَ" },
            { pronoun: "أَنَا", form: "أَرُدُّ" },
            { pronoun: "نَحْنُ", form: "نَرُدُّ" }
          ]
        },
        {
          root: "م-د-د",
          base: "يَمُدُّ",
          madiBase: "مَدَّ",
          meaning: { ar: "بَسَطَ", en: "to extend" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَمُدُّ" },
            { pronoun: "هِيَ", form: "تَمُدُّ" },
            { pronoun: "هُمَا (م)", form: "يَمُدَّانِ" },
            { pronoun: "هُمَا (ف)", form: "تَمُدَّانِ" },
            { pronoun: "هُمْ", form: "يَمُدُّونَ" },
            { pronoun: "هُنَّ", form: "يَمْدُدْنَ" },
            { pronoun: "أَنْتَ", form: "تَمُدُّ" },
            { pronoun: "أَنْتِ", form: "تَمُدِّينَ" },
            { pronoun: "أَنْتُمَا", form: "تَمُدَّانِ" },
            { pronoun: "أَنْتُمْ", form: "تَمُدُّونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَمْدُدْنَ" },
            { pronoun: "أَنَا", form: "أَمُدُّ" },
            { pronoun: "نَحْنُ", form: "نَمُدُّ" }
          ]
        },
        {
          root: "ظ-ن-ن",
          base: "يَظُنُّ",
          madiBase: "ظَنَّ",
          meaning: { ar: "اعْتَقَدَ", en: "to think/suppose" },
          conjugations: [
            { pronoun: "هُوَ", form: "يَظُنُّ" },
            { pronoun: "هِيَ", form: "تَظُنُّ" },
            { pronoun: "هُمَا (م)", form: "يَظُنَّانِ" },
            { pronoun: "هُمَا (ف)", form: "تَظُنَّانِ" },
            { pronoun: "هُمْ", form: "يَظُنُّونَ" },
            { pronoun: "هُنَّ", form: "يَظْنُنَّ" },
            { pronoun: "أَنْتَ", form: "تَظُنُّ" },
            { pronoun: "أَنْتِ", form: "تَظُنِّينَ" },
            { pronoun: "أَنْتُمَا", form: "تَظُنَّانِ" },
            { pronoun: "أَنْتُمْ", form: "تَظُنُّونَ" },
            { pronoun: "أَنْتُنَّ", form: "تَظْنُنَّ" },
            { pronoun: "أَنَا", form: "أَظُنُّ" },
            { pronoun: "نَحْنُ", form: "نَظُنُّ" }
          ]
        }
      ]
    }
  ];

  // Quiz questions for Mudari
  const quizQuestions = [
    {
      question: "What is the present tense of 'He helps'?",
      questionAr: "مَا الْمُضَارِعُ لِـ 'He helps'؟",
      options: ["يَنْصُرُ", "تَنْصُرُ", "أَنْصُرُ", "نَنْصُرُ"],
      correct: 0
    },
    {
      question: "What does أَكْتُبُ mean?",
      questionAr: "مَا مَعْنَى أَكْتُبُ؟",
      options: ["He writes", "She writes", "I write", "We write"],
      correct: 2
    },
    {
      question: "Choose the correct form for 'She sits':",
      questionAr: "اخْتَرْ لِـ 'She sits':",
      options: ["يَجْلِسُ", "تَجْلِسُ", "أَجْلِسُ", "نَجْلِسُ"],
      correct: 1
    },
    {
      question: "What is 'They (m) go' in Arabic?",
      questionAr: "مَا 'They (m) go' بِالْعَرَبِيَّةِ؟",
      options: ["يَذْهَبُ", "تَذْهَبُ", "يَذْهَبُونَ", "نَذْهَبُ"],
      correct: 2
    },
    {
      question: "What does نَخْرُجُ mean?",
      questionAr: "مَا مَعْنَى نَخْرُجُ؟",
      options: ["I exit", "He exits", "We exit", "You exit"],
      correct: 2
    },
    {
      question: "Choose 'You (m.s) enter':",
      questionAr: "اخْتَرْ 'You (m.s) enter':",
      options: ["أَدْخُلُ", "يَدْخُلُ", "تَدْخُلُ", "نَدْخُلُ"],
      correct: 2
    },
    {
      question: "What prefix is used for 'I' in Mudari?",
      questionAr: "مَا حَرْفُ الْمُضَارَعَةِ لِلْمُتَكَلِّمِ؟",
      options: ["يَـ", "تَـ", "أَ", "نَـ"],
      correct: 2
    },
    {
      question: "What is 'We read' in Arabic?",
      questionAr: "مَا 'We read' بِالْعَرَبِيَّةِ؟",
      options: ["يَقْرَأُ", "تَقْرَأُ", "أَقْرَأُ", "نَقْرَأُ"],
      correct: 3
    },
    {
      question: "Choose the correct form for 'You (f.s) know':",
      questionAr: "اخْتَرْ لِـ 'You (f.s) know':",
      options: ["تَعْلَمُ", "تَعْلَمِينَ", "يَعْلَمُ", "أَعْلَمُ"],
      correct: 1
    },
    {
      question: "What suffix is added for masculine plural?",
      questionAr: "مَا عَلَامَةُ جَمْعِ الْمُذَكَّرِ؟",
      options: ["ـَانِ", "ـُونَ", "ـْنَ", "ـِينَ"],
      correct: 1
    }
  ];

  const colorMap = {
    purple: { bg: 'bg-purple-50', header: 'bg-purple-100', text: 'text-purple-800', light: 'text-purple-600', border: 'border-purple-200', btn: 'bg-purple-500' },
    pink: { bg: 'bg-pink-50', header: 'bg-pink-100', text: 'text-pink-800', light: 'text-pink-600', border: 'border-pink-200', btn: 'bg-pink-500' },
    blue: { bg: 'bg-blue-50', header: 'bg-blue-100', text: 'text-blue-800', light: 'text-blue-600', border: 'border-blue-200', btn: 'bg-blue-500' },
    rose: { bg: 'bg-rose-50', header: 'bg-rose-100', text: 'text-rose-800', light: 'text-rose-600', border: 'border-rose-200', btn: 'bg-rose-500' },
    emerald: { bg: 'bg-emerald-50', header: 'bg-emerald-100', text: 'text-emerald-800', light: 'text-emerald-600', border: 'border-emerald-200', btn: 'bg-emerald-500' },
    amber: { bg: 'bg-amber-50', header: 'bg-amber-100', text: 'text-amber-800', light: 'text-amber-600', border: 'border-amber-200', btn: 'bg-amber-500' },
    indigo: { bg: 'bg-indigo-50', header: 'bg-indigo-100', text: 'text-indigo-800', light: 'text-indigo-600', border: 'border-indigo-200', btn: 'bg-indigo-500' },
    cyan: { bg: 'bg-cyan-50', header: 'bg-cyan-100', text: 'text-cyan-800', light: 'text-cyan-600', border: 'border-cyan-200', btn: 'bg-cyan-500' }
  };

  // Conjugation order for step-by-step
  const conjugationOrder = [
    { index: 0, label: "غَائِبٌ مُذَكَّرٌ مُفْرَدٌ", en: "He" },
    { index: 2, label: "غَائِبٌ مُذَكَّرٌ مُثَنًّى", en: "They two (m)" },
    { index: 4, label: "غَائِبٌ مُذَكَّرٌ جَمْعٌ", en: "They (m)" },
    { index: 1, label: "غَائِبٌ مُؤَنَّثٌ مُفْرَدٌ", en: "She" },
    { index: 3, label: "غَائِبٌ مُؤَنَّثٌ مُثَنًّى", en: "They two (f)" },
    { index: 5, label: "غَائِبٌ مُؤَنَّثٌ جَمْعٌ", en: "They (f)" },
    { index: 6, label: "مُخَاطَبٌ مُذَكَّرٌ مُفْرَدٌ", en: "You (m.s)" },
    { index: 7, label: "مُخَاطَبٌ مُؤَنَّثٌ مُفْرَدٌ", en: "You (f.s)" },
    { index: 8, label: "مُخَاطَبٌ مُثَنًّى", en: "You two" },
    { index: 9, label: "مُخَاطَبٌ مُذَكَّرٌ جَمْعٌ", en: "You (m.pl)" },
    { index: 10, label: "مُخَاطَبٌ مُؤَنَّثٌ جَمْعٌ", en: "You (f.pl)" },
    { index: 11, label: "مُتَكَلِّمٌ مُفْرَدٌ", en: "I" },
    { index: 12, label: "مُتَكَلِّمٌ جَمْعٌ", en: "We" }
  ];

  const handleCellClick = (data, rowName) => {
    if (data.form === '—') return;
    setPopupData({ ...data, rowName, numberType: data.numberType });
    setShowPopup(true);
  };

  const handleVerbSelect = (categoryId, verbIndex) => {
    const category = verbCategories.find(c => c.id === categoryId);
    setSelectedVerb({ category, verb: category.verbs[verbIndex] });
    setShowAllConjugations(false);
    setCurrentConjugationIndex(0);
  };

  const handleNextConjugation = () => {
    if (currentConjugationIndex < conjugationOrder.length - 1) {
      setCurrentConjugationIndex(currentConjugationIndex + 1);
    }
  };

  const handlePrevConjugation = () => {
    if (currentConjugationIndex > 0) {
      setCurrentConjugationIndex(currentConjugationIndex - 1);
    }
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

  const ConjugationCell = ({ data, colors, onClick, rowName }) => {
    if (data.form === '—') {
      return <div className="text-center py-3 text-gray-400">—</div>;
    }

    return (
      <button
        onClick={() => onClick(data, rowName)}
        className="w-full text-center py-2 sm:py-3 hover:bg-white/50 transition-colors cursor-pointer"
      >
        <div className="arabic-text text-xl sm:text-2xl font-bold text-gray-800 mb-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>
          {data.example}
        </div>
        <div className={`arabic-text text-xs sm:text-sm ${colors.light}`} style={{ fontFamily: 'var(--font-arabic)' }}>
          {data.form}
        </div>
      </button>
    );
  };

  // Render verb conjugation table
  const renderVerbTable = (verb) => {
    const rows = [
      { name: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd M" }, color: "purple", indices: [0, 2, 4] },
      { name: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd F" }, color: "pink", indices: [1, 3, 5] },
      { name: { ar: "مُخَاطَبٌ مُذَكَّرٌ", en: "2nd M" }, color: "blue", indices: [6, 8, 9] },
      { name: { ar: "مُخَاطَبٌ مُؤَنَّثٌ", en: "2nd F" }, color: "rose", indices: [7, 8, 10] },
      { name: { ar: "مُتَكَلِّمٌ", en: "1st" }, color: "emerald", indices: [11, -1, 12] }
    ];

    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-2 sm:p-3">
          <div className="grid grid-cols-4 text-center text-xs sm:text-sm">
            <div className="border-r border-white/20">Type</div>
            <div className="border-r border-white/20">مُفْرَدٌ</div>
            <div className="border-r border-white/20">مُثَنًّى</div>
            <div>جَمْعٌ</div>
          </div>
        </div>
        {rows.map((row, idx) => {
          const colors = colorMap[row.color];
          return (
            <div key={idx} className={`grid grid-cols-4 border-b last:border-b-0 border-gray-200`}>
              <div className={`${colors.header} ${colors.text} p-2 flex flex-col justify-center items-center text-center border-r border-gray-200`}>
                <span className="arabic-text text-xs sm:text-sm font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>{row.name.ar}</span>
                <span className="text-xs opacity-75">{row.name.en}</span>
              </div>
              {row.indices.map((conjIdx, cellIdx) => (
                <div key={cellIdx} className={`${colors.bg} ${cellIdx < 2 ? 'border-r border-gray-200' : ''} text-center py-2`}>
                  {conjIdx >= 0 ? (
                    <>
                      <div className="arabic-text text-lg sm:text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {verb.conjugations[conjIdx].form}
                      </div>
                      <div className={`arabic-text text-xs ${colors.light}`} style={{ fontFamily: 'var(--font-arabic)' }}>
                        {verb.conjugations[conjIdx].pronoun}
                      </div>
                    </>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-3 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              تَصْرِيفُ الْمُضَارِعِ
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">Present Tense Conjugation</p>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Screen Navigation */}
        <div className="max-w-4xl mx-auto px-3 pb-2 flex justify-center gap-2">
          {[
            { id: 'chart', label: 'Chart', labelAr: 'الْجَدْوَلُ' },
            { id: 'verbs', label: 'Verbs', labelAr: 'الْأَفْعَالُ' },
            { id: 'quiz', label: 'Quiz', labelAr: 'اخْتِبَارٌ' }
          ].map(screen => (
            <button
              key={screen.id}
              onClick={() => {
                setCurrentScreen(screen.id);
                setSelectedVerb(null);
              }}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentScreen === screen.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-3 sm:px-4 py-4">

        {/* SCREEN 1: Conjugation Chart */}
        {currentScreen === 'chart' && (
          <>
            {/* Chart Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-xl overflow-hidden">
              <div className="p-3 text-center">
                <p className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>الْوَزْنُ: يَفْعُلُ</p>
                <p className="text-sm text-emerald-100">Model verb: يَنْصُرُ (to help)</p>
              </div>
              <div className="grid grid-cols-4 text-center text-xs sm:text-sm border-t border-white/20">
                <div className="p-2 border-r border-white/20">Type</div>
                <div className="p-2 border-r border-white/20">
                  <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>مُفْرَدٌ</span>
                  <span className="block text-xs opacity-80">Singular</span>
                </div>
                <div className="p-2 border-r border-white/20">
                  <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>مُثَنًّى</span>
                  <span className="block text-xs opacity-80">Dual</span>
                </div>
                <div className="p-2">
                  <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>جَمْعٌ</span>
                  <span className="block text-xs opacity-80">Plural</span>
                </div>
              </div>
            </div>

            {/* Chart Body */}
            <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 overflow-hidden">
              {conjugationChart.map((row, idx) => {
                const colors = colorMap[row.color];
                const isLast = idx === conjugationChart.length - 1;

                return (
                  <div key={idx} className={`grid grid-cols-4 ${!isLast ? 'border-b border-gray-200' : ''}`}>
                    <div className={`${colors.header} ${colors.text} p-2 sm:p-3 flex flex-col justify-center items-center border-r border-gray-200`}>
                      <div className="arabic-text text-xs sm:text-sm font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {row.rowName.ar}
                      </div>
                      <div className="text-xs opacity-75">{row.rowName.en}</div>
                    </div>
                    <div className={`${colors.bg} border-r border-gray-200`}>
                      <ConjugationCell data={row.singular} colors={colors} onClick={handleCellClick} rowName={row.rowName} />
                    </div>
                    <div className={`${colors.bg} border-r border-gray-200`}>
                      <ConjugationCell data={row.dual} colors={colors} onClick={handleCellClick} rowName={row.rowName} />
                    </div>
                    <div className={colors.bg}>
                      <ConjugationCell data={row.plural} colors={colors} onClick={handleCellClick} rowName={row.rowName} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mudari Prefixes Info */}
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <h3 className="font-semibold text-emerald-800 mb-2 text-center">حُرُوفُ الْمُضَارَعَةِ (Mudari Prefixes)</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="bg-white px-3 py-1 rounded-lg border border-emerald-200">
                  <span className="arabic-text text-lg text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>أَ</span>
                  <span className="text-xs text-gray-500 ml-1">I</span>
                </span>
                <span className="bg-white px-3 py-1 rounded-lg border border-emerald-200">
                  <span className="arabic-text text-lg text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>نَـ</span>
                  <span className="text-xs text-gray-500 ml-1">We</span>
                </span>
                <span className="bg-white px-3 py-1 rounded-lg border border-emerald-200">
                  <span className="arabic-text text-lg text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>يَـ</span>
                  <span className="text-xs text-gray-500 ml-1">He/They</span>
                </span>
                <span className="bg-white px-3 py-1 rounded-lg border border-emerald-200">
                  <span className="arabic-text text-lg text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>تَـ</span>
                  <span className="text-xs text-gray-500 ml-1">She/You</span>
                </span>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
              <p className="text-sm text-amber-700">
                <span className="font-semibold">Tip:</span> Tap any conjugation to see the pattern explanation
              </p>
            </div>
          </>
        )}

        {/* SCREEN 2: Verb Categories */}
        {currentScreen === 'verbs' && !selectedVerb && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h2 className="arabic-text text-xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                أَنْوَاعُ الْأَفْعَالِ
              </h2>
              <p className="text-sm text-gray-500">Verb Categories - Select to practice</p>
            </div>

            {verbCategories.map((category) => {
              const colors = colorMap[category.color];
              return (
                <div key={category.id} className={`rounded-xl border ${colors.border} overflow-hidden`}>
                  <div className={`${colors.header} p-3`}>
                    <h3 className={`arabic-text text-lg font-bold ${colors.text}`} style={{ fontFamily: 'var(--font-arabic)' }}>
                      {category.name.ar}
                    </h3>
                    <p className={`text-sm ${colors.light}`}>{category.name.en} - {category.description}</p>
                  </div>
                  <div className={`${colors.bg} p-3 grid grid-cols-2 sm:grid-cols-3 gap-2`}>
                    {category.verbs.map((verb, vIdx) => (
                      <button
                        key={vIdx}
                        onClick={() => handleVerbSelect(category.id, vIdx)}
                        className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all text-center"
                      >
                        <div className="arabic-text text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                          {verb.base}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{verb.meaning.en}</div>
                        <div className="text-xs text-gray-400">{verb.root}</div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SCREEN 2b: Selected Verb Practice */}
        {currentScreen === 'verbs' && selectedVerb && (
          <div className="space-y-4">
            {/* Verb Header */}
            <div className={`rounded-xl ${colorMap[selectedVerb.category.color].bg} border ${colorMap[selectedVerb.category.color].border} p-4`}>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedVerb(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="text-center flex-1">
                  <div className="arabic-text text-3xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {selectedVerb.verb.base}
                  </div>
                  <p className="text-sm text-gray-600">{selectedVerb.verb.meaning.en} ({selectedVerb.verb.root})</p>
                </div>
                <div className="w-6"></div>
              </div>
            </div>

            {/* Toggle View */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setShowAllConjugations(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !showAllConjugations ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Step by Step
              </button>
              <button
                onClick={() => setShowAllConjugations(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showAllConjugations ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Show All
              </button>
            </div>

            {/* Step by Step View */}
            {!showAllConjugations && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="mb-4">
                  <span className="text-xs text-gray-500">{currentConjugationIndex + 1} / {conjugationOrder.length}</span>
                  <div className="h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all"
                      style={{ width: `${((currentConjugationIndex + 1) / conjugationOrder.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="arabic-text text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {conjugationOrder[currentConjugationIndex].label}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {conjugationOrder[currentConjugationIndex].en}
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6">
                  <div className="arabic-text text-lg text-emerald-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {selectedVerb.verb.conjugations[conjugationOrder[currentConjugationIndex].index].pronoun}
                  </div>
                  <div className="arabic-text text-5xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {selectedVerb.verb.conjugations[conjugationOrder[currentConjugationIndex].index].form}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handlePrevConjugation}
                    disabled={currentConjugationIndex === 0}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      currentConjugationIndex > 0
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextConjugation}
                    disabled={currentConjugationIndex === conjugationOrder.length - 1}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      currentConjugationIndex < conjugationOrder.length - 1
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Show All View */}
            {showAllConjugations && renderVerbTable(selectedVerb.verb)}
          </div>
        )}

        {/* SCREEN 3: Quiz */}
        {currentScreen === 'quiz' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 sm:p-4">
              <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
                اخْتِبَارٌ قَصِيرٌ
              </h2>
              <p className="text-emerald-100 text-center text-sm">Quick Quiz</p>
            </div>

            <div className="p-4 sm:p-6">
              {!quizComplete ? (
                <>
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span>Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 transition-all"
                        style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="text-center mb-6">
                    <p className="arabic-text text-lg text-gray-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {quizQuestions[currentQuestion].questionAr}
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-800">
                      {quizQuestions[currentQuestion].question}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {quizQuestions[currentQuestion].options.map((option, idx) => {
                      let btnClass = "p-4 rounded-xl border-2 text-center transition-all ";
                      if (showResult) {
                        if (idx === quizQuestions[currentQuestion].correct) {
                          btnClass += "border-green-500 bg-green-50 text-green-700";
                        } else if (idx === selectedAnswer) {
                          btnClass += "border-red-500 bg-red-50 text-red-700";
                        } else {
                          btnClass += "border-gray-200 bg-gray-50 text-gray-400";
                        }
                      } else {
                        btnClass += idx === selectedAnswer
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-emerald-300";
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(idx)}
                          disabled={showResult}
                          className={btnClass}
                        >
                          <span className="arabic-text text-xl sm:text-2xl font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback */}
                  {showResult && (
                    <div className={`p-3 rounded-lg mb-4 text-center ${
                      selectedAnswer === quizQuestions[currentQuestion].correct
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedAnswer === quizQuestions[currentQuestion].correct
                        ? <p className="font-semibold">Correct!</p>
                        : <p className="font-semibold">
                            The answer is: <span className="arabic-text text-xl" style={{ fontFamily: 'var(--font-arabic)' }}>
                              {quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].correct]}
                            </span>
                          </p>
                      }
                    </div>
                  )}

                  {/* Action */}
                  <div className="flex justify-center">
                    {!showResult ? (
                      <button
                        onClick={handleCheckAnswer}
                        disabled={selectedAnswer === null}
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${
                          selectedAnswer !== null
                            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 rounded-lg font-medium bg-emerald-500 text-white hover:bg-emerald-600"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-6xl mb-4">
                    {score >= quizQuestions.length * 0.8 ? '🌟' : score >= quizQuestions.length * 0.5 ? '👍' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Score: <span className="font-bold text-emerald-600">{score}</span> / {quizQuestions.length}
                  </p>
                  <div className="mb-6">
                    {score === quizQuestions.length && <p className="text-green-600 font-semibold">Perfect!</p>}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && <p className="text-green-600 font-semibold">Great job!</p>}
                    {score >= quizQuestions.length * 0.5 && score < quizQuestions.length * 0.8 && <p className="text-amber-600 font-semibold">Good effort!</p>}
                    {score < quizQuestions.length * 0.5 && <p className="text-emerald-600 font-semibold">Keep practicing!</p>}
                  </div>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 rounded-lg font-medium bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Popup Modal - Educational Breakdown */}
      {showPopup && popupData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-gray-200" onClick={e => e.stopPropagation()}>
            {/* Header - Category */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-center">
              <p className="text-white text-sm font-medium">
                {popupData.rowName?.en} {popupData.numberType?.en}
              </p>
            </div>

            {/* Main Content */}
            <div className="p-5 sm:p-6 bg-gradient-to-b from-gray-50 to-white">
              {/* Pronoun */}
              <div className="text-center mb-4">
                <div className="arabic-text text-3xl sm:text-4xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.pronoun}
                </div>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                  {popupData.meaning}
                </span>
              </div>

              {/* Conjugated Verb */}
              <div className="text-center mb-6">
                <div className="arabic-text text-5xl sm:text-6xl font-bold text-teal-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.example}
                </div>
              </div>

              {/* Visual Equation - Prefix + Base + Suffix */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
                {/* Prefix */}
                <div className="border-2 border-blue-500 bg-blue-50 rounded-lg px-3 sm:px-4 py-2">
                  <span className="arabic-text text-xl sm:text-2xl text-blue-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.prefix}
                  </span>
                </div>
                <span className="text-gray-400 text-xl font-bold">+</span>
                {/* Base */}
                <div className="border-2 border-amber-500 bg-amber-50 rounded-lg px-3 sm:px-4 py-2">
                  <span className="arabic-text text-xl sm:text-2xl text-amber-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.base}
                  </span>
                </div>
                {popupData.suffix && popupData.suffix !== '—' && (
                  <>
                    <span className="text-gray-400 text-xl font-bold">+</span>
                    {/* Suffix */}
                    <div className="border-2 border-emerald-500 bg-emerald-50 rounded-lg px-3 sm:px-4 py-2">
                      <span className="arabic-text text-xl sm:text-2xl text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {popupData.suffix}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Prefix Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mb-3">
                <div className="text-blue-600 text-xs mb-2 font-medium">
                  Prefix | حَرْفُ الْمُضَارَعَةِ
                </div>
                <div className="arabic-text text-3xl sm:text-4xl font-bold text-blue-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.prefix}
                </div>
                <div className="arabic-text text-sm text-blue-600 mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.prefixAr}
                </div>
              </div>

              {/* Suffix Section (if applicable) */}
              {popupData.suffix && popupData.suffix !== '—' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <div className="text-emerald-600 text-xs mb-2 font-medium">
                    Suffix | اللَّاحِقَة
                  </div>
                  <div className="arabic-text text-3xl sm:text-4xl font-bold text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.suffix}
                  </div>
                  {popupData.suffixAr && (
                    <div className="arabic-text text-sm text-emerald-600 mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {popupData.suffixAr}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer - Explanation */}
            <div className="bg-gray-100 border-t border-gray-200 px-5 py-4">
              <p className="arabic-text text-center text-gray-700 text-sm sm:text-base mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                {popupData.patternAr}
              </p>
              <p className="text-center text-gray-500 text-xs sm:text-sm">
                {popupData.pattern}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MudariConjugation;
