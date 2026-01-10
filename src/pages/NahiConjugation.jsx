import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NahiConjugation = () => {
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

  // Nahi conjugation chart - لَا + المُضَارِعُ المَجْزُومُ
  // Nahi is for prohibition (Don't do!) - primarily used for 2nd person (حاضر)
  const conjugationChart = [
    {
      rowName: { ar: "حَاضِرٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
      color: "blue",
      singular: {
        form: "لَا تَفْعُلْ",
        example: "لَا تَنْصُرْ",
        meaning: "Don't help! (m.s)",
        pronoun: "أَنْتَ",
        base: "تَنْصُرْ",
        prefix: "لَا",
        suffix: "—",
        prefixAr: "لَا النَّاهِيَة",
        pattern: "La + Mudari Majzum (sukun)",
        patternAr: "لَا النَّاهِيَة + الْمُضَارِعُ الْمَجْزُومُ",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "لَا تَفْعُلَا",
        example: "لَا تَنْصُرَا",
        meaning: "Don't help! (m. dual)",
        pronoun: "أَنْتُمَا",
        base: "تَنْصُرَا",
        prefix: "لَا",
        suffix: "ـَا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "أَلِف الْاِثْنَيْنِ",
        pattern: "Nun dropped, alif remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْأَلِف",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "لَا تَفْعُلُوا",
        example: "لَا تَنْصُرُوا",
        meaning: "Don't help! (m.pl)",
        pronoun: "أَنْتُمْ",
        base: "تَنْصُرُوا",
        prefix: "لَا",
        suffix: "ـُوا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "وَاو الْجَمَاعَةِ",
        pattern: "Nun dropped, waw remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْوَاو",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "حَاضِرٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
      color: "rose",
      singular: {
        form: "لَا تَفْعُلِي",
        example: "لَا تَنْصُرِي",
        meaning: "Don't help! (f.s)",
        pronoun: "أَنْتِ",
        base: "تَنْصُرِي",
        prefix: "لَا",
        suffix: "ـِي",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "يَاءُ الْمُخَاطَبَة",
        pattern: "Nun dropped, ya remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْيَاء",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "لَا تَفْعُلَا",
        example: "لَا تَنْصُرَا",
        meaning: "Don't help! (f. dual)",
        pronoun: "أَنْتُمَا",
        base: "تَنْصُرَا",
        prefix: "لَا",
        suffix: "ـَا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "أَلِف الْاِثْنَيْنِ",
        pattern: "Same as masculine dual",
        patternAr: "مِثْلُ الْمُثَنَّى الْمُذَكَّرِ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "لَا تَفْعُلْنَ",
        example: "لَا تَنْصُرْنَ",
        meaning: "Don't help! (f.pl)",
        pronoun: "أَنْتُنَّ",
        base: "تَنْصُرْنَ",
        prefix: "لَا",
        suffix: "ـْنَ",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "نُونُ النِّسْوَةِ",
        pattern: "Sukun on ayn, nun niswa",
        patternAr: "سُكُونٌ عَلَى الْعَيْنِ + نُونُ النِّسْوَة",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
      color: "purple",
      singular: {
        form: "لَا يَفْعُلْ",
        example: "لَا يَنْصُرْ",
        meaning: "Let him not help",
        pronoun: "هُوَ",
        base: "يَنْصُرْ",
        prefix: "لَا",
        suffix: "—",
        prefixAr: "لَا النَّاهِيَة",
        pattern: "La + 3rd person Mudari Majzum",
        patternAr: "لَا النَّاهِيَة + الْمُضَارِعُ الْغَائِب",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "لَا يَفْعُلَا",
        example: "لَا يَنْصُرَا",
        meaning: "Let them both not help (m.)",
        pronoun: "هُمَا",
        base: "يَنْصُرَا",
        prefix: "لَا",
        suffix: "ـَا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "أَلِف الْاِثْنَيْنِ",
        pattern: "Nun dropped, alif remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْأَلِف",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "لَا يَفْعُلُوا",
        example: "لَا يَنْصُرُوا",
        meaning: "Let them not help (m.)",
        pronoun: "هُمْ",
        base: "يَنْصُرُوا",
        prefix: "لَا",
        suffix: "ـُوا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "وَاو الْجَمَاعَةِ",
        pattern: "Nun dropped, waw remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْوَاو",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
      color: "pink",
      singular: {
        form: "لَا تَفْعُلْ",
        example: "لَا تَنْصُرْ",
        meaning: "Let her not help",
        pronoun: "هِيَ",
        base: "تَنْصُرْ",
        prefix: "لَا",
        suffix: "—",
        prefixAr: "لَا النَّاهِيَة",
        pattern: "La + feminine Mudari Majzum",
        patternAr: "لَا النَّاهِيَة + الْمُضَارِعُ الْمُؤَنَّث",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "لَا تَفْعُلَا",
        example: "لَا تَنْصُرَا",
        meaning: "Let them both not help (f.)",
        pronoun: "هُمَا",
        base: "تَنْصُرَا",
        prefix: "لَا",
        suffix: "ـَا",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "أَلِف الْاِثْنَيْنِ",
        pattern: "Nun dropped, alif remains",
        patternAr: "حُذِفَتِ النُّونُ وَبَقِيَتِ الْأَلِف",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "لَا يَفْعُلْنَ",
        example: "لَا يَنْصُرْنَ",
        meaning: "Let them not help (f.)",
        pronoun: "هُنَّ",
        base: "يَنْصُرْنَ",
        prefix: "لَا",
        suffix: "ـْنَ",
        prefixAr: "لَا النَّاهِيَة",
        suffixAr: "نُونُ النِّسْوَةِ",
        pattern: "Sukun + nun niswa",
        patternAr: "سُكُونٌ + نُونُ النِّسْوَة",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    },
    {
      rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
      color: "emerald",
      singular: {
        form: "لَا أَفْعُلْ",
        example: "لَا أَنْصُرْ",
        meaning: "Let me not help",
        pronoun: "أَنَا",
        base: "أَنْصُرْ",
        prefix: "لَا",
        suffix: "—",
        prefixAr: "لَا النَّاهِيَة",
        pattern: "La + 1st person Mudari Majzum",
        patternAr: "لَا النَّاهِيَة + الْمُضَارِعُ (مُتَكَلِّم)",
        numberType: { ar: "مُفْرَدٌ", en: "Singular" }
      },
      dual: {
        form: "—",
        example: "—",
        meaning: "—",
        pronoun: "—",
        base: "—",
        prefix: "—",
        suffix: "—",
        pattern: "Not used",
        patternAr: "لَا يُسْتَخْدَمُ",
        numberType: { ar: "مُثَنًّى", en: "Dual" }
      },
      plural: {
        form: "لَا نَفْعُلْ",
        example: "لَا نَنْصُرْ",
        meaning: "Let us not help",
        pronoun: "نَحْنُ",
        base: "نَنْصُرْ",
        prefix: "لَا",
        suffix: "—",
        prefixAr: "لَا النَّاهِيَة",
        pattern: "La + plural Mudari Majzum",
        patternAr: "لَا النَّاهِيَة + الْمُضَارِعُ (جَمْع)",
        numberType: { ar: "جَمْعٌ", en: "Plural" }
      }
    }
  ];

  // Verb categories for Nahi practice
  const verbCategories = [
    {
      id: "salim",
      name: { ar: "الصَّحِيحُ السَّالِمُ", en: "Sound Verb (Salim)" },
      description: "No weak letters, hamza, or doubled letters",
      color: "emerald",
      verbs: [
        {
          root: "ن-ص-ر",
          base: "لَا تَنْصُرْ",
          madiBase: "نَصَرَ",
          mudariBase: "يَنْصُرُ",
          meaning: { ar: "لَا تُعِنْ", en: "to help" },
          conjugations: [
            // Hadir Mujakkar (2nd person masculine)
            { pronoun: "أَنْتَ", form: "لَا تَنْصُرْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَنْصُرَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَنْصُرُوا", row: "hadir_m" },
            // Hadir Muannas (2nd person feminine)
            { pronoun: "أَنْتِ", form: "لَا تَنْصُرِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَنْصُرَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَنْصُرْنَ", row: "hadir_f" },
            // Gayeb Mujakkar (3rd person masculine)
            { pronoun: "هُوَ", form: "لَا يَنْصُرْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَنْصُرَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَنْصُرُوا", row: "gayeb_m" },
            // Gayeb Muannas (3rd person feminine)
            { pronoun: "هِيَ", form: "لَا تَنْصُرْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَنْصُرَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَنْصُرْنَ", row: "gayeb_f" },
            // Mutakallim (1st person)
            { pronoun: "أَنَا", form: "لَا أَنْصُرْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَنْصُرْ", row: "mutakallim" }
          ]
        },
        {
          root: "ك-ت-ب",
          base: "لَا تَكْتُبْ",
          madiBase: "كَتَبَ",
          mudariBase: "يَكْتُبُ",
          meaning: { ar: "لَا تَسَطِّرْ", en: "to write" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَكْتُبْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَكْتُبَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَكْتُبُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَكْتُبِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَكْتُبَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَكْتُبْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَكْتُبْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَكْتُبَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَكْتُبُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَكْتُبْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَكْتُبَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَكْتُبْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَكْتُبْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَكْتُبْ", row: "mutakallim" }
          ]
        },
        {
          root: "ج-ل-س",
          base: "لَا تَجْلِسْ",
          madiBase: "جَلَسَ",
          mudariBase: "يَجْلِسُ",
          meaning: { ar: "لَا تَقْعُدْ", en: "to sit" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَجْلِسْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَجْلِسَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَجْلِسُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَجْلِسِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَجْلِسَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَجْلِسْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَجْلِسْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَجْلِسَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَجْلِسُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَجْلِسْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَجْلِسَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَجْلِسْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَجْلِسْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَجْلِسْ", row: "mutakallim" }
          ]
        },
        {
          root: "ذ-ه-ب",
          base: "لَا تَذْهَبْ",
          madiBase: "ذَهَبَ",
          mudariBase: "يَذْهَبُ",
          meaning: { ar: "لَا تَمْضِ", en: "to go" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَذْهَبْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَذْهَبَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَذْهَبُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَذْهَبِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَذْهَبَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَذْهَبْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَذْهَبْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَذْهَبَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَذْهَبُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَذْهَبْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَذْهَبَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَذْهَبْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَذْهَبْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَذْهَبْ", row: "mutakallim" }
          ]
        },
        {
          root: "ف-ت-ح",
          base: "لَا تَفْتَحْ",
          madiBase: "فَتَحَ",
          mudariBase: "يَفْتَحُ",
          meaning: { ar: "لَا تَفْتَحْ", en: "to open" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَفْتَحْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَفْتَحَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَفْتَحُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَفْتَحِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَفْتَحَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَفْتَحْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَفْتَحْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَفْتَحَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَفْتَحُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَفْتَحْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَفْتَحَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَفْتَحْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَفْتَحْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَفْتَحْ", row: "mutakallim" }
          ]
        },
        {
          root: "خ-ر-ج",
          base: "لَا تَخْرُجْ",
          madiBase: "خَرَجَ",
          mudariBase: "يَخْرُجُ",
          meaning: { ar: "لَا تَبْرُزْ", en: "to exit" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَخْرُجْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَخْرُجَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَخْرُجُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَخْرُجِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَخْرُجَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَخْرُجْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَخْرُجْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَخْرُجَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَخْرُجُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَخْرُجْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَخْرُجَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَخْرُجْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَخْرُجْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَخْرُجْ", row: "mutakallim" }
          ]
        },
        {
          root: "د-خ-ل",
          base: "لَا تَدْخُلْ",
          madiBase: "دَخَلَ",
          mudariBase: "يَدْخُلُ",
          meaning: { ar: "لَا تَلِجْ", en: "to enter" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَدْخُلْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَدْخُلَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَدْخُلُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَدْخُلِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَدْخُلَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَدْخُلْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَدْخُلْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَدْخُلَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَدْخُلُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَدْخُلْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَدْخُلَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَدْخُلْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَدْخُلْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَدْخُلْ", row: "mutakallim" }
          ]
        },
        {
          root: "ع-ل-م",
          base: "لَا تَعْلَمْ",
          madiBase: "عَلِمَ",
          mudariBase: "يَعْلَمُ",
          meaning: { ar: "لَا تَعْرِفْ", en: "to know" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَعْلَمْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَعْلَمَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَعْلَمُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَعْلَمِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَعْلَمَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَعْلَمْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَعْلَمْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَعْلَمَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَعْلَمُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَعْلَمْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَعْلَمَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَعْلَمْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَعْلَمْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَعْلَمْ", row: "mutakallim" }
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
          base: "لَا تَأْكُلْ",
          madiBase: "أَكَلَ",
          mudariBase: "يَأْكُلُ",
          meaning: { ar: "لَا تَتَنَاوَلْ", en: "to eat" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَأْكُلْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْكُلَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَأْكُلُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَأْكُلِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْكُلَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَأْكُلْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَأْكُلْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَأْكُلَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَأْكُلُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَأْكُلْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَأْكُلَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَأْكُلْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا آكُلْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَأْكُلْ", row: "mutakallim" }
          ]
        },
        {
          root: "أ-خ-ذ",
          base: "لَا تَأْخُذْ",
          madiBase: "أَخَذَ",
          mudariBase: "يَأْخُذُ",
          meaning: { ar: "لَا تَتَنَاوَلْ", en: "to take" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَأْخُذْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْخُذَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَأْخُذُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَأْخُذِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْخُذَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَأْخُذْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَأْخُذْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَأْخُذَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَأْخُذُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَأْخُذْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَأْخُذَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَأْخُذْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا آخُذْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَأْخُذْ", row: "mutakallim" }
          ]
        },
        {
          root: "أ-م-ر",
          base: "لَا تَأْمُرْ",
          madiBase: "أَمَرَ",
          mudariBase: "يَأْمُرُ",
          meaning: { ar: "لَا تَأْمُرْ", en: "to command" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَأْمُرْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْمُرَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَأْمُرُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَأْمُرِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَأْمُرَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَأْمُرْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَأْمُرْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَأْمُرَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَأْمُرُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَأْمُرْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَأْمُرَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَأْمُرْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا آمُرْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَأْمُرْ", row: "mutakallim" }
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
          base: "لَا تَقْرَأْ",
          madiBase: "قَرَأَ",
          mudariBase: "يَقْرَأُ",
          meaning: { ar: "لَا تَتْلُ", en: "to read" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَقْرَأْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَقْرَآ", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَقْرَأُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَقْرَئِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَقْرَآ", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَقْرَأْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَقْرَأْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَقْرَآ", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَقْرَأُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَقْرَأْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَقْرَآ", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَقْرَأْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَقْرَأْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَقْرَأْ", row: "mutakallim" }
          ]
        },
        {
          root: "ب-د-أ",
          base: "لَا تَبْدَأْ",
          madiBase: "بَدَأَ",
          mudariBase: "يَبْدَأُ",
          meaning: { ar: "لَا تَشْرَعْ", en: "to begin" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَبْدَأْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَبْدَآ", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَبْدَأُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَبْدَئِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَبْدَآ", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَبْدَأْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَبْدَأْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَبْدَآ", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَبْدَأُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَبْدَأْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَبْدَآ", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَبْدَأْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَبْدَأْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَبْدَأْ", row: "mutakallim" }
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
          base: "لَا تَرُدَّ",
          madiBase: "رَدَّ",
          mudariBase: "يَرُدُّ",
          meaning: { ar: "لَا تُرْجِعْ", en: "to return" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَرُدَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَرُدَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَرُدُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَرُدِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَرُدَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَرْدُدْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَرُدَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَرُدَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَرُدُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَرُدَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَرُدَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَرْدُدْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَرُدَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَرُدَّ", row: "mutakallim" }
          ]
        },
        {
          root: "م-د-د",
          base: "لَا تَمُدَّ",
          madiBase: "مَدَّ",
          mudariBase: "يَمُدُّ",
          meaning: { ar: "لَا تَبْسُطْ", en: "to extend" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَمُدَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَمُدَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَمُدُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَمُدِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَمُدَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَمْدُدْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَمُدَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَمُدَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَمُدُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَمُدَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَمُدَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَمْدُدْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَمُدَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَمُدَّ", row: "mutakallim" }
          ]
        },
        {
          root: "ظ-ن-ن",
          base: "لَا تَظُنَّ",
          madiBase: "ظَنَّ",
          mudariBase: "يَظُنُّ",
          meaning: { ar: "لَا تَعْتَقِدْ", en: "to think/suppose" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "لَا تَظُنَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "لَا تَظُنَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "لَا تَظُنُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "لَا تَظُنِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "لَا تَظُنَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "لَا تَظْنُنَّ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لَا يَظُنَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لَا يَظُنَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لَا يَظُنُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لَا تَظُنَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لَا تَظُنَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لَا يَظْنُنَّ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لَا أَظُنَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لَا نَظُنَّ", row: "mutakallim" }
          ]
        }
      ]
    }
  ];

  // Quiz questions for Nahi
  const quizQuestions = [
    {
      question: "What is the prohibition form for 'Don't help!' (m.s)?",
      questionAr: "مَا صِيغَةُ النَّهْيِ لِـ 'Don't help!' (مذكر مفرد)؟",
      options: ["لَا تَنْصُرْ", "لَا تَنْصُرِي", "لَا تَنْصُرُوا", "لَا تَنْصُرَا"],
      correct: 0
    },
    {
      question: "What does لَا تَكْتُبِي mean?",
      questionAr: "مَا مَعْنَى لَا تَكْتُبِي؟",
      options: ["Don't write! (m.s)", "Don't write! (f.s)", "Don't write! (m.pl)", "Don't write! (dual)"],
      correct: 1
    },
    {
      question: "Choose the correct form for 'Don't sit!' (m.pl):",
      questionAr: "اخْتَرْ لِـ 'Don't sit!' (جمع مذكر):",
      options: ["لَا تَجْلِسْ", "لَا تَجْلِسِي", "لَا تَجْلِسُوا", "لَا تَجْلِسَا"],
      correct: 2
    },
    {
      question: "What is 'Don't go!' (dual) in Arabic?",
      questionAr: "مَا 'Don't go!' (مثنى) بِالْعَرَبِيَّةِ؟",
      options: ["لَا تَذْهَبْ", "لَا تَذْهَبِي", "لَا تَذْهَبُوا", "لَا تَذْهَبَا"],
      correct: 3
    },
    {
      question: "What does لَا تَفْتَحْنَ mean?",
      questionAr: "مَا مَعْنَى لَا تَفْتَحْنَ؟",
      options: ["Don't open! (m.s)", "Don't open! (f.s)", "Don't open! (m.pl)", "Don't open! (f.pl)"],
      correct: 3
    },
    {
      question: "Choose 'Don't enter!' (f.s):",
      questionAr: "اخْتَرْ 'Don't enter!' (مؤنث مفرد):",
      options: ["لَا تَدْخُلْ", "لَا تَدْخُلِي", "لَا تَدْخُلُوا", "لَا تَدْخُلَا"],
      correct: 1
    },
    {
      question: "How is Nahi (prohibition) formed?",
      questionAr: "كَيْفَ يُصَاغُ النَّهْيُ؟",
      options: ["لِـ + Mudari", "لَا + Mudari Majzum", "لَنْ + Mudari", "مَا + Madi"],
      correct: 1
    },
    {
      question: "What is 'Don't read!' (m.s) in Arabic?",
      questionAr: "مَا 'Don't read!' (مذكر مفرد) بِالْعَرَبِيَّةِ؟",
      options: ["لَا تَقْرَأْ", "اِقْرَأْ", "قَرَأَ", "يَقْرَأُ"],
      correct: 0
    },
    {
      question: "Choose the correct form for 'Don't take!' (m.s):",
      questionAr: "اخْتَرْ لِـ 'Don't take!' (مذكر مفرد):",
      options: ["أَخَذَ", "خُذْ", "لَا تَأْخُذْ", "يَأْخُذُ"],
      correct: 2
    },
    {
      question: "What particle is used for Nahi?",
      questionAr: "مَا الْأَدَاةُ الْمُسْتَخْدَمَةُ لِلنَّهْيِ؟",
      options: ["لِـ", "لَا", "لَنْ", "مَا"],
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

  // Conjugation order for step-by-step (all 14 forms)
  const conjugationOrder = [
    // Hadir Mujakkar (2nd person masculine)
    { index: 0, label: "حَاضِرٌ مُذَكَّرٌ مُفْرَدٌ", en: "You (m.s)" },
    { index: 1, label: "حَاضِرٌ مُذَكَّرٌ مُثَنًّى", en: "You two (m.)" },
    { index: 2, label: "حَاضِرٌ مُذَكَّرٌ جَمْعٌ", en: "You (m.pl)" },
    // Hadir Muannas (2nd person feminine)
    { index: 3, label: "حَاضِرٌ مُؤَنَّثٌ مُفْرَدٌ", en: "You (f.s)" },
    { index: 4, label: "حَاضِرٌ مُؤَنَّثٌ مُثَنًّى", en: "You two (f.)" },
    { index: 5, label: "حَاضِرٌ مُؤَنَّثٌ جَمْعٌ", en: "You (f.pl)" },
    // Gayeb Mujakkar (3rd person masculine)
    { index: 6, label: "غَائِبٌ مُذَكَّرٌ مُفْرَدٌ", en: "Let him not" },
    { index: 7, label: "غَائِبٌ مُذَكَّرٌ مُثَنًّى", en: "Let them not (m. dual)" },
    { index: 8, label: "غَائِبٌ مُذَكَّرٌ جَمْعٌ", en: "Let them not (m.pl)" },
    // Gayeb Muannas (3rd person feminine)
    { index: 9, label: "غَائِبٌ مُؤَنَّثٌ مُفْرَدٌ", en: "Let her not" },
    { index: 10, label: "غَائِبٌ مُؤَنَّثٌ مُثَنًّى", en: "Let them not (f. dual)" },
    { index: 11, label: "غَائِبٌ مُؤَنَّثٌ جَمْعٌ", en: "Let them not (f.pl)" },
    // Mutakallim (1st person)
    { index: 12, label: "مُتَكَلِّمٌ مُفْرَدٌ", en: "Let me not" },
    { index: 13, label: "مُتَكَلِّمٌ جَمْعٌ", en: "Let us not" }
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

  // Render verb conjugation table (5 rows for all persons)
  const renderVerbTable = (verb) => {
    const rowConfigs = [
      { label: "حَاضِرٌ مُذَكَّرٌ", en: "2nd M", color: "blue", indices: [0, 1, 2] },
      { label: "حَاضِرٌ مُؤَنَّثٌ", en: "2nd F", color: "rose", indices: [3, 4, 5] },
      { label: "غَائِبٌ مُذَكَّرٌ", en: "3rd M", color: "purple", indices: [6, 7, 8] },
      { label: "غَائِبٌ مُؤَنَّثٌ", en: "3rd F", color: "pink", indices: [9, 10, 11] },
      { label: "مُتَكَلِّمٌ", en: "1st", color: "emerald", indices: [12, null, 13] }
    ];

    const colorClasses = {
      blue: "bg-blue-50 text-blue-600",
      rose: "bg-rose-50 text-rose-600",
      purple: "bg-purple-50 text-purple-600",
      pink: "bg-pink-50 text-pink-600",
      emerald: "bg-emerald-50 text-emerald-600"
    };

    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-2 sm:p-3">
          <div className="grid grid-cols-4 text-center text-xs sm:text-sm">
            <div className="border-r border-white/20">النوع</div>
            <div className="border-r border-white/20">مُفْرَدٌ</div>
            <div className="border-r border-white/20">مُثَنًّى</div>
            <div>جَمْعٌ</div>
          </div>
        </div>
        {rowConfigs.map((row, rowIdx) => (
          <div key={rowIdx} className={`grid grid-cols-4 ${rowIdx < rowConfigs.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className={`${colorClasses[row.color].split(' ')[0]} text-center py-2 border-r border-gray-200 flex flex-col justify-center`}>
              <div className="arabic-text text-xs font-bold text-gray-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                {row.label}
              </div>
              <div className="text-xs text-gray-500">{row.en}</div>
            </div>
            {row.indices.map((idx, colIdx) => (
              <div key={colIdx} className={`${colorClasses[row.color].split(' ')[0]} text-center py-2 ${colIdx < 2 ? 'border-r border-gray-200' : ''}`}>
                {idx !== null ? (
                  <>
                    <div className="arabic-text text-base sm:text-lg font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {verb.conjugations[idx].form}
                    </div>
                    <div className={`arabic-text text-xs ${colorClasses[row.color].split(' ')[1]}`} style={{ fontFamily: 'var(--font-arabic)' }}>
                      {verb.conjugations[idx].pronoun}
                    </div>
                  </>
                ) : (
                  <div className="text-gray-400">—</div>
                )}
              </div>
            ))}
          </div>
        ))}
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
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              صِيغَةُ النَّهْيِ
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">Prohibition (Negative Imperative) Form</p>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Screen Navigation */}
        <div className="max-w-4xl mx-auto px-3 pb-2">
          <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
            <button
              onClick={() => { setCurrentScreen('chart'); setSelectedVerb(null); }}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentScreen === 'chart'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Chart
            </button>
            <button
              onClick={() => { setCurrentScreen('verbs'); setSelectedVerb(null); }}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentScreen === 'verbs'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Verbs
            </button>
            <button
              onClick={() => { setCurrentScreen('quiz'); setSelectedVerb(null); }}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentScreen === 'quiz'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-3 sm:px-4 py-4">

        {/* SCREEN 1: Conjugation Chart */}
        {currentScreen === 'chart' && (
          <>
            {/* Chart Header */}
            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-t-xl overflow-hidden">
              <div className="p-3 text-center">
                <p className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>
                  جَدْوَلُ النَّهْيِ: نَصَرَ
                </p>
                <p className="text-sm text-red-100">Prohibition Table: nasara (to help)</p>
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

            {/* Nahi Formation Info */}
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-3 text-center arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                كَيْفَ يُصَاغُ النَّهْيُ؟
              </h3>
              <p className="text-center text-sm text-red-600 mb-4">How is Nahi (Prohibition) Formed?</p>

              <div className="bg-white rounded-lg p-4 border border-red-200">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <div className="border-2 border-red-500 bg-red-50 rounded-lg px-4 py-2">
                      <span className="arabic-text text-2xl text-red-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                        لَا
                      </span>
                    </div>
                    <span className="text-gray-400 text-2xl font-bold">+</span>
                    <div className="border-2 border-amber-500 bg-amber-50 rounded-lg px-4 py-2">
                      <span className="arabic-text text-2xl text-amber-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                        الْمُضَارِعُ الْمَجْزُومُ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-2 text-center">
                  <p><span className="font-semibold text-red-700">لَا النَّاهِيَة</span> (La of Prohibition) + <span className="font-semibold text-amber-700">Mudari Majzum</span></p>
                  <p className="text-xs text-gray-500">The Mudari verb is put in the Majzum case (jussive mood)</p>
                </div>
              </div>
            </div>

            {/* Jazm Signs Info */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-3 text-center arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                عَلَامَاتُ الْجَزْمِ
              </h3>
              <p className="text-center text-sm text-amber-600 mb-3">Signs of Jazm (Jussive Mood)</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Sukun */}
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <div className="text-center mb-2">
                    <span className="arabic-text text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-arabic)' }}>السُّكُونُ</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-blue-700">When: Singular (no suffix)</p>
                    <div className="mt-2 text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَنْصُرُ ← لَا تَنْصُرْ</span>
                    </div>
                  </div>
                </div>

                {/* Dropping Nun */}
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <div className="text-center mb-2">
                    <span className="arabic-text text-2xl font-bold text-emerald-600" style={{ fontFamily: 'var(--font-arabic)' }}>حَذْفُ النُّونِ</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-emerald-700">When: الْأَفْعَالُ الْخَمْسَة</p>
                    <p>Five verb forms (dual, m.pl, f.s)</p>
                    <div className="mt-2 text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَنْصُرَانِ ← لَا تَنْصُرَا</span>
                    </div>
                    <div className="text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَنْصُرُونَ ← لَا تَنْصُرُوا</span>
                    </div>
                    <div className="text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>تَنْصُرِينَ ← لَا تَنْصُرِي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison with Amr */}
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h3 className="font-semibold text-purple-800 mb-3 text-center arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                الْفَرْقُ بَيْنَ الْأَمْرِ وَالنَّهْيِ
              </h3>
              <p className="text-center text-sm text-purple-600 mb-3">Difference Between Amr and Nahi</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-purple-200 text-center">
                  <div className="arabic-text text-lg font-bold text-orange-600 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    الْأَمْرُ
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Command (Do!)</p>
                  <div className="arabic-text text-2xl text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                    اُنْصُرْ
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-purple-200 text-center">
                  <div className="arabic-text text-lg font-bold text-red-600 mb-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    النَّهْيُ
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Prohibition (Don't!)</p>
                  <div className="arabic-text text-2xl text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
                    لَا تَنْصُرْ
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 bg-gray-100 border border-gray-200 rounded-xl p-3 text-center">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> Unlike Amr which uses special imperative forms for 2nd person, Nahi uses لَا + regular Mudari verb in Majzum case for all persons.
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
                  !showAllConjugations ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Step by Step
              </button>
              <button
                onClick={() => setShowAllConjugations(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showAllConjugations ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
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
                      className="h-full bg-red-500 transition-all"
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

                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 mb-6">
                  <div className="arabic-text text-lg text-red-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
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
                        ? 'bg-red-500 text-white hover:bg-red-600'
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
            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-3 sm:p-4">
              <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
                اخْتِبَارٌ قَصِيرٌ
              </h2>
              <p className="text-red-100 text-center text-sm">Quick Quiz</p>
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
                        className="h-full bg-red-500 transition-all"
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
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-red-300";
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
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600"
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
                    Score: <span className="font-bold text-red-600">{score}</span> / {quizQuestions.length}
                  </p>
                  <div className="mb-6">
                    {score === quizQuestions.length && <p className="text-green-600 font-semibold">Perfect!</p>}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && <p className="text-green-600 font-semibold">Great job!</p>}
                    {score >= quizQuestions.length * 0.5 && score < quizQuestions.length * 0.8 && <p className="text-amber-600 font-semibold">Good effort!</p>}
                    {score < quizQuestions.length * 0.5 && <p className="text-red-600 font-semibold">Keep practicing!</p>}
                  </div>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600"
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
            <div className="bg-gradient-to-r from-red-500 to-rose-500 px-3 sm:px-4 py-1.5 sm:py-3 text-center flex-shrink-0">
              <p className="text-white text-xs sm:text-sm font-medium">
                {popupData.rowName?.en} {popupData.numberType?.en}
              </p>
            </div>

            {/* Main Content */}
            <div className="p-3 sm:p-6 bg-gradient-to-b from-gray-50 to-white flex-1 overflow-y-auto">
              {/* Pronoun */}
              <div className="text-center mb-2 sm:mb-4">
                <div className="arabic-text text-2xl sm:text-4xl font-bold text-red-700 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.pronoun}
                </div>
                <span className="inline-block bg-red-100 text-red-700 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                  {popupData.meaning}
                </span>
              </div>

              {/* Prohibition Form */}
              <div className="text-center mb-3 sm:mb-6">
                <div className="arabic-text text-3xl sm:text-6xl font-bold text-rose-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.example}
                </div>
              </div>

              {/* Visual Equation */}
              <div className="flex items-center justify-center gap-1 sm:gap-3 mb-3 sm:mb-6 flex-wrap">
                {/* Prefix (لَا) */}
                <div className="border-2 border-red-500 bg-red-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                  <span className="arabic-text text-base sm:text-2xl text-red-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.prefix}
                  </span>
                </div>
                <span className="text-gray-400 text-base sm:text-xl font-bold">+</span>
                {/* Base */}
                <div className="border-2 border-amber-500 bg-amber-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                  <span className="arabic-text text-base sm:text-2xl text-amber-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.base}
                  </span>
                </div>
              </div>

              {/* Prefix Section */}
              <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center mb-2 sm:mb-3">
                <div className="text-red-600 text-[10px] sm:text-xs mb-1 sm:mb-2 font-medium">
                  Prefix | لَا النَّاهِيَة
                </div>
                <div className="arabic-text text-2xl sm:text-4xl font-bold text-red-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.prefix}
                </div>
                <div className="arabic-text text-xs sm:text-sm text-red-600 mt-0.5 sm:mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.prefixAr}
                </div>
              </div>

              {/* Suffix Section (if applicable) */}
              {popupData.suffix && popupData.suffix !== '—' && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
                  <div className="text-emerald-600 text-[10px] sm:text-xs mb-1 sm:mb-2 font-medium">
                    Suffix | اللَّاحِقَة
                  </div>
                  <div className="arabic-text text-2xl sm:text-4xl font-bold text-emerald-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.suffix}
                  </div>
                  {popupData.suffixAr && (
                    <div className="arabic-text text-xs sm:text-sm text-emerald-600 mt-0.5 sm:mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                      {popupData.suffixAr}
                    </div>
                  )}
                </div>
              )}
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
              className="w-full py-2 sm:py-3 bg-red-500 text-white text-sm sm:text-base font-medium hover:bg-red-600 transition-colors flex-shrink-0"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NahiConjugation;
