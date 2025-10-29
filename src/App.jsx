// src/App.jsx
import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AppPromo from './components/AppPromo';
import Reviews from './components/Reviews';

// 1. Импортируем наш новый компонент
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-hidden">
      
      <ParticleBackground />

      <div className="relative z-10">
        
        <Navbar />

        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="app"><AppPromo /></section>
          <section id="reviews"><Reviews /></section>
        </main>
        
        {/* 2. Заменяем заглушку <footer> на наш компонент */}
        <Footer />

      </div>
    </div>
  );
}

export default App;