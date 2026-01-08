// Arabic Homework Data - Separated from UI components
// This file contains all the homework content organized by weeks, days, and tasks

export const homeworkData = {
  title: {
    ar: "حل الواجبات المنزلية",
    en: "Homework Solutions"
  },
  author: {
    ar: "طالب علم",
    en: "Student of Knowledge"
  },
  weeks: [
    {
      weekNumber: 1,
      weekTitle: {
        ar: "الأسبوع الأول - مقدمة",
        en: "Week 1 - Introduction"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "اكتب الحروف الهجائية",
                en: "Write the Arabic alphabet letters"
              },
              answerType: "note",
              answers: [
                {
                  ar: "أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي",
                  en: "Alif, Ba, Ta, Tha, Jeem, Ha, Kha, Dal, Dhal, Ra, Zay, Seen, Sheen, Sad, Dad, Ta, Dha, Ayn, Ghayn, Fa, Qaf, Kaf, Lam, Meem, Noon, Ha, Waw, Ya"
                }
              ]
            },
            {
              taskNumber: 2,
              task: {
                ar: "اقرأ الأرقام العربية",
                en: "Read the Arabic numbers"
              },
              answerType: "numbers",
              answers: [
                { number: "١", arabic: "واحد", english: "One" },
                { number: "٢", arabic: "اثنان", english: "Two" },
                { number: "٣", arabic: "ثلاثة", english: "Three" },
                { number: "٤", arabic: "أربعة", english: "Four" },
                { number: "٥", arabic: "خمسة", english: "Five" },
                { number: "٦", arabic: "ستة", english: "Six" },
                { number: "٧", arabic: "سبعة", english: "Seven" },
                { number: "٨", arabic: "ثمانية", english: "Eight" },
                { number: "٩", arabic: "تسعة", english: "Nine" },
                { number: "١٠", arabic: "عشرة", english: "Ten" }
              ]
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "أجب على الأسئلة التالية",
                en: "Answer the following questions"
              },
              answerType: "qa",
              answers: [
                {
                  question: { ar: "ما اسمك؟", en: "What is your name?" },
                  answer: { ar: "اسمي طالب", en: "My name is Talib" }
                },
                {
                  question: { ar: "من أين أنت؟", en: "Where are you from?" },
                  answer: { ar: "أنا من بنغلاديش", en: "I am from Bangladesh" }
                },
                {
                  question: { ar: "كيف حالك؟", en: "How are you?" },
                  answer: { ar: "أنا بخير، الحمد لله", en: "I am fine, praise be to Allah" }
                }
              ]
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم الضمائر",
                en: "Learn the pronouns"
              },
              answerType: "pronounGroups",
              answers: [
                {
                  category: { ar: "ضمائر المتكلم", en: "First Person Pronouns" },
                  pronouns: [
                    { ar: "أنا", en: "I (singular)" },
                    { ar: "نحن", en: "We (plural)" }
                  ]
                },
                {
                  category: { ar: "ضمائر المخاطب", en: "Second Person Pronouns" },
                  pronouns: [
                    { ar: "أنتَ", en: "You (masc. sing.)" },
                    { ar: "أنتِ", en: "You (fem. sing.)" },
                    { ar: "أنتما", en: "You (dual)" },
                    { ar: "أنتم", en: "You (masc. pl.)" },
                    { ar: "أنتنّ", en: "You (fem. pl.)" }
                  ]
                },
                {
                  category: { ar: "ضمائر الغائب", en: "Third Person Pronouns" },
                  pronouns: [
                    { ar: "هو", en: "He" },
                    { ar: "هي", en: "She" },
                    { ar: "هما", en: "They (dual)" },
                    { ar: "هم", en: "They (masc. pl.)" },
                    { ar: "هنّ", en: "They (fem. pl.)" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      weekTitle: {
        ar: "الأسبوع الثاني - الأفعال",
        en: "Week 2 - Verbs"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "صرّف الفعل الماضي",
                en: "Conjugate the past tense verb"
              },
              answerType: "verbTable",
              answers: {
                verb: { ar: "كَتَبَ", en: "to write" },
                conjugations: [
                  { pronoun: "هو", form: "كَتَبَ", meaning: "He wrote" },
                  { pronoun: "هي", form: "كَتَبَت", meaning: "She wrote" },
                  { pronoun: "هما (م)", form: "كَتَبَا", meaning: "They (2 masc.) wrote" },
                  { pronoun: "هما (ف)", form: "كَتَبَتَا", meaning: "They (2 fem.) wrote" },
                  { pronoun: "هم", form: "كَتَبُوا", meaning: "They (masc.) wrote" },
                  { pronoun: "هنّ", form: "كَتَبْنَ", meaning: "They (fem.) wrote" },
                  { pronoun: "أنتَ", form: "كَتَبْتَ", meaning: "You (masc.) wrote" },
                  { pronoun: "أنتِ", form: "كَتَبْتِ", meaning: "You (fem.) wrote" },
                  { pronoun: "أنتما", form: "كَتَبْتُمَا", meaning: "You (2) wrote" },
                  { pronoun: "أنتم", form: "كَتَبْتُم", meaning: "You (masc. pl.) wrote" },
                  { pronoun: "أنتنّ", form: "كَتَبْتُنَّ", meaning: "You (fem. pl.) wrote" },
                  { pronoun: "أنا", form: "كَتَبْتُ", meaning: "I wrote" },
                  { pronoun: "نحن", form: "كَتَبْنَا", meaning: "We wrote" }
                ]
              }
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم المذكر والمؤنث",
                en: "Learn masculine and feminine"
              },
              answerType: "genderList",
              answers: [
                { masculine: { ar: "طالب", en: "male student" }, feminine: { ar: "طالبة", en: "female student" } },
                { masculine: { ar: "معلم", en: "male teacher" }, feminine: { ar: "معلمة", en: "female teacher" } },
                { masculine: { ar: "كبير", en: "big (masc.)" }, feminine: { ar: "كبيرة", en: "big (fem.)" } },
                { masculine: { ar: "صغير", en: "small (masc.)" }, feminine: { ar: "صغيرة", en: "small (fem.)" } },
                { masculine: { ar: "جميل", en: "beautiful (masc.)" }, feminine: { ar: "جميلة", en: "beautiful (fem.)" } }
              ]
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "صرّف الفعل المضارع",
                en: "Conjugate the present tense verb"
              },
              answerType: "presentVerbs",
              answers: {
                verb: { ar: "يَكْتُبُ", en: "to write (present)" },
                conjugations: [
                  { pronoun: "هو", form: "يَكْتُبُ", meaning: "He writes" },
                  { pronoun: "هي", form: "تَكْتُبُ", meaning: "She writes" },
                  { pronoun: "هما (م)", form: "يَكْتُبَانِ", meaning: "They (2 masc.) write" },
                  { pronoun: "هما (ف)", form: "تَكْتُبَانِ", meaning: "They (2 fem.) write" },
                  { pronoun: "هم", form: "يَكْتُبُونَ", meaning: "They (masc.) write" },
                  { pronoun: "هنّ", form: "يَكْتُبْنَ", meaning: "They (fem.) write" },
                  { pronoun: "أنتَ", form: "تَكْتُبُ", meaning: "You (masc.) write" },
                  { pronoun: "أنتِ", form: "تَكْتُبِينَ", meaning: "You (fem.) write" },
                  { pronoun: "أنتما", form: "تَكْتُبَانِ", meaning: "You (2) write" },
                  { pronoun: "أنتم", form: "تَكْتُبُونَ", meaning: "You (masc. pl.) write" },
                  { pronoun: "أنتنّ", form: "تَكْتُبْنَ", meaning: "You (fem. pl.) write" },
                  { pronoun: "أنا", form: "أَكْتُبُ", meaning: "I write" },
                  { pronoun: "نحن", form: "نَكْتُبُ", meaning: "We write" }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      weekTitle: {
        ar: "الأسبوع الثالث - الجمل",
        en: "Week 3 - Sentences"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "اكتب جملاً للحياة اليومية",
                en: "Write daily life sentences"
              },
              answerType: "dailyLifeSentences",
              answers: [
                { ar: "أستيقظ في الصباح الباكر", en: "I wake up early in the morning" },
                { ar: "أصلي الفجر في المسجد", en: "I pray Fajr in the mosque" },
                { ar: "أقرأ القرآن بعد الصلاة", en: "I read the Quran after prayer" },
                { ar: "أذهب إلى المدرسة", en: "I go to school" },
                { ar: "أدرس اللغة العربية", en: "I study the Arabic language" },
                { ar: "أرجع إلى البيت في المساء", en: "I return home in the evening" },
                { ar: "أتناول العشاء مع العائلة", en: "I have dinner with the family" },
                { ar: "أنام مبكراً", en: "I sleep early" }
              ]
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم صيغة الأمر",
                en: "Learn the imperative form"
              },
              answerType: "imperativeVerbs",
              answers: {
                verb: { ar: "كَتَبَ", en: "to write" },
                conjugations: [
                  { pronoun: "أنتَ", form: "اُكْتُبْ", meaning: "Write! (masc.)" },
                  { pronoun: "أنتِ", form: "اُكْتُبِي", meaning: "Write! (fem.)" },
                  { pronoun: "أنتما", form: "اُكْتُبَا", meaning: "Write! (dual)" },
                  { pronoun: "أنتم", form: "اُكْتُبُوا", meaning: "Write! (masc. pl.)" },
                  { pronoun: "أنتنّ", form: "اُكْتُبْنَ", meaning: "Write! (fem. pl.)" }
                ]
              }
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "اكتب مقالة قصيرة",
                en: "Write a short essay"
              },
              answerType: "essay",
              answers: {
                title: { ar: "أهمية تعلم اللغة العربية", en: "The Importance of Learning Arabic" },
                paragraphs: [
                  {
                    ar: "اللغة العربية هي لغة القرآن الكريم. وهي من أقدم اللغات في العالم. يتحدث بها أكثر من ثلاثمائة مليون شخص.",
                    en: "The Arabic language is the language of the Noble Quran. It is one of the oldest languages in the world. More than three hundred million people speak it."
                  },
                  {
                    ar: "تعلم اللغة العربية يساعدنا على فهم القرآن والسنة. كما يفتح لنا أبواب العلم الإسلامي.",
                    en: "Learning Arabic helps us understand the Quran and Sunnah. It also opens the doors of Islamic knowledge for us."
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      weekTitle: {
        ar: "الأسبوع الرابع - القواعد",
        en: "Week 4 - Grammar"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم الأعداد الترتيبية",
                en: "Learn ordinal numbers"
              },
              answerType: "ordinalNumbers",
              answers: [
                { number: 1, masculine: { ar: "الأول", en: "first (m)" }, feminine: { ar: "الأولى", en: "first (f)" } },
                { number: 2, masculine: { ar: "الثاني", en: "second (m)" }, feminine: { ar: "الثانية", en: "second (f)" } },
                { number: 3, masculine: { ar: "الثالث", en: "third (m)" }, feminine: { ar: "الثالثة", en: "third (f)" } },
                { number: 4, masculine: { ar: "الرابع", en: "fourth (m)" }, feminine: { ar: "الرابعة", en: "fourth (f)" } },
                { number: 5, masculine: { ar: "الخامس", en: "fifth (m)" }, feminine: { ar: "الخامسة", en: "fifth (f)" } },
                { number: 6, masculine: { ar: "السادس", en: "sixth (m)" }, feminine: { ar: "السادسة", en: "sixth (f)" } },
                { number: 7, masculine: { ar: "السابع", en: "seventh (m)" }, feminine: { ar: "السابعة", en: "seventh (f)" } },
                { number: 8, masculine: { ar: "الثامن", en: "eighth (m)" }, feminine: { ar: "الثامنة", en: "eighth (f)" } },
                { number: 9, masculine: { ar: "التاسع", en: "ninth (m)" }, feminine: { ar: "التاسعة", en: "ninth (f)" } },
                { number: 10, masculine: { ar: "العاشر", en: "tenth (m)" }, feminine: { ar: "العاشرة", en: "tenth (f)" } }
              ]
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم الجمل الاستفهامية",
                en: "Learn interrogative sentences"
              },
              answerType: "interrogativeSentences",
              answers: [
                { question: { ar: "ماذا؟", en: "What?" }, example: { ar: "ماذا تفعل؟", en: "What are you doing?" } },
                { question: { ar: "من؟", en: "Who?" }, example: { ar: "من أنت؟", en: "Who are you?" } },
                { question: { ar: "أين؟", en: "Where?" }, example: { ar: "أين تسكن؟", en: "Where do you live?" } },
                { question: { ar: "متى؟", en: "When?" }, example: { ar: "متى تذهب؟", en: "When do you go?" } },
                { question: { ar: "كيف؟", en: "How?" }, example: { ar: "كيف حالك؟", en: "How are you?" } },
                { question: { ar: "لماذا؟", en: "Why?" }, example: { ar: "لماذا تدرس العربية؟", en: "Why do you study Arabic?" } },
                { question: { ar: "كم؟", en: "How many?" }, example: { ar: "كم عمرك؟", en: "How old are you?" } },
                { question: { ar: "هل؟", en: "Is/Are...?" }, example: { ar: "هل أنت طالب؟", en: "Are you a student?" } }
              ]
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "مراجعة القواعد",
                en: "Grammar review"
              },
              answerType: "grammarReview",
              answers: [
                {
                  topic: { ar: "الاسم", en: "The Noun (Ism)" },
                  explanation: {
                    ar: "الاسم هو كلمة تدل على معنى في نفسها ولا تقترن بزمان",
                    en: "A noun is a word that indicates a meaning in itself and is not associated with time"
                  },
                  examples: [
                    { ar: "كتاب", en: "book" },
                    { ar: "قلم", en: "pen" },
                    { ar: "مدرسة", en: "school" }
                  ]
                },
                {
                  topic: { ar: "الفعل", en: "The Verb (Fi'l)" },
                  explanation: {
                    ar: "الفعل هو كلمة تدل على حدث مقترن بزمان",
                    en: "A verb is a word that indicates an event associated with time"
                  },
                  examples: [
                    { ar: "كتب (ماضي)", en: "wrote (past)" },
                    { ar: "يكتب (مضارع)", en: "writes (present)" },
                    { ar: "اكتب (أمر)", en: "write! (imperative)" }
                  ]
                },
                {
                  topic: { ar: "الحرف", en: "The Particle (Harf)" },
                  explanation: {
                    ar: "الحرف هو كلمة لا تدل على معنى إلا مع غيرها",
                    en: "A particle is a word that only indicates meaning with other words"
                  },
                  examples: [
                    { ar: "في", en: "in" },
                    { ar: "من", en: "from" },
                    { ar: "إلى", en: "to" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      weekNumber: 5,
      weekTitle: {
        ar: "الأسبوع الخامس - الأفعال المعتلة",
        en: "Week 5 - Weak Verbs"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم أنواع الأفعال المعتلة",
                en: "Learn types of weak verbs"
              },
              answerType: "weakVerbTypes",
              answers: [
                {
                  type: { ar: "المثال", en: "Mithal (First letter weak)" },
                  explanation: { ar: "ما كان أول حروفه حرف علة", en: "A verb whose first letter is a weak letter" },
                  examples: [
                    { ar: "وَعَدَ", en: "to promise" },
                    { ar: "وَجَدَ", en: "to find" },
                    { ar: "وَصَلَ", en: "to arrive" }
                  ]
                },
                {
                  type: { ar: "الأجوف", en: "Ajwaf (Middle letter weak)" },
                  explanation: { ar: "ما كان وسطه حرف علة", en: "A verb whose middle letter is a weak letter" },
                  examples: [
                    { ar: "قَالَ", en: "to say" },
                    { ar: "نَامَ", en: "to sleep" },
                    { ar: "زَارَ", en: "to visit" }
                  ]
                },
                {
                  type: { ar: "الناقص", en: "Naqis (Last letter weak)" },
                  explanation: { ar: "ما كان آخره حرف علة", en: "A verb whose last letter is a weak letter" },
                  examples: [
                    { ar: "دَعَا", en: "to call" },
                    { ar: "مَشَى", en: "to walk" },
                    { ar: "رَمَى", en: "to throw" }
                  ]
                }
              ]
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "صرّف أفعال المثال الواوي",
                en: "Conjugate Mithal Wawi verbs"
              },
              answerType: "mithalWawiVerbs",
              answers: {
                verb: { ar: "وَصَلَ", en: "to arrive" },
                conjugations: [
                  { tense: "ماضي", pronoun: "هو", form: "وَصَلَ", meaning: "He arrived" },
                  { tense: "ماضي", pronoun: "هي", form: "وَصَلَت", meaning: "She arrived" },
                  { tense: "مضارع", pronoun: "هو", form: "يَصِلُ", meaning: "He arrives" },
                  { tense: "مضارع", pronoun: "هي", form: "تَصِلُ", meaning: "She arrives" },
                  { tense: "أمر", pronoun: "أنتَ", form: "صِلْ", meaning: "Arrive! (masc.)" },
                  { tense: "أمر", pronoun: "أنتِ", form: "صِلِي", meaning: "Arrive! (fem.)" }
                ]
              }
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم الأفعال الصحيحة والمعتلة",
                en: "Learn sound and weak verbs"
              },
              answerType: "soundWeakVerbs",
              answers: {
                soundVerbs: {
                  title: { ar: "الأفعال الصحيحة", en: "Sound Verbs" },
                  explanation: { ar: "ما خلت حروفه الأصلية من حروف العلة", en: "Verbs whose root letters don't contain weak letters" },
                  examples: [
                    { ar: "كَتَبَ", en: "to write" },
                    { ar: "جَلَسَ", en: "to sit" },
                    { ar: "ذَهَبَ", en: "to go" }
                  ]
                },
                weakVerbs: {
                  title: { ar: "الأفعال المعتلة", en: "Weak Verbs" },
                  explanation: { ar: "ما كان أحد حروفه الأصلية حرف علة", en: "Verbs with a weak letter in the root" },
                  examples: [
                    { ar: "وَعَدَ", en: "to promise" },
                    { ar: "قَالَ", en: "to say" },
                    { ar: "دَعَا", en: "to call" }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      weekNumber: 6,
      weekTitle: {
        ar: "الأسبوع السادس - المحادثة",
        en: "Week 6 - Conversation"
      },
      days: [
        {
          dayNumber: 1,
          dayName: {
            ar: "اليوم الأول",
            en: "Day 1"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تمارين المحادثة",
                en: "Speaking practice exercises"
              },
              answerType: "speakingPractice",
              answers: [
                {
                  situation: { ar: "في المسجد", en: "At the mosque" },
                  dialogues: [
                    { speaker: "أ", ar: "السلام عليكم", en: "Peace be upon you" },
                    { speaker: "ب", ar: "وعليكم السلام ورحمة الله وبركاته", en: "And upon you peace and mercy and blessings of Allah" },
                    { speaker: "أ", ar: "كيف حالك يا أخي؟", en: "How are you, my brother?" },
                    { speaker: "ب", ar: "الحمد لله، أنا بخير", en: "Praise be to Allah, I am fine" }
                  ]
                },
                {
                  situation: { ar: "في السوق", en: "At the market" },
                  dialogues: [
                    { speaker: "أ", ar: "بكم هذا؟", en: "How much is this?" },
                    { speaker: "ب", ar: "هذا بعشرة ريالات", en: "This is ten riyals" },
                    { speaker: "أ", ar: "غالٍ جداً", en: "Too expensive" },
                    { speaker: "ب", ar: "لا، هذا رخيص", en: "No, this is cheap" }
                  ]
                }
              ]
            }
          ]
        },
        {
          dayNumber: 2,
          dayName: {
            ar: "اليوم الثاني",
            en: "Day 2"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "اكتب فقرات",
                en: "Write paragraphs"
              },
              answerType: "writingParagraphs",
              answers: [
                {
                  topic: { ar: "يومي في المدرسة", en: "My day at school" },
                  paragraph: {
                    ar: "أذهب إلى المدرسة كل يوم في الصباح. أدرس اللغة العربية والرياضيات والعلوم. أحب معلمي كثيراً لأنه يعلمني بصبر. بعد الدراسة، أرجع إلى البيت وأراجع دروسي.",
                    en: "I go to school every day in the morning. I study Arabic, mathematics, and science. I love my teacher very much because he teaches me patiently. After studying, I return home and review my lessons."
                  }
                },
                {
                  topic: { ar: "عائلتي", en: "My family" },
                  paragraph: {
                    ar: "عائلتي صغيرة. أبي يعمل في مكتب. أمي تهتم بالبيت. عندي أخ واحد وأخت واحدة. نحن نحب بعضنا كثيراً.",
                    en: "My family is small. My father works in an office. My mother takes care of the house. I have one brother and one sister. We love each other very much."
                  }
                }
              ]
            }
          ]
        },
        {
          dayNumber: 3,
          dayName: {
            ar: "اليوم الثالث",
            en: "Day 3"
          },
          tasks: [
            {
              taskNumber: 1,
              task: {
                ar: "تعلم جدول الأفعال المهموزة",
                en: "Learn hamzated verbs table"
              },
              answerType: "hamzaTable",
              answers: {
                title: { ar: "الأفعال المهموزة", en: "Hamzated Verbs" },
                explanation: { ar: "ما كان أحد حروفه الأصلية همزة", en: "Verbs with hamza in the root" },
                verbs: [
                  {
                    type: { ar: "مهموز الفاء", en: "Hamza in first position" },
                    example: { ar: "أَكَلَ", en: "to eat" },
                    conjugation: { past: "أَكَلَ", present: "يَأْكُلُ", imperative: "كُلْ" }
                  },
                  {
                    type: { ar: "مهموز العين", en: "Hamza in second position" },
                    example: { ar: "سَأَلَ", en: "to ask" },
                    conjugation: { past: "سَأَلَ", present: "يَسْأَلُ", imperative: "اِسْأَلْ" }
                  },
                  {
                    type: { ar: "مهموز اللام", en: "Hamza in third position" },
                    example: { ar: "قَرَأَ", en: "to read" },
                    conjugation: { past: "قَرَأَ", present: "يَقْرَأُ", imperative: "اِقْرَأْ" }
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};

export default homeworkData;
