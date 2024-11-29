import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hello! My name is Maxim, I am a",
      frontendDeveloper: "frontend developer",
      withExperience: "with experience in project management and nondestructive testing in nuclear power plant construction",
      discoverMore: "Here you can learn more",
      about: "about me",
      andMy: "and my",
      projectsPageTitle: "Projects:",
      projectsHeader: "projects",
      projects: "projects",
      project1Title: "Leather Goods Store",
      project1Description: "An online store for exclusive handmade leather goods. The site features a Spline animation for the homepage background. Motion design was implemented using Tailwind and Framer Motion.",
      project2Title: "Internet Radio",
      project2Description: "A multi-genre internet radio with 3D scenes, each assigned to its own music genre. Currently, only the stream is available, broadcasting 24/7 on a virtual server at http://mascarata.space:8000/stream.",
      iCreate: "I create",
      technologies: "modern, adaptive, and high-performance web applications",
      with: "using",
      andOther: "and other advanced technologies",
      aboutMe: {
        title: "About Me:",
        paragraph1: "I am a junior frontend developer with experience in project management and nondestructive testing. My professional interests include creating user-friendly and aesthetic web applications.",
        paragraph2: "I am passionate about generative design and ceramic 3D printing. I enjoy interacting with people and participating in exciting projects.",
        paragraph3: "Recently, I helped friends organize an exhibition dedicated to virtual and augmented reality. The event included generative art installations and a film entirely created using AI technologies. It was timed to coincide with the opening of a library.",
        paragraph4: "I am inspired by new technologies, their accessibility and significance for society, as well as personal growth.",
        paragraph5: "I am always open to new challenges and opportunities. My goal is to become a professional in web development and create products that bring value and delight to users.",
        paragraph6: "Thanks to my organizational skills and experience in IT projects, I can not only work with code but also manage development processes. This helps me effectively collaborate with the team and achieve set goals."
      },
      education: {
        title: "Education:",
        paragraph1: "1st year. Ufa State Aviation Technical University (2014-2015), Faculty of Economics, specialization — Finance and Credit.",
        paragraph2: "2nd-4th years. Moscow University named after S.Y. Witte (2015-2018), Faculty of Management, specialization — Project Management.",
        paragraph3: "hexlet.io"
      },
      experience: {
        title: "Work Experience:",
        list: [
          {
            company: "Enpros LLC",
            position: "Nondestructive Testing Engineer (March 2024 — present)",
            description: "Conducting nondestructive testing during inspections and major repairs of gas turbine power plants."
          },
          {
            company: "Rosatom State Corporation",
            position: "Ultrasonic Testing Specialist (People's Republic of Bangladesh) (November 2022 — December 2023)",
            description: "Inspecting welded joints of metal structures, preparing reports on inspection results, and holding acceptance commissions for control objects with customers from AtomStroyExport and the Bangladesh Atomic Energy Commission."
          },
          {
            company: "Appen Butler Hill",
            position: "Evaluator (Rater) (May 2021 — March 2022)",
            description: "Evaluating the relevance of advertisements (landing pages, creatives) in relation to search queries, identifying unacceptable content, and checking English-language news articles for misinformation/conspiracy theories related to COVID-19. Pairwise semantic comparison of web pages."
          },
          {
            company: "Moscow Domodedovo Airport",
            position: "Product Architect (March 2020 — March 2021)",
            description: "Developing and updating products and services: describing the operation of information and telecommunication systems, resources involved in their functioning. Calculating tariffs for products and services. Preparing cases for corporate arbitration and attending corporate court sessions."
          },
          {
            company: "Taurus Technologies",
            position: "IT Project Manager (April 2019 — September 2019)",
            description: "Managing web development, prototyping, testing, content management, and analyzing the needs of potential clients."
          }
        ]
      },
      skills: [
        "CSS3", "HTML5", "Vite", "Tailwind CSS", "Scrum", "Team Foundation Server",
        "Axure RP", "React", "JS", "ReactJS", "Bootstrap", "Adaptive web design",
        "Modular testing", "Regular expressions", "Flex", "Grid",
        "Asynchronous programming", "jQuery", "OOP",
      ]
    }
  },
  ru: {
    translation: {
      greeting: "Привет! Меня зовут Максим, я",
      frontendDeveloper: "фронтенд-разработчик",
      withExperience: "с опытом в проектном менеджменте и дефектоскопии в строительстве АЭС",
      discoverMore: "Здесь вы можете узнать больше",
      about: "обо мне",
      andMy: "и моих",
      projectsPageTitle: "Проекты:",
      projectsHeader: "проекты",
      projects: "проектах",
      project1Title: "Магазин изделий из кожи",
      project1Description: "Вебмагазин эксклюзивных изделий из кожи ручной работы. На сайт интегрирована Spline-анимация для фона главной страницы. Моушн-дизайн реализован с помощью Tailwind и Framer Motion.",
      project2Title: "Интернет-радио",
      project2Description: "Мультижанровое интернет-радио с переключением 3D-сцен, за каждой из которых закреплен свой музыкальный жанр. Пока доступен только поток, который круглосуточно вещает на виртуальном сервере, доступном по адресу: http://mascarata.space:8000/stream.",
      iCreate: "Я создаю",
      technologies: "современные, адаптивные и высокопроизводительные веб-приложения",
      with: "с использованием",
      andOther: "и других передовых технологий",
      aboutMe: {
        title: "Обо мне:",
        paragraph1: "Я начинающий фронтенд-разработчик с опытом работы в проектном менеджменте и неразрушающем контроле. Мои профессиональные интересы включают создание удобных и эстетичных веб-приложений.",
        paragraph2: "Увлекаюсь генеративным дизайном и керамической 3D-печатью. Люблю общаться с людьми и принимать участие в интересных проектах.",
        paragraph3: "Недавно помогал друзьям в организации выставки, посвящённой виртуальной и дополненной реальности. Мероприятие включало инсталляции генеративного искусства и фильм, полностью созданный с помощью технологий ИИ. Оно было приурочено к открытию библиотеки.",
        paragraph4: "Вдохновляюсь новыми технологиями, их доступностью и значимостью для общества, а также личностным развитием.",
        paragraph5: "Я всегда открыт для новых вызовов и возможностей. Моя цель — стать профессионалом в веб-разработке и создавать продукты, которые будут приносить пользу и радовать пользователей.",
        paragraph6: "Благодаря организаторским навыкам и опыту в IT-проектах, я могу не только работать с кодом, но и управлять процессами разработки. Это помогает мне эффективно взаимодействовать с командой и достигать поставленных целей."
      },
      education: {
        title: "Образование:",
        paragraph1: "I курс. Уфимский государственный авиационно-технический университет (2014-2015), институт экономики, специализация — Финансы и кредит.",
        paragraph2: "II-IV курсы. Московский университет им. С.Ю. Витте (2015-2018), факультет управления, специализация — Управление проектами.",
        paragraph3: "hexlet.io"
      },
      experience: {
        title: "Опыт работы:",
        list: [
          {
            company: "ООО ЭНПРОС",
            position: "Инженер неразрушающего контроля (март 2024 — настоящее время)",
            description: "Проведение неразрушающего контроля в процессе инспекций и капитальных ремонтов газо-турбинных установок электростанций."
          },
          {
            company: "Госкорпорация Росатом",
            position: "Дефектоскопист ультразвукового контроля (Народная Республика Бангладеш) (ноябрь 2022 — декабрь 2023)",
            description: "Контроль сварных соединений металлоконструкций, составление заключений о результатах контроля, проведение комиссий по приемке готовых объектов контроля заказчиками из АтомСтройЭкспорт и Bangladesh Atomic Energy Commission."
          },
          {
            company: "Appen Butler Hill",
            position: "Оценщик (rater) (май 2021 — март 2022)",
            description: "Оценка релевантности рекламных объявлений (лендингов, креативов) по отношению к поисковым запросам, выявление неприемлемого контента, проверка англоязычных новостных статей на содержание дезинформации/конспирологии касающейся коронавируса. Сравнительный семантический анализ веб-страниц."
          },
          {
            company: "Московский аэропорт Домодедово",
            position: "Архитектор продуктов (март 2020 — март 2021)",
            description: "Разработка и актуализация продуктов и услуг: описание работы информационно-телекоммуникационных систем, ресурсов, задействованных в их функционировании. Расчет тарифов на продукты и услуги. Подготовка кейсов для корпоративного арбитража и участие в корпоративных судебных заседаниях."
          },
          {
            company: "Таурус Технолоджис",
            position: "Менеджер IT проектов (апрель 2019 — сентябрь 2019)",
            description: "Управление веб-разработкой, прототипированием, тестированием, управлением контентом, анализом потребностей потенциальных клиентов."
          }
        ]
      },
      skills: [
        "CSS3", "HTML5", "Vite", "Tailwind CSS", "Scrum", "Team Foundation Server",
        "Axure RP", "React", "JS", "ReactJS", "Bootstrap", "Адаптивная верстка",
        "Модульное тестирование", "Регулярные выражения", "Flex", "Grid",
        "Асинхронное программирование", "jQuery", "ООП",
      ]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React уже экранирует значения
  },
});

export default i18n;
