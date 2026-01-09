// Madi (Past Tense) Verb Conjugation Data
// تصريف الفعل الماضي

export const madiConjugationData = {
  title: {
    ar: "تَصْرِيفُ الْفِعْلِ الْمَاضِي",
    en: "Past Tense Verb Conjugation"
  },
  description: {
    ar: "الْفِعْلُ الْمَاضِي يَدُلُّ عَلَى حَدَثٍ وَقَعَ فِي الزَّمَنِ الْمَاضِي",
    en: "The past tense verb indicates an action that occurred in the past"
  },
  // Pronoun labels for conjugation tables
  pronounLabels: [
    { pronoun: "هُوَ", en: "He", person: "3rd", gender: "m", number: "sing" },
    { pronoun: "هِيَ", en: "She", person: "3rd", gender: "f", number: "sing" },
    { pronoun: "هُمَا (م)", en: "They two (m)", person: "3rd", gender: "m", number: "dual" },
    { pronoun: "هُمَا (ف)", en: "They two (f)", person: "3rd", gender: "f", number: "dual" },
    { pronoun: "هُمْ", en: "They (m)", person: "3rd", gender: "m", number: "plural" },
    { pronoun: "هُنَّ", en: "They (f)", person: "3rd", gender: "f", number: "plural" },
    { pronoun: "أَنْتَ", en: "You (m)", person: "2nd", gender: "m", number: "sing" },
    { pronoun: "أَنْتِ", en: "You (f)", person: "2nd", gender: "f", number: "sing" },
    { pronoun: "أَنْتُمَا", en: "You two", person: "2nd", gender: "both", number: "dual" },
    { pronoun: "أَنْتُمْ", en: "You (m.pl)", person: "2nd", gender: "m", number: "plural" },
    { pronoun: "أَنْتُنَّ", en: "You (f.pl)", person: "2nd", gender: "f", number: "plural" },
    { pronoun: "أَنَا", en: "I", person: "1st", gender: "both", number: "sing" },
    { pronoun: "نَحْنُ", en: "We", person: "1st", gender: "both", number: "plural" }
  ],
  // Verb patterns with conjugations
  verbs: [
    {
      id: "nasara",
      root: "ن-ص-ر",
      baseForm: "نَصَرَ",
      meaning: { ar: "أَعَانَ", en: "to help / to support" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "sound",
      verse: "إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ",
      surah: "سُورَةُ مُحَمَّدٍ: ٧",
      verseTranslation: "If you support Allah, He will support you.",
      conjugations: [
        { form: "نَصَرَ", pronoun: "هُوَ" },
        { form: "نَصَرَتْ", pronoun: "هِيَ" },
        { form: "نَصَرَا", pronoun: "هُمَا (م)" },
        { form: "نَصَرَتَا", pronoun: "هُمَا (ف)" },
        { form: "نَصَرُوا", pronoun: "هُمْ" },
        { form: "نَصَرْنَ", pronoun: "هُنَّ" },
        { form: "نَصَرْتَ", pronoun: "أَنْتَ" },
        { form: "نَصَرْتِ", pronoun: "أَنْتِ" },
        { form: "نَصَرْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "نَصَرْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "نَصَرْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "نَصَرْتُ", pronoun: "أَنَا" },
        { form: "نَصَرْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "kataba",
      root: "ك-ت-ب",
      baseForm: "كَتَبَ",
      meaning: { ar: "سَطَّرَ", en: "to write" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "sound",
      verse: "كَتَبَ اللَّهُ لَأَغْلِبَنَّ أَنَا وَرُسُلِي",
      surah: "سُورَةُ الْمُجَادَلَةِ: ٢١",
      verseTranslation: "Allah has decreed: I and My messengers will surely prevail.",
      conjugations: [
        { form: "كَتَبَ", pronoun: "هُوَ" },
        { form: "كَتَبَتْ", pronoun: "هِيَ" },
        { form: "كَتَبَا", pronoun: "هُمَا (م)" },
        { form: "كَتَبَتَا", pronoun: "هُمَا (ف)" },
        { form: "كَتَبُوا", pronoun: "هُمْ" },
        { form: "كَتَبْنَ", pronoun: "هُنَّ" },
        { form: "كَتَبْتَ", pronoun: "أَنْتَ" },
        { form: "كَتَبْتِ", pronoun: "أَنْتِ" },
        { form: "كَتَبْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "كَتَبْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "كَتَبْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "كَتَبْتُ", pronoun: "أَنَا" },
        { form: "كَتَبْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "daraba",
      root: "ض-ر-ب",
      baseForm: "ضَرَبَ",
      meaning: { ar: "وَقَعَ عَلَيْهِ", en: "to strike / to hit" },
      pattern: "فَعَلَ - يَفْعِلُ",
      category: "sound",
      verse: "وَضَرَبَ اللَّهُ مَثَلًا",
      surah: "سُورَةُ النَّحْلِ: ٧٥",
      verseTranslation: "Allah sets forth an example.",
      conjugations: [
        { form: "ضَرَبَ", pronoun: "هُوَ" },
        { form: "ضَرَبَتْ", pronoun: "هِيَ" },
        { form: "ضَرَبَا", pronoun: "هُمَا (م)" },
        { form: "ضَرَبَتَا", pronoun: "هُمَا (ف)" },
        { form: "ضَرَبُوا", pronoun: "هُمْ" },
        { form: "ضَرَبْنَ", pronoun: "هُنَّ" },
        { form: "ضَرَبْتَ", pronoun: "أَنْتَ" },
        { form: "ضَرَبْتِ", pronoun: "أَنْتِ" },
        { form: "ضَرَبْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "ضَرَبْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "ضَرَبْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "ضَرَبْتُ", pronoun: "أَنَا" },
        { form: "ضَرَبْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "fataha",
      root: "ف-ت-ح",
      baseForm: "فَتَحَ",
      meaning: { ar: "أَزَالَ الْغَلْقَ", en: "to open / to conquer" },
      pattern: "فَعَلَ - يَفْتَحُ",
      category: "sound",
      verse: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا",
      surah: "سُورَةُ الْفَتْحِ: ١",
      verseTranslation: "Indeed, We have given you a clear conquest.",
      conjugations: [
        { form: "فَتَحَ", pronoun: "هُوَ" },
        { form: "فَتَحَتْ", pronoun: "هِيَ" },
        { form: "فَتَحَا", pronoun: "هُمَا (م)" },
        { form: "فَتَحَتَا", pronoun: "هُمَا (ف)" },
        { form: "فَتَحُوا", pronoun: "هُمْ" },
        { form: "فَتَحْنَ", pronoun: "هُنَّ" },
        { form: "فَتَحْتَ", pronoun: "أَنْتَ" },
        { form: "فَتَحْتِ", pronoun: "أَنْتِ" },
        { form: "فَتَحْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "فَتَحْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "فَتَحْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "فَتَحْتُ", pronoun: "أَنَا" },
        { form: "فَتَحْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "jalasa",
      root: "ج-ل-س",
      baseForm: "جَلَسَ",
      meaning: { ar: "قَعَدَ", en: "to sit" },
      pattern: "فَعَلَ - يَفْعِلُ",
      category: "sound",
      verse: "—",
      surah: "—",
      verseTranslation: "—",
      conjugations: [
        { form: "جَلَسَ", pronoun: "هُوَ" },
        { form: "جَلَسَتْ", pronoun: "هِيَ" },
        { form: "جَلَسَا", pronoun: "هُمَا (م)" },
        { form: "جَلَسَتَا", pronoun: "هُمَا (ف)" },
        { form: "جَلَسُوا", pronoun: "هُمْ" },
        { form: "جَلَسْنَ", pronoun: "هُنَّ" },
        { form: "جَلَسْتَ", pronoun: "أَنْتَ" },
        { form: "جَلَسْتِ", pronoun: "أَنْتِ" },
        { form: "جَلَسْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "جَلَسْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "جَلَسْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "جَلَسْتُ", pronoun: "أَنَا" },
        { form: "جَلَسْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "kharaja",
      root: "خ-ر-ج",
      baseForm: "خَرَجَ",
      meaning: { ar: "بَرَزَ", en: "to go out / to exit" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "sound",
      verse: "وَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ",
      surah: "سُورَةُ الْقَصَصِ: ٢١",
      verseTranslation: "And he left it, fearful and anticipating.",
      conjugations: [
        { form: "خَرَجَ", pronoun: "هُوَ" },
        { form: "خَرَجَتْ", pronoun: "هِيَ" },
        { form: "خَرَجَا", pronoun: "هُمَا (م)" },
        { form: "خَرَجَتَا", pronoun: "هُمَا (ف)" },
        { form: "خَرَجُوا", pronoun: "هُمْ" },
        { form: "خَرَجْنَ", pronoun: "هُنَّ" },
        { form: "خَرَجْتَ", pronoun: "أَنْتَ" },
        { form: "خَرَجْتِ", pronoun: "أَنْتِ" },
        { form: "خَرَجْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "خَرَجْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "خَرَجْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "خَرَجْتُ", pronoun: "أَنَا" },
        { form: "خَرَجْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "dakhala",
      root: "د-خ-ل",
      baseForm: "دَخَلَ",
      meaning: { ar: "وَلَجَ", en: "to enter" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "sound",
      verse: "وَقُلْ رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ",
      surah: "سُورَةُ الْإِسْرَاءِ: ٨٠",
      verseTranslation: "And say: My Lord, admit me a true entrance.",
      conjugations: [
        { form: "دَخَلَ", pronoun: "هُوَ" },
        { form: "دَخَلَتْ", pronoun: "هِيَ" },
        { form: "دَخَلَا", pronoun: "هُمَا (م)" },
        { form: "دَخَلَتَا", pronoun: "هُمَا (ف)" },
        { form: "دَخَلُوا", pronoun: "هُمْ" },
        { form: "دَخَلْنَ", pronoun: "هُنَّ" },
        { form: "دَخَلْتَ", pronoun: "أَنْتَ" },
        { form: "دَخَلْتِ", pronoun: "أَنْتِ" },
        { form: "دَخَلْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "دَخَلْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "دَخَلْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "دَخَلْتُ", pronoun: "أَنَا" },
        { form: "دَخَلْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "samia",
      root: "س-م-ع",
      baseForm: "سَمِعَ",
      meaning: { ar: "أَدْرَكَ بِالْأُذُنِ", en: "to hear / to listen" },
      pattern: "فَعِلَ - يَفْعَلُ",
      category: "sound",
      verse: "سَمِعْنَا وَأَطَعْنَا",
      surah: "سُورَةُ الْبَقَرَةِ: ٢٨٥",
      verseTranslation: "We hear and we obey.",
      conjugations: [
        { form: "سَمِعَ", pronoun: "هُوَ" },
        { form: "سَمِعَتْ", pronoun: "هِيَ" },
        { form: "سَمِعَا", pronoun: "هُمَا (م)" },
        { form: "سَمِعَتَا", pronoun: "هُمَا (ف)" },
        { form: "سَمِعُوا", pronoun: "هُمْ" },
        { form: "سَمِعْنَ", pronoun: "هُنَّ" },
        { form: "سَمِعْتَ", pronoun: "أَنْتَ" },
        { form: "سَمِعْتِ", pronoun: "أَنْتِ" },
        { form: "سَمِعْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "سَمِعْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "سَمِعْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "سَمِعْتُ", pronoun: "أَنَا" },
        { form: "سَمِعْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "alima",
      root: "ع-ل-م",
      baseForm: "عَلِمَ",
      meaning: { ar: "عَرَفَ", en: "to know" },
      pattern: "فَعِلَ - يَفْعَلُ",
      category: "sound",
      verse: "عَلِمَ اللَّهُ أَنَّكُمْ كُنْتُمْ تَخْتَانُونَ أَنْفُسَكُمْ",
      surah: "سُورَةُ الْبَقَرَةِ: ١٨٧",
      verseTranslation: "Allah knew that you used to deceive yourselves.",
      conjugations: [
        { form: "عَلِمَ", pronoun: "هُوَ" },
        { form: "عَلِمَتْ", pronoun: "هِيَ" },
        { form: "عَلِمَا", pronoun: "هُمَا (م)" },
        { form: "عَلِمَتَا", pronoun: "هُمَا (ف)" },
        { form: "عَلِمُوا", pronoun: "هُمْ" },
        { form: "عَلِمْنَ", pronoun: "هُنَّ" },
        { form: "عَلِمْتَ", pronoun: "أَنْتَ" },
        { form: "عَلِمْتِ", pronoun: "أَنْتِ" },
        { form: "عَلِمْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "عَلِمْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "عَلِمْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "عَلِمْتُ", pronoun: "أَنَا" },
        { form: "عَلِمْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "akala",
      root: "أ-ك-ل",
      baseForm: "أَكَلَ",
      meaning: { ar: "تَنَاوَلَ الطَّعَامَ", en: "to eat" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "hamzated",
      verse: "وَكُلَا مِنْهَا رَغَدًا",
      surah: "سُورَةُ الْبَقَرَةِ: ٣٥",
      verseTranslation: "And eat from it freely.",
      conjugations: [
        { form: "أَكَلَ", pronoun: "هُوَ" },
        { form: "أَكَلَتْ", pronoun: "هِيَ" },
        { form: "أَكَلَا", pronoun: "هُمَا (م)" },
        { form: "أَكَلَتَا", pronoun: "هُمَا (ف)" },
        { form: "أَكَلُوا", pronoun: "هُمْ" },
        { form: "أَكَلْنَ", pronoun: "هُنَّ" },
        { form: "أَكَلْتَ", pronoun: "أَنْتَ" },
        { form: "أَكَلْتِ", pronoun: "أَنْتِ" },
        { form: "أَكَلْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "أَكَلْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "أَكَلْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "أَكَلْتُ", pronoun: "أَنَا" },
        { form: "أَكَلْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "shariba",
      root: "ش-ر-ب",
      baseForm: "شَرِبَ",
      meaning: { ar: "تَنَاوَلَ السَّائِلَ", en: "to drink" },
      pattern: "فَعِلَ - يَفْعَلُ",
      category: "sound",
      verse: "فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِنْهُمْ",
      surah: "سُورَةُ الْبَقَرَةِ: ٢٤٩",
      verseTranslation: "So they drank from it, except a few of them.",
      conjugations: [
        { form: "شَرِبَ", pronoun: "هُوَ" },
        { form: "شَرِبَتْ", pronoun: "هِيَ" },
        { form: "شَرِبَا", pronoun: "هُمَا (م)" },
        { form: "شَرِبَتَا", pronoun: "هُمَا (ف)" },
        { form: "شَرِبُوا", pronoun: "هُمْ" },
        { form: "شَرِبْنَ", pronoun: "هُنَّ" },
        { form: "شَرِبْتَ", pronoun: "أَنْتَ" },
        { form: "شَرِبْتِ", pronoun: "أَنْتِ" },
        { form: "شَرِبْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "شَرِبْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "شَرِبْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "شَرِبْتُ", pronoun: "أَنَا" },
        { form: "شَرِبْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "qala",
      root: "ق-و-ل",
      baseForm: "قَالَ",
      meaning: { ar: "تَكَلَّمَ", en: "to say" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "hollow",
      verse: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ",
      surah: "سُورَةُ الْبَقَرَةِ: ٣٠",
      verseTranslation: "And when your Lord said to the angels.",
      conjugations: [
        { form: "قَالَ", pronoun: "هُوَ" },
        { form: "قَالَتْ", pronoun: "هِيَ" },
        { form: "قَالَا", pronoun: "هُمَا (م)" },
        { form: "قَالَتَا", pronoun: "هُمَا (ف)" },
        { form: "قَالُوا", pronoun: "هُمْ" },
        { form: "قُلْنَ", pronoun: "هُنَّ" },
        { form: "قُلْتَ", pronoun: "أَنْتَ" },
        { form: "قُلْتِ", pronoun: "أَنْتِ" },
        { form: "قُلْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "قُلْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "قُلْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "قُلْتُ", pronoun: "أَنَا" },
        { form: "قُلْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "kana",
      root: "ك-و-ن",
      baseForm: "كَانَ",
      meaning: { ar: "وُجِدَ / صَارَ", en: "to be / was" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "hollow",
      verse: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا",
      surah: "سُورَةُ الْأَحْزَابِ: ٧٣",
      verseTranslation: "And Allah is Ever Forgiving, Most Merciful.",
      conjugations: [
        { form: "كَانَ", pronoun: "هُوَ" },
        { form: "كَانَتْ", pronoun: "هِيَ" },
        { form: "كَانَا", pronoun: "هُمَا (م)" },
        { form: "كَانَتَا", pronoun: "هُمَا (ف)" },
        { form: "كَانُوا", pronoun: "هُمْ" },
        { form: "كُنَّ", pronoun: "هُنَّ" },
        { form: "كُنْتَ", pronoun: "أَنْتَ" },
        { form: "كُنْتِ", pronoun: "أَنْتِ" },
        { form: "كُنْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "كُنْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "كُنْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "كُنْتُ", pronoun: "أَنَا" },
        { form: "كُنَّا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "amana",
      root: "أ-م-ن",
      baseForm: "آمَنَ",
      meaning: { ar: "صَدَّقَ وَاعْتَقَدَ", en: "to believe" },
      pattern: "أَفْعَلَ - يُفْعِلُ",
      category: "hamzated",
      verse: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ",
      surah: "سُورَةُ الْبَقَرَةِ: ٢٨٥",
      verseTranslation: "The Messenger believed in what was revealed to him from his Lord.",
      conjugations: [
        { form: "آمَنَ", pronoun: "هُوَ" },
        { form: "آمَنَتْ", pronoun: "هِيَ" },
        { form: "آمَنَا", pronoun: "هُمَا (م)" },
        { form: "آمَنَتَا", pronoun: "هُمَا (ف)" },
        { form: "آمَنُوا", pronoun: "هُمْ" },
        { form: "آمَنَّ", pronoun: "هُنَّ" },
        { form: "آمَنْتَ", pronoun: "أَنْتَ" },
        { form: "آمَنْتِ", pronoun: "أَنْتِ" },
        { form: "آمَنْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "آمَنْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "آمَنْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "آمَنْتُ", pronoun: "أَنَا" },
        { form: "آمَنَّا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "da'a",
      root: "د-ع-و",
      baseForm: "دَعَا",
      meaning: { ar: "نَادَى / طَلَبَ", en: "to call / to pray" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "defective",
      verse: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
      surah: "سُورَةُ الْبَقَرَةِ: ١٨٦",
      verseTranslation: "And when My servants ask you about Me, I am near. I respond to the call of the caller when he calls upon Me.",
      conjugations: [
        { form: "دَعَا", pronoun: "هُوَ" },
        { form: "دَعَتْ", pronoun: "هِيَ" },
        { form: "دَعَوَا", pronoun: "هُمَا (م)" },
        { form: "دَعَتَا", pronoun: "هُمَا (ف)" },
        { form: "دَعَوْا", pronoun: "هُمْ" },
        { form: "دَعَوْنَ", pronoun: "هُنَّ" },
        { form: "دَعَوْتَ", pronoun: "أَنْتَ" },
        { form: "دَعَوْتِ", pronoun: "أَنْتِ" },
        { form: "دَعَوْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "دَعَوْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "دَعَوْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "دَعَوْتُ", pronoun: "أَنَا" },
        { form: "دَعَوْنَا", pronoun: "نَحْنُ" }
      ]
    },
    {
      id: "radda",
      root: "ر-د-د",
      baseForm: "رَدَّ",
      meaning: { ar: "أَرْجَعَ", en: "to return / to reply" },
      pattern: "فَعَلَ - يَفْعُلُ",
      category: "doubled",
      verse: "رَدُّوا أَيْدِيَهُمْ فِي أَفْوَاهِهِمْ",
      surah: "سُورَةُ إِبْرَاهِيمَ: ٩",
      verseTranslation: "They returned their hands to their mouths.",
      conjugations: [
        { form: "رَدَّ", pronoun: "هُوَ" },
        { form: "رَدَّتْ", pronoun: "هِيَ" },
        { form: "رَدَّا", pronoun: "هُمَا (م)" },
        { form: "رَدَّتَا", pronoun: "هُمَا (ف)" },
        { form: "رَدُّوا", pronoun: "هُمْ" },
        { form: "رَدَدْنَ", pronoun: "هُنَّ" },
        { form: "رَدَدْتَ", pronoun: "أَنْتَ" },
        { form: "رَدَدْتِ", pronoun: "أَنْتِ" },
        { form: "رَدَدْتُمَا", pronoun: "أَنْتُمَا" },
        { form: "رَدَدْتُمْ", pronoun: "أَنْتُمْ" },
        { form: "رَدَدْتُنَّ", pronoun: "أَنْتُنَّ" },
        { form: "رَدَدْتُ", pronoun: "أَنَا" },
        { form: "رَدَدْنَا", pronoun: "نَحْنُ" }
      ]
    }
  ],
  // Verb categories explanation
  categories: [
    {
      id: "sound",
      name: { ar: "الصَّحِيحُ السَّالِمُ", en: "Sound Verb" },
      description: {
        ar: "فِعْلٌ خَلَتْ حُرُوفُهُ الْأَصْلِيَّةُ مِنْ حُرُوفِ الْعِلَّةِ وَالْهَمْزَةِ وَالتَّضْعِيفِ",
        en: "A verb whose root letters don't contain weak letters, hamza, or doubling"
      },
      color: "emerald"
    },
    {
      id: "hamzated",
      name: { ar: "الْمَهْمُوزُ", en: "Hamzated Verb" },
      description: {
        ar: "فِعْلٌ أَحَدُ حُرُوفِهِ الْأَصْلِيَّةِ هَمْزَةٌ",
        en: "A verb with hamza as one of its root letters"
      },
      color: "blue"
    },
    {
      id: "doubled",
      name: { ar: "الْمُضَعَّفُ", en: "Doubled Verb" },
      description: {
        ar: "فِعْلٌ حَرْفُهُ الثَّانِي وَالثَّالِثُ مِنْ جِنْسٍ وَاحِدٍ",
        en: "A verb whose second and third root letters are the same"
      },
      color: "purple"
    },
    {
      id: "hollow",
      name: { ar: "الْأَجْوَفُ", en: "Hollow Verb" },
      description: {
        ar: "فِعْلٌ عَيْنُهُ (الْحَرْفُ الثَّانِي) حَرْفُ عِلَّةٍ",
        en: "A verb with a weak letter (و or ي) as its middle root letter"
      },
      color: "amber"
    },
    {
      id: "defective",
      name: { ar: "النَّاقِصُ", en: "Defective Verb" },
      description: {
        ar: "فِعْلٌ لَامُهُ (الْحَرْفُ الثَّالِثُ) حَرْفُ عِلَّةٍ",
        en: "A verb with a weak letter (و or ي or ا) as its final root letter"
      },
      color: "rose"
    }
  ],
  // Conjugation pattern rules
  rules: {
    title: { ar: "قَوَاعِدُ التَّصْرِيفِ", en: "Conjugation Rules" },
    items: [
      {
        rule: {
          ar: "هُوَ: الْفِعْلُ الْمَاضِي الْمُجَرَّدُ",
          en: "He: The base past tense verb"
        },
        example: "نَصَرَ"
      },
      {
        rule: {
          ar: "هِيَ: نُضِيفُ تَاءَ التَّأْنِيثِ السَّاكِنَةَ",
          en: "She: Add silent feminine ta (ـتْ)"
        },
        example: "نَصَرَتْ"
      },
      {
        rule: {
          ar: "هُمَا (م): نُضِيفُ أَلِفَ الِاثْنَيْنِ",
          en: "They two (m): Add alif of dual (ـا)"
        },
        example: "نَصَرَا"
      },
      {
        rule: {
          ar: "هُمْ: نُضِيفُ وَاوَ الْجَمَاعَةِ",
          en: "They (m): Add waw of plural (ـوا)"
        },
        example: "نَصَرُوا"
      },
      {
        rule: {
          ar: "أَنْتَ: نُضِيفُ تَاءَ الْفَاعِلِ الْمَفْتُوحَةَ",
          en: "You (m): Add ta with fatha (ـتَ)"
        },
        example: "نَصَرْتَ"
      },
      {
        rule: {
          ar: "أَنَا: نُضِيفُ تَاءَ الْفَاعِلِ الْمَضْمُومَةَ",
          en: "I: Add ta with damma (ـتُ)"
        },
        example: "نَصَرْتُ"
      },
      {
        rule: {
          ar: "نَحْنُ: نُضِيفُ نَا الْفَاعِلِينَ",
          en: "We: Add na of doers (ـنَا)"
        },
        example: "نَصَرْنَا"
      }
    ]
  }
};
