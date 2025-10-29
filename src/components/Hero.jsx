// src/components/Hero.jsx

import React from 'react';
// 1. Импортируем 'motion' из framer-motion
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // 'min-h-screen' заставляет секцию занять всю высоту экрана
    // 'flex ...' центрирует контент
    <div className="relative min-h-screen flex items-center justify-center text-center px-6">
      
      {/* Контейнер для анимации */}
      <motion.div
        // 2. Начальное состояние (перед анимацией)
        initial={{ opacity: 0, y: 50 }} 
        // 3. Конечное состояние (как должно выглядеть)
        animate={{ opacity: 1, y: 0 }}
        // 4. Настройки анимации
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          CabiCo: <span className="text-gray-300">{/* Наш лозунг */}
            Комфорт превыше всего
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          {/* Наш заголовок */}
          Комфорт, Безопасность, Удобство — ваш новый стандарт поездок с MLT.
        </p>
      </motion.div>

    </div>
  );
};

export default Hero;