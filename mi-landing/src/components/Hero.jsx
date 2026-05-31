import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!circleRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background texture */}
      <div className="hero__bg">
        <div className="hero__grain" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      {/* Floating decorative circle */}
      <div className="hero__circle-wrap" ref={circleRef}>
        <div className="hero__circle">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="rgba(232,105,42,0.25)" strokeWidth="1" />
            <circle cx="100" cy="100" r="70" stroke="rgba(232,105,42,0.15)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="50" fill="rgba(232,105,42,0.08)" />
          </svg>
        </div>
      </div>

      <div className="hero__content">
        {/* Tag */}
        <div className="hero__tag fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="section-tag">Laboratorio Cultural · Bogotá · 2025</span>
        </div>

        {/* Main headline */}
        <h1 className="hero__title fade-in" style={{ animationDelay: '0.25s' }}>
          Los procesos<br />
          <em>comunitarios</em><br />
          no deberían<br />
          <span className="hero__title-stroke">morir solos.</span>
        </h1>

        {/* Sub headline */}
        <p className="hero__sub fade-in" style={{ animationDelay: '0.45s' }}>
          <strong>Entre y Parche</strong> es el sistema que faltaba: un laboratorio cultural permanente
          que integra creación colectiva, producción de objetos y gestión desde el origen.
          No un evento. Un modelo vivo.
        </p>

        {/* CTA row */}
        <div className="hero__ctas fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#sistema" className="btn btn--primary">
            Descubre el sistema
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#accion" className="btn btn--ghost">
            Únete al parche
          </a>
        </div>

        {/* Stats row */}
        <div className="hero__stats fade-in" style={{ animationDelay: '0.75s' }}>
          <div className="hero__stat">
            <span className="hero__stat-num">92%</span>
            <span className="hero__stat-label">industria creativa del país concentrada en Bogotá</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">0</span>
            <span className="hero__stat-label">laboratorios culturales permanentes en barrios</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">∞</span>
            <span className="hero__stat-label">procesos comunitarios que mueren sin estructura</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll fade-in" style={{ animationDelay: '1s' }}>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
