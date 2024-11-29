import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import avatar from '../../assets/avatar.jpg';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="relative sm:fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-0 sm:bg-opacity-10 text-slate-700 py-6 px-8 md:px-32 drop-shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between">
        {/* Аватар */}
        <motion.div
          className="mb-4 sm:mb-0"
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
          />
        </motion.div>

        {/* Навигационные ссылки */}
        <motion.ul
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 font-semibold text-lg md:text-xl"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <Link
              to="/"
              className="p-3 hover:text-blue-600 transition-all cursor-pointer rounded-md font-black flex items-center"
            >
              <FiHome className="text-2xl" />
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 0.8 }}>
            <Link
              to="/projects"
              className="p-3 hover:text-blue-600 transition-all cursor-pointer rounded-md font-black"
            >
              {t('projectsHeader')}
            </Link>
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 1 }}>
            <Link
              to="/about"
              className="p-3 hover:text-blue-600 transition-all cursor-pointer rounded-md font-black"
            >
              {t('about')}
            </Link>
          </motion.li>
          {/* Переключатель языка */}
          <LanguageSwitcher />
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
