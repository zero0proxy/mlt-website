// src/main.jsx

import React, { Suspense } from 'react'; // 1. Импортируем Suspense
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// (ThemeProvider тут уже есть, если ты его оставил)
// import { ThemeProvider } from './contexts/ThemeContext.jsx'

// 2. ИМПОРТИРУЕМ наш "мозг" i18n
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      3. Оборачиваем App в <Suspense>.
      Это ОБЯЗАТЕЛЬНО. Так как i18n загружает JSON (переводы) асинхронно,
      React должен "подождать", пока они загрузятся.
    */}
    <Suspense fallback="...Loading">
      {/* <ThemeProvider> (если у тебя есть, он остается ВНУТРИ Suspense) */}
        <App />
      {/* </ThemeProvider> */}
    </Suspense>
  </React.StrictMode>,
);