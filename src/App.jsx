// src/App.jsx
import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AppPromo from './components/AppPromo';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    // 1. Убираем ВСЕ 'overflow'-классы с главного родителя
    <div className="relative">
      
      <ParticleBackground />

      {/* 2. Navbar ТЕПЕРЬ СИДИТ ЗДЕСЬ, как прямой потомок.
         Он 'sticky', поэтому прилипнет к <body> */}
      <Navbar />

      {/* 3. А 'overflow-x-hidden' мы применяем к ЭТОМУ <div>,
         который содержит ТОЛЬКО скроллящийся контент.
         Navbar он больше не ломает. */}
      <div className="relative z-10 overflow-x-hidden">
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="app"><AppPromo /></section>
          <section id="reviews"><Reviews /></section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;