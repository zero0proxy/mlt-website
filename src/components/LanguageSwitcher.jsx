import React from 'react';
import { useTranslation } from 'react-i18next'; // главный хук

const LanguageSwitcher = () => {
  //  'i18n', 't' - функция перевода
  const { i18n } = useTranslation();

  //  Функция, которая меняет язык
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //  Список языков
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
