import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts';
import bgVideo1 from '../assets/bg-video1.mp4';
import bgVideo2 from '../assets/bg-video2.mp4';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Description'),
      technologies: 'React, Vite, TailwindCSS, Spline.design, FramerMotion',
      github: 'https://github.com/rachmethe/massacre-mascarade',
      live: 'https://rachmethe.github.io/massacre-mascarade/',
    },
    {
      title: t('project2Title'),
      description:t('project2Description'),
      technologies: 'Icecast2, Liquidsoap, React, TailwindCSS, Spline.design',
      github: 'https://github.com/rachmethe/radio-mascarata',
      live: 'https://project-two.example.com',
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

  return (
    <>
      <Header />
      <div className="pt-5 sm:pt-32">
        {/* Заголовок слева с меньшим шрифтом */}
        <h1 className="text-2xl font-bold mb-8 text-slate-800 text-left pt-6 pl-20">
          { t('projectsPageTitle') }
        </h1>

        {/* Карточки проектов */}
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
                src={index === 0 ? bgVideo1 : bgVideo2} // Второе видео для второй карточки
                autoPlay
                loop
                muted
                className="absolute bg-slate-700 top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Контент карточки */}
              <motion.div
                className="relative z-10 flex flex-col justify-between h-full p-6  text-white"
                custom={index}
                variants={cardVariants}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <p className="text-sm font-semibold text-gradient mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                      {project.technologies}
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                  >
                    <FaGithub size={20} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                  >
                    <FiExternalLink size={20} /> LIVE
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Contacts />
      </div>
    </>
  );
};

export default Projects;
