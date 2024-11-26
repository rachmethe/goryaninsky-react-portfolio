import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiSun, FiRefreshCw } from 'react-icons/fi';
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts';
import Skills from '../components/Skills';
import gifAvatar from '../assets/gif-avatar.gif';

const About = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('2024-11-24');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('ru-RU'));

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current_weather=true&timezone=Europe/Moscow'
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
      }
    };

    fetchWeather();
  }, []);

  // Анимация появления секций
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <>
      <Header />
      <div className="mx-auto px-4 text-center pt-5 sm:pt-32">
        <motion.section
          className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl text-left font-bold mb-4">Обо мне:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <p className="flex items-start">
                <img
                  src={gifAvatar}
                  alt="Gif Avatar"
                  className="rounded-lg max-sm:w-10 sm:w-14 md:w-20 h-auto mr-4"
                />
                Я начинающий фронтенд-разработчик с опытом работы в проектном менеджменте.
                Мои профессиональные интересы включают создание удобных и эстетичных веб-приложений.
              </p>
              <p>
                Увлекаюсь генеративным дизайном и керамической 3D-печатью. Люблю общаться с людьми
                и принимать участие в интересных проектах.
              </p>
              <p>
                Недавно помогал друзьям в организации выставки, посвящённой виртуальной и
                дополненной реальности. Мероприятие включало инсталляции генеративного искусства
                и фильм, полностью созданный с помощью технологий ИИ. Оно было приурочено к
                открытию библиотеки.
              </p>
              <p>
                Вдохновляюсь новыми технологиями, их доступностью и значимостью для общества,
                а также личностным развитием.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <p>
                Я всегда открыт для новых вызовов и возможностей. Моя цель — стать профессионалом
                в веб-разработке и создавать продукты, которые будут приносить пользу и радовать
                пользователей.
              </p>
              <p>
                Благодаря организаторским навыкам и опыту в IT-проектах, я могу не только работать
                с кодом, но и управлять процессами разработки. Это помогает мне эффективно
                взаимодействовать с командой и достигать поставленных целей.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl text-left font-bold mb-4">Образование:</h2>
          <p className="mb-6">
            I курс. Уфимский государственный авиационно-технический университет (2014-2015),
            институт экономики, специализация — Финансы и кредит.
          </p>
          <p className="mb-6">
            II-IV курсы. Московский университет им. С.Ю. Витте (2015-2018), факультет управления,
            специализация — Управление проектами.
          </p>
          <p className="mb-6">hexlet.io</p>
        </motion.section>

        <motion.section
          className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl text-left font-bold mb-4">Опыт работы:</h2>
          <ul className="list-disc ml-10 text-left mx-auto w-fit">
            <motion.li
              className="mb-4"
              variants={sectionVariants}
            >
              <strong>ООО ЭНПРОС;</strong> Инженер неразрушающего контроля (март 2024 — настоящее время)
              <br />
              Проведение неразрушающего контроля в процессе инспекций и капитальных ремонтов газо-турбинных установок электростанций.
            </motion.li>
            <motion.li
              className="mb-4"
              variants={sectionVariants}
            >
              <strong>Госкорпорация Росатом;</strong> Дефектоскопист ультразвукового контроля (Народная Республика Бангладеш) (ноябрь 2022 — декабрь 2023)
              <br />
              Контроль сварных соединений металлоконструкций, составление заключений о результатах контроля, проведение комиссий по приемке готовых объектов контроля заказчиками из АтомСтройЭкспорт и Bangladesh Atomic Energy Commission.
            </motion.li>
            <motion.li
              className="mb-4"
              variants={sectionVariants}
            >
              <strong>Appen Butler Hill;</strong> Оценщик (rater) (май 2021 — март 2022)
              <br />
              Оценка релевантности рекламных объявлений (лендингов, креативов) по отношению к поисковым запросам, выявление неприемлемого контента, проверка англоязычных новостных статей на содержание дезинформации/конспирологии касающейся коронавируса. Сопоставление смыслового содержания веб-страниц попарно.
            </motion.li>
            <motion.li
              className="mb-4"
              variants={sectionVariants}
            >
              <strong>Московский аэропорт Домодедово;</strong> Архитектор продуктов (март 2020 — март 2021)
              <br />
              Разработка и актуализация продуктов и услуг: описание работы информационных и телекоммуникационных систем, ресурсов, задействованных при функционировании этих систем. Расчёт тарифов на продукты и услуги. Подготовка дел корпоративного арбитража с последующим выходом на заседания корпоративного суда.
            </motion.li>
            <motion.li
              className="mb-4"
              variants={sectionVariants}
            >
              <strong>Taurus Technologies;</strong> Руководитель IT-проектов (апрель 2019 — сентябрь 2019)
              <br />
              Управление веб-разработкой, прототипирование, тестирование, контент-менеджмент, анализ потребностей потенциальных заказчиков.
            </motion.li>
          </ul>
        </motion.section>

        <Skills />

        <motion.section
          className="flex justify-end mt-16 mr-20 sm:mr-28"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <section className="flex flex-col md:flex-row items-center gap-4 text-slate-700 border-2 border-slate-700 p-4 w-fit">
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiCalendar className="text-slate-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Текущая дата:</h3>
                <p className="text-sm">{currentDate}</p>
              </div>
            </div>
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiSun className="text-yellow-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Погода в Москве:</h3>
                {weather ? (
                  <p className="text-sm">
                    {weather.temperature}°C, {weather.weathercode_description || 'ясно'}
                  </p>
                ) : (
                  <p className="text-sm">Загрузка...</p>
                )}
              </div>
            </div>
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiRefreshCw className="text-blue-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Дата обновления:</h3>
                <p className="text-sm">{lastUpdated}</p>
              </div>
            </div>
          </section>
        </motion.section>

        <Contacts />
      </div>
    </>
  );
};

export default About;
