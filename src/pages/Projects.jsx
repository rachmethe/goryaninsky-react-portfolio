import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLoader } from 'react-spinners';
import { FaGithub } from 'react-icons/fa'; // Импортируем иконку GitHub
import { FiExternalLink } from 'react-icons/fi'; // Импортируем иконку внешней ссылки
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts';
import bgVideo1 from '../assets/bg-video1.mp4'; // Первое видео
import bgVideo2 from '../assets/bg-video2.mp4'; // Второе видео

const Projects = () => {
  const projects = [
    {
      title: 'Магазин изделий из кожи',
      description: 'This is the first project showcasing a unique concept.',
      technologies: 'React, Vite, TailwindCSS, Spline.design',
      github: 'https://github.com/rachmethe/massacre-mascarade',
      live: 'https://rachmethe.github.io/massacre-mascarade/',
    },
    {
      title: 'Интернет-радио',
      description:
        'Мультижанровое интернет-радио с переключением 3D-сцен, за каждой из которых закреплен свой музыкальный жанр. Статус: в разработке',
      technologies: 'Icecast2, Liquidsoap, React, TailwindCSS, Spline.design',
      github: 'https://github.com/username/project-two',
      live: 'https://project-two.example.com',
    },
  ];

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Обработчик загрузки видео
  const handleVideoLoad = () => {
    console.log('Видео успешно загружено');
    setIsVideoLoaded(true);
  };

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
      <div className="text-center pt-5 sm:pt-32">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">ПРОЕКТЫ</h1>

        {/* Прелоадер */}
        {!isVideoLoaded && (
          <div className="flex justify-center items-center h-[400px]">
            <DotLoader size={80} color="#64748b" /> {/* Цвет slate-600 */}
          </div>
        )}

        {/* Карточки проектов */}
        {isVideoLoaded && (
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
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Контент карточки */}
                <motion.div
                  className="relative z-10 flex flex-col justify-between h-full p-6 bg-gradient-to-b from-transparent to-black text-white"
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
        )}

        {/* Видео для загрузки, теперь отслеживаем загрузку bgVideo2 */}
        <video
          src={bgVideo2} // Отслеживаем загрузку второго видео
          onCanPlayThrough={handleVideoLoad} // Отслеживаем загрузку
          style={{ display: 'none' }} // Скрываем это видео
        />

        <Contacts />
      </div>
    </>
  );
};

export default Projects;
