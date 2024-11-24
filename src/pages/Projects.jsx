import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts'; // Импортируем Contacts
import bgVideo1 from '../assets/bg-video1.mp4';

const Projects = () => {
  const projects = [
    {
      title: 'Магазин изделий из кожи',
      description: 'This is the first project showcasing a unique concept.',
      technologies: 'React, Vite, TailwindCSS, Spline.design',
      github: 'https://github.com/rachmethe/massacre-mascarade',
      live: 'https://rachmethe.github.io/massacre-mascarade/',
      video: bgVideo1,
    },
    {
      title: 'Интернет-радио',
      description:
        'Мультижанровое интернет-радио с переключением 3D-сцен, за каждой из которой закреплен свой музыкальный жанр. Статус: в разработке',
      technologies: 'Icecast2, Liquidsoap, React, TailwindCSS, Spline.design',
      github: 'https://github.com/username/project-two',
      live: 'https://project-two.example.com',
      video: bgVideo1,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -30 }, // Начинают выше
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 + 0.5, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <>
      <Header />
      <div className="text-center pt-5 sm:pt-32">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">ПРОЕКТЫ</h1>
        <motion.div
          className="flex flex-col gap-8 px-6 md:px-12 pb-16"
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg h-[600px] sm:h-[320px]"
              custom={index}
              variants={cardVariants}
            >
              {/* Видео фон */}
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Контент карточки */}
              <motion.div
                className="relative z-10 flex flex-col justify-between h-full p-6 bg-gradient-to-b from-transparent to-black text-white"
                custom={index}
                variants={textVariants}
              >
                <div>
                  <motion.h2
                    className="text-2xl font-bold mb-4"
                    custom={index + 0.5}
                    variants={textVariants}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    className="mb-4"
                    custom={index + 1}
                    variants={textVariants}
                  >
                    {project.description}
                  </motion.p>
                  <motion.p
                    className="text-sm font-semibold text-gradient mb-4"
                    custom={index + 1.5}
                    variants={textVariants}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                      {project.technologies}
                    </span>
                  </motion.p>
                </div>
                {/* Кнопки */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                    custom={index + 2}
                    variants={buttonVariants}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                    custom={index + 2.5}
                    variants={buttonVariants}
                  >
                    LIVE
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Подключение компонента Contacts */}
        <Contacts />
      </div>
    </>
  );
};

export default Projects;
