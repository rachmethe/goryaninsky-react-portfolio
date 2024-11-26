import React from 'react';
import Header from '../components/layouts/Header';
import GradientBackground from '../components/layouts/GradientBackground';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaInstagram, FaLinkedin, FaRegIdBadge } from 'react-icons/fa';
import Contacts from '../components/layouts/Contacts';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      
      <Header />
      {/* Основная секция с текстом */}
      <section className="flex items-center justify-start px-8 max-sm:pt-14 sm:pt-24 md:pt-36 lg:pt-24 xl:pt-24 2xl:pt-30 md:px-16 lg:px-32 pt-[120px]">
        <motion.div
          className="max-w-[75%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl sm:mt-20 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1.2, ease: 'easeOut', staggerChildren: 0.2 }}
        >
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl sm:pt-8 md:pt-16 lg:pt-24 xl:pt-30 2xl:pt-40 font-bold text-slate-800 leading-tight sm:leading-snug"
            variants={textVariants}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            Привет! Меня зовут Максим, я{' '}
            <span className="text-blue-600">фронтенд-разработчик</span> с опытом в проектном менеджменте и дефектоскопии в строительстве АЭС.
          </motion.p>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600"
            variants={textVariants}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Здесь вы можете узнать больше{' '}
            <Link to="/about" className="underline text-blue-600">
              обо мне
            </Link>{' '}
            и моих{' '}
            <Link to="/projects" className="underline text-blue-600">
              проектах
            </Link>
            . Я создаю современные, адаптивные и высокопроизводительные
            веб-приложения с использованием{' '}
            <span className="font-semibold text-blue-600">React</span>,{' '}
            <span className="font-semibold text-blue-600">Tailwind CSS</span> и
            других передовых технологий.
          </motion.p>
        </motion.div>
      </section>

      {/* Секция с контактами */}
      {/* <motion.section
        className="w-full px-8 md:px-16 lg:px-32 mt-12 flex items-center justify-end"
        initial="hidden"
        animate="visible"
        variants={contactVariants}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="flex flex-wrap items-center justify-start sm:justify-start gap-6 pt-8"
          variants={contactVariants}
        >
          <motion.a
            href="https://github.com/rachmethe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 w-full sm:w-auto gap-2"
            variants={contactVariants}
            transition={{ delay: 0.7 }}
          >
            <FaGithub /> github
          </motion.a>
          <motion.a
            href="https://t.me/rachmethe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 w-full sm:w-auto gap-2"
            variants={contactVariants}
            transition={{ delay: 0.8 }}
          >
            <FaTelegram /> telegram
          </motion.a>
          <motion.a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 w-full sm:w-auto gap-2"
            variants={contactVariants}
            transition={{ delay: 0.9 }}
          >
            <FaInstagram /> instagram
          </motion.a>
          <motion.a
            href="https://hh.ru/resume/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 w-full sm:w-auto gap-2"
            variants={contactVariants}
            transition={{ delay: 1.0 }}
          >
            <FaRegIdBadge /> headhunter
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-gray-600 hover:text-blue-600 w-full sm:w-auto gap-2"
            variants={contactVariants}
            transition={{ delay: 1.1 }}
          >
            <FaLinkedin /> linkedin
          </motion.a>
        </motion.div>
      </motion.section> */}
      <Contacts />
      <GradientBackground />
    </>
  );
};

export default Home;
