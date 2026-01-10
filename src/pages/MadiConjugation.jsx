import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MadiConjugation = () => {
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

  // Base conjugation chart using نَصَرَ as model
  const conjugationChart = [
    {
      rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
      color: "purple",
      singular: {
        form: "فَعَلَ", example: "نَصَرَ", meaning: "He helped",
        pronoun: "هُوَ", marker: "—", markerAr: "—",
        base: "نَصَرَ", pattern: "Base form - no suffix added",
        patternAr: "صِيغَةُ الْأَصْلِ - لَا لَاحِقَةَ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "فَعَلَا", example: "نَصَرَا", meaning: "They two (m) helped",
        pronoun: "هُمَا", marker: "ا", markerAr: "أَلِف",
        base: "نَصَرَ", pattern: "Add ا (alif) at the end for dual masculine",
        patternAr: "نُضِيفُ أَلِفَ (ا) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "فَعَلُوا", example: "نَصَرُوا", meaning: "They (m) helped",
        pronoun: "هُمْ", marker: "وا", markerAr: "وَاو + أَلِف",
        base: "نَصَرُ", pattern: "Add وا (waw + alif) for masculine plural",
        patternAr: "نُضِيفُ وَاوًا وَأَلِفًا (وا) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
      color: "pink",
      singular: {
        form: "فَعَلَتْ", example: "نَصَرَتْ", meaning: "She helped",
        pronoun: "هِيَ", marker: "تْ", markerAr: "تَاء سَاكِنَة",
        base: "نَصَرَ", pattern: "Add تْ (ta with sukun) for feminine singular",
        patternAr: "نُضِيفُ تَاءً سَاكِنَةً (تْ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "فَعَلَتَا", example: "نَصَرَتَا", meaning: "They two (f) helped",
        pronoun: "هُمَا", marker: "تَا", markerAr: "تَاء + أَلِف",
        base: "نَصَرَ", pattern: "Add تَا (ta + alif) for feminine dual",
        patternAr: "نُضِيفُ تَاءً وَأَلِفًا (تَا) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "فَعَلْنَ", example: "نَصَرْنَ", meaning: "They (f) helped",
        pronoun: "هُنَّ", marker: "نَ", markerAr: "نُون",
        base: "نَصَرْ", pattern: "Add نَ (nun with fatha) for feminine plural",
        patternAr: "نُضِيفُ نُونًا مَفْتُوحَةً (نَ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
      color: "blue",
      singular: {
        form: "فَعَلْتَ", example: "نَصَرْتَ", meaning: "You (m) helped",
        pronoun: "أَنْتَ", marker: "تَ", markerAr: "تَاء مَفْتُوحَة",
        base: "نَصَرْ", pattern: "Add تَ (ta with fatha) for masculine singular 'you'",
        patternAr: "نُضِيفُ تَاءً مَفْتُوحَةً (تَ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "فَعَلْتُمَا", example: "نَصَرْتُمَا", meaning: "You two helped",
        pronoun: "أَنْتُمَا", marker: "تُمَا", markerAr: "تَاء + مِيم + أَلِف",
        base: "نَصَرْ", pattern: "Add تُمَا for dual 'you two'",
        patternAr: "نُضِيفُ (تُمَا) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "فَعَلْتُمْ", example: "نَصَرْتُمْ", meaning: "You (m.pl) helped",
        pronoun: "أَنْتُمْ", marker: "تُمْ", markerAr: "تَاء + مِيم",
        base: "نَصَرْ", pattern: "Add تُمْ for masculine plural 'you all'",
        patternAr: "نُضِيفُ (تُمْ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُخَاطَبٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
      color: "rose",
      singular: {
        form: "فَعَلْتِ", example: "نَصَرْتِ", meaning: "You (f) helped",
        pronoun: "أَنْتِ", marker: "تِ", markerAr: "تَاء مَكْسُورَة",
        base: "نَصَرْ", pattern: "Add تِ (ta with kasra) for feminine singular 'you'",
        patternAr: "نُضِيفُ تَاءً مَكْسُورَةً (تِ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "فَعَلْتُمَا", example: "نَصَرْتُمَا", meaning: "You two helped",
        pronoun: "أَنْتُمَا", marker: "تُمَا", markerAr: "تَاء + مِيم + أَلِف",
        base: "نَصَرْ", pattern: "Add تُمَا for dual (same as masculine)",
        patternAr: "نُضِيفُ (تُمَا) - مُشْتَرَكٌ بَيْنَ الْمُذَكَّرِ وَالْمُؤَنَّثِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "فَعَلْتُنَّ", example: "نَصَرْتُنَّ", meaning: "You (f.pl) helped",
        pronoun: "أَنْتُنَّ", marker: "تُنَّ", markerAr: "تَاء + نُون مُشَدَّدَة",
        base: "نَصَرْ", pattern: "Add تُنَّ for feminine plural 'you all'",
        patternAr: "نُضِيفُ (تُنَّ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
      color: "emerald",
      singular: {
        form: "فَعَلْتُ", example: "نَصَرْتُ", meaning: "I helped",
        pronoun: "أَنَا", marker: "تُ", markerAr: "تَاء مَضْمُومَة",
        base: "نَصَرْ", pattern: "Add تُ (ta with damma) for 'I'",
        patternAr: "نُضِيفُ تَاءً مَضْمُومَةً (تُ) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "—", example: "—", meaning: "—",
        pronoun: "—", marker: "—", markerAr: "—",
        base: "—", pattern: "No dual form for 1st person",
        patternAr: "لَا مُثَنَّى لِلْمُتَكَلِّمِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "فَعَلْنَا", example: "نَصَرْنَا", meaning: "We helped",
        pronoun: "نَحْنُ", marker: "نَا", markerAr: "نُون + أَلِف",
        base: "نَصَرْ", pattern: "Add نَا for 'we'",
        patternAr: "نُضِيفُ (نَا) فِي آخِرِ الْفِعْلِ",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    }
  ];

  // Verb categories - Sahih (صحيح) verbs only
  const verbCategories = [
    {
      id: "salim",
      name: { ar: "الصَّحِيحُ السَّالِمُ", en: "Sound Verb (Salim)" },
      description: "No weak letters, hamza, or doubled letters",
      color: "emerald",
      verbs: [
        {
          root: "ن-ص-ر",
          base: "نَصَرَ",
          meaning: { ar: "أَعَانَ", en: "to help" },
          conjugations: [
            { pronoun: "هُوَ", form: "نَصَرَ" },
            { pronoun: "هِيَ", form: "نَصَرَتْ" },
            { pronoun: "هُمَا (م)", form: "نَصَرَا" },
            { pronoun: "هُمَا (ف)", form: "نَصَرَتَا" },
            { pronoun: "هُمْ", form: "نَصَرُوا" },
            { pronoun: "هُنَّ", form: "نَصَرْنَ" },
            { pronoun: "أَنْتَ", form: "نَصَرْتَ" },
            { pronoun: "أَنْتِ", form: "نَصَرْتِ" },
            { pronoun: "أَنْتُمَا", form: "نَصَرْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "نَصَرْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "نَصَرْتُنَّ" },
            { pronoun: "أَنَا", form: "نَصَرْتُ" },
            { pronoun: "نَحْنُ", form: "نَصَرْنَا" }
          ]
        },
        {
          root: "ك-ت-ب",
          base: "كَتَبَ",
          meaning: { ar: "سَطَّرَ", en: "to write" },
          conjugations: [
            { pronoun: "هُوَ", form: "كَتَبَ" },
            { pronoun: "هِيَ", form: "كَتَبَتْ" },
            { pronoun: "هُمَا (م)", form: "كَتَبَا" },
            { pronoun: "هُمَا (ف)", form: "كَتَبَتَا" },
            { pronoun: "هُمْ", form: "كَتَبُوا" },
            { pronoun: "هُنَّ", form: "كَتَبْنَ" },
            { pronoun: "أَنْتَ", form: "كَتَبْتَ" },
            { pronoun: "أَنْتِ", form: "كَتَبْتِ" },
            { pronoun: "أَنْتُمَا", form: "كَتَبْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "كَتَبْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "كَتَبْتُنَّ" },
            { pronoun: "أَنَا", form: "كَتَبْتُ" },
            { pronoun: "نَحْنُ", form: "كَتَبْنَا" }
          ]
        },
        {
          root: "ج-ل-س",
          base: "جَلَسَ",
          meaning: { ar: "قَعَدَ", en: "to sit" },
          conjugations: [
            { pronoun: "هُوَ", form: "جَلَسَ" },
            { pronoun: "هِيَ", form: "جَلَسَتْ" },
            { pronoun: "هُمَا (م)", form: "جَلَسَا" },
            { pronoun: "هُمَا (ف)", form: "جَلَسَتَا" },
            { pronoun: "هُمْ", form: "جَلَسُوا" },
            { pronoun: "هُنَّ", form: "جَلَسْنَ" },
            { pronoun: "أَنْتَ", form: "جَلَسْتَ" },
            { pronoun: "أَنْتِ", form: "جَلَسْتِ" },
            { pronoun: "أَنْتُمَا", form: "جَلَسْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "جَلَسْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "جَلَسْتُنَّ" },
            { pronoun: "أَنَا", form: "جَلَسْتُ" },
            { pronoun: "نَحْنُ", form: "جَلَسْنَا" }
          ]
        },
        {
          root: "ذ-ه-ب",
          base: "ذَهَبَ",
          meaning: { ar: "مَضَى", en: "to go" },
          conjugations: [
            { pronoun: "هُوَ", form: "ذَهَبَ" },
            { pronoun: "هِيَ", form: "ذَهَبَتْ" },
            { pronoun: "هُمَا (م)", form: "ذَهَبَا" },
            { pronoun: "هُمَا (ف)", form: "ذَهَبَتَا" },
            { pronoun: "هُمْ", form: "ذَهَبُوا" },
            { pronoun: "هُنَّ", form: "ذَهَبْنَ" },
            { pronoun: "أَنْتَ", form: "ذَهَبْتَ" },
            { pronoun: "أَنْتِ", form: "ذَهَبْتِ" },
            { pronoun: "أَنْتُمَا", form: "ذَهَبْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "ذَهَبْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "ذَهَبْتُنَّ" },
            { pronoun: "أَنَا", form: "ذَهَبْتُ" },
            { pronoun: "نَحْنُ", form: "ذَهَبْنَا" }
          ]
        },
        {
          root: "ف-ت-ح",
          base: "فَتَحَ",
          meaning: { ar: "أَزَالَ الْإِغْلَاقَ", en: "to open" },
          conjugations: [
            { pronoun: "هُوَ", form: "فَتَحَ" },
            { pronoun: "هِيَ", form: "فَتَحَتْ" },
            { pronoun: "هُمَا (م)", form: "فَتَحَا" },
            { pronoun: "هُمَا (ف)", form: "فَتَحَتَا" },
            { pronoun: "هُمْ", form: "فَتَحُوا" },
            { pronoun: "هُنَّ", form: "فَتَحْنَ" },
            { pronoun: "أَنْتَ", form: "فَتَحْتَ" },
            { pronoun: "أَنْتِ", form: "فَتَحْتِ" },
            { pronoun: "أَنْتُمَا", form: "فَتَحْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "فَتَحْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "فَتَحْتُنَّ" },
            { pronoun: "أَنَا", form: "فَتَحْتُ" },
            { pronoun: "نَحْنُ", form: "فَتَحْنَا" }
          ]
        },
        {
          root: "خ-ر-ج",
          base: "خَرَجَ",
          meaning: { ar: "بَرَزَ", en: "to exit" },
          conjugations: [
            { pronoun: "هُوَ", form: "خَرَجَ" },
            { pronoun: "هِيَ", form: "خَرَجَتْ" },
            { pronoun: "هُمَا (م)", form: "خَرَجَا" },
            { pronoun: "هُمَا (ف)", form: "خَرَجَتَا" },
            { pronoun: "هُمْ", form: "خَرَجُوا" },
            { pronoun: "هُنَّ", form: "خَرَجْنَ" },
            { pronoun: "أَنْتَ", form: "خَرَجْتَ" },
            { pronoun: "أَنْتِ", form: "خَرَجْتِ" },
            { pronoun: "أَنْتُمَا", form: "خَرَجْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "خَرَجْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "خَرَجْتُنَّ" },
            { pronoun: "أَنَا", form: "خَرَجْتُ" },
            { pronoun: "نَحْنُ", form: "خَرَجْنَا" }
          ]
        },
        {
          root: "د-خ-ل",
          base: "دَخَلَ",
          meaning: { ar: "وَلَجَ", en: "to enter" },
          conjugations: [
            { pronoun: "هُوَ", form: "دَخَلَ" },
            { pronoun: "هِيَ", form: "دَخَلَتْ" },
            { pronoun: "هُمَا (م)", form: "دَخَلَا" },
            { pronoun: "هُمَا (ف)", form: "دَخَلَتَا" },
            { pronoun: "هُمْ", form: "دَخَلُوا" },
            { pronoun: "هُنَّ", form: "دَخَلْنَ" },
            { pronoun: "أَنْتَ", form: "دَخَلْتَ" },
            { pronoun: "أَنْتِ", form: "دَخَلْتِ" },
            { pronoun: "أَنْتُمَا", form: "دَخَلْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "دَخَلْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "دَخَلْتُنَّ" },
            { pronoun: "أَنَا", form: "دَخَلْتُ" },
            { pronoun: "نَحْنُ", form: "دَخَلْنَا" }
          ]
        },
        {
          root: "ع-ل-م",
          base: "عَلِمَ",
          meaning: { ar: "عَرَفَ", en: "to know" },
          conjugations: [
            { pronoun: "هُوَ", form: "عَلِمَ" },
            { pronoun: "هِيَ", form: "عَلِمَتْ" },
            { pronoun: "هُمَا (م)", form: "عَلِمَا" },
            { pronoun: "هُمَا (ف)", form: "عَلِمَتَا" },
            { pronoun: "هُمْ", form: "عَلِمُوا" },
            { pronoun: "هُنَّ", form: "عَلِمْنَ" },
            { pronoun: "أَنْتَ", form: "عَلِمْتَ" },
            { pronoun: "أَنْتِ", form: "عَلِمْتِ" },
            { pronoun: "أَنْتُمَا", form: "عَلِمْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "عَلِمْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "عَلِمْتُنَّ" },
            { pronoun: "أَنَا", form: "عَلِمْتُ" },
            { pronoun: "نَحْنُ", form: "عَلِمْنَا" }
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
          base: "أَكَلَ",
          meaning: { ar: "تَنَاوَلَ", en: "to eat" },
          conjugations: [
            { pronoun: "هُوَ", form: "أَكَلَ" },
            { pronoun: "هِيَ", form: "أَكَلَتْ" },
            { pronoun: "هُمَا (م)", form: "أَكَلَا" },
            { pronoun: "هُمَا (ف)", form: "أَكَلَتَا" },
            { pronoun: "هُمْ", form: "أَكَلُوا" },
            { pronoun: "هُنَّ", form: "أَكَلْنَ" },
            { pronoun: "أَنْتَ", form: "أَكَلْتَ" },
            { pronoun: "أَنْتِ", form: "أَكَلْتِ" },
            { pronoun: "أَنْتُمَا", form: "أَكَلْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "أَكَلْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "أَكَلْتُنَّ" },
            { pronoun: "أَنَا", form: "أَكَلْتُ" },
            { pronoun: "نَحْنُ", form: "أَكَلْنَا" }
          ]
        },
        {
          root: "أ-خ-ذ",
          base: "أَخَذَ",
          meaning: { ar: "تَنَاوَلَ", en: "to take" },
          conjugations: [
            { pronoun: "هُوَ", form: "أَخَذَ" },
            { pronoun: "هِيَ", form: "أَخَذَتْ" },
            { pronoun: "هُمَا (م)", form: "أَخَذَا" },
            { pronoun: "هُمَا (ف)", form: "أَخَذَتَا" },
            { pronoun: "هُمْ", form: "أَخَذُوا" },
            { pronoun: "هُنَّ", form: "أَخَذْنَ" },
            { pronoun: "أَنْتَ", form: "أَخَذْتَ" },
            { pronoun: "أَنْتِ", form: "أَخَذْتِ" },
            { pronoun: "أَنْتُمَا", form: "أَخَذْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "أَخَذْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "أَخَذْتُنَّ" },
            { pronoun: "أَنَا", form: "أَخَذْتُ" },
            { pronoun: "نَحْنُ", form: "أَخَذْنَا" }
          ]
        },
        {
          root: "أ-م-ر",
          base: "أَمَرَ",
          meaning: { ar: "طَلَبَ", en: "to command" },
          conjugations: [
            { pronoun: "هُوَ", form: "أَمَرَ" },
            { pronoun: "هِيَ", form: "أَمَرَتْ" },
            { pronoun: "هُمَا (م)", form: "أَمَرَا" },
            { pronoun: "هُمَا (ف)", form: "أَمَرَتَا" },
            { pronoun: "هُمْ", form: "أَمَرُوا" },
            { pronoun: "هُنَّ", form: "أَمَرْنَ" },
            { pronoun: "أَنْتَ", form: "أَمَرْتَ" },
            { pronoun: "أَنْتِ", form: "أَمَرْتِ" },
            { pronoun: "أَنْتُمَا", form: "أَمَرْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "أَمَرْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "أَمَرْتُنَّ" },
            { pronoun: "أَنَا", form: "أَمَرْتُ" },
            { pronoun: "نَحْنُ", form: "أَمَرْنَا" }
          ]
        }
      ]
    },
    {
      id: "mahmuz-ain",
      name: { ar: "الْمَهْمُوزُ الْعَيْنِ", en: "Hamzated (Middle Letter)" },
      description: "Middle root letter is hamza (ء)",
      color: "indigo",
      verbs: [
        {
          root: "س-أ-ل",
          base: "سَأَلَ",
          meaning: { ar: "اسْتَفْهَمَ", en: "to ask" },
          conjugations: [
            { pronoun: "هُوَ", form: "سَأَلَ" },
            { pronoun: "هِيَ", form: "سَأَلَتْ" },
            { pronoun: "هُمَا (م)", form: "سَأَلَا" },
            { pronoun: "هُمَا (ف)", form: "سَأَلَتَا" },
            { pronoun: "هُمْ", form: "سَأَلُوا" },
            { pronoun: "هُنَّ", form: "سَأَلْنَ" },
            { pronoun: "أَنْتَ", form: "سَأَلْتَ" },
            { pronoun: "أَنْتِ", form: "سَأَلْتِ" },
            { pronoun: "أَنْتُمَا", form: "سَأَلْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "سَأَلْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "سَأَلْتُنَّ" },
            { pronoun: "أَنَا", form: "سَأَلْتُ" },
            { pronoun: "نَحْنُ", form: "سَأَلْنَا" }
          ]
        },
        {
          root: "ق-ر-أ",
          base: "قَرَأَ",
          meaning: { ar: "تَلَا", en: "to read" },
          conjugations: [
            { pronoun: "هُوَ", form: "قَرَأَ" },
            { pronoun: "هِيَ", form: "قَرَأَتْ" },
            { pronoun: "هُمَا (م)", form: "قَرَأَا" },
            { pronoun: "هُمَا (ف)", form: "قَرَأَتَا" },
            { pronoun: "هُمْ", form: "قَرَأُوا" },
            { pronoun: "هُنَّ", form: "قَرَأْنَ" },
            { pronoun: "أَنْتَ", form: "قَرَأْتَ" },
            { pronoun: "أَنْتِ", form: "قَرَأْتِ" },
            { pronoun: "أَنْتُمَا", form: "قَرَأْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "قَرَأْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "قَرَأْتُنَّ" },
            { pronoun: "أَنَا", form: "قَرَأْتُ" },
            { pronoun: "نَحْنُ", form: "قَرَأْنَا" }
          ]
        }
      ]
    },
    {
      id: "mahmuz-lam",
      name: { ar: "الْمَهْمُوزُ اللَّامِ", en: "Hamzated (Last Letter)" },
      description: "Last root letter is hamza (ء)",
      color: "cyan",
      verbs: [
        {
          root: "ق-ر-أ",
          base: "قَرَأَ",
          meaning: { ar: "تَلَا", en: "to read" },
          conjugations: [
            { pronoun: "هُوَ", form: "قَرَأَ" },
            { pronoun: "هِيَ", form: "قَرَأَتْ" },
            { pronoun: "هُمَا (م)", form: "قَرَأَا" },
            { pronoun: "هُمَا (ف)", form: "قَرَأَتَا" },
            { pronoun: "هُمْ", form: "قَرَأُوا" },
            { pronoun: "هُنَّ", form: "قَرَأْنَ" },
            { pronoun: "أَنْتَ", form: "قَرَأْتَ" },
            { pronoun: "أَنْتِ", form: "قَرَأْتِ" },
            { pronoun: "أَنْتُمَا", form: "قَرَأْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "قَرَأْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "قَرَأْتُنَّ" },
            { pronoun: "أَنَا", form: "قَرَأْتُ" },
            { pronoun: "نَحْنُ", form: "قَرَأْنَا" }
          ]
        },
        {
          root: "ب-د-أ",
          base: "بَدَأَ",
          meaning: { ar: "شَرَعَ", en: "to begin" },
          conjugations: [
            { pronoun: "هُوَ", form: "بَدَأَ" },
            { pronoun: "هِيَ", form: "بَدَأَتْ" },
            { pronoun: "هُمَا (م)", form: "بَدَأَا" },
            { pronoun: "هُمَا (ف)", form: "بَدَأَتَا" },
            { pronoun: "هُمْ", form: "بَدَأُوا" },
            { pronoun: "هُنَّ", form: "بَدَأْنَ" },
            { pronoun: "أَنْتَ", form: "بَدَأْتَ" },
            { pronoun: "أَنْتِ", form: "بَدَأْتِ" },
            { pronoun: "أَنْتُمَا", form: "بَدَأْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "بَدَأْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "بَدَأْتُنَّ" },
            { pronoun: "أَنَا", form: "بَدَأْتُ" },
            { pronoun: "نَحْنُ", form: "بَدَأْنَا" }
          ]
        },
        {
          root: "ن-ش-أ",
          base: "نَشَأَ",
          meaning: { ar: "نَمَا", en: "to grow up" },
          conjugations: [
            { pronoun: "هُوَ", form: "نَشَأَ" },
            { pronoun: "هِيَ", form: "نَشَأَتْ" },
            { pronoun: "هُمَا (م)", form: "نَشَأَا" },
            { pronoun: "هُمَا (ف)", form: "نَشَأَتَا" },
            { pronoun: "هُمْ", form: "نَشَأُوا" },
            { pronoun: "هُنَّ", form: "نَشَأْنَ" },
            { pronoun: "أَنْتَ", form: "نَشَأْتَ" },
            { pronoun: "أَنْتِ", form: "نَشَأْتِ" },
            { pronoun: "أَنْتُمَا", form: "نَشَأْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "نَشَأْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "نَشَأْتُنَّ" },
            { pronoun: "أَنَا", form: "نَشَأْتُ" },
            { pronoun: "نَحْنُ", form: "نَشَأْنَا" }
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
          base: "رَدَّ",
          meaning: { ar: "أَرْجَعَ", en: "to return" },
          conjugations: [
            { pronoun: "هُوَ", form: "رَدَّ" },
            { pronoun: "هِيَ", form: "رَدَّتْ" },
            { pronoun: "هُمَا (م)", form: "رَدَّا" },
            { pronoun: "هُمَا (ف)", form: "رَدَّتَا" },
            { pronoun: "هُمْ", form: "رَدُّوا" },
            { pronoun: "هُنَّ", form: "رَدَدْنَ" },
            { pronoun: "أَنْتَ", form: "رَدَدْتَ" },
            { pronoun: "أَنْتِ", form: "رَدَدْتِ" },
            { pronoun: "أَنْتُمَا", form: "رَدَدْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "رَدَدْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "رَدَدْتُنَّ" },
            { pronoun: "أَنَا", form: "رَدَدْتُ" },
            { pronoun: "نَحْنُ", form: "رَدَدْنَا" }
          ]
        },
        {
          root: "م-د-د",
          base: "مَدَّ",
          meaning: { ar: "بَسَطَ", en: "to extend" },
          conjugations: [
            { pronoun: "هُوَ", form: "مَدَّ" },
            { pronoun: "هِيَ", form: "مَدَّتْ" },
            { pronoun: "هُمَا (م)", form: "مَدَّا" },
            { pronoun: "هُمَا (ف)", form: "مَدَّتَا" },
            { pronoun: "هُمْ", form: "مَدُّوا" },
            { pronoun: "هُنَّ", form: "مَدَدْنَ" },
            { pronoun: "أَنْتَ", form: "مَدَدْتَ" },
            { pronoun: "أَنْتِ", form: "مَدَدْتِ" },
            { pronoun: "أَنْتُمَا", form: "مَدَدْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "مَدَدْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "مَدَدْتُنَّ" },
            { pronoun: "أَنَا", form: "مَدَدْتُ" },
            { pronoun: "نَحْنُ", form: "مَدَدْنَا" }
          ]
        },
        {
          root: "ض-ل-ل",
          base: "ضَلَّ",
          meaning: { ar: "تَاهَ", en: "to go astray" },
          conjugations: [
            { pronoun: "هُوَ", form: "ضَلَّ" },
            { pronoun: "هِيَ", form: "ضَلَّتْ" },
            { pronoun: "هُمَا (م)", form: "ضَلَّا" },
            { pronoun: "هُمَا (ف)", form: "ضَلَّتَا" },
            { pronoun: "هُمْ", form: "ضَلُّوا" },
            { pronoun: "هُنَّ", form: "ضَلَلْنَ" },
            { pronoun: "أَنْتَ", form: "ضَلَلْتَ" },
            { pronoun: "أَنْتِ", form: "ضَلَلْتِ" },
            { pronoun: "أَنْتُمَا", form: "ضَلَلْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "ضَلَلْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "ضَلَلْتُنَّ" },
            { pronoun: "أَنَا", form: "ضَلَلْتُ" },
            { pronoun: "نَحْنُ", form: "ضَلَلْنَا" }
          ]
        },
        {
          root: "ظ-ن-ن",
          base: "ظَنَّ",
          meaning: { ar: "اعْتَقَدَ", en: "to think/suppose" },
          conjugations: [
            { pronoun: "هُوَ", form: "ظَنَّ" },
            { pronoun: "هِيَ", form: "ظَنَّتْ" },
            { pronoun: "هُمَا (م)", form: "ظَنَّا" },
            { pronoun: "هُمَا (ف)", form: "ظَنَّتَا" },
            { pronoun: "هُمْ", form: "ظَنُّوا" },
            { pronoun: "هُنَّ", form: "ظَنَنَّ" },
            { pronoun: "أَنْتَ", form: "ظَنَنْتَ" },
            { pronoun: "أَنْتِ", form: "ظَنَنْتِ" },
            { pronoun: "أَنْتُمَا", form: "ظَنَنْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "ظَنَنْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "ظَنَنْتُنَّ" },
            { pronoun: "أَنَا", form: "ظَنَنْتُ" },
            { pronoun: "نَحْنُ", form: "ظَنَنَّا" }
          ]
        },
        {
          root: "ح-ب-ب",
          base: "حَبَّ",
          meaning: { ar: "أَحَبَّ", en: "to love" },
          conjugations: [
            { pronoun: "هُوَ", form: "حَبَّ" },
            { pronoun: "هِيَ", form: "حَبَّتْ" },
            { pronoun: "هُمَا (م)", form: "حَبَّا" },
            { pronoun: "هُمَا (ف)", form: "حَبَّتَا" },
            { pronoun: "هُمْ", form: "حَبُّوا" },
            { pronoun: "هُنَّ", form: "حَبَبْنَ" },
            { pronoun: "أَنْتَ", form: "حَبَبْتَ" },
            { pronoun: "أَنْتِ", form: "حَبَبْتِ" },
            { pronoun: "أَنْتُمَا", form: "حَبَبْتُمَا" },
            { pronoun: "أَنْتُمْ", form: "حَبَبْتُمْ" },
            { pronoun: "أَنْتُنَّ", form: "حَبَبْتُنَّ" },
            { pronoun: "أَنَا", form: "حَبَبْتُ" },
            { pronoun: "نَحْنُ", form: "حَبَبْنَا" }
          ]
        }
      ]
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the past tense of 'He helped'?",
      questionAr: "مَا الْمَاضِي لِـ 'He helped'؟",
      options: ["نَصَرَ", "نَصَرَتْ", "نَصَرْتُ", "نَصَرُوا"],
      correct: 0
    },
    {
      question: "What does كَتَبْتُ mean?",
      questionAr: "مَا مَعْنَى كَتَبْتُ؟",
      options: ["He wrote", "She wrote", "I wrote", "They wrote"],
      correct: 2
    },
    {
      question: "Choose the correct form for 'She sat':",
      questionAr: "اخْتَرْ لِـ 'She sat':",
      options: ["جَلَسَ", "جَلَسَتْ", "جَلَسُوا", "جَلَسْتُ"],
      correct: 1
    },
    {
      question: "What is 'They (m) said' in Arabic?",
      questionAr: "مَا 'They (m) said' بِالْعَرَبِيَّةِ؟",
      options: ["قَالَ", "قَالَتْ", "قَالُوا", "قُلْتُ"],
      correct: 2
    },
    {
      question: "What does ذَهَبْنَا mean?",
      questionAr: "مَا مَعْنَى ذَهَبْنَا؟",
      options: ["I went", "He went", "We went", "You went"],
      correct: 2
    },
    {
      question: "Choose 'You (m.s) wrote':",
      questionAr: "اخْتَرْ 'You (m.s) wrote':",
      options: ["كَتَبْتُ", "كَتَبْتَ", "كَتَبْتِ", "كَتَبَ"],
      correct: 1
    },
    {
      question: "What suffix is added for 'She' (feminine singular)?",
      questionAr: "مَا اللَّاحِقَةُ لِلْمُؤَنَّثِ الْمُفْرَدِ؟",
      options: ["ـتُ", "ـتْ", "ـا", "ـوا"],
      correct: 1
    },
    {
      question: "Identify the verb type: قَالَ",
      questionAr: "حَدِّدْ نَوْعَ الْفِعْلِ: قَالَ",
      options: ["Sound", "Hollow", "Doubled", "Defective"],
      correct: 1
    },
    {
      question: "What is 'I was' in Arabic?",
      questionAr: "مَا 'I was' بِالْعَرَبِيَّةِ؟",
      options: ["كَانَ", "كَانَتْ", "كُنْتُ", "كَانُوا"],
      correct: 2
    },
    {
      question: "Complete: أَنَا _____ الدَّرْسَ (I studied)",
      questionAr: "أَكْمِلْ: أَنَا _____ الدَّرْسَ",
      options: ["دَرَسَ", "دَرَسَتْ", "دَرَسْتُ", "دَرَسُوا"],
      correct: 2
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
    { index: 1, label: "غَائِبٌ مُذَكَّرٌ مُثَنًّى", en: "They two (m)" },
    { index: 4, label: "غَائِبٌ مُذَكَّرٌ جَمْعٌ", en: "They (m)" },
    { index: 2, label: "غَائِبٌ مُؤَنَّثٌ مُفْرَدٌ", en: "She" },
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

  const handleCellClick = (data, rowName, numberType) => {
    if (data.form === '—') return;
    setPopupData({ ...data, rowName, numberType: data.numberType || numberType });
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

  // Render verb conjugation table (like pronouns)
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
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 sm:p-3">
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
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              تَصْرِيفُ الْمَاضِي
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">Past Tense Conjugation</p>
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
                  ? 'bg-purple-500 text-white'
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl overflow-hidden">
              <div className="p-3 text-center">
                <p className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>الْوَزْنُ: فَعَلَ - يَفْعُلُ</p>
                <p className="text-sm text-purple-100">Model verb: نَصَرَ (to help)</p>
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
                  !showAllConjugations ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Step by Step
              </button>
              <button
                onClick={() => setShowAllConjugations(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showAllConjugations ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'
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
                      className="h-full bg-purple-500 transition-all"
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

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                  <div className="arabic-text text-lg text-purple-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
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
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 sm:p-4">
              <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
                اخْتِبَارٌ قَصِيرٌ
              </h2>
              <p className="text-blue-100 text-center text-sm">Quick Quiz</p>
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
                        className="h-full bg-blue-500 transition-all"
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
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-blue-300";
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
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600"
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
                    Score: <span className="font-bold text-blue-600">{score}</span> / {quizQuestions.length}
                  </p>
                  <div className="mb-6">
                    {score === quizQuestions.length && <p className="text-green-600 font-semibold">Perfect!</p>}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && <p className="text-green-600 font-semibold">Great job!</p>}
                    {score >= quizQuestions.length * 0.5 && score < quizQuestions.length * 0.8 && <p className="text-amber-600 font-semibold">Good effort!</p>}
                    {score < quizQuestions.length * 0.5 && <p className="text-blue-600 font-semibold">Keep practicing!</p>}
                  </div>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600"
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-gray-200" onClick={e => e.stopPropagation()}>
            {/* Header - Category */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 sm:px-4 py-1.5 sm:py-3 text-center flex-shrink-0">
              <p className="text-white text-xs sm:text-sm font-medium">
                {popupData.rowName?.en} {popupData.numberType?.en}
              </p>
            </div>

            {/* Main Content */}
            <div className="p-3 sm:p-6 bg-gradient-to-b from-gray-50 to-white flex-1 overflow-y-auto">
              {/* Pronoun */}
              <div className="text-center mb-2 sm:mb-4">
                <div className="arabic-text text-2xl sm:text-4xl font-bold text-purple-700 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.pronoun}
                </div>
                <span className="inline-block bg-purple-100 text-purple-700 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                  {popupData.meaning}
                </span>
              </div>

              {/* Conjugated Verb */}
              <div className="text-center mb-3 sm:mb-6">
                <div className="arabic-text text-3xl sm:text-6xl font-bold text-rose-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.example}
                </div>
              </div>

              {/* Visual Equation - only show if there's a marker */}
              {popupData.marker !== '—' && (
                <div className="flex items-center justify-center gap-1 sm:gap-3 mb-3 sm:mb-6 flex-wrap">
                  {/* Base (main part) */}
                  <div className="border-2 border-amber-500 bg-amber-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                    <span className="arabic-text text-base sm:text-2xl text-amber-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {popupData.base}
                    </span>
                  </div>
                  <span className="text-gray-400 text-base sm:text-xl font-bold">+</span>
                  {/* Marker (pattern/suffix) */}
                  <div className="border-2 border-emerald-500 bg-emerald-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                    <span className="arabic-text text-base sm:text-2xl text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {popupData.marker}
                    </span>
                  </div>
                  <span className="text-gray-400 text-base sm:text-xl font-bold">=</span>
                  {/* Result (conjugated form) */}
                  <div className="border-2 border-rose-500 bg-rose-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                    <span className="arabic-text text-base sm:text-2xl text-rose-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {popupData.example}
                    </span>
                  </div>
                </div>
              )}

              {/* Marker Section */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                <div className="text-emerald-600 text-[10px] sm:text-xs mb-1 sm:mb-2 font-medium">
                  Marker | العَلَامَة
                </div>
                <div className="arabic-text text-2xl sm:text-4xl font-bold text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.marker === '—' ? 'لَا عَلَامَةَ' : popupData.marker}
                </div>
                {popupData.marker !== '—' && (
                  <div className="arabic-text text-xs sm:text-sm text-emerald-600 mt-0.5 sm:mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.markerAr}
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Explanation */}
            <div className="bg-gray-100 border-t border-gray-200 px-3 sm:px-5 py-2 sm:py-4 flex-shrink-0">
              <p className="arabic-text text-center text-gray-700 text-[10px] sm:text-base mb-0.5 sm:mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                {popupData.patternAr}
              </p>
              <p className="text-center text-gray-500 text-[10px] sm:text-sm">
                {popupData.pattern}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2 sm:py-3 bg-purple-500 text-white text-sm sm:text-base font-medium hover:bg-purple-600 transition-colors flex-shrink-0"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MadiConjugation;
