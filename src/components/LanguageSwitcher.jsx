// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Импортируем главный хук

const LanguageSwitcher = () => {
  // 2. 'i18n' - это наш "мозг", 't' - функция перевода (пока не используем)
  const { i18n } = useTranslation();

  // 3. Функция, которая меняет язык
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // 4. Список наших языков
  const languages = [
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
    { code: 'ka', name: 'KA' },
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          /* Стилизуем кнопку: 
            - Если 'lng.code' (ru/en) СОВПАДАЕТ с 'i18n.language' (текущий язык),
              делаем ее яркой (белой/черной).
            - Иначе, делаем ее полупрозрачной.
          */
          className={`
            font-medium text-sm transition-colors
            ${i18n.language === lng.code
              ? 'text-gray-900 dark:text-white' // Активный язык
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' // Неактивный
            }
          `}
        >
          {lng.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;