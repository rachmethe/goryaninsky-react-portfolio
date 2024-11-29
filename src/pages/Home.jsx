import React from 'react';
import HeaderMain from '../components/layouts/HeaderMain';
import GradientBackground from '../components/layouts/GradientBackground';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contacts from '../components/layouts/Contacts';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(); // Хук для перевода

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HeaderMain />
      {/* Основная секция с текстом */}
      <section className="flex items-center justify-start px-8 max-sm:pt-14 sm:pt-24 md:pt-36 lg:pt-24 xl:pt-24 2xl:pt-30 md:px-16 lg:px-32 pt-[120px]">
        <motion.div
          className="max-w-[75%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl sm:mt-20 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1.2, ease: 'easeOut', staggerChildren: 0.2 }}
        >
          {/* Заголовок */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl sm:pt-8 md:pt-16 lg:pt-24 xl:pt-30 2xl:pt-40 font-bold text-slate-800 leading-tight sm:leading-snug"
            variants={textVariants}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            {t('greeting')}{' '}
            <span className="text-blue-600">{t('frontendDeveloper')}</span>{' '}
            {t('withExperience')}.
          </motion.p>

          {/* Описание */}
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600"
            variants={textVariants}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {t('discoverMore')}{' '}
            <Link to="/about" className="underline text-blue-600">
              {t('about')}
            </Link>{' '}
            {t('andMy')}{' '}
            <Link to="/projects" className="underline text-blue-600">
              {t('projects')}
            </Link>
            . {t('iCreate')}{' '}
            {t('technologies')}{' '}
            {t('with')}{' '}
            <span className="font-semibold text-blue-600">React</span>,{' '}
            <span className="font-semibold text-blue-600">Tailwind CSS</span>{' '}
            {t('andOther')}.
          </motion.p>
        </motion.div>
      </section>

      <Contacts />
      <GradientBackground />
    </>
  );
};

export default Home;
