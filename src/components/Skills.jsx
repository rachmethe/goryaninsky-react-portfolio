import React from 'react';
import { motion } from 'framer-motion';

// Список навыков
const skills = [
  'CSS3', 'HTML5', 'Vite', 'Tailwind CSS', 'Scrum', 'Team Foundation Server',
  'Axure RP', 'React', 'JS', 'ReactJS', 'Bootstrap', 'Адаптивная верстка',
  'Модульное тестирование', 'Регулярные выражения', 'Flex', 'Grid',
  'Асинхронное программирование', 'jQuery', 'ООП',
];

// Массив для случайного фона
const colorPalette = [
  'from-blue-400 to-blue-500', 'from-blue-500 to-blue-600', 'from-green-400 to-green-500',
  'from-green-500 to-green-600', 'from-purple-400 to-purple-500', 'from-purple-500 to-purple-600'
];

// Анимация для секции и навыков
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const Skills = () => {
  // Функция для случайного выбора цвета из палитры
  const getRandomColor = () => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  };

  return (
    <motion.section
      className="text-center text-slate-700 px-5 py-10 md:px-20 lg:px-30 xl:px-52"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-2xl text-left font-bold mb-4">Навыки:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="border-2 border-slate-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-center py-4 px-6 font-semibold text-lg cursor-pointer transform transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={skillVariants}
            style={{
              borderWidth: '2px',
              borderImage: `linear-gradient(to right, #3b82f6, #10b981) 1`
            }}
            whileHover={{
              background: getRandomColor(), // Рандомный фон при наведении
              scale: 1.05, // Увеличение при ховере
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
