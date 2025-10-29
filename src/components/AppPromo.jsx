// src/components/AppPromo.jsx

import React from 'react';
import { motion } from 'framer-motion';

const AppPromo = () => {
  return (
    <div className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* === ЛЕВАЯ КОЛОНКА (Текст и Кнопки) - (без изменений) === */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Закажи <span className="text-blue-400">CabiCo</span> в одно касание
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Наше приложение — это прямой доступ к комфортным поездкам по всей Грузии. 
            Быстро, удобно и, что самое главное, — приватно. 
            Минималистичный дизайн, удобство во всех проявлениях. Устанавливай, заказывай, путешествуй!
          </p>
          
          {/* Кнопки скачивания (без изменений) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#">
  {/* Мы сохраняем старые классы 'w-6 h-6 mr-2' для <img>, чтобы сохранить размер */}
  <img 
    src="/assets/icons/app-store.png" 
    alt="Download on the App Store" 
    className="w-6 h-6 mr-2" 
  />
  <span>Загрузить в <br/> App Store</span>
</a>
<a href="#">
  <img 
    src="/assets/icons/google-play.png" 
    alt="Get it on Google Play" 
    className="w-6 h-6 mr-2" 
  />
  <span>Доступно в <br/> Google Play</span>
</a>
          </div>
        </motion.div>

        {/* === ПРАВАЯ КОЛОНКА (Макет + Логотип) - (ИЗМЕНЕНА) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
          // 1. Мы превращаем эту колонку во flex-контейнер
          className="flex justify-center items-center gap-8"
        >
          {/* Рамка телефона */}
          {/* 2. Мы УБРАЛИ 'mx-auto' отсюда, чтобы он слушался flex-контейнера */}
          <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl">
            
            <div className="h-[524px] w-[242px] bg-black rounded-[2rem] overflow-hidden">
              <div className="w-full h-full bg-blue-900/50 flex items-center justify-center text-white">
                <img src="/assets/app-screen.png" 
                        className="w-full h-full object-cover" 
                        alt="CabiCo App Screenshot" />
              </div>
            </div>
          </div>

          {/* 3. НАШ НОВЫЙ ЛОГОТИП */}
          {/*
            ПОЖАЛУЙСТА, ОБРАТИ ВНИМАНИЕ:
            Я использую путь '/assets/logo.png'. 
            Убедись, что ты положил свой логотип (CabiCo) в папку 'public/assets/'
            и назвал его 'logo.png' (или измени путь здесь).
          */}
          <motion.img
            src="/assets/logo.png" // Используй свой логотип CabiCo
            alt="CabiCo App Logo"
            className="w-52 h-42 object-contain hidden lg:block" // Скроем на планшетах, покажем на десктопах
            // Добавим анимацию появления
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} // Появится чуть позже телефона
          />
          
        </motion.div>
        
      </div>
    </div>
  );
};

export default AppPromo;