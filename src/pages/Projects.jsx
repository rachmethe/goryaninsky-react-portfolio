import React from 'react';
import Header from '../components/layouts/Header';

// Импортируем видеофайлы
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
      description: 'Мультижанровое интернет-радио с уникальным музыкальным дизайном, весёлыми джинглами, необычайными шоу и переключением 3D-сцен, за каждой из которой закреплен свой музыкальный жанр. Статус: в разработке',
      technologies: 'Icecast2, Liquidsoap, React, TailwindCSS, Spline.design',
      github: 'https://github.com/username/project-two',
      live: 'https://project-two.example.com',
      video: bgVideo1,
    },
  ];

  return (
    <>
      <Header />
      <div className="text-center pt-5 sm:pt-32">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">ПРОЕКТЫ</h1>
        <div className="flex flex-col gap-8 px-6 md:px-12 pb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              style={{ height: '300px' }}
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
              <div className="relative z-10 flex flex-col justify-between h-full p-6 bg-gradient-to-b from-transparent to-black text-white">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  {/* Технологии с выделением ярким цветом */}
                  <p className="text-sm font-semibold text-gradient mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                      {project.technologies}
                    </span>
                  </p>
                </div>
                {/* Кнопки */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white border-2 border-white rounded-none hover:bg-white hover:text-black transition-all"
                  >
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
