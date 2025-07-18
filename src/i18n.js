import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ua",
    debug: true,

    resources: {
      ua: {
        translation: {
          menuService: "Послуги",
          menuAboutMe: "Про мене",
          menuReviews: "Відгуки",
          menuContact: "Контакти",
          menuProjects: "Проекти",

          close: "Закрити",

          mainName: "Ірина Дергачова",
          mainText:
            "Перекладач (японська, англійська та українська мова), бізнес-консультант і викладач з понад 6-річним досвідом життя та роботи в Японії.",
          getConsultation: "Отримати консультацію",
          serviceText:
            "Пропоную достовірний та якісний переклад з японської на українську, з української на японську, а також з англійської на українську мову та з української на англійську.",
          card1: "Індивідуальні заняття з японської мови",

          general: "Загальний",
          IT: "IT",
          scientific: "Науковий",
          medical: "Медичний",
          legal: "Юридичний",
          publishingHouse: "Переклад видавництва",

          card2: "Заняття у групах з японської мови",
          online: "Онлайн",
          interview: "Інтерв’ю, репортаж",
          business: "Бізнес зустрічі",
          conference: "Лекції та конференції",
          negotiations: "Політичні перемовини",
          conversation: "Проста розмова на загальні теми",

          card3: "Підтримка вашого бізнесу у Японії",
          television: "Телебачення, ЗМІ, радіо",
          socialProjects: "Соціальні проекти",
          accompanying: "Супровідний переклад",

          card4:
            "Переклад та усний переклад (японська, англійська, українська та російська мови)",
          subtitles: "Переклад субтитрів",
          transcription: "Транскрипція",
          voicing: "Озвучування",

          order: "Замовити",
          details: "Детальніше",
          fromWrittenTranslation: "Від 500 грн",
          fromOralOnline: "Від 600 грн",
          fromOralSpot: "Від 1200 грн",
          fromVideoTranslation: "Від 500 грн",

          aboutMeTitle: "Про мене",
          aboutMe:
            "<0>Я — Ірина Дергачова, професійний перекладач, викладач та бізнес-консультант з японської, англійської, української та російської мов. Маю понад 11 років досвіду, включаючи 6 років проживання та роботи в Японії.<p>Я допомагаю підприємцям та компаніям налагоджувати та розвивати успішні ділові відносини з Японією. Від першого контакту до повномасштабного розширення — я надаю індивідуальну підтримку, адаптовану до ваших цілей. </p><p>Як викладач, я з пристрастю допомагаю учням опановувати японську мову, роблячи процес зрозумілим, ефективним та приємним. Оскільки мова та культура нерозривно пов'язані, я допомагаю своїм студентам підготуватися до реального досвіду в японському середовищі.</p><p>Незалежно від того, чи ви готуєтеся до іспитів JLPT, плануєте поїздку до Японії, чи прагнете глибшого культурного зв'язку, я підтримаю вас на кожному кроці. Багато моїх студентів успішно склали іспити JLPT, а потім відвідали або навіть переїхали до Японії! Я також пропоную корпоративні уроки японської мови.</p> <p>Щоб полегшити ваше життя в Японії, я надаю професійні послуги усного перекладу в загальних, юридичних та медичних сферах, забезпечуючи безперешкодне та безстресове спілкування. </p></0>",
          aboutMe2:
            "<0><p>Я пропоную 30-хвилинну консультацію з будь-якої моєї послуги. Не соромтеся зв'язатися зі мною, використовуючи контактну інформацію нижче.</p></0>",

          projectTextEng:
            "Проект вивчення англійської мови “English for Earth Citizen” - “Англійська для громадян Землі”. Уроки англійської для закордонних подорожей, роботи за кордоном, взаємодії з іноземцями, міжнародного бізнесу, проектів, трансляцій та підприємців. Включає тренування з емоційного інтелекту. Будь ласка, зв'яжіться зі мною, якщо ви зацікавлені.",
          projectTitleUA: "Українська культура",
          projectTextUA:
            "Українська культура охоплює матеріальні та духовні цінності, що склалися протягом історії України. Сильні сімейні цінності та релігійні переконання глибоко вкорінені в українському суспільстві та відіграють значну роль у формуванні культури країни. Традиції української вишивки та народної музики також є невід’ємною частиною культурної ідентичності України. Як людина, яка захоплюється популяризацією української культури та миротворчої освіти, я відкрита до прохань щодо проведення уроків української кулінарії, майстер-класів з вишивання та інших культурних заходів. Крім того, я готова виступати з промовами на такі теми, як культура, мир і глобальне громадянство, як в Японії, так і в усьому світі. Будь ласка, не соромтеся зв’язатися зі мною, якщо ви зацікавлені.",
          projectTitleVolunteer: "Японська з серцем",
          projectTextVolunteer:
            "Наразі я викладаю японську мову онлайн евакуйованим до Японії українцям. Цей проект називається “Японська з серцем”. Якщо ви бажаєте доєднатися до волонтерської групи з вивчення японської мови “Японська з серцем” або допомогти проекту з викладанням, книжками, надати фінансову підтримку, будь ласка зв'яжіться зі мною.",
          getInTouch: "Зв'язатися",

          userName1: "Хідео Накамура",
          userName2: "Курода",
          userName3: "Дайсаку Йошімура",
          userName4: "Іноуе",
          userPosition1:
            "Загальний фонд асоціації народної музики MIN-ON Штаб планування Плановий відділ",
          userPosition2: "Професор, Педагогічний університет Кіото",
          userPosition3: "Директор-представник ТОВ “NextAge Inc.”",
          userPosition4: "Репортер TBS",
          questions1: "Як ви мене знайшли?",
          questions2: "Чому ви звернулися до мене?",
          questions3:
            "Чи було це корисно? Ви змогли вирішити проблему? Ви задоволені результатами?",
          questions3NextAge:
            "Чи було це корисно для NextAge? Ви змогли вирішити проблему? Ви задоволені результатами?",
          questions4: "Чи було це корисно для Відділу міжнародних новин?",
          replies1:
            "По рекомендації директора НВО Японсько-Української Культурної Асоціації.",
          replies2:
            "Це сталося через те, що нам потрібен був український перекладач для японського виступу Національного заслуженого академічного ансамблю танцю України імені Павла Вірського, спонсорованого нашою організацією.",
          replies3:
            "Пройшов двомісячний тур і протягом цього часу перекладач Ірина ретельно піклувалася про те, щоб учасники з України могли спокійно перебувати в Японії, а також перекладала на офіційних заходах. Ми дуже задоволені успішними виступами танцювального колективу. Ще раз дякую за ваші зусилля і турботу.",
          replies4:
            "Коли ми шукали перекладача українською спільно з NextAge Inc., Ірина запропонувала нам роботу. Після цього Ірина очолила пошук близько 10 перекладачів через соціальні мережі.",
          replies5:
            "Ми шукали перекладача, який би володів японською та українською мовами, щоб допомогти українським дітям, евакуйованим по всьому світу, з арифметикою та математикою рідною мовою.",
          replies6:
            "Перекладач Ірина брала участь у систематичному перекладі приблизно 600 відеофільмів з арифметики та математики для учнів від початкової школи до старшокласників. Ці зусилля висвітлювалися засобами масової інформації та отримали кілька нагород і ми надзвичайно вдячні за її цілеспрямований внесок.",
          replies7: "Дізнався про Ірину від українських біженців.",
          replies8:
            "Під час розмови з організацією з України, яка отримала Нобелівську премію миру, ми попросили переклад українською та японською мовами.",
          replies9:
            "Я міг спокійно спілкуватися з українцями. Ірина добре знає японську мову, тому її японську мову легко зрозуміти. Я завжди консультуюся з пані Дергачовою, коли спілкуюся з українцями.",
          replies10:
            "Це запит на усний, транскрипційний та відеопереклад з української та російської мови на японську.",
          replies11:
            "Ірина неодноразово приходила до нас в офіс, і завжди працювала дуже акуратно. Коли я побачив переклад довгого запису з української на японську мову, я подумав, що її здібності до японської мови дуже високі. Вона також надала ретельні нотатки та пояснення довідок. Швидкість роботи також була високою. Її навички спілкування були чудовими, вона належним чином розуміла наші прохання та виконувала роботу.",

          contact: "Контакти",
          city: "Японія",
          contactText: "Знайдіть мене в соціальних мережах, де я ділюся своїм досвідом життя в Японії.",

          formName: "Ваше ім’я",
          formMail: "Ваша пошта",
          request: "Напишіть ваш запит",
          formSucces: "Форма успішно відправлена!",
          formAgree:
            "*Натискаючи кнопку, ви даєте згоду на обробку персональних даних і погоджуєтесь з політикою конфіденційності",
          send: "Відправити",

          top: "Вгору",

          individualMainText:
            "Бажаєте легко вивчати японську та впевнено інтегруватися в японське суспільство?",
          individualMainText2: "Я тут, щоб допомогти!",
          individualText1:
            " Пропоную безкоштовний 30-хвилинний пробний урок — ідеальну можливість познайомитися з моїм стилем викладання, поставити запитання та зрозуміти, чи підходимо ми один одному для досягнення ваших навчальних цілей.",
          individualOffer: "Що я пропоную:",
          individualOffer1:
            "Приватні онлайн-уроки (оберіть тривалість, яка вам підходить):",
          individualOfferText1: "60 хвилин",
          individualOfferText2: "90 хвилин",
          individualOffer2:
            "Частота занять гнучка і залежить від ваших цілей та розкладу:",
          individualOfferText3: "Раз на тиждень",
          individualOfferText4: "Двічі на тиждень",
          individualOfferText5:
            "Тричі на тиждень (або більше для інтенсивного навчання)",
          individualOffer3: "Доступні рівні уроків:",
          individualOfferText6: "Початковий",
          individualOfferText7: "Середній",
          individualOfferText8: "Просунутий",
          individualGain: "Що ви отримаєте:",
          individualGainText1: {
            item1: "Швидкий прогрес та зростаюча впевненість у японській мові.",
            item2: "Опанування граматики та лексики в реальних контекстах.",
            item3:
              "Читання та письмо каною, канджі та практичне спілкування (електронні листи, повідомлення).",
            item4:
              "Культурні знання та етикет — важливі для розуміння японської мови.",
            item5: "Підготовка до природних розмов з носіями мови.",
            item6:
              "Навички орієнтування у формальних та неформальних ситуаціях, що ідеально підходить для подорожей, роботи чи повсякденного життя в Японії.",
          },
          individualText2:
            "Готові розпочати? Напишіть мені, щоб запланувати ваш безкоштовний пробний урок, і давайте разом розпочнемо вашу японську подорож!",
          individualText3: "Не впевнені щодо свого поточного рівня японської?",
          individualText4:
            "Без проблем! Я пропоную спеціальний урок для визначення рівня, щоб оцінити ваші навички та створити персоналізований план навчання саме для вас.",
          individualText5:
            "Підготовка до JLPT (Іспит з визначення рівня володіння японською мовою)",
          individualText6:
            "Маю великий досвід успішної підготовки студентів до наступних рівнів JLPT:",
          individualText7: "часто вимагається для роботи в Японії",
          individualText8:
            "Завдяки структурованим урокам та широкому спектру практичних матеріалів ви почуватиметеся впевнено та добре підготовленими в день іспиту — і будете готові застосувати свої знання для досягнення особистих та професійних цілей.",
          individualText9: "Доступні інші формати уроків:",
          individualText10: "Заняття в малих групах (міні-групи):",
          individualText11: "Навчайтеся в міні-групах по 4-5 осіб.",
          individualText12: "Корпоративне навчання:",
          individualText13:
            "Ідеально підходить для компаній, які бажають допомогти своїм співробітникам ефективно та професійно вивчити японську мову. ",
          individualButton:
            "Будь ласка, зв'яжіться зі мною для отримання детальної інформації.",

          groupMain:
            "Я пропоную онлайн уроки японської мови в міні-групах (4-5 чоловік), розроблені так, щоб зробити вивчення мови цікавим, структурованим та орієнтованим на спільноту.",
          groupLevelText: "Заняття організовані за рівнями:",
          groupLevel: {
            item1: "Початковий (N5)",
            item2: "Базовий (N4)",
            item3: "Середній (N3-N2)",
          },
          groupText1:
            "Ви завжди будете навчатися разом з іншими студентами, які мають схожі навички та цілі.",
          groupText2:
            "На моїх групових заняттях ми виходимо за рамки лише граматики та лексики. Я також інтегрую важливі знання про японську культуру, етикет та традиції — це надзвичайно важливо для тих, хто планує подорожувати, працювати або жити в Японії.",
          groupText3:
            "Атмосфера на уроках тепла, інклюзивна та підтримуюча. Кожен студент отримує індивідуальну увагу, і ви завжди можете попросити додаткову практику або персоналізовані завдання.",
          groupText4:
            "Групові програми також включають структуровану підготовку до JLPT для рівнів N5, N4 та N3, використовуючи перевірені матеріали та стратегії для вашого успіху.",
          groupText5: "Не впевнені, чи підходить вам групове навчання?",
          groupText6:
            "Замовте безкоштовний 30-хвилинний пробний урок, щоб ознайомитися з форматом, оцінити доступність місць та знайти найкращий шлях для себе.",
          groupText7: "Для компаній",
          groupText8:
            "Ви представляєте компанію і бажаєте, щоб ваші співробітники вивчали японську?",
          groupText9:
            "Я пропоную корпоративні програми мовного навчання, адаптовані до потреб вашого бізнесу. Звертайтеся за додатковою інформацією.",
          groupText10: "Віддаєте перевагу індивідуальному навчанню?",
          groupText11:
            "Я також надаю індивідуальні уроки, розроблені для швидкого прогресу — ідеально, якщо вам потрібна японська для роботи, навчання або переїзду до Японії.",

          businessMain: "Плануєте розпочати чи розширити свій бізнес в Японії?",
          businessMain2:
            "Я надаю комплексну підтримку та супровід бізнесу, щоб допомогти вам легко та впевнено орієнтуватися на японському ринку.",
          businessAssistance: "З моєю допомогою ви отримаєте:",
          businessText: {
            item1: "Послуги усного перекладу та підтримку комунікації",
            item2: "Підготовку та перевірку документів",
            item3: "Сприяння у проведенні ділових зустрічей та переговорів",
            item4: "Налагодження зв'язків та допомогу з процесами",
          },
          businessText1:
            "Завдяки глибокому культурному розумінню та мовній експертизі я допоможу зробити запуск або розширення вашого бізнесу в Японії більш плавним, ефективним та безстресовим, заощаджуючи ваш час, ресурси та уникаючи потенційних непорозумінь.",
          businessText2: "Потрібно, щоб ваша команда вивчила японську?",
          businessText3:
            "Я також пропоную індивідуальні корпоративні уроки японської мови для компаній, які хочуть забезпечити свої команди необхідними комунікативними навичками для успішного ведення бізнесу в Японії.",
          businessButton:
            "Будь ласка, зв'яжіться зі мною, використовуючи форму або контактні дані нижче.",
          businessText4:
            "Замовте безкоштовну 30-хвилинну консультацію, щоб дізнатися, як я можу підтримати ваш бізнес у Японії.",

          translationMain: "Послуги усного та письмового перекладу",
          translationText:
            "Я пропоную професійні послуги усного перекладу з японської, англійської, української та російської мов у широкому спектрі сфер:",
          translationInterpretation: {
            item1: "Загальний усний переклад",
            item2:
              "Для повсякденних ситуацій, включно з інтерв'ю для ЗМІ, зустрічами, культурними обмінами, подорожами та особистим спілкуванням.",
            item3: "Бізнес-переклад",
            item4:
              "Підтримка під час ділових переговорів, зустрічей, презентацій та обговорень між компаніями чи партнерами.",
            item5: "Юридичний переклад",
            item6:
              "Допомога під час юридичних консультацій, імміграційних послуг, судових засідань, обговорень контрактів тощо.",
            item7: "Медичний переклад",
            item8:
              "Переклад у лікарнях, поліклініках або під час медичних консультацій для забезпечення чіткості, комфорту та точності під час життєво важливих розмов, пов'язаних зі здоров'ям.",
          },
          translationText1:
            "Усний переклад може надаватися особисто або онлайн, залежно від ваших потреб та місцезнаходження. Я також пропоную супровідний переклад для заходів, візитів або зустрічей, що вимагають підтримки на місці.",
          translationText2: "Послуги письмового перекладу",
          translationText3:
            "Я також пропоную послуги письмового перекладу за широким колом тем та типів документів, включно з:",
          translationText4: {
            item1: "Ділові та юридичні документи",
            item2: "Медичні записи та інструкції",
            item3: "Електронні листи, листи та особисте листування",
            item4: "Навчальні матеріали та презентації",
            item5: "Вміст вебсайтів та рекламні матеріали",
            item6: "Субтитри та транскрипти відео",
          },
          translationText5:
            "Кожен переклад виконується з точністю та ретельністю, забезпечуючи достовірність, зберігаючи тон, стиль та культурну відповідність, незалежно від того, чи перекладаєте ви з японської на англійську, чи з англійської, української чи російської на японську.",
          translationText6: "Потрібна допомога зі спілкуванням у Японії?",
          translationText7:
            "Давайте гарантуємо, що ваше повідомлення буде зрозумілим — чітко, професійно та з культурною чутливістю.",
          translationText8:
            "Зв'яжіться зі мною сьогодні для безкоштовної 30-хвилинної консультації!",
        },
      },
      en: {
        translation: {
          menuService: "Services",
          menuAboutMe: "About me",
          menuReviews: "Reviews",
          menuContact: "Contact",
          menuProjects: "Projects",

          close: "Close",

          mainName: "Iryna Derhachova",
          mainText:
            "Japanese, English, Ukrainian, and Russian interpreter, business consultant, and teacher with over 6 years of life and work experience in Japan.",
          getConsultation: "Reservation or inquiry",
          serviceText:
            "I offer accurate, reliable, and affordable translation and interpretation services from Japanese to English and vice versa. I also work with language pairs such as English-Ukrainian, Japanese-Ukrainian, and English-Russian if needed.",
          card1: "Individual Japanese Lessons",

          general: "General",
          IT: "IT",
          scientific: "Scientific",
          medical: "Medical",
          legal: "Legal",
          publishingHouse: "Translation of the publishing house",

          card2: "Group Japanese Lessons",
          online: "Online",
          interview: "Interview, report",
          business: "Business meetings",
          conference: "Lectures and conferences",
          negotiations: "Political negotiations",
          conversation: "Simple conversation on general topics",

          card3: "Business Support in Japan",
          television: "Television, mass media, radio",
          socialProjects: "Social projects",
          accompanying: "Accompanying interpreter",

          card4:
            "Interpretation and translation in Japanese, English, Ukrainian, and Russian",
          subtitles: "Translation of subtitles",
          transcription: "Transcription",
          voicing: "Voicing",

          order: "Order",
          details: "Details",
          fromWrittenTranslation: "From 33 $",
          fromOralOnline: "From 15$",
          fromOralSpot: "From 33$",
          fromVideoTranslation: "From 13$",

          aboutMeTitle: "About me",
          aboutMe:
            "<0>I’m Iryna Derhachova — a professional interpreter, teacher, and business consultant in Japanese, English, Ukrainian, and Russian, with over 11 years of experience, including 6 years of living and working in Japan.<p>I help entrepreneurs and companies establish and grow successful business relationships with Japan. From the first connection to full-scale expansion, I provide personalized support tailored to your goals.</p><p>As a passionate educator, I also guide learners on their journey to mastering Japanese — making the process clear, effective, and enjoyable. Since language and culture go hand in hand, I help my students prepare for real-life experiences in a Japanese environment. </p><p>Whether you’re preparing for the JLPT exams, planning a trip to Japan, or seeking a deeper cultural connection, I’ll support you every step of the way. Many of my students have passed JLPT exams and later visited or even moved to Japan! I also offer corporate Japanese lessons. </p><p>To make your life in Japan easier, I provide professional interpreting services in general, legal, and medical contexts — ensuring smooth, stress-free communication. </p></0>",
          aboutMe2:
            "<0><p>I offer a 30-minute consultation on any of my services. Feel free to get in touch using the contact information below. </p></0>",

          projectTextEng:
            "Project “English for Earth Citizen”. English lessons for overseas travel, overseas work, interaction with foreigners, international business, international projects, streaming for overseas, and international entrepreneurs. English for Earth citizen includes EQ coaching. Please contact me if you are interested.",
          projectTitleUA: "Ukrainian culture",
          projectTextUA:
            "Ukrainian culture encompasses the material and spiritual values that have developed throughout the history of Ukraine. Strong family values and religious beliefs are deeply rooted in Ukrainian society, and they play a significant role in shaping the country's culture. The traditions of Ukrainian embroidery and folk music are also integral to the cultural identity of Ukraine. As someone who is passionate about promoting Ukrainian culture and peace education, I am open to requests for Ukrainian cooking classes, embroidery workshops, and other cultural activities. Additionally, I am available to deliver speeches on topics such as culture, peace, and global citizenship, both in Japan and around the world. Please feel free to reach out to me if you are interested.",
          projectTitleVolunteer: "Japanese with Heart",
          projectTextVolunteer:
            "I am currently teaching Japanese online to Ukrainians who have been evacuated to Japan. This project is called 'Japanese with Heart'. If you would like to join the volunteer group for Japanese language study, 'Japanese with Heart', or if you would like to contribute by helping with teaching, providing books, or offering financial support to the project, please feel free to contact me",
          getInTouch: "Get in touch",

          userName1: "Hideo Nakamura",
          userName2: "Kuroda",
          userName3: "Daisaku Yoshimura",
          userName4: "Inoue",
          userPosition1:
            "National Music Association General Incorporated Foundation Planning Headquarters Planning Department",
          userPosition2: "Professor of Kyoto University of Education",
          userPosition3: "NextAge Co., Ltd. Representative Director",
          userPosition4: "TBS reporter",
          questions1: "How did you find me?",
          questions2: "Why did you contact me?",
          questions3:
            "Was it helpful? Were you able to solve the problem? Are you happy with the results?",
          questions3NextAge:
            "Was it useful for NextAge? Were you able to solve the problem? Are you happy with the results?",
          questions4: "Was it useful for the International News Department?",
          replies1:
            "On the recommendation of the director of the NGO of the Japanese-Ukrainian Cultural Association.",
          replies2:
            "This happened because we needed a Ukrainian translator for the Japanese performance of the National Honored Academic Dance Ensemble of Ukraine named after Pavlo Virsky, sponsored by our organization.",
          replies3:
            "The two-month tour took place, and during this time, the translator Iryna carefully ensured that the participants from Ukraine could stay peacefully in Japan, and also translated at official events. We are very pleased with the successful performances of the dance team. Thank you again for your efforts and care.",
          replies4:
            "When we were looking for a Ukrainian translator together with NextAge Inc., Iryna offered us a job. After that, Iryna led the search for about 10 translators through social networks.",
          replies5:
            "We were looking for a Japanese and Ukrainian translator to help Ukrainian children evacuated around the world with arithmetic and mathematics in their native language.",
          replies6:
            "Translator Iryna participated in the systematic translation of approximately 600 video films on arithmetic and mathematics for students from elementary school to high school students. These efforts have received media coverage and several awards, and we are extremely grateful for her dedicated contributions.",
          replies7: "Learned about Iryna from Ukrainian refugees.",
          replies8:
            "During a conversation with an organization from Ukraine that won the Nobel Peace Prize, we asked for a translation into Ukrainian and Japanese.",
          replies9:
            "I could easily communicate with Ukrainians. Iryna knows Japanese well, so her Japanese is easy to understand. I always consult with Mrs. Dergacheva when I communicate with Ukrainians.",
          replies10:
            "This is a request for oral, transcription and video translation from Ukrainian and Russian into Japanese.",
          replies11:
            "Iryna came to our office many times, and always worked very neatly. When I saw the translation of a long recording from Ukrainian to Japanese, I thought that her Japanese language skills are very high. She also provided thorough notes and explanations of references. The speed of work was also high. Her communication skills were excellent, she understood our requests properly and got the job done.",

          contact: "Contact",
          city: "Tokyo, Japan",
          contactText: "Find me on social media where I'm sharing my life experience in Japan.",

          formName: "Your name",
          formMail: "Your e-mail",
          request: "Your request",
          formSucces: "Your request has been successfully sent!",
          formAgree:
            "*By clicking the button, you consent to the processing of personal data and agree to the privacy policy",
          send: "Send",

          top: "TOP",

          individualMainText:
            "Would you like to study Japanese with ease and integrate into Japanese society smoothlyand confidently?",
          individualMainText2: "I’m here to help!",
          individualText1:
            " I offer a free 30-minute trial lesson — a perfect opportunity to get to know my teaching style, ask questions, and see if we’re a good fit for your learning goals.",
          individualOffer: "What I offer:",
          individualOffer1:
            "Private online lessons (choose the duration that suits you):",
          individualOfferText1: "60 minutes",
          individualOfferText2: "90 minutes",
          individualOffer2:
            "Lesson frequency is flexible and depends on your goals and schedule:",
          individualOfferText3: "Once a week",
          individualOfferText4: "Twice a week",
          individualOfferText5:
            " Three times a week (or more for intensive learning)",
          individualOffer3: "Lesson Levels Available:",
          individualOfferText6: "Beginner",
          individualOfferText7: "Intermediate",
          individualOfferText8: "Advanced",
          individualGain: "What you'll gain:",
          individualGainText1: {
            item1: "Fast progress and growing confidence in Japanese",
            item2: "Mastery of grammar and vocabulary in real-life contexts",
            item3:
              "Reading and writing in kana, kanji, and practical communication (emails, messages)",
            item4:
              "Cultural insight and etiquette — essential for understanding the Japanese language",
            item5: "Preparation for natural conversations with native speakers",
            item6:
              "Skills to navigate formal and informal situations, perfect for travel, work, or daily life in Japan",
          },
          individualText2:
            "Ready to begin? Message me to schedule your free trial lesson and let’s start your Japanese journey together!",
          individualText3: "Not sure about your current Japanese level?",
          individualText4:
            "No problem! I offer a dedicated level-check lesson to assess your skills and create a personalized learning plan just for you.",
          individualText5:
            "JLPT Preparation (Japanese Language Proficiency Test)",
          individualText6:
            "I have extensive experience helping students successfully prepare for the following JLPT levels:",
          individualText7: "often required for work in Japan",
          individualText8:
            "With structured lessons and a wide range of practice materials, you’ll feel confident and well-prepared on exam day — and ready to apply your knowledge toward your personal and professional goals.",
          individualText9: "Other lesson formats available:",
          individualText10: "Small group lessons (mini-groups):",
          individualText11: "Study in minigroups of 4-5 people.",
          individualText12: "Corporate training",
          individualText13:
            "Perfect for companies that want to support their team members in learning Japanese efficiently and professionally.",
          individualButton: "Please contact me for details.",

          groupMain:
            "I offer online group Japanese lessons designed to make language learning engaging, structured, and community-driven. ",
          groupLevelText: " Classes are organized by level:",
          groupLevel: {
            item1: "Beginner",
            item2: "Pre-Intermediate",
            item3: "Intermediate",
          },
          groupText1:
            "You’ll always be learning alongside others with similar skills and goals.",
          groupText2:
            "In my group lessons, we go beyond grammar and vocabulary. I also integrate essential insights into Japanese culture, etiquette, and traditions — crucial for anyone planning to travel, work, or live in Japan.",
          groupText3:
            "The atmosphere is warm, inclusive, and encouraging. Every student receives individual attention, and you’re always welcome to request extra practice or personalized tasks.",
          groupText4:
            "Group programs also include structured JLPT preparation for levels N5, N4, and N3, using proven materials and strategies to support your success.",
          groupText5: "Not sure if group learning is right for you?",
          groupText6:
            "Request a free 30-minute trial lesson to explore the format, assess availability, and find your best path forward.",
          groupText7: "For Companies",
          groupText8:
            "Do you represent a company and want your employees to learn Japanese?",
          groupText9:
            "I offer corporate language training programs tailored to your business needs. Feel free to reach out for more information.",
          groupText10: "Prefer Individual Learning?",
          groupText11:
            "I also provide one-on-one lessons designed for rapid progress — perfect if you need Japanese for work, study, or relocation to Japan.",

          businessMain: "Planning to start or expand your business in Japan?",
          businessMain2:
            "I provide comprehensive business support and accompaniment services to help you navigate the Japanese market with ease and confidence.",
          businessAssistance: "With my assistance, you will receive:",
          businessText: {
            item1: "Interpreting and communication support",
            item2: "Document preparation and review",
            item3: "Business meeting and negotiation facilitation",
            item4: "Connection-building and process guidance",
          },
          businessText1:
            "With deep cultural insight and linguistic expertise, I’ll help make your business launch or expansion in Japan smoother, more efficient, and stress-free — saving you time, resources, and avoiding potential misunderstandings.",
          businessText2: "Need your team to learn Japanese?",
          businessText3:
            "I also offer customized corporate Japanese lessons for companies that want to equip their teams with essential communication skills for successful business in Japan.",
          businessButton: "Please contact me using the form or details below",
          businessText4:
            "Book a free 30-minute consultation to find out how I can support your business journey in Japan.",

          translationMain: "Professional Interpretation Services",
          translationText:
            "I offer professional interpretation in Japanese, English, Ukrainian, and Russian across a wide range of fields:",
          translationInterpretation: {
            item1: "General Interpretation",
            item2:
              "For everyday situations including media interviews, meetings, cultural exchanges, travel, and personal communication.",
            item3: " Business Interpretation",
            item4:
              "Support for business negotiations, meetings, presentations, and discussions between companies or partners.",
            item5: "Legal Interpretation",
            item6:
              "Assistance at legal consultations, immigration services, court proceedings, contract discussions, and more.",
            item7: "Medical Interpretation",
            item8:
              "Interpretation at hospitals, clinics, or health consultations to ensure clarity, comfort, and accuracy during vital health-related conversations.",
          },
          translationText1:
            "Interpretation can be provided in person or online, based on your needs and location. I also offer accompaniment interpretation for events, visits, or appointments requiring on-site support.",
          translationText2: "Translation Services",
          translationText3:
            "I also offer written translation services across a wide range of topics and document types, including:",
          translationText4: {
            item1: "Business and legal documents",
            item2: "Medical records and instructions",
            item3: "Emails, letters, and personal correspondence",
            item4: "Educational materials and presentations",
            item5: "Website and promotional content",
            item6: "Video subtitles and transcripts",
          },
          translationText5:
            "Every translation is handled with precision and care — ensuring accuracy, while preserving tone, style, and cultural relevance, whether translating from Japanese to English or from English, Ukrainian, or Russian into Japanese.",
          translationText6: "Need help communicating in Japan?",
          translationText7:
            "Let’s ensure your message is understood — clearly, professionally, and with cultural sensitivity.",
          translationText8:
            "Contact me today for a free 30-minute consultation!",
        },
      },
      jp: {
        translation: {
          menuService: "サービス",
          menuAboutMe: "私について",
          menuReviews: "お客様の声",
          menuContact: "ご予約",
          menuProjects: "プロジェクト",

          close: "近い",

          mainName: "翻訳者及び通訳者 イリーナ・デルガチョワ",
          mainText:
            "高品質のウクライナ語から日本語へ、日本語からウクライナ語への通訳や翻訳、または英語、ロシア語の通訳や翻訳を格安で提供しております。",
          getConsultation: "ご予約・お問い合わせ",
          serviceText:
            "丁寧で自然な正しい日本語⇔ウクライナ語、日本語⇔英語、日本語⇔ロシア語の翻訳・通訳を格安で提供しております。",
          card1: "翻訳",

          general: "一般文書",
          IT: "IT",
          scientific: "技術",
          medical: "医療",
          legal: "法律・契約",
          publishingHouse: "出版翻訳",

          card2: "通訳（逐次通訳）",
          details: "さらに詳しく",
          online: "オンライン",
          interview: "インタビューや取材など",
          business: "ビジネスミーティング",
          conference: "演説や会議",
          negotiations: "政治交渉",
          conversation: "一般の話",

          card3: "現地で",
          television: "テレビ、ラジオ、SNS",
          socialProjects: "ソーシャルプロジェクト",
          accompanying: "同行通訳",

          card4: "映像翻訳",
          subtitles: "字幕翻訳",
          transcription: "文字起こし",
          voicing: "吹き替え翻訳",

          order: "ご予約",
          fromWrittenTranslation: "（一文字）13円から",
          fromOralOnline: "2500円から",
          fromOralSpot: "5000円から",
          fromVideoTranslation: "2000円から",

          aboutMeTitle: "私について",
          aboutMe:
            "<0>はじめまして、イリーナ・デルガチョワと申します。2014 年から日本語、英語、ウクライナ語、ロシア語の翻訳者および通訳者として活動しています。一般翻訳、法律翻訳、医療翻訳、科学翻訳、社会翻訳、ビジネス翻訳の経験があります。 通訳と書面翻訳の両方を提供しています。 ウクライナの 2 つの大学を卒業しました。スコヴォロダ記念ハルキウ国立教育大学（学士）です。 そして、タラス・シェフチェンコ記念キーウ国立大学（修士）です。日本語、英語の翻訳を専攻していました。 私は日本語能力試験N1（最上級）の証明書を持っています。<p>キーウ市で行われた日本語スピーチコンテストで優勝し、そのおかげで2015年に国際交流基金（大阪）の研修プログラムで初めて日本に行くことができました。</p><p>2016年から2018年まで、私はドラホマノフ州立大学で日本語講師として働いていました。</p><p>2019年から日本にある名古屋専門学校の留学生支援室で教職員として働いていました。</p></0>",
          aboutMe2:
            "<0><p>2020年5月から2021年7月まで、日本のIT企業Demand-Linkで翻訳者兼Webデザイナーとして働いていました。</p><p>2022年から日本の翻訳会社であるラインゲート、サンフレア、インターグループ、フランシールと協力してきました。 TBSチャンネルの国際報道部で働いていました。 さらに、NPOクライヤニー、CINGA、FRJ、アルペ難民センター、みなと国際協会（MIA）などのNGOや難民支援団体の翻訳も担当しています。 翻訳と人々とのコミュニケーションにおいて豊富な経験があります。</p><p>2023年にはボランティアで日本語を教えるチャリティープロジェクト「日本語とハート」を立ち上げました。 ウクライナ文化の普及に携わっており、特にウクライナ料理の作り方とクロスステッチ刺繍を教えています。 感情的知性トレーナーの資格と第 2 級レイキエネルギーヒーリングの資格を持っています。</p></0>",

          projectTextEng:
            "地球市民になるための英語“English for Earth Citizen”。海外旅行、海外の仕事、外国人との交流、国際業務、インタナショナルプロジェクト、海外への配信、国際起業家のための英語のレッスンです。ご興味をお持ちの方は お問い合わせください。",
          projectTitleUA: "ウクライナの文化",
          projectTextUA:
            "日本でウクライナ料理教室や刺繍ワークショップ、演説などのご依頼も承ります。お問い合わせください。",
          projectTitleVolunteer: "心ある日本語",
          projectTextVolunteer:
            "現在はウクライナからの避難民に日本語を教えています。 ボランティア日本語学習グループ「心ある日本語」にサポートやご協力が必要です。お問い合わせください。",
          getInTouch: "連絡する",

          userName1: "中村　英夫",
          userName2: "黒田",
          userName3: "吉村大作",
          userName4: "井上 ",
          userPosition1: "一般財団法人民主音楽協会企画本部　企画部",
          userPosition2: "京都教育大学　教授　",
          userPosition3: "ネクストエージ株式会社　代表取締役",
          userPosition4: "記者　TBS",
          questions1: "どうやって私を見つけましたか？",
          questions2: "何のために私に問い合わせしたのか？",
          questions3:
            "役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
          questions3NextAge:
            "ネクストエージに役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
          questions4: "外信部に役立ちましたか？",
          replies1: "NPO法人日本ウクライナ文化協会の理事長からのご推薦です。",
          replies2:
            "当会主催の「ウクライナ国立民族舞踊団パブロ・ヴィルスキー」日本公演における、ウクライナ語の通訳を必要としたためです。",
          replies3:
            "２か月にわたるツアーのうち、およそ半分の行程について頂きました。その中での、ウクライナからきた団員が安心して日本に滞在できるよう、細かなケアに心を砕いて頂いたり、公式行事での通訳にもご尽力頂きました。私どもの、舞踊団側のたいへんに満足しております。改めてご尽力に感謝申し上げます。",
          replies4:
            "株式会社ネクストエージと共同で、ウクライナ語への翻訳者を探していたところ、イリーナさんの方が申し出てくれました。その後、イリーナさんが中心となって、SNSを通して約１０名の翻訳者を探してくれました。",
          replies5:
            "世界中に避難するウクライナの子どもの母語での算数・数学支援のために、日本語とウクライナ語ができる翻訳者を探していました。",
          replies6:
            "小学校から高校までの算数・数学内容の動画約６００本を、組織的に翻訳することに貢献してくれました。 これらの取り組みは、以下のようにマスコミ各社で取り上げられたり、いくつかの賞をいただくことができ、その献身的な貢献に非常に感謝しています。",
          replies7: "ウクライナ避難民からの紹介。",
          replies8:
            "ノーベル平和賞受賞団体との対談の際に、ウクライナ語と日本語の通訳を依頼しました。",
          replies9:
            "円滑にウクライナ人の方々とのコミュニケーションができました。日本語のスキルも高いので日本語も分かりやすいです。ウクライナ人の方々とのコミュケーションの際には、その都度デルガチョワさんに相談したいと思います。",
          replies10:
            "ウクライナ語とロシア語の通訳、文字起こし、映像翻訳の依頼です。",
          replies11:
            "イリーナさんには何度も会社に来ていただきましたが、いつもとても丁寧に作業してくださいました。長いウクライナ語の録音を日本語にしてくださった時に、訳文を拝見して、特に日本語のライティングの能力がとても高いと思いました。また丁寧に注釈や背景説明も記載してくれました。作業のスピードも早かったです。コミュニケーション力も素晴らしく、こちらの要望をきちんと理解して作業してくださいました。",

          contact: "ご予約",
          city: "東京、日本",
          contactText: "お気軽にお問い合わせください。",

          formName: "お名前",
          formMail: "メール",
          request: "ご依頼",
          formSucces: "送信は成功しました。どうもありがとうございます。",
          formAgree:
            "「ボタンをクリックすると、個人データの処理に同意し、プライバシーポリシーに同意したことになります。」",
          send: "送信",

          top: "PAGETOP",
        },
      },
    },
  });

export default i18n;
