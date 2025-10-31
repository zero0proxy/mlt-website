// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // 1. Используем 'http-backend' для загрузки JSON
  .use(initReactI18next) // 2. Передаем i18n в react-i18next
  .init({
    // 3. Языки, которые мы поддерживаем
    supportedLngs: ['ru', 'en', 'ka'],
    
    // 4. Язык по умолчанию
    fallbackLng: 'ru',
    
    // 5. Где искать JSON-файлы ({{lng}} = ru/en/ka)
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    // (Можно добавить 'localStorage' для запоминания языка, но сделаем это позже)
    
    // 6. Стандартная настройка для React
    interpolation: {
      escapeValue: false, // не нужно для React
    },
  });

export default i18n;