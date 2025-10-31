// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Анимации (без изменений)
const navLinkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {/* ГЛАВНОЕ ИЗМЕНЕНИЕ: 
        Добавлен 'relative' к этому контейнеру для абсолютного центрирования меню.
      */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* === 1. Логотип (Слева) === */}
        <ScrollLink to="hero" smooth={true} duration={500} className="text-3xl font-bold text-white cursor-pointer z-10">
          MLT
        </ScrollLink>

        {/* === 2. Десктопное меню (Центр) ===
          Абсолютно спозиционировано для идеального центрирования
        */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ScrollLink to="about" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            {t('navbar.about')}
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            {t('navbar.services')}
          </ScrollLink>
          <ScrollLink to="app" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            {t('navbar.app_promo')}
          </ScrollLink>
          <ScrollLink to="reviews" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            {t('navbar.reviews')}
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
            {t('navbar.contact')}
          </ScrollLink>
        </div>

        {/* === 3. Флаги (Справа) ===
          Этот блок теперь крайний правый элемент для 'justify-between'
        */}
        <div className="hidden md:flex items-center z-10">
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage('ru')} className={`p-1 rounded-md transition-all ${i18n.language === 'ru' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-ru.png" alt="Russian Flag" className="w-6 h-6" />
            </button>
            <button onClick={() => changeLanguage('en')} className={`p-1 rounded-md transition-all ${i18n.language === 'en' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-us.png" alt="US Flag" className="w-6 h-6" />
            </button>
            <button onClick={() => changeLanguage('ka')} className={`p-1 rounded-md transition-all ${i18n.language === 'ka' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-ge.png" alt="Georgian Flag" className="w-6 h-6" />
            </button>
          </div>
        </div>


        {/* === 4. Мобильное меню (Кнопка + Флаги) === */}
        <div className="md:hidden flex items-center">
          {/* Кнопки с Флагами (Мобильные) */}
          <div className="flex space-x-2 mr-4">
            <button onClick={() => changeLanguage('ru')} className={`p-1 rounded-md transition-all ${i18n.language === 'ru' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-ru.png" alt="Russian Flag" className="w-6 h-6" />
            </button>
            <button onClick={() => changeLanguage('en')} className={`p-1 rounded-md transition-all ${i18n.language === 'en' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-us.png" alt="US Flag" className="w-6 h-6" />
            </button>
            <button onClick={() => changeLanguage('ka')} className={`p-1 rounded-md transition-all ${i18n.language === 'ka' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
              <img src="/assets/flags/flag-ge.png" alt="Georgian Flag" className="w-6 h-6" />
            </button>
          </div>

          {/* Кнопка бургер-меню */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none z-10">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* === 5. Мобильное меню (Выпадающее) === */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/90 backdrop-blur-md absolute top-0 right-0 w-64 h-screen shadow-lg p-6 pt-24"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col space-y-4">
            <ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg">
              {t('navbar.about')}
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg">
              {t('navbar.services')}
            </ScrollLink>
            <ScrollLink to="app" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg">
              {t('navbar.app_promo')}
            </ScrollLink>
            <ScrollLink to="reviews" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg">
              {t('navbar.reviews')}
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors cursor-pointer text-lg">
              {t('navbar.contact')}
            </ScrollLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;