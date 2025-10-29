// src/components/Navbar.jsx

import React from 'react';
// import Logo from '/assets/logo.png'; 

const Navbar = () => {
  const navLinks = [
    { title: 'О нас', href: '#about' },
    { title: 'Услуги', href: '#services' },
    { title: 'Приложение', href: '#app' },
    { title: 'Отзывы', href: '#reviews' },
    { title: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex items-center max-w-6xl mx-auto px-6 py-4
                      bg-white/10 backdrop-blur-md rounded-b-xl shadow-lg">
        
        {/* Левая часть (Логотип) */}
        {/* 1. Меняем 'flex-1' на 'w-1/4' */}
        <div className="w-1/4 flex justify-start">
          <a href="#home" className="text-2xl font-bold text-white">
            {/* <img src={Logo} alt="MLT Logo" className="h-10" /> */}
            MLT
          </a>
        </div>

        {/* Центральная часть (Ссылки) */}
        {/* 2. Меняем 'flex-1' на 'w-1/2' (даем 50% ширины) */}
        <div className="hidden md:flex w-1/2 justify-center items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // 3. Добавляем 'whitespace-nowrap', чтобы гарантировать, 
              //    что ссылки никогда не перенесутся
              className="text-gray-200 hover:text-white transition-colors duration-300 font-medium whitespace-nowrap"
            >
              {link.title}
            </a>
          ))}
        </div>
        
        {/* Правая часть (Бургер / Пустое место) */}
        {/* 4. Меняем 'flex-1' на 'w-1/4' */}
        <div className="w-1/4 flex justify-end">
          <div className="md:hidden">
            {/* Иконка бургера */}
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;