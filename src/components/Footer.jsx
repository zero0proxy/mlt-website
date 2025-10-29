// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    // 'bg-gray-900/50' - тот же фон, что и у AppPromo, для консистентности
    <footer id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
        
        {/* Колонка 1: О компании */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">MLT</h3>
          <p>
            Основатель первой в Грузии платформы-агрегатора такси и трансферов CabiCo.
          </p>
          <br/>
          <p>Комфорт, Безопасность, Удобство.</p>
        </div>

        {/* Колонка 2: Контакты */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Контакты</h3>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">Адрес: </span> 
              (Улица Борцов за свободу Грузии 20б)
            </li>
            <li>
              <span className="font-semibold">Телефон: </span> 
              <a href="tel:+995..." className="hover:text-white transition-colors">
                (+995 599 55 74 74)
              </a>
            </li>
            <li>
              <span className="font-semibold">Email: </span> 
              <a href="mailto:info@mlt.ge" className="hover:text-white transition-colors">
                (myluckytaxi1@gmail.com)
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 3: Соцсети */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Мы в соцсетях</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/mltgeorgia/">
  <img 
    src="/assets/icons/facebook.png" 
    alt="Facebook" 
    className="w-6 h-6" 
  />
</a>
<a href="https://www.instagram.com/myluckytaxi/">
  <img 
    src="/assets/icons/instagram.png" 
    alt="Instagram" 
    className="w-6 h-6" 
  />
</a>        
<a href="https://api.whatsapp.com/send?phone=995599557474">
  <img 
    src="/assets/icons/whatsapp.png" 
    alt="Whatsapp" 
    className="w-6 h-6" 
  />
</a>
<a href="https://t.me/mlt_cabico">
  <img 
    src="/assets/icons/telegram.png" 
    alt="Telegram" 
    className="w-6 h-6" 
  />
</a>

          </div>
        </div>

      </div>

      {/* Нижняя строка (Copyright) */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} MLT. Все права защищены. Разработано с ❤️ в Грузии.</p>
      </div>
    </footer>
  );
};

export default Footer;