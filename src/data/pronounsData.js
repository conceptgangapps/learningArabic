// Arabic Pronouns (الضمائر) Data
// Comprehensive list of Arabic pronouns with Quranic examples

export const pronounsData = {
  title: {
    ar: "الضَّمَائِرُ فِي اللُّغَةِ الْعَرَبِيَّةِ",
    en: "Pronouns in Arabic Language"
  },
  description: {
    ar: "الضَّمِيرُ هُوَ اسْمٌ يَدُلُّ عَلَى الْمُتَكَلِّمِ أَوِ الْمُخَاطَبِ أَوِ الْغَائِبِ",
    en: "A pronoun is a word that refers to the speaker, the addressed, or the absent"
  },
  categories: [
    {
      id: "separate",
      type: {
        ar: "الضَّمَائِرُ الْمُنْفَصِلَةُ",
        en: "Separate (Independent) Pronouns"
      },
      description: {
        ar: "ضَمَائِرُ مُسْتَقِلَّةٌ لَا تَتَّصِلُ بِكَلِمَةٍ أُخْرَى",
        en: "Independent pronouns that don't attach to other words"
      },
      subcategories: [
        {
          id: "nominative-separate",
          subtype: {
            ar: "ضَمَائِرُ الرَّفْعِ الْمُنْفَصِلَةُ",
            en: "Nominative Separate Pronouns"
          },
          description: {
            ar: "تَكُونُ فِي مَحَلِّ رَفْعٍ (مُبْتَدَأً أَوْ فَاعِلًا)",
            en: "Used as subject (nominative case)"
          },
          groups: [
            {
              groupName: {
                ar: "ضَمَائِرُ الْمُتَكَلِّمِ",
                en: "First Person Pronouns"
              },
              color: "emerald",
              pronouns: [
                {
                  pronoun: "أَنَا",
                  transliteration: "Ana",
                  type_en: "I (singular)",
                  type_ar: "لِلْمُتَكَلِّمِ الْمُفْرَدِ",
                  gender: "both",
                  number: "singular",
                  verse: "إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا",
                  surah: "سُورَةُ طٰهٰ: ١٤",
                  en: "Indeed, I am Allah. There is no deity except Me."
                },
                {
                  pronoun: "نَحْنُ",
                  transliteration: "Nahnu",
                  type_en: "We (plural)",
                  type_ar: "لِلْمُتَكَلِّمِ الْجَمْعِ",
                  gender: "both",
                  number: "plural",
                  verse: "نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ",
                  surah: "سُورَةُ يُوسُفَ: ٣",
                  en: "We relate to you the best of stories."
                }
              ]
            },
            {
              groupName: {
                ar: "ضَمَائِرُ الْمُخَاطَبِ",
                en: "Second Person Pronouns"
              },
              color: "blue",
              pronouns: [
                {
                  pronoun: "أَنْتَ",
                  transliteration: "Anta",
                  type_en: "You (masc. singular)",
                  type_ar: "لِلْمُخَاطَبِ الْمُذَكَّرِ الْمُفْرَدِ",
                  gender: "masculine",
                  number: "singular",
                  verse: "إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٣٢",
                  en: "Indeed, You are the Knowing, the Wise."
                },
                {
                  pronoun: "أَنْتِ",
                  transliteration: "Anti",
                  type_en: "You (fem. singular)",
                  type_ar: "لِلْمُخَاطَبَةِ الْمُؤَنَّثَةِ الْمُفْرَدَةِ",
                  gender: "feminine",
                  number: "singular",
                  verse: "وَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا",
                  surah: "سُورَةُ مَرْيَمَ: ٢٦",
                  en: "And eat and drink and be contented."
                },
                {
                  pronoun: "أَنْتُمَا",
                  transliteration: "Antuma",
                  type_en: "You two (dual)",
                  type_ar: "لِلْمُخَاطَبَيْنِ الْمُثَنَّى",
                  gender: "both",
                  number: "dual",
                  verse: "لَا تَخَافَا إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ",
                  surah: "سُورَةُ طٰهٰ: ٤٦",
                  en: "Fear not. Indeed, I am with you both; I hear and I see."
                },
                {
                  pronoun: "أَنْتُمْ",
                  transliteration: "Antum",
                  type_en: "You (masc. plural)",
                  type_ar: "لِلْمُخَاطَبِينَ الْجَمْعِ الْمُذَكَّرِ",
                  gender: "masculine",
                  number: "plural",
                  verse: "وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
                  surah: "سُورَةُ آلِ عِمْرَانَ: ١٣٩",
                  en: "And you will be superior if you are believers."
                },
                {
                  pronoun: "أَنْتُنَّ",
                  transliteration: "Antunna",
                  type_en: "You (fem. plural)",
                  type_ar: "لِلْمُخَاطَبَاتِ الْجَمْعِ الْمُؤَنَّثِ",
                  gender: "feminine",
                  number: "plural",
                  verse: "يَا نِسَاءَ النَّبِيِّ لَسْتُنَّ كَأَحَدٍ مِنَ النِّسَاءِ",
                  surah: "سُورَةُ الْأَحْزَابِ: ٣٢",
                  en: "O wives of the Prophet, you are not like any other women."
                }
              ]
            },
            {
              groupName: {
                ar: "ضَمَائِرُ الْغَائِبِ",
                en: "Third Person Pronouns"
              },
              color: "purple",
              pronouns: [
                {
                  pronoun: "هُوَ",
                  transliteration: "Huwa",
                  type_en: "He (masc. singular)",
                  type_ar: "لِلْغَائِبِ الْمُذَكَّرِ الْمُفْرَدِ",
                  gender: "masculine",
                  number: "singular",
                  verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
                  surah: "سُورَةُ الْإِخْلَاصِ: ١",
                  en: "Say: He is Allah, the One."
                },
                {
                  pronoun: "هِيَ",
                  transliteration: "Hiya",
                  type_en: "She (fem. singular)",
                  type_ar: "لِلْغَائِبَةِ الْمُؤَنَّثَةِ الْمُفْرَدَةِ",
                  gender: "feminine",
                  number: "singular",
                  verse: "قَالَ هِيَ عَصَايَ أَتَوَكَّأُ عَلَيْهَا",
                  surah: "سُورَةُ طٰهٰ: ١٨",
                  en: "He said: It is my staff; I lean upon it."
                },
                {
                  pronoun: "هُمَا",
                  transliteration: "Huma",
                  type_en: "They two (dual)",
                  type_ar: "لِلْغَائِبَيْنِ الْمُثَنَّى",
                  gender: "both",
                  number: "dual",
                  verse: "فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا",
                  surah: "سُورَةُ الْأَعْرَافِ: ٢٢",
                  en: "When they tasted of the tree, their private parts became apparent to them."
                },
                {
                  pronoun: "هُمْ",
                  transliteration: "Hum",
                  type_en: "They (masc. plural)",
                  type_ar: "لِلْغَائِبِينَ الْجَمْعِ الْمُذَكَّرِ",
                  gender: "masculine",
                  number: "plural",
                  verse: "أُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٥",
                  en: "Those are the successful ones."
                },
                {
                  pronoun: "هُنَّ",
                  transliteration: "Hunna",
                  type_en: "They (fem. plural)",
                  type_ar: "لِلْغَائِبَاتِ الْجَمْعِ الْمُؤَنَّثِ",
                  gender: "feminine",
                  number: "plural",
                  verse: "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٢٨",
                  en: "And due to the wives is similar to what is expected of them."
                }
              ]
            }
          ]
        },
        {
          id: "accusative-separate",
          subtype: {
            ar: "ضَمَائِرُ النَّصْبِ الْمُنْفَصِلَةُ",
            en: "Accusative Separate Pronouns (إِيَّا)"
          },
          description: {
            ar: "تَكُونُ فِي مَحَلِّ نَصْبٍ مَفْعُولًا بِهِ",
            en: "Used as object (accusative case) - for emphasis"
          },
          groups: [
            {
              groupName: {
                ar: "ضَمَائِرُ إِيَّا",
                en: "Iyya Pronouns"
              },
              color: "amber",
              pronouns: [
                {
                  pronoun: "إِيَّايَ",
                  transliteration: "Iyyaya",
                  type_en: "Me alone (1st person)",
                  type_ar: "لِلْمُتَكَلِّمِ",
                  verse: "فَارْهَبُونِ... وَإِيَّايَ فَاتَّقُونِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٤٠-٤١",
                  en: "So fear Me... and fear Me alone."
                },
                {
                  pronoun: "إِيَّانَا",
                  transliteration: "Iyyana",
                  type_en: "Us alone (1st person plural)",
                  type_ar: "لِلْمُتَكَلِّمِينَ",
                  verse: "بَلْ إِيَّاهُ تَدْعُونَ",
                  surah: "سُورَةُ الْأَنْعَامِ: ٤١",
                  en: "Rather, it is Him alone you invoke."
                },
                {
                  pronoun: "إِيَّاكَ",
                  transliteration: "Iyyaka",
                  type_en: "You alone (2nd person masc.)",
                  type_ar: "لِلْمُخَاطَبِ الْمُذَكَّرِ",
                  verse: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                  surah: "سُورَةُ الْفَاتِحَةِ: ٥",
                  en: "You alone we worship, and You alone we ask for help."
                },
                {
                  pronoun: "إِيَّاكِ",
                  transliteration: "Iyyaki",
                  type_en: "You alone (2nd person fem.)",
                  type_ar: "لِلْمُخَاطَبَةِ الْمُؤَنَّثَةِ",
                  verse: "—",
                  surah: "—",
                  en: "You alone (feminine)"
                },
                {
                  pronoun: "إِيَّاكُمْ",
                  transliteration: "Iyyakum",
                  type_en: "You alone (2nd person plural)",
                  type_ar: "لِلْمُخَاطَبِينَ",
                  verse: "وَإِيَّاكُمْ أَنْ تَفْتِنُوا",
                  surah: "—",
                  en: "Beware lest you be tempted."
                },
                {
                  pronoun: "إِيَّاهُ",
                  transliteration: "Iyyahu",
                  type_en: "Him alone (3rd person masc.)",
                  type_ar: "لِلْغَائِبِ الْمُذَكَّرِ",
                  verse: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ",
                  surah: "سُورَةُ الْإِسْرَاءِ: ٢٣",
                  en: "And your Lord has decreed that you worship none but Him."
                },
                {
                  pronoun: "إِيَّاهَا",
                  transliteration: "Iyyaha",
                  type_en: "Her alone (3rd person fem.)",
                  type_ar: "لِلْغَائِبَةِ الْمُؤَنَّثَةِ",
                  verse: "—",
                  surah: "—",
                  en: "Her alone"
                },
                {
                  pronoun: "إِيَّاهُمْ",
                  transliteration: "Iyyahum",
                  type_en: "Them alone (3rd person plural)",
                  type_ar: "لِلْغَائِبِينَ",
                  verse: "إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُونَ",
                  surah: "سُورَةُ الْبَقَرَةِ: ١٧٢",
                  en: "If it is Him that you worship."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "attached",
      type: {
        ar: "الضَّمَائِرُ الْمُتَّصِلَةُ",
        en: "Attached (Connected) Pronouns"
      },
      description: {
        ar: "ضَمَائِرُ تَتَّصِلُ بِالْفِعْلِ أَوِ الِاسْمِ أَوِ الْحَرْفِ",
        en: "Pronouns that attach to verbs, nouns, or particles"
      },
      subcategories: [
        {
          id: "attached-verbs",
          subtype: {
            ar: "مُتَّصِلَةٌ بِالْفِعْلِ",
            en: "Attached to Verbs"
          },
          description: {
            ar: "تَتَّصِلُ بِالْفِعْلِ كَفَاعِلٍ أَوْ مَفْعُولٍ بِهِ",
            en: "Connect to verbs as subject (doer) or object"
          },
          groups: [
            {
              groupName: {
                ar: "ضَمَائِرُ الرَّفْعِ (الْفَاعِلُ)",
                en: "Subject Pronouns (Doer)"
              },
              color: "teal",
              pronouns: [
                {
                  pronoun: "ـتُ",
                  transliteration: "-tu",
                  type_en: "I (past tense)",
                  type_ar: "لِلْمُتَكَلِّمِ فِي الْمَاضِي",
                  example: "كَتَبْتُ",
                  verse: "آمَنْتُ بِاللَّهِ",
                  surah: "سُورَةُ يُونُسَ: ٩٠",
                  en: "I believed in Allah."
                },
                {
                  pronoun: "ـنَا",
                  transliteration: "-na",
                  type_en: "We (past tense)",
                  type_ar: "لِلْمُتَكَلِّمِينَ فِي الْمَاضِي",
                  example: "كَتَبْنَا",
                  verse: "وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ",
                  surah: "سُورَةُ الْأَنْبِيَاءِ: ١٠٥",
                  en: "And We have already written in the book."
                },
                {
                  pronoun: "ـتَ",
                  transliteration: "-ta",
                  type_en: "You (masc. sing. past)",
                  type_ar: "لِلْمُخَاطَبِ الْمُذَكَّرِ فِي الْمَاضِي",
                  example: "كَتَبْتَ",
                  verse: "أَأَنْتَ فَعَلْتَ هٰذَا بِآلِهَتِنَا",
                  surah: "سُورَةُ الْأَنْبِيَاءِ: ٦٢",
                  en: "Have you done this to our gods?"
                },
                {
                  pronoun: "ـتِ",
                  transliteration: "-ti",
                  type_en: "You (fem. sing. past)",
                  type_ar: "لِلْمُخَاطَبَةِ الْمُؤَنَّثَةِ فِي الْمَاضِي",
                  example: "كَتَبْتِ",
                  verse: "قَالُوا أَأَنْتِ فَعَلْتِ هٰذَا",
                  surah: "—",
                  en: "Did you do this?"
                },
                {
                  pronoun: "ـتُمَا",
                  transliteration: "-tuma",
                  type_en: "You two (dual past)",
                  type_ar: "لِلْمُخَاطَبَيْنِ الْمُثَنَّى فِي الْمَاضِي",
                  example: "كَتَبْتُمَا",
                  verse: "—",
                  surah: "—",
                  en: "You two wrote"
                },
                {
                  pronoun: "ـتُمْ",
                  transliteration: "-tum",
                  type_en: "You (masc. plural past)",
                  type_ar: "لِلْمُخَاطَبِينَ الْجَمْعِ فِي الْمَاضِي",
                  example: "كَتَبْتُمْ",
                  verse: "وَإِذْ قَتَلْتُمْ نَفْسًا",
                  surah: "سُورَةُ الْبَقَرَةِ: ٧٢",
                  en: "And when you killed a soul."
                },
                {
                  pronoun: "ـتُنَّ",
                  transliteration: "-tunna",
                  type_en: "You (fem. plural past)",
                  type_ar: "لِلْمُخَاطَبَاتِ الْجَمْعِ فِي الْمَاضِي",
                  example: "كَتَبْتُنَّ",
                  verse: "—",
                  surah: "—",
                  en: "You (fem. pl.) wrote"
                },
                {
                  pronoun: "ـا",
                  transliteration: "-a",
                  type_en: "They two (dual past)",
                  type_ar: "لِلْغَائِبَيْنِ الْمُثَنَّى فِي الْمَاضِي",
                  example: "كَتَبَا",
                  verse: "فَلَمَّا ذَاقَا الشَّجَرَةَ",
                  surah: "سُورَةُ الْأَعْرَافِ: ٢٢",
                  en: "When they both tasted the tree."
                },
                {
                  pronoun: "ـوا",
                  transliteration: "-u",
                  type_en: "They (masc. plural past)",
                  type_ar: "لِلْغَائِبِينَ الْجَمْعِ فِي الْمَاضِي",
                  example: "كَتَبُوا",
                  verse: "وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ",
                  surah: "سُورَةُ النِّسَاءِ: ١٥٧",
                  en: "They did not kill him, nor did they crucify him."
                },
                {
                  pronoun: "ـنَ",
                  transliteration: "-na",
                  type_en: "They (fem. plural past)",
                  type_ar: "لِلْغَائِبَاتِ الْجَمْعِ فِي الْمَاضِي",
                  example: "كَتَبْنَ",
                  verse: "وَقَطَّعْنَ أَيْدِيَهُنَّ",
                  surah: "سُورَةُ يُوسُفَ: ٣١",
                  en: "And they cut their hands."
                }
              ]
            },
            {
              groupName: {
                ar: "ضَمَائِرُ النَّصْبِ (الْمَفْعُولُ بِهِ)",
                en: "Object Pronouns"
              },
              color: "rose",
              pronouns: [
                {
                  pronoun: "ـنِي",
                  transliteration: "-ni",
                  type_en: "Me",
                  type_ar: "لِلْمُتَكَلِّمِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَنِي",
                  verse: "رَبِّ أَكْرَمَنِ",
                  surah: "سُورَةُ الْفَجْرِ: ١٥",
                  en: "My Lord has honored me."
                },
                {
                  pronoun: "ـنَا",
                  transliteration: "-na",
                  type_en: "Us",
                  type_ar: "لِلْمُتَكَلِّمِينَ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَنَا",
                  verse: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٠١",
                  en: "Our Lord, give us good in this world."
                },
                {
                  pronoun: "ـكَ",
                  transliteration: "-ka",
                  type_en: "You (masc. sing.)",
                  type_ar: "لِلْمُخَاطَبِ الْمُذَكَّرِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَكَ",
                  verse: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
                  surah: "سُورَةُ الْكَوْثَرِ: ١",
                  en: "Indeed, We have given you al-Kawthar."
                },
                {
                  pronoun: "ـكِ",
                  transliteration: "-ki",
                  type_en: "You (fem. sing.)",
                  type_ar: "لِلْمُخَاطَبَةِ الْمُؤَنَّثَةِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَكِ",
                  verse: "إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ",
                  surah: "سُورَةُ آلِ عِمْرَانَ: ٤٢",
                  en: "Indeed, Allah has chosen you and purified you."
                },
                {
                  pronoun: "ـكُمَا",
                  transliteration: "-kuma",
                  type_en: "You two",
                  type_ar: "لِلْمُخَاطَبَيْنِ الْمُثَنَّى مَفْعُولًا بِهِ",
                  example: "أَكْرَمَكُمَا",
                  verse: "إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ",
                  surah: "سُورَةُ طٰهٰ: ٤٦",
                  en: "Indeed, I am with you both."
                },
                {
                  pronoun: "ـكُمْ",
                  transliteration: "-kum",
                  type_en: "You (masc. plural)",
                  type_ar: "لِلْمُخَاطَبِينَ الْجَمْعِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَكُمْ",
                  verse: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢١",
                  en: "O mankind, worship your Lord."
                },
                {
                  pronoun: "ـهُ",
                  transliteration: "-hu",
                  type_en: "Him/It",
                  type_ar: "لِلْغَائِبِ الْمُذَكَّرِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَهُ",
                  verse: "وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ",
                  surah: "سُورَةُ النِّسَاءِ: ١٣",
                  en: "And whoever obeys Allah and His Messenger."
                },
                {
                  pronoun: "ـهَا",
                  transliteration: "-ha",
                  type_en: "Her/It (fem.)",
                  type_ar: "لِلْغَائِبَةِ الْمُؤَنَّثَةِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَهَا",
                  verse: "وَنَفْسٍ وَمَا سَوَّاهَا",
                  surah: "سُورَةُ الشَّمْسِ: ٧",
                  en: "And the soul and He who proportioned it."
                },
                {
                  pronoun: "ـهُمَا",
                  transliteration: "-huma",
                  type_en: "Them two",
                  type_ar: "لِلْغَائِبَيْنِ الْمُثَنَّى مَفْعُولًا بِهِ",
                  example: "أَكْرَمَهُمَا",
                  verse: "وَقُلْ رَبِّ ارْحَمْهُمَا",
                  surah: "سُورَةُ الْإِسْرَاءِ: ٢٤",
                  en: "And say: My Lord, have mercy upon them."
                },
                {
                  pronoun: "ـهُمْ",
                  transliteration: "-hum",
                  type_en: "Them (masc. plural)",
                  type_ar: "لِلْغَائِبِينَ الْجَمْعِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَهُمْ",
                  verse: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
                  surah: "سُورَةُ الْفَاتِحَةِ: ٧",
                  en: "The path of those upon whom You have bestowed favor."
                },
                {
                  pronoun: "ـهُنَّ",
                  transliteration: "-hunna",
                  type_en: "Them (fem. plural)",
                  type_ar: "لِلْغَائِبَاتِ الْجَمْعِ مَفْعُولًا بِهِ",
                  example: "أَكْرَمَهُنَّ",
                  verse: "فَإِمْسَاكٌ بِمَعْرُوفٍ أَوْ تَسْرِيحٌ بِإِحْسَانٍ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٢٩",
                  en: "Either retain them honorably or release them with kindness."
                }
              ]
            }
          ]
        },
        {
          id: "attached-nouns",
          subtype: {
            ar: "مُتَّصِلَةٌ بِالِاسْمِ (لِلْإِضَافَةِ)",
            en: "Attached to Nouns (Possessive)"
          },
          description: {
            ar: "تَتَّصِلُ بِالِاسْمِ لِلدِّلَالَةِ عَلَى الْمِلْكِيَّةِ",
            en: "Connect to nouns to indicate possession"
          },
          groups: [
            {
              groupName: {
                ar: "ضَمَائِرُ الْإِضَافَةِ",
                en: "Possessive Pronouns"
              },
              color: "indigo",
              pronouns: [
                {
                  pronoun: "ـي",
                  transliteration: "-i / -ya",
                  type_en: "My",
                  type_ar: "لِلْمُتَكَلِّمِ",
                  example: "كِتَابِي",
                  verse: "رَبِّي اللَّهُ",
                  surah: "سُورَةُ فُصِّلَتْ: ٣٠",
                  en: "My Lord is Allah."
                },
                {
                  pronoun: "ـنَا",
                  transliteration: "-na",
                  type_en: "Our",
                  type_ar: "لِلْمُتَكَلِّمِينَ",
                  example: "كِتَابُنَا",
                  verse: "رَبَّنَا تَقَبَّلْ مِنَّا",
                  surah: "سُورَةُ الْبَقَرَةِ: ١٢٧",
                  en: "Our Lord, accept from us."
                },
                {
                  pronoun: "ـكَ",
                  transliteration: "-ka",
                  type_en: "Your (masc. sing.)",
                  type_ar: "لِلْمُخَاطَبِ الْمُذَكَّرِ",
                  example: "كِتَابُكَ",
                  verse: "بِسْمِ رَبِّكَ الَّذِي خَلَقَ",
                  surah: "سُورَةُ الْعَلَقِ: ١",
                  en: "In the name of your Lord who created."
                },
                {
                  pronoun: "ـكِ",
                  transliteration: "-ki",
                  type_en: "Your (fem. sing.)",
                  type_ar: "لِلْمُخَاطَبَةِ الْمُؤَنَّثَةِ",
                  example: "كِتَابُكِ",
                  verse: "وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ",
                  surah: "سُورَةُ مَرْيَمَ: ٢٥",
                  en: "And shake toward you the trunk of the palm tree."
                },
                {
                  pronoun: "ـكُمْ",
                  transliteration: "-kum",
                  type_en: "Your (plural)",
                  type_ar: "لِلْمُخَاطَبِينَ",
                  example: "كِتَابُكُمْ",
                  verse: "ذٰلِكُمُ اللَّهُ رَبُّكُمْ",
                  surah: "سُورَةُ الْأَنْعَامِ: ١٠٢",
                  en: "That is Allah, your Lord."
                },
                {
                  pronoun: "ـهُ",
                  transliteration: "-hu",
                  type_en: "His/Its",
                  type_ar: "لِلْغَائِبِ الْمُذَكَّرِ",
                  example: "كِتَابُهُ",
                  verse: "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ١٠٧",
                  en: "To Him belongs the dominion of the heavens and earth."
                },
                {
                  pronoun: "ـهَا",
                  transliteration: "-ha",
                  type_en: "Her/Its (fem.)",
                  type_ar: "لِلْغَائِبَةِ الْمُؤَنَّثَةِ",
                  example: "كِتَابُهَا",
                  verse: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
                  surah: "سُورَةُ الشَّمْسِ: ٨",
                  en: "And inspired it with discernment of its wickedness and righteousness."
                },
                {
                  pronoun: "ـهُمْ",
                  transliteration: "-hum",
                  type_en: "Their (masc.)",
                  type_ar: "لِلْغَائِبِينَ",
                  example: "كِتَابُهُمْ",
                  verse: "خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٧",
                  en: "Allah has set a seal upon their hearts."
                },
                {
                  pronoun: "ـهُنَّ",
                  transliteration: "-hunna",
                  type_en: "Their (fem.)",
                  type_ar: "لِلْغَائِبَاتِ",
                  example: "كِتَابُهُنَّ",
                  verse: "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٢٨",
                  en: "And due to the wives is similar to what is expected of them."
                }
              ]
            }
          ]
        },
        {
          id: "attached-particles",
          subtype: {
            ar: "مُتَّصِلَةٌ بِالْحَرْفِ",
            en: "Attached to Particles"
          },
          description: {
            ar: "تَتَّصِلُ بِحُرُوفِ الْجَرِّ وَالنَّاسِخَاتِ",
            en: "Connect to prepositions and other particles"
          },
          groups: [
            {
              groupName: {
                ar: "مَعَ حُرُوفِ الْجَرِّ",
                en: "With Prepositions"
              },
              color: "cyan",
              pronouns: [
                {
                  pronoun: "لَهُ",
                  transliteration: "lahu",
                  type_en: "For him / To him",
                  type_ar: "لِلْغَائِبِ مَعَ اللَّامِ",
                  verse: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٥٥",
                  en: "To Him belongs whatever is in the heavens and earth."
                },
                {
                  pronoun: "بِهِ",
                  transliteration: "bihi",
                  type_en: "With it / By it",
                  type_ar: "لِلْغَائِبِ مَعَ الْبَاءِ",
                  verse: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢٨٥",
                  en: "The Messenger believed in what was revealed to him."
                },
                {
                  pronoun: "مِنْهُ",
                  transliteration: "minhu",
                  type_en: "From him/it",
                  type_ar: "لِلْغَائِبِ مَعَ مِنْ",
                  verse: "وَرُوحٌ مِنْهُ",
                  surah: "سُورَةُ النِّسَاءِ: ١٧١",
                  en: "And a spirit from Him."
                },
                {
                  pronoun: "عَلَيْهِ",
                  transliteration: "'alayhi",
                  type_en: "Upon him",
                  type_ar: "لِلْغَائِبِ مَعَ عَلَى",
                  verse: "وَعَلَيْهِ تَوَكَّلْتُ",
                  surah: "سُورَةُ هُودٍ: ٨٨",
                  en: "And upon Him I have relied."
                },
                {
                  pronoun: "إِلَيْهِ",
                  transliteration: "ilayhi",
                  type_en: "To him",
                  type_ar: "لِلْغَائِبِ مَعَ إِلَى",
                  verse: "إِلَيْهِ يُرْجَعُ الْأَمْرُ كُلُّهُ",
                  surah: "سُورَةُ هُودٍ: ١٢٣",
                  en: "To Him the matter will be returned entirely."
                },
                {
                  pronoun: "فِيهِ",
                  transliteration: "fihi",
                  type_en: "In it",
                  type_ar: "لِلْغَائِبِ مَعَ فِي",
                  verse: "لَا رَيْبَ فِيهِ",
                  surah: "سُورَةُ الْبَقَرَةِ: ٢",
                  en: "There is no doubt in it."
                },
                {
                  pronoun: "عَنْهُ",
                  transliteration: "'anhu",
                  type_en: "From/About him",
                  type_ar: "لِلْغَائِبِ مَعَ عَنْ",
                  verse: "رَضِيَ اللَّهُ عَنْهُمْ",
                  surah: "سُورَةُ الْمُجَادَلَةِ: ٢٢",
                  en: "Allah is pleased with them."
                }
              ]
            },
            {
              groupName: {
                ar: "مَعَ إِنَّ وَأَخَوَاتِهَا",
                en: "With Inna and Sisters"
              },
              color: "orange",
              pronouns: [
                {
                  pronoun: "إِنَّهُ",
                  transliteration: "innahu",
                  type_en: "Indeed he/it",
                  type_ar: "لِلْغَائِبِ مَعَ إِنَّ",
                  verse: "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ",
                  surah: "سُورَةُ الْبَقَرَةِ: ١٣٧",
                  en: "Indeed, He is the Hearing, the Knowing."
                },
                {
                  pronoun: "إِنَّهَا",
                  transliteration: "innaha",
                  type_en: "Indeed she/it",
                  type_ar: "لِلْغَائِبَةِ مَعَ إِنَّ",
                  verse: "إِنَّهَا لَإِحْدَى الْكُبَرِ",
                  surah: "سُورَةُ الْمُدَّثِّرِ: ٣٥",
                  en: "Indeed, it is one of the gravest."
                },
                {
                  pronoun: "إِنَّكَ",
                  transliteration: "innaka",
                  type_en: "Indeed you (masc.)",
                  type_ar: "لِلْمُخَاطَبِ مَعَ إِنَّ",
                  verse: "إِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
                  surah: "سُورَةُ الْقَلَمِ: ٤",
                  en: "Indeed, you are of great moral character."
                },
                {
                  pronoun: "إِنِّي",
                  transliteration: "inni",
                  type_en: "Indeed I",
                  type_ar: "لِلْمُتَكَلِّمِ مَعَ إِنَّ",
                  verse: "إِنِّي أَنَا رَبُّكَ",
                  surah: "سُورَةُ طٰهٰ: ١٢",
                  en: "Indeed, I am your Lord."
                },
                {
                  pronoun: "إِنَّنَا",
                  transliteration: "innana",
                  type_en: "Indeed we",
                  type_ar: "لِلْمُتَكَلِّمِينَ مَعَ إِنَّ",
                  verse: "رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا",
                  surah: "سُورَةُ آلِ عِمْرَانَ: ١٩٣",
                  en: "Our Lord, indeed we have heard a caller."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  // Summary table for quick reference
  summaryTable: {
    title: {
      ar: "جَدْوَلُ الضَّمَائِرِ",
      en: "Pronoun Summary Table"
    },
    headers: {
      person: { ar: "الشَّخْصُ", en: "Person" },
      separate: { ar: "مُنْفَصِلٌ", en: "Separate" },
      attached: { ar: "مُتَّصِلٌ", en: "Attached" }
    },
    rows: [
      { person: { ar: "أَنَا", en: "I" }, separate: "أَنَا", attached: "ـي / ـنِي / ـتُ" },
      { person: { ar: "نَحْنُ", en: "We" }, separate: "نَحْنُ", attached: "ـنَا" },
      { person: { ar: "أَنْتَ", en: "You (m)" }, separate: "أَنْتَ", attached: "ـكَ / ـتَ" },
      { person: { ar: "أَنْتِ", en: "You (f)" }, separate: "أَنْتِ", attached: "ـكِ / ـتِ" },
      { person: { ar: "أَنْتُمَا", en: "You two" }, separate: "أَنْتُمَا", attached: "ـكُمَا / ـتُمَا" },
      { person: { ar: "أَنْتُمْ", en: "You (m.pl)" }, separate: "أَنْتُمْ", attached: "ـكُمْ / ـتُمْ" },
      { person: { ar: "أَنْتُنَّ", en: "You (f.pl)" }, separate: "أَنْتُنَّ", attached: "ـكُنَّ / ـتُنَّ" },
      { person: { ar: "هُوَ", en: "He" }, separate: "هُوَ", attached: "ـهُ" },
      { person: { ar: "هِيَ", en: "She" }, separate: "هِيَ", attached: "ـهَا" },
      { person: { ar: "هُمَا", en: "They two" }, separate: "هُمَا", attached: "ـهُمَا / ـا" },
      { person: { ar: "هُمْ", en: "They (m)" }, separate: "هُمْ", attached: "ـهُمْ / ـوا" },
      { person: { ar: "هُنَّ", en: "They (f)" }, separate: "هُنَّ", attached: "ـهُنَّ / ـنَ" }
    ]
  }
};
