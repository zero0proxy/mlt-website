import React from 'react';

// 1. Импортируем 'useTranslation'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  // 2. Получаем 't'
  const { t } = useTranslation();
  
  // 3. Получаем текущий год для 'copyright'
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
        
        {/* === Колонка 1: О компании === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">MLT</h3>
          <p>
            {t('footer.col1_p1')}
          </p>
          <br/>
          <p>{t('footer.col1_p2')}</p>
        </div>

        {/* === Колонка 2: Контакты === */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">{t('footer.col2_title')}</h3>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">{t('footer.col2_label_address')}</span> 
              {t('footer.col2_data_address')}
            </li>
            <li>
              <span className="font-semibold">{t('footer.col2_label_phone')}</span> 
              {/* ссылка и номер телефона */}
              <a href="tel:+995599557474" className="hover:text-white transition-colors">
                (+995 599 55 74 74)
              </a>
            </li>
            <li>
              <span className="font-semibold">{t('footer.col2_label_email')}</span> 
              {/* ссылка и email */}
              <a href="mailto:myluckytaxi1@gmail.com" className="hover:text-white transition-colors">
                (myluckytaxi1@gmail.com)
              </a>
            </li>
          </ul>
        </div>

        {/* === Колонка 3: Соцсети === */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">{t('footer.col3_title')}</h3>
          <div className="flex space-x-6">
            
            {/* ссылки */}
            <a href="https://www.facebook.com/mltgeorgia/">
              <img 
                src="/assets/icons/facebook.png" 
                alt={t('footer.alt_facebook')} 
                className="w-6 h-6" 
              />
            </a>
            <a href="https://www.instagram.com/myluckytaxi/">
              <img 
                src="/assets/icons/instagram.png" 
                alt={t('footer.alt_instagram')} 
                className="w-6 h-6" 
              />
            </a>        
            <a href="https://api.whatsapp.com/send?phone=995599557474">
              <img 
                src="/assets/icons/whatsapp.png" 
                alt={t('footer.alt_whatsapp')} 
                className="w-6 h-6" 
              />
            </a>
            <a href="https://t.me/mlt_cabico">
              <img 
                src="/assets/icons/telegram.png" 
                alt={t('footer.alt_telegram')} 
                className="w-6 h-6" 
              />
            </a>

          </div>
        </div>

      </div>

      {/* === Нижняя строка (Copyright) === */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
        <p>{t('footer.copyright', { year: currentYear })}</p>
      </div>
    </footer>
  );
};

export default Footer;
