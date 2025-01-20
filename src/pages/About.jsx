import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiSun, FiRefreshCw } from 'react-icons/fi';
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts';
import Skills from '../components/Skills';
import gifAvatar from '../assets/gif-avatar.gif';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('2025-01-20');

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
          <h2 className="text-2xl text-left font-bold mb-4">{t('aboutMe.title')}</h2>
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
                {t('aboutMe.paragraph1')}
              </p>
              <p>{t('aboutMe.paragraph2')}</p>
              <p>{t('aboutMe.paragraph3')}</p>
              <p>{t('aboutMe.paragraph4')}</p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <p>{t('aboutMe.paragraph5')}</p>
              <p>{t('aboutMe.paragraph6')}</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl text-left font-bold mb-4">{t('education.title')}</h2>
          <p className="mb-6">{t('education.paragraph1')}</p>
          <p className="mb-6">{t('education.paragraph2')}</p>
          <p className="mb-6">{t('education.paragraph3')}</p>
        </motion.section>

        <motion.section
          className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl text-left font-bold mb-4">{t('experience.title')}</h2>
          <ul className="list-disc ml-10 text-left mx-auto w-fit">
            {t('experience.list', { returnObjects: true }).map((item, index) => (
              <motion.li className="mb-4" key={index} variants={sectionVariants}>
                <strong>{item.company};</strong> {item.position}
                <br />
                {item.description}
              </motion.li>
            ))}
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
                <h3 className="text-sm font-bold">{t('currentDate')}:</h3>
                <p className="text-sm">{currentDate}</p>
              </div>
            </div>
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiSun className="text-yellow-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">{t('weatherInMoscow')}:</h3>
                {weather ? (
                  <p className="text-sm">
                    {weather.temperature}°C, {weather.weathercode_description || t('clear')}
                  </p>
                ) : (
                  <p className="text-sm">{t('loading')}</p>
                )}
              </div>
            </div>
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiRefreshCw className="text-blue-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">{t('lastUpdated')}:</h3>
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
