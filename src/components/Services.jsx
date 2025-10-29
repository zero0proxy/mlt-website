// src/components/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Анимации (те же, что и в 'About')
const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // Немного изменим: появление через scale
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Данные для наших карточек (чтобы не загромождать JSX)
const servicesData = [
  {
    // Иконка "Мобильное приложение"
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
      </svg>
    ),
    title: "Приложение CabiCo",
    description: "Удобное и интуитивно понятное приложение для быстрого заказа такси и трансферов."
  },
  {
    // Иконка "Аэропорт/Трансфер"
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c.507 0 1.012-.023 1.513-.068M12 21a8.964 8.964 0 0 1-5.271-1.786M12 21a8.964 8.964 0 0 0 5.271-1.786m-1.023-7.228.023.003m-.023-.003a4.5 4.5 0 0 1 4.5-4.5h.003m-4.5 4.5a4.5 4.5 0 0 0-4.5-4.5H7.5a4.5 4.5 0 0 0-4.5 4.5v.003m4.5-4.5A4.5 4.5 0 0 1 12 6h.003m-3.75 3.75a4.5 4.5 0 0 1-4.5-4.5v-.003m4.5 4.5a4.5 4.5 0 0 0 4.5-4.5h.003m-4.5 4.5v.003m0 0h.003m-3.75 0h.003m-3.75 0a4.5 4.5 0 0 1 4.5-4.5h.003m-4.5 4.5v-.003m0 0a4.5 4.5 0 0 0 4.5-4.5h.003" />
      </svg>
    ),
    title: "Все виды трансферов",
    description: "Комфортные трансферы из аэропорта, междугородние поездки, а также трансферы Грузия - Армения."
  },
  {
    // Иконка "Водители"
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.582M18 18.72A9.094 9.094 0 0 1 18 18.72m0 0A9.094 9.094 0 0 1 18 18.72M18 18.72V15m0 3.72a9.094 9.094 0 0 1-3.741-.479 3 3 0 0 1-3.741-5.582M15 12.75a9.094 9.094 0 0 1-3.741.479 3 3 0 0 1-3.741-5.582M15 12.75A9.094 9.094 0 0 0 15 12.75m0 0A9.094 9.094 0 0 0 15 12.75M15 12.75v-3m0 3a9.094 9.094 0 0 1 3.741.479 3 3 0 0 1 3.741-5.582M12 9.75a9.094 9.094 0 0 1-3.741.479 3 3 0 0 1-3.741-5.582M12 9.75A9.094 9.094 0 0 0 12 9.75m0 0A9.094 9.094 0 0 0 12 9.75M12 9.75V6m0 3.75a9.094 9.094 0 0 1 3.741.479 3 3 0 0 1 3.741-5.582" />
      </svg>
    ),
    title: "Профессиональные водители",
    description: "Комфортабельное такси с опытными, мультиязычными и вежливыми водителями."
  },
  {
    // Иконка "Безопасность"
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Безопасность и Комфорт",
    description: "Быстрый, комфортный, а главное — безопасный сервис для вашей каждодневной рутины."
  }
];


const Services = () => {
  return (
    // 'py-24' - отступы
    <div className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Заголовок секции */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Что мы предлагаем
      </h2>

      {/* Контейнер карточек
        На мобильных: 1 колонка
        На планшетах ('md:'): 2 колонки
        На больших экранах ('lg:'): 4 колонки
      */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Проходим по массиву 'servicesData' и рендерим карточки */}
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 
                       flex flex-col items-center text-center" // Центрируем контент
          >
            {/* Иконка */}
            {service.icon}
            
            {/* Заголовок */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            
            {/* Описание */}
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Services;