import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const AppPromo = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* === ЛЕВАЯ КОЛОНКА === */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
        >
          {/* Заголовок (с i18n) */}
          <h2 className="text-4xl font-bold text-white mb-6">
            <Trans i18nKey="app_promo.title">
              Закажи <span className="text-blue-400">CabiCo</span> в одно касание
            </Trans>
          </h2>
          
          {/* субтитр (с i18n) */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {t('app_promo.subtitle')}
          </p>
          
          {/* === КНОПКИ === */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#"
              /* ИСПРАВЛЕНИЕ: 
                'bg-white/10' (темный) вместо 'bg-white' (белый)
                'text-white' (белый) вместо 'text-black' (черный)
              */
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 
                         text-white font-semibold py-3 px-6 rounded-lg 
                         transition-all shadow-lg backdrop-blur-sm"
            >
              <img 
                src="/assets/icons/app-store.png" 
                alt="App Store" 
                className="w-6 h-6 mr-2" 
              />
              <span>
                {t('app_promo.btn_apple')} <br/> 
                {t('app_promo.btn_apple_store')}
              </span>
            </a>
            <a 
              href="#"
              /* ИСПРАВЛЕНИЕ: 
                'bg-white/10' (темный) вместо 'bg-white' (белый)
                'text-white' (белый) вместо 'text-black' (черный)
              */
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 
                         text-white font-semibold py-3 px-6 rounded-lg 
                         transition-all shadow-lg backdrop-blur-sm"
            >
              <img 
                src="/assets/icons/google-play.png" 
                alt="Google Play" 
                className="w-6 h-6 mr-2" 
              />
              <span>
                {t('app_promo.btn_google')} <br/> 
                {t('app_promo.btn_google_store')}
              </span>
            </a>
          </div>
        </motion.div>

        {/* === ПРАВАЯ КОЛОНКА === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
          className="flex justify-center items-center gap-8"
        >
          {/* телефон со скриншотом */}
          <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl">
            <div className="h-[524px] w-[242px] bg-black rounded-[2rem] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img src="/assets/app-screen.png" 
                     className="w-full h-full object-cover" 
                     alt="CabiCo App Screenshot" />
              </div>
            </div>
          </div>

          {/* логотип */}
          <motion.img
            src="/assets/logo.png"
            alt="CabiCo App Logo"
            className="w-52 h-42 object-contain hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default AppPromo;
