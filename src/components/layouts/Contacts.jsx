import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaInstagram, FaRegIdBadge, FaLinkedin } from 'react-icons/fa';

const contactVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
};

const Contacts = () => {
  return (
    <motion.section
      className="w-full px-8 md:px-16 lg:px-32 mt-12 flex items-center justify-end"
      initial="hidden"
      animate="visible"
      variants={contactVariants}
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
    </motion.section>
  );
};

export default Contacts;
