import React from 'react';
import { motion } from 'framer-motion';

// 1. Импортируем 'useTranslation'
import { useTranslation } from 'react-i18next';

// Вариант для КОНТЕЙНЕРА
const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Вариант для каждой КАРТОЧКИ
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const About = () => {
  // 2. Получаем функцию 't'
  const { t } = useTranslation();

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* 3. Заменяем текст на ключ */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        {t('about.title')}
      </h2>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 items-start"
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* === КАРТОЧКА 1 === */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            {t('about.card1_title')}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {t('about.card1_p1')}
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            {t('about.card1_p2')}
          </p>
          <br />
           <p className="text-gray-300 leading-relaxed">
            {t('about.card1_p3')}
           </p>
        </motion.div>

        {/* === КАРТОЧКА 2 === */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            {t('about.card2_title')}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {t('about.card2_p1')}
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            {t('about.card2_p2')}
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            {t('about.card2_p3')}
          </p>
        </motion.div>

        {/* === КАРТОЧКА 3 === */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            {t('about.card3_title')}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {t('about.card3_p1')}
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            {t('about.card3_p2')}
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            {t('about.card3_p3')}
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
