import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AmrConjugation = () => {
  // Screen navigation: 'chart_damma' | 'chart_kasra' | 'chart_noHamza' | 'verbs' | 'quiz'
  const [currentScreen, setCurrentScreen] = useState('chart_damma');

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

  // Pattern info for each chart type
  const patternInfo = {
    chart_damma: { id: 'damma', label: 'اُفْعُلْ', verb: 'نَصَرَ', verbEn: 'to help' },
    chart_kasra: { id: 'kasra', label: 'اِفْعِلْ', verb: 'جَلَسَ', verbEn: 'to sit' },
    chart_noHamza: { id: 'noHamza', label: 'فُلْ', verb: 'أَكَلَ', verbEn: 'to eat' }
  };

  // Conjugation charts for each pattern
  const conjugationCharts = {
    // Pattern 1: Damma (اُفْعُلْ) - نَصَرَ/يَنْصُرُ
    damma: [
      {
        rowName: { ar: "حَاضِرٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
        color: "blue",
        singular: { form: "اُفْعُلْ", example: "اُنْصُرْ", meaning: "Help! (m.s)", pronoun: "أَنْتَ", base: "نْصُرْ", prefix: "اُ", suffix: "—", prefixAr: "هَمْزَةُ الْوَصْلِ", pattern: "Direct command with hamzatul wasl (damma)", patternAr: "أَمْرٌ مُبَاشِرٌ بِهَمْزَةِ الْوَصْلِ مَضْمُومَة", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "اُفْعُلَا", example: "اُنْصُرَا", meaning: "Help! (m. dual)", pronoun: "أَنْتُمَا", base: "نْصُرْ", prefix: "اُ", suffix: "ـَا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "أَلِف", pattern: "Add ـَا for dual", patternAr: "نُضِيفُ أَلِفًا لِلْمُثَنَّى", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "اُفْعُلُوا", example: "اُنْصُرُوا", meaning: "Help! (m.pl)", pronoun: "أَنْتُمْ", base: "نْصُرْ", prefix: "اُ", suffix: "ـُوا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "وَاو + أَلِف", pattern: "Add ـُوا for plural", patternAr: "نُضِيفُ وَاوًا وَأَلِفًا لِلْجَمْعِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "حَاضِرٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
        color: "rose",
        singular: { form: "اُفْعُلِي", example: "اُنْصُرِي", meaning: "Help! (f.s)", pronoun: "أَنْتِ", base: "نْصُرْ", prefix: "اُ", suffix: "ـِي", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "يَاء", pattern: "Add ـِي for feminine", patternAr: "نُضِيفُ يَاءً لِلْمُؤَنَّثِ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "اُفْعُلَا", example: "اُنْصُرَا", meaning: "Help! (f. dual)", pronoun: "أَنْتُمَا", base: "نْصُرْ", prefix: "اُ", suffix: "ـَا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "أَلِف", pattern: "Same as masculine dual", patternAr: "مِثْلُ الْمُثَنَّى الْمُذَكَّرِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "اُفْعُلْنَ", example: "اُنْصُرْنَ", meaning: "Help! (f.pl)", pronoun: "أَنْتُنَّ", base: "نْصُرْ", prefix: "اُ", suffix: "ـْنَ", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "نُون", pattern: "Add ـْنَ for feminine plural", patternAr: "نُضِيفُ نُونًا لِجَمْعِ الْمُؤَنَّثِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
        color: "purple",
        singular: { form: "لِيَفْعُلْ", example: "لِيَنْصُرْ", meaning: "Let him help", pronoun: "هُوَ", base: "يَنْصُرْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam al-amr + Mudari Majzum", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ الْمَجْزُومُ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِيَفْعُلَا", example: "لِيَنْصُرَا", meaning: "Let them both help (m.)", pronoun: "هُمَا", base: "يَنْصُرْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعُلُوا", example: "لِيَنْصُرُوا", meaning: "Let them help (m.)", pronoun: "هُمْ", base: "يَنْصُرْ", prefix: "لِـ", suffix: "ـُوا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "وَاوُ الْجَمَاعَةِ", pattern: "Lam + plural waw", patternAr: "لَامُ الْأَمْرِ + وَاوُ الْجَمَاعَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
        color: "pink",
        singular: { form: "لِتَفْعُلْ", example: "لِتَنْصُرْ", meaning: "Let her help", pronoun: "هِيَ", base: "تَنْصُرْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + feminine Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ الْمُؤَنَّث", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِتَفْعُلَا", example: "لِتَنْصُرَا", meaning: "Let them both help (f.)", pronoun: "هُمَا", base: "تَنْصُرْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif (fem)", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعُلْنَ", example: "لِيَنْصُرْنَ", meaning: "Let them help (f.)", pronoun: "هُنَّ", base: "يَنْصُرْ", prefix: "لِـ", suffix: "ـْنَ", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "نُونُ النِّسْوَةِ", pattern: "Lam + nun niswa", patternAr: "لَامُ الْأَمْرِ + نُونُ النِّسْوَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
        color: "emerald",
        singular: { form: "لِأَفْعُلْ", example: "لِأَنْصُرْ", meaning: "Let me help", pronoun: "أَنَا", base: "أَنْصُرْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + 1st person Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (مُتَكَلِّم)", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "—", example: "—", meaning: "—", pronoun: "—", base: "—", prefix: "—", suffix: "—", pattern: "Not used", patternAr: "لَا يُسْتَخْدَمُ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِنَفْعُلْ", example: "لِنَنْصُرْ", meaning: "Let us help", pronoun: "نَحْنُ", base: "نَنْصُرْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + plural Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (جَمْع)", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      }
    ],
    // Pattern 2: Kasra (اِفْعِلْ) - جَلَسَ/يَجْلِسُ
    kasra: [
      {
        rowName: { ar: "حَاضِرٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
        color: "blue",
        singular: { form: "اِفْعِلْ", example: "اِجْلِسْ", meaning: "Sit! (m.s)", pronoun: "أَنْتَ", base: "جْلِسْ", prefix: "اِ", suffix: "—", prefixAr: "هَمْزَةُ الْوَصْلِ", pattern: "Direct command with hamzatul wasl (kasra)", patternAr: "أَمْرٌ مُبَاشِرٌ بِهَمْزَةِ الْوَصْلِ مَكْسُورَة", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "اِفْعِلَا", example: "اِجْلِسَا", meaning: "Sit! (m. dual)", pronoun: "أَنْتُمَا", base: "جْلِسْ", prefix: "اِ", suffix: "ـَا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "أَلِف", pattern: "Add ـَا for dual", patternAr: "نُضِيفُ أَلِفًا لِلْمُثَنَّى", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "اِفْعِلُوا", example: "اِجْلِسُوا", meaning: "Sit! (m.pl)", pronoun: "أَنْتُمْ", base: "جْلِسْ", prefix: "اِ", suffix: "ـُوا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "وَاو + أَلِف", pattern: "Add ـُوا for plural", patternAr: "نُضِيفُ وَاوًا وَأَلِفًا لِلْجَمْعِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "حَاضِرٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
        color: "rose",
        singular: { form: "اِفْعِلِي", example: "اِجْلِسِي", meaning: "Sit! (f.s)", pronoun: "أَنْتِ", base: "جْلِسْ", prefix: "اِ", suffix: "ـِي", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "يَاء", pattern: "Add ـِي for feminine", patternAr: "نُضِيفُ يَاءً لِلْمُؤَنَّثِ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "اِفْعِلَا", example: "اِجْلِسَا", meaning: "Sit! (f. dual)", pronoun: "أَنْتُمَا", base: "جْلِسْ", prefix: "اِ", suffix: "ـَا", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "أَلِف", pattern: "Same as masculine dual", patternAr: "مِثْلُ الْمُثَنَّى الْمُذَكَّرِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "اِفْعِلْنَ", example: "اِجْلِسْنَ", meaning: "Sit! (f.pl)", pronoun: "أَنْتُنَّ", base: "جْلِسْ", prefix: "اِ", suffix: "ـْنَ", prefixAr: "هَمْزَةُ الْوَصْلِ", suffixAr: "نُون", pattern: "Add ـْنَ for feminine plural", patternAr: "نُضِيفُ نُونًا لِجَمْعِ الْمُؤَنَّثِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
        color: "purple",
        singular: { form: "لِيَفْعِلْ", example: "لِيَجْلِسْ", meaning: "Let him sit", pronoun: "هُوَ", base: "يَجْلِسْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam al-amr + Mudari Majzum", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ الْمَجْزُومُ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِيَفْعِلَا", example: "لِيَجْلِسَا", meaning: "Let them both sit (m.)", pronoun: "هُمَا", base: "يَجْلِسْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعِلُوا", example: "لِيَجْلِسُوا", meaning: "Let them sit (m.)", pronoun: "هُمْ", base: "يَجْلِسْ", prefix: "لِـ", suffix: "ـُوا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "وَاوُ الْجَمَاعَةِ", pattern: "Lam + plural waw", patternAr: "لَامُ الْأَمْرِ + وَاوُ الْجَمَاعَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
        color: "pink",
        singular: { form: "لِتَفْعِلْ", example: "لِتَجْلِسْ", meaning: "Let her sit", pronoun: "هِيَ", base: "تَجْلِسْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + feminine Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ الْمُؤَنَّث", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِتَفْعِلَا", example: "لِتَجْلِسَا", meaning: "Let them both sit (f.)", pronoun: "هُمَا", base: "تَجْلِسْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif (fem)", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعِلْنَ", example: "لِيَجْلِسْنَ", meaning: "Let them sit (f.)", pronoun: "هُنَّ", base: "يَجْلِسْ", prefix: "لِـ", suffix: "ـْنَ", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "نُونُ النِّسْوَةِ", pattern: "Lam + nun niswa", patternAr: "لَامُ الْأَمْرِ + نُونُ النِّسْوَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
        color: "emerald",
        singular: { form: "لِأَفْعِلْ", example: "لِأَجْلِسْ", meaning: "Let me sit", pronoun: "أَنَا", base: "أَجْلِسْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + 1st person Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (مُتَكَلِّم)", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "—", example: "—", meaning: "—", pronoun: "—", base: "—", prefix: "—", suffix: "—", pattern: "Not used", patternAr: "لَا يُسْتَخْدَمُ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِنَفْعِلْ", example: "لِنَجْلِسْ", meaning: "Let us sit", pronoun: "نَحْنُ", base: "نَجْلِسْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + plural Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (جَمْع)", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      }
    ],
    // Pattern 3: No Hamza - أَكَلَ/يَأْكُلُ (special verbs where hamza drops)
    noHamza: [
      {
        rowName: { ar: "حَاضِرٌ مُذَكَّرٌ", en: "2nd Person Masculine" },
        color: "blue",
        singular: { form: "فُلْ", example: "كُلْ", meaning: "Eat! (m.s)", pronoun: "أَنْتَ", base: "كُلْ", prefix: "—", suffix: "—", prefixAr: "بِدُونِ هَمْزَة", pattern: "Hamza dropped - special verb", patternAr: "حُذِفَتِ الْهَمْزَةُ - فِعْلٌ خَاصّ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "فُلَا", example: "كُلَا", meaning: "Eat! (m. dual)", pronoun: "أَنْتُمَا", base: "كُلْ", prefix: "—", suffix: "ـَا", prefixAr: "بِدُونِ هَمْزَة", suffixAr: "أَلِف", pattern: "Add ـَا for dual", patternAr: "نُضِيفُ أَلِفًا لِلْمُثَنَّى", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "فُلُوا", example: "كُلُوا", meaning: "Eat! (m.pl)", pronoun: "أَنْتُمْ", base: "كُلْ", prefix: "—", suffix: "ـُوا", prefixAr: "بِدُونِ هَمْزَة", suffixAr: "وَاو + أَلِف", pattern: "Add ـُوا for plural", patternAr: "نُضِيفُ وَاوًا وَأَلِفًا لِلْجَمْعِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "حَاضِرٌ مُؤَنَّثٌ", en: "2nd Person Feminine" },
        color: "rose",
        singular: { form: "فُلِي", example: "كُلِي", meaning: "Eat! (f.s)", pronoun: "أَنْتِ", base: "كُلْ", prefix: "—", suffix: "ـِي", prefixAr: "بِدُونِ هَمْزَة", suffixAr: "يَاء", pattern: "Add ـِي for feminine", patternAr: "نُضِيفُ يَاءً لِلْمُؤَنَّثِ", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "فُلَا", example: "كُلَا", meaning: "Eat! (f. dual)", pronoun: "أَنْتُمَا", base: "كُلْ", prefix: "—", suffix: "ـَا", prefixAr: "بِدُونِ هَمْزَة", suffixAr: "أَلِف", pattern: "Same as masculine dual", patternAr: "مِثْلُ الْمُثَنَّى الْمُذَكَّرِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "فُلْنَ", example: "كُلْنَ", meaning: "Eat! (f.pl)", pronoun: "أَنْتُنَّ", base: "كُلْ", prefix: "—", suffix: "ـْنَ", prefixAr: "بِدُونِ هَمْزَة", suffixAr: "نُون", pattern: "Add ـْنَ for feminine plural", patternAr: "نُضِيفُ نُونًا لِجَمْعِ الْمُؤَنَّثِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُذَكَّرٌ", en: "3rd Person Masculine" },
        color: "purple",
        singular: { form: "لِيَفْعُلْ", example: "لِيَأْكُلْ", meaning: "Let him eat", pronoun: "هُوَ", base: "يَأْكُلْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam al-amr + Mudari (hamza kept)", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (بَقِيَتِ الْهَمْزَة)", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِيَفْعُلَا", example: "لِيَأْكُلَا", meaning: "Let them both eat (m.)", pronoun: "هُمَا", base: "يَأْكُلْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعُلُوا", example: "لِيَأْكُلُوا", meaning: "Let them eat (m.)", pronoun: "هُمْ", base: "يَأْكُلْ", prefix: "لِـ", suffix: "ـُوا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "وَاوُ الْجَمَاعَةِ", pattern: "Lam + plural waw", patternAr: "لَامُ الْأَمْرِ + وَاوُ الْجَمَاعَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "غَائِبٌ مُؤَنَّثٌ", en: "3rd Person Feminine" },
        color: "pink",
        singular: { form: "لِتَفْعُلْ", example: "لِتَأْكُلْ", meaning: "Let her eat", pronoun: "هِيَ", base: "تَأْكُلْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + feminine Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ الْمُؤَنَّث", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "لِتَفْعُلَا", example: "لِتَأْكُلَا", meaning: "Let them both eat (f.)", pronoun: "هُمَا", base: "تَأْكُلْ", prefix: "لِـ", suffix: "ـَا", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "أَلِف", pattern: "Lam + dual alif (fem)", patternAr: "لَامُ الْأَمْرِ + أَلِفُ الْاِثْنَيْنِ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِيَفْعُلْنَ", example: "لِيَأْكُلْنَ", meaning: "Let them eat (f.)", pronoun: "هُنَّ", base: "يَأْكُلْ", prefix: "لِـ", suffix: "ـْنَ", prefixAr: "لَامُ الْأَمْرِ", suffixAr: "نُونُ النِّسْوَةِ", pattern: "Lam + nun niswa", patternAr: "لَامُ الْأَمْرِ + نُونُ النِّسْوَةِ", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      },
      {
        rowName: { ar: "مُتَكَلِّمٌ", en: "1st Person" },
        color: "emerald",
        singular: { form: "لِآفْعُلْ", example: "لِآكُلْ", meaning: "Let me eat", pronoun: "أَنَا", base: "آكُلْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + 1st person Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (مُتَكَلِّم)", numberType: { ar: "مُفْرَدٌ", en: "Singular" } },
        dual: { form: "—", example: "—", meaning: "—", pronoun: "—", base: "—", prefix: "—", suffix: "—", pattern: "Not used", patternAr: "لَا يُسْتَخْدَمُ", numberType: { ar: "مُثَنًّى", en: "Dual" } },
        plural: { form: "لِنَفْعُلْ", example: "لِنَأْكُلْ", meaning: "Let us eat", pronoun: "نَحْنُ", base: "نَأْكُلْ", prefix: "لِـ", suffix: "—", prefixAr: "لَامُ الْأَمْرِ", pattern: "Lam + plural Mudari", patternAr: "لَامُ الْأَمْرِ + الْمُضَارِعُ (جَمْع)", numberType: { ar: "جَمْعٌ", en: "Plural" } }
      }
    ]
  };

  // Get current conjugation chart based on screen
  const getChartKey = () => {
    if (currentScreen === 'chart_damma') return 'damma';
    if (currentScreen === 'chart_kasra') return 'kasra';
    if (currentScreen === 'chart_noHamza') return 'noHamza';
    return 'damma';
  };
  const conjugationChart = conjugationCharts[getChartKey()];
  const currentPatternInfo = patternInfo[currentScreen];
  const isChartScreen = currentScreen.startsWith('chart_');

  // Verb categories - Sahih (صحيح) verbs only for Amr - all 14 forms
  const verbCategories = [
    {
      id: "salim",
      name: { ar: "الصَّحِيحُ السَّالِمُ", en: "Sound Verb (Salim)" },
      description: "No weak letters, hamza, or doubled letters",
      color: "emerald",
      verbs: [
        {
          root: "ن-ص-ر",
          base: "اُنْصُرْ",
          madiBase: "نَصَرَ",
          mudariBase: "يَنْصُرُ",
          meaning: { ar: "أَعِنْ", en: "to help" },
          conjugations: [
            // Hadir Mujakkar (2nd person masculine)
            { pronoun: "أَنْتَ", form: "اُنْصُرْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اُنْصُرَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اُنْصُرُوا", row: "hadir_m" },
            // Hadir Muannas (2nd person feminine)
            { pronoun: "أَنْتِ", form: "اُنْصُرِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اُنْصُرَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُنْصُرْنَ", row: "hadir_f" },
            // Gayeb Mujakkar (3rd person masculine)
            { pronoun: "هُوَ", form: "لِيَنْصُرْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَنْصُرَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَنْصُرُوا", row: "gayeb_m" },
            // Gayeb Muannas (3rd person feminine)
            { pronoun: "هِيَ", form: "لِتَنْصُرْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَنْصُرَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَنْصُرْنَ", row: "gayeb_f" },
            // Mutakallim (1st person)
            { pronoun: "أَنَا", form: "لِأَنْصُرْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَنْصُرْ", row: "mutakallim" }
          ]
        },
        {
          root: "ك-ت-ب",
          base: "اُكْتُبْ",
          madiBase: "كَتَبَ",
          mudariBase: "يَكْتُبُ",
          meaning: { ar: "سَطِّرْ", en: "to write" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اُكْتُبْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اُكْتُبَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اُكْتُبُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اُكْتُبِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اُكْتُبَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُكْتُبْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَكْتُبْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَكْتُبَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَكْتُبُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَكْتُبْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَكْتُبَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَكْتُبْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَكْتُبْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَكْتُبْ", row: "mutakallim" }
          ]
        },
        {
          root: "ج-ل-س",
          base: "اِجْلِسْ",
          madiBase: "جَلَسَ",
          mudariBase: "يَجْلِسُ",
          meaning: { ar: "اُقْعُدْ", en: "to sit" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِجْلِسْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِجْلِسَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِجْلِسُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِجْلِسِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِجْلِسَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِجْلِسْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَجْلِسْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَجْلِسَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَجْلِسُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَجْلِسْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَجْلِسَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَجْلِسْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَجْلِسْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَجْلِسْ", row: "mutakallim" }
          ]
        },
        {
          root: "ذ-ه-ب",
          base: "اِذْهَبْ",
          madiBase: "ذَهَبَ",
          mudariBase: "يَذْهَبُ",
          meaning: { ar: "اِمْضِ", en: "to go" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِذْهَبْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِذْهَبَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِذْهَبُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِذْهَبِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِذْهَبَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِذْهَبْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَذْهَبْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَذْهَبَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَذْهَبُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَذْهَبْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَذْهَبَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَذْهَبْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَذْهَبْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَذْهَبْ", row: "mutakallim" }
          ]
        },
        {
          root: "ف-ت-ح",
          base: "اِفْتَحْ",
          madiBase: "فَتَحَ",
          mudariBase: "يَفْتَحُ",
          meaning: { ar: "أَزِلِ الْإِغْلَاقَ", en: "to open" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِفْتَحْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِفْتَحَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِفْتَحُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِفْتَحِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِفْتَحَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِفْتَحْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَفْتَحْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَفْتَحَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَفْتَحُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَفْتَحْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَفْتَحَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَفْتَحْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَفْتَحْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَفْتَحْ", row: "mutakallim" }
          ]
        },
        {
          root: "خ-ر-ج",
          base: "اُخْرُجْ",
          madiBase: "خَرَجَ",
          mudariBase: "يَخْرُجُ",
          meaning: { ar: "اُبْرُزْ", en: "to exit" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اُخْرُجْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اُخْرُجَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اُخْرُجُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اُخْرُجِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اُخْرُجَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُخْرُجْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَخْرُجْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَخْرُجَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَخْرُجُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَخْرُجْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَخْرُجَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَخْرُجْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَخْرُجْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَخْرُجْ", row: "mutakallim" }
          ]
        },
        {
          root: "د-خ-ل",
          base: "اُدْخُلْ",
          madiBase: "دَخَلَ",
          mudariBase: "يَدْخُلُ",
          meaning: { ar: "لِجْ", en: "to enter" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اُدْخُلْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اُدْخُلَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اُدْخُلُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اُدْخُلِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اُدْخُلَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُدْخُلْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَدْخُلْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَدْخُلَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَدْخُلُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَدْخُلْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَدْخُلَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَدْخُلْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَدْخُلْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَدْخُلْ", row: "mutakallim" }
          ]
        },
        {
          root: "ع-ل-م",
          base: "اِعْلَمْ",
          madiBase: "عَلِمَ",
          mudariBase: "يَعْلَمُ",
          meaning: { ar: "اِعْرِفْ", en: "to know" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِعْلَمْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِعْلَمَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِعْلَمُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِعْلَمِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِعْلَمَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِعْلَمْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَعْلَمْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَعْلَمَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَعْلَمُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَعْلَمْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَعْلَمَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَعْلَمْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَعْلَمْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَعْلَمْ", row: "mutakallim" }
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
          base: "كُلْ",
          madiBase: "أَكَلَ",
          mudariBase: "يَأْكُلُ",
          meaning: { ar: "تَنَاوَلْ", en: "to eat" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "كُلْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "كُلَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "كُلُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "كُلِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "كُلَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "كُلْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَأْكُلْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَأْكُلَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَأْكُلُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَأْكُلْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَأْكُلَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَأْكُلْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِآكُلْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَأْكُلْ", row: "mutakallim" }
          ]
        },
        {
          root: "أ-خ-ذ",
          base: "خُذْ",
          madiBase: "أَخَذَ",
          mudariBase: "يَأْخُذُ",
          meaning: { ar: "تَنَاوَلْ", en: "to take" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "خُذْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "خُذَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "خُذُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "خُذِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "خُذَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "خُذْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَأْخُذْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَأْخُذَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَأْخُذُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَأْخُذْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَأْخُذَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَأْخُذْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِآخُذْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَأْخُذْ", row: "mutakallim" }
          ]
        },
        {
          root: "أ-م-ر",
          base: "مُرْ",
          madiBase: "أَمَرَ",
          mudariBase: "يَأْمُرُ",
          meaning: { ar: "أْمُرْ", en: "to command" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "مُرْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "مُرَا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "مُرُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "مُرِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "مُرَا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "مُرْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَأْمُرْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَأْمُرَا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَأْمُرُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَأْمُرْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَأْمُرَا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَأْمُرْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِآمُرْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَأْمُرْ", row: "mutakallim" }
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
          base: "اِقْرَأْ",
          madiBase: "قَرَأَ",
          mudariBase: "يَقْرَأُ",
          meaning: { ar: "اُتْلُ", en: "to read" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِقْرَأْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِقْرَآ", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِقْرَأُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِقْرَئِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِقْرَآ", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِقْرَأْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَقْرَأْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَقْرَآ", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَقْرَأُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَقْرَأْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَقْرَآ", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَقْرَأْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَقْرَأْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَقْرَأْ", row: "mutakallim" }
          ]
        },
        {
          root: "ب-د-أ",
          base: "اِبْدَأْ",
          madiBase: "بَدَأَ",
          mudariBase: "يَبْدَأُ",
          meaning: { ar: "اِشْرَعْ", en: "to begin" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "اِبْدَأْ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "اِبْدَآ", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "اِبْدَأُوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "اِبْدَئِي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "اِبْدَآ", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اِبْدَأْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَبْدَأْ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَبْدَآ", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَبْدَأُوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَبْدَأْ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَبْدَآ", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَبْدَأْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَبْدَأْ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَبْدَأْ", row: "mutakallim" }
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
          base: "رُدَّ",
          madiBase: "رَدَّ",
          mudariBase: "يَرُدُّ",
          meaning: { ar: "أَرْجِعْ", en: "to return" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "رُدَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "رُدَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "رُدُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "رُدِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "رُدَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُرْدُدْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَرُدَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَرُدَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَرُدُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَرُدَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَرُدَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَرْدُدْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَرُدَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَرُدَّ", row: "mutakallim" }
          ]
        },
        {
          root: "م-د-د",
          base: "مُدَّ",
          madiBase: "مَدَّ",
          mudariBase: "يَمُدُّ",
          meaning: { ar: "اُبْسُطْ", en: "to extend" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "مُدَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "مُدَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "مُدُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "مُدِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "مُدَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُمْدُدْنَ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَمُدَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَمُدَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَمُدُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَمُدَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَمُدَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَمْدُدْنَ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَمُدَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَمُدَّ", row: "mutakallim" }
          ]
        },
        {
          root: "ظ-ن-ن",
          base: "ظُنَّ",
          madiBase: "ظَنَّ",
          mudariBase: "يَظُنُّ",
          meaning: { ar: "اِعْتَقِدْ", en: "to think/suppose" },
          conjugations: [
            { pronoun: "أَنْتَ", form: "ظُنَّ", row: "hadir_m" },
            { pronoun: "أَنْتُمَا", form: "ظُنَّا", row: "hadir_m" },
            { pronoun: "أَنْتُمْ", form: "ظُنُّوا", row: "hadir_m" },
            { pronoun: "أَنْتِ", form: "ظُنِّي", row: "hadir_f" },
            { pronoun: "أَنْتُمَا", form: "ظُنَّا", row: "hadir_f" },
            { pronoun: "أَنْتُنَّ", form: "اُظْنُنَّ", row: "hadir_f" },
            { pronoun: "هُوَ", form: "لِيَظُنَّ", row: "gayeb_m" },
            { pronoun: "هُمَا", form: "لِيَظُنَّا", row: "gayeb_m" },
            { pronoun: "هُمْ", form: "لِيَظُنُّوا", row: "gayeb_m" },
            { pronoun: "هِيَ", form: "لِتَظُنَّ", row: "gayeb_f" },
            { pronoun: "هُمَا", form: "لِتَظُنَّا", row: "gayeb_f" },
            { pronoun: "هُنَّ", form: "لِيَظْنُنَّ", row: "gayeb_f" },
            { pronoun: "أَنَا", form: "لِأَظُنَّ", row: "mutakallim" },
            { pronoun: "نَحْنُ", form: "لِنَظُنَّ", row: "mutakallim" }
          ]
        }
      ]
    }
  ];

  // Quiz questions for Amr
  const quizQuestions = [
    {
      question: "What is the command form for 'Help!' (m.s)?",
      questionAr: "مَا صِيغَةُ الْأَمْرِ لِـ 'Help!' (مذكر مفرد)؟",
      options: ["اُنْصُرْ", "اُنْصُرِي", "اُنْصُرُوا", "اُنْصُرَا"],
      correct: 0
    },
    {
      question: "What does اُكْتُبِي mean?",
      questionAr: "مَا مَعْنَى اُكْتُبِي؟",
      options: ["Write! (m.s)", "Write! (f.s)", "Write! (m.pl)", "Write! (dual)"],
      correct: 1
    },
    {
      question: "Choose the correct form for 'Sit!' (m.pl):",
      questionAr: "اخْتَرْ لِـ 'Sit!' (جمع مذكر):",
      options: ["اِجْلِسْ", "اِجْلِسِي", "اِجْلِسُوا", "اِجْلِسَا"],
      correct: 2
    },
    {
      question: "What is 'Go!' (dual) in Arabic?",
      questionAr: "مَا 'Go!' (مثنى) بِالْعَرَبِيَّةِ؟",
      options: ["اِذْهَبْ", "اِذْهَبِي", "اِذْهَبُوا", "اِذْهَبَا"],
      correct: 3
    },
    {
      question: "What does اِفْتَحْنَ mean?",
      questionAr: "مَا مَعْنَى اِفْتَحْنَ؟",
      options: ["Open! (m.s)", "Open! (f.s)", "Open! (m.pl)", "Open! (f.pl)"],
      correct: 3
    },
    {
      question: "Choose 'Enter!' (f.s):",
      questionAr: "اخْتَرْ 'Enter!' (مؤنث مفرد):",
      options: ["اُدْخُلْ", "اُدْخُلِي", "اُدْخُلُوا", "اُدْخُلَا"],
      correct: 1
    },
    {
      question: "What is special about the Amr of أَكَلَ?",
      questionAr: "مَا الْمُمَيَّزُ فِي أَمْرِ أَكَلَ؟",
      options: ["Regular form", "Hamza is dropped", "Has shaddah", "No change"],
      correct: 1
    },
    {
      question: "What is 'Read!' (m.s) in Arabic?",
      questionAr: "مَا 'Read!' (مذكر مفرد) بِالْعَرَبِيَّةِ؟",
      options: ["اِقْرَأْ", "اُقْرَأْ", "قَرَأَ", "يَقْرَأُ"],
      correct: 0
    },
    {
      question: "Choose the correct form for 'Take!' (m.s):",
      questionAr: "اخْتَرْ لِـ 'Take!' (مذكر مفرد):",
      options: ["أَخَذَ", "خُذْ", "اُخُذْ", "يَأْخُذُ"],
      correct: 1
    },
    {
      question: "Amr is formed from which tense?",
      questionAr: "مِنْ أَيِّ صِيغَةٍ يُشْتَقُّ الْأَمْرُ؟",
      options: ["Madi", "Mudari", "Ism", "Harf"],
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
    { index: 6, label: "غَائِبٌ مُذَكَّرٌ مُفْرَدٌ", en: "Let him" },
    { index: 7, label: "غَائِبٌ مُذَكَّرٌ مُثَنًّى", en: "Let them (m. dual)" },
    { index: 8, label: "غَائِبٌ مُذَكَّرٌ جَمْعٌ", en: "Let them (m.pl)" },
    // Gayeb Muannas (3rd person feminine)
    { index: 9, label: "غَائِبٌ مُؤَنَّثٌ مُفْرَدٌ", en: "Let her" },
    { index: 10, label: "غَائِبٌ مُؤَنَّثٌ مُثَنًّى", en: "Let them (f. dual)" },
    { index: 11, label: "غَائِبٌ مُؤَنَّثٌ جَمْعٌ", en: "Let them (f.pl)" },
    // Mutakallim (1st person)
    { index: 12, label: "مُتَكَلِّمٌ مُفْرَدٌ", en: "Let me" },
    { index: 13, label: "مُتَكَلِّمٌ جَمْعٌ", en: "Let us" }
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
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2 sm:p-3">
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
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="arabic-text text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: 'var(--font-arabic)' }}>
              صِيغَةُ الْأَمْرِ
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">Imperative (Command) Form</p>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Screen Navigation */}
        <div className="max-w-4xl mx-auto px-3 pb-2">
          <div className="flex justify-center gap-1 sm:gap-2 flex-wrap">
            {/* Chart Tabs */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => { setCurrentScreen('chart_damma'); setSelectedVerb(null); }}
                className={`px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  currentScreen === 'chart_damma'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>اُ</span>
              </button>
              <button
                onClick={() => { setCurrentScreen('chart_kasra'); setSelectedVerb(null); }}
                className={`px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  currentScreen === 'chart_kasra'
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>اِ</span>
              </button>
              <button
                onClick={() => { setCurrentScreen('chart_noHamza'); setSelectedVerb(null); }}
                className={`px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  currentScreen === 'chart_noHamza'
                    ? 'bg-rose-500 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-xs">No ء</span>
              </button>
            </div>
            {/* Other Tabs */}
            <button
              onClick={() => { setCurrentScreen('verbs'); setSelectedVerb(null); }}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentScreen === 'verbs'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Verbs
            </button>
            <button
              onClick={() => { setCurrentScreen('quiz'); setSelectedVerb(null); }}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                currentScreen === 'quiz'
                  ? 'bg-orange-500 text-white'
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
        {isChartScreen && (
          <>
            {/* Chart Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-xl overflow-hidden">
              <div className="p-3 text-center">
                <p className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>
                  جَدْوَلُ التَّصْرِيفِ: {currentPatternInfo?.verb}
                </p>
                <p className="text-sm text-orange-100">Conjugation Table: {currentPatternInfo?.verb} ({currentPatternInfo?.verbEn})</p>
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

            {/* Hamzatul Wasl Patterns */}
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <h3 className="font-semibold text-orange-800 mb-3 text-center arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                أَنْوَاعُ هَمْزَةِ الْوَصْلِ فِي الْأَمْرِ
              </h3>
              <p className="text-center text-sm text-orange-600 mb-4">Hamzatul Wasl Patterns in Amr</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Pattern 1: Damma */}
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <div className="text-center mb-2">
                    <span className="arabic-text text-3xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-arabic)' }}>اُفْعُلْ</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-blue-700">When: عَيْنُ الْمُضَارِعِ = ضَمَّة</p>
                    <p>If Mudari's middle vowel is damma (ُ)</p>
                    <div className="mt-2 text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَنْصُرُ ← اُنْصُرْ</span>
                    </div>
                    <div className="text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَكْتُبُ ← اُكْتُبْ</span>
                    </div>
                  </div>
                </div>

                {/* Pattern 2: Kasra */}
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <div className="text-center mb-2">
                    <span className="arabic-text text-3xl font-bold text-emerald-600" style={{ fontFamily: 'var(--font-arabic)' }}>اِفْعِلْ</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-emerald-700">When: عَيْنُ الْمُضَارِعِ = كَسْرَة/فَتْحَة</p>
                    <p>If Mudari's middle vowel is kasra (ِ) or fatha (َ)</p>
                    <div className="mt-2 text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَجْلِسُ ← اِجْلِسْ</span>
                    </div>
                    <div className="text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَذْهَبُ ← اِذْهَبْ</span>
                    </div>
                  </div>
                </div>

                {/* Pattern 3: No Hamza */}
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <div className="text-center mb-2">
                    <span className="arabic-text text-3xl font-bold text-rose-600" style={{ fontFamily: 'var(--font-arabic)' }}>فُلْ</span>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p className="font-semibold text-rose-700">When: الْمَهْمُوزُ الْفَاءِ الْخَاصّ</p>
                    <p>Special hamzated verbs (أَكَلَ، أَخَذَ، أَمَرَ)</p>
                    <div className="mt-2 text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَأْكُلُ ← كُلْ</span>
                    </div>
                    <div className="text-center">
                      <span className="arabic-text text-sm" style={{ fontFamily: 'var(--font-arabic)' }}>يَأْخُذُ ← خُذْ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lam Al-Amr Info */}
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h3 className="font-semibold text-purple-800 mb-3 text-center arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                لَامُ الْأَمْرِ
              </h3>
              <p className="text-center text-sm text-purple-600 mb-3">Lam of Command - For 3rd & 1st Person</p>

              <div className="text-sm text-purple-700 space-y-2">
                <p>For غائب (3rd person) and متكلم (1st person), we use <span className="arabic-text font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>لِـ</span> + Mudari Majzum:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-white p-2 rounded border border-purple-200 text-center">
                    <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>لِيَنْصُرْ</span>
                    <p className="text-xs text-gray-500">Let him help</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200 text-center">
                    <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>لِتَنْصُرْ</span>
                    <p className="text-xs text-gray-500">Let her help</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200 text-center">
                    <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>لِأَنْصُرْ</span>
                    <p className="text-xs text-gray-500">Let me help</p>
                  </div>
                  <div className="bg-white p-2 rounded border border-purple-200 text-center">
                    <span className="arabic-text text-lg" style={{ fontFamily: 'var(--font-arabic)' }}>لِنَنْصُرْ</span>
                    <p className="text-xs text-gray-500">Let us help</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
              <p className="text-sm text-amber-700">
                <span className="font-semibold">Note:</span> Direct command (اُفْعُلْ) is only for حاضر (2nd person). For غائب & متكلم, use لِـ + Mudari Majzum.
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
                  !showAllConjugations ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Step by Step
              </button>
              <button
                onClick={() => setShowAllConjugations(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  showAllConjugations ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
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
                      className="h-full bg-orange-500 transition-all"
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

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
                  <div className="arabic-text text-lg text-orange-600 mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
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
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
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
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 sm:p-4">
              <h2 className="arabic-text text-xl sm:text-2xl font-bold text-center" style={{ fontFamily: 'var(--font-arabic)' }}>
                اخْتِبَارٌ قَصِيرٌ
              </h2>
              <p className="text-orange-100 text-center text-sm">Quick Quiz</p>
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
                        className="h-full bg-orange-500 transition-all"
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
                          ? "border-orange-500 bg-orange-50 text-orange-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-orange-300";
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
                            ? 'bg-orange-500 text-white hover:bg-orange-600'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600"
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
                    Score: <span className="font-bold text-orange-600">{score}</span> / {quizQuestions.length}
                  </p>
                  <div className="mb-6">
                    {score === quizQuestions.length && <p className="text-green-600 font-semibold">Perfect!</p>}
                    {score >= quizQuestions.length * 0.8 && score < quizQuestions.length && <p className="text-green-600 font-semibold">Great job!</p>}
                    {score >= quizQuestions.length * 0.5 && score < quizQuestions.length * 0.8 && <p className="text-amber-600 font-semibold">Good effort!</p>}
                    {score < quizQuestions.length * 0.5 && <p className="text-orange-600 font-semibold">Keep practicing!</p>}
                  </div>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-3 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600"
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
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-3 sm:px-4 py-1.5 sm:py-3 text-center flex-shrink-0">
              <p className="text-white text-xs sm:text-sm font-medium">
                {popupData.rowName?.en} {popupData.numberType?.en}
              </p>
            </div>

            {/* Main Content */}
            <div className="p-3 sm:p-6 bg-gradient-to-b from-gray-50 to-white flex-1 overflow-y-auto">
              {/* Pronoun */}
              <div className="text-center mb-2 sm:mb-4">
                <div className="arabic-text text-2xl sm:text-4xl font-bold text-orange-700 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.pronoun}
                </div>
                <span className="inline-block bg-orange-100 text-orange-700 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                  {popupData.meaning}
                </span>
              </div>

              {/* Command Form */}
              <div className="text-center mb-3 sm:mb-6">
                <div className="arabic-text text-3xl sm:text-6xl font-bold text-amber-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {popupData.example}
                </div>
              </div>

              {/* Visual Equation */}
              <div className="flex items-center justify-center gap-1 sm:gap-3 mb-3 sm:mb-6 flex-wrap">
                {/* Prefix */}
                {popupData.prefix && popupData.prefix !== '—' && (
                  <>
                    <div className="border-2 border-blue-500 bg-blue-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                      <span className="arabic-text text-base sm:text-2xl text-blue-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {popupData.prefix}
                      </span>
                    </div>
                    <span className="text-gray-400 text-base sm:text-xl font-bold">+</span>
                  </>
                )}
                {/* Base */}
                <div className="border-2 border-amber-500 bg-amber-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                  <span className="arabic-text text-base sm:text-2xl text-amber-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.base}
                  </span>
                </div>
                {popupData.suffix && popupData.suffix !== '—' && (
                  <>
                    <span className="text-gray-400 text-base sm:text-xl font-bold">+</span>
                    {/* Suffix */}
                    <div className="border-2 border-emerald-500 bg-emerald-50 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
                      <span className="arabic-text text-base sm:text-2xl text-emerald-700 font-bold" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {popupData.suffix}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Prefix Section */}
              {popupData.prefix && popupData.prefix !== '—' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center mb-2 sm:mb-3">
                  <div className="text-blue-600 text-[10px] sm:text-xs mb-1 sm:mb-2 font-medium">
                    Prefix | هَمْزَةُ الْوَصْلِ
                  </div>
                  <div className="arabic-text text-2xl sm:text-4xl font-bold text-blue-700" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.prefix}
                  </div>
                  <div className="arabic-text text-xs sm:text-sm text-blue-600 mt-0.5 sm:mt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {popupData.prefixAr}
                  </div>
                </div>
              )}

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
              className="w-full py-2 sm:py-3 bg-orange-500 text-white text-sm sm:text-base font-medium hover:bg-orange-600 transition-colors flex-shrink-0"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmrConjugation;
