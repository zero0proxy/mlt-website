// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Вариант для КОНТЕЙНЕРА (сетки), чтобы "разнести" анимацию детей
const gridContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // 'staggerChildren: 0.2' означает, что
      // каждая следующая карточка начнет анимацию на 0.2с позже предыдущей.
      staggerChildren: 0.2
    }
  }
};

// Вариант для каждой КАРТОЧКИ (выезд снизу)
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const About = () => {
  return (
    // 'py-24' - отступы. 
    // 'max-w-7xl' - мы сделали секцию чуть шире, чтобы влезли 3 карточки
    <div className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Заголовок секции */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Кто мы?
      </h2>

      {/* КОНТЕЙНЕР КАРТОЧЕК
        - 'md:grid-cols-3' - вот наше изменение на 3 колонки.
        - 'gap-8' - немного уменьшили отступ между карточками.
        - Мы применяем 'gridContainerVariant' к этому 'motion.div'
      */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8 items-start"
        variants={gridContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* === КАРТОЧКА 1: Видение (без изменений) === */}
        {/* КАРТОЧКА
          - Мы применяем 'cardVariant' к каждой карточке.
          - 'h-full' - гарантирует, что все карточки будут одной высоты.
        */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Видение из Грузии
          </h3>
          <p className="text-gray-300 leading-relaxed">
            MLT является основателем первой в Грузии платформы-агрегатора такси и трансферов, а также приложения CabiCo для удобного заказа поездки.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            Мы — источник вызова комфортного такси и трансферов, созданный для вас с грузинским видением и сердцем.
          </p>
          <br />
           <p className="text-gray-300 leading-relaxed">
            Наш автопарк состоит из комфортных и современных автомобилей, где любой сможет найти авто на свой вкус!
          </p>
        </motion.div>

        {/* === КАРТОЧКА 2: Приватность (текст отредактирован) === */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Приватность - наше имя
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Одно из наших главных преимуществ: мы не собираем абсолютно никаких данных (в том числе платёжных) о пользователях и не продаем их третьим лицам.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            Мы не используем cookies и не продаём их поисковым агрегаторам. У нас нет скрытых подсервисов, платных подписок и скрытых комиссий.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            Мы гордимся нашими пользователями и предоставляем им самый лучший опыт взаимодействия с нашими сервисами.
          </p>
        </motion.div>

        {/* === КАРТОЧКА 3: Партнерство (НОВАЯ) === */}
        <motion.div
          variants={cardVariant}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10 h-full"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Выгодное партнерство
          </h3>
          <p className="text-gray-300 leading-relaxed">
            MLT является официальным партнером Yandex и Bolt, предоставляя водителям лучшие условия для работы.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            Мы предлагаем самые низкие комиссионные в Грузии, стабильные выплаты и свободный график.
          </p>
          <br />
          <p className="text-gray-300 leading-relaxed">
            Мы не взимаем с наших водителей каких - либо скрытых платежей и взносов. Наш слоган - Прозрачность во всём.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;