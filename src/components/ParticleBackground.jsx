import React, { useRef, useEffect, useCallback } from 'react';

// Particle
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
    this.y = Math.random() * canvas.height;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset(canvas = this.canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008;
      if (this.opacity <= 0) {
        this.reset();
      }
    }
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(${255 - (Math.random() * 255/2)}, 255, 255, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  // useRef для хранения массива частиц и ID анимации,
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);

  const calculateParticleCount = (canvas) => {
    return Math.floor((canvas.width * canvas.height) / 6000);
  };
  
  const initParticles = useCallback((canvas, ctx) => {
    const particleCount = calculateParticleCount(canvas);
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas));
    }
  }, []);
  
  const animate = useCallback((ctx) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesRef.current.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    animationFrameIdRef.current = requestAnimationFrame(() => animate(ctx));
  }, []);
  
const onResize = useCallback(() => {
  const canvas = canvasRef.current;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particleCount = calculateParticleCount(canvas);
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas));
    }
  }
}, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // размеры
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles(canvas, ctx);
    
    // цикл анимации
    animationFrameIdRef.current = requestAnimationFrame(() => animate(ctx));

    // изменение размера окна
    window.addEventListener('resize', onResize);

    // очистка
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', onResize);
    };
  }, [initParticles, animate, onResize]); // Добавляем зависимости

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
