// src/components/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Анимации (без изменений)
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// === КОМПОНЕНТ SERVICES ===

const Services = () => {
  const { t } = useTranslation();

  // === ОБНОВЛЕННЫЙ МАССИВ ===
  // Мы используем <img> теги вместо SVG
  const servicesData = [
    {
      // (Убедись, что 'icon-app.png' - это твое имя файла)
      icon: (
        <img 
          src="/assets/icons/icon-app.png" 
          alt={t('services.card1_title')} 
          className="w-10 h-10 mb-4" // Задаем тот же размер, что был у SVG
        />
      ),
      titleKey: "services.card1_title",
      descKey: "services.card1_desc"
    },
    {
      // (Убедись, что 'icon-transfer.png' - это твое имя файла)
      icon: (
        <img 
          src="/assets/icons/icon-transfer.png" 
          alt={t('services.card2_title')} 
          className="w-10 h-10 mb-4" 
        />
      ),
      titleKey: "services.card2_title",
      descKey: "services.card2_desc"
    },
    {
      // (Убедись, что 'icon-driver.png' - это твое имя файла)
      icon: (
        <img 
          src="/assets/icons/icon-driver.png" 
          alt={t('services.card3_title')} 
          className="w-10 h-10 mb-4" 
        />
      ),
      titleKey: "services.card3_title",
      descKey: "services.card3_desc"
    },
    {
      // (Убедись, что 'icon-safety.png' - это твое имя файла)
      icon: (
        <img 
          src="/assets/icons/icon-safety.png" 
          alt={t('services.card4_title')} 
          className="w-10 h-10 mb-4" 
        />
      ),
      titleKey: "services.card4_title",
      descKey: "services.card4_desc"
    }
  ];

  return (
    <div id="services" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Заголовок секции */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        {t('services.title')}
      </h2>

      {/* Контейнер карточек */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            // (Твои стили карточки сохранены)
            className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 
                       flex flex-col items-center text-center"
          >
            {/* Иконка (теперь это <img>) */}
            {service.icon}
            
            {/* Заголовок */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {t(service.titleKey)}
            </h3>
            
            {/* Описание */}
            <p className="text-gray-300 leading-relaxed">
              {t(service.descKey)}
            </p>
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Services;