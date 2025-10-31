// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

// 1. Импортируем 'useTranslation'
import { useTranslation } from 'react-i18next';

const Hero = () => {
  // 2. Получаем функцию 't' из хука
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          
          {/* 3. Заменяем "захардкоженный" текст на ключи из JSON */}
          {t('hero.brand')}{' '} {/* 'hero.brand' = "CabiCo:" */}
          
          <span className="text-gray-700 dark:text-gray-300">
            {t('hero.slogan')} {/* 'hero.slogan' = "Комфорт превыше всего" */}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
          {t('hero.subtitle')} {/* 'hero.subtitle' = "Комфорт, Безопасность..." */}
        </p>
      </motion.div>

    </div>
  );
};

export default Hero;