import { useEffect, useRef, useState } from 'react';
import './Problema.css';

const porques = [
  {
    num: '01',
    pregunta: '¿Por qué los procesos artísticos comunitarios son efímeros?',
    respuesta:
      'Porque no están diseñados como sistemas gestionables, sino como eventos o intervenciones puntuales sin estructura operativa ni continuidad planificada.',
  },
  {
    num: '02',
    pregunta: '¿Por qué no tienen estructura operativa ni continuidad?',
    respuesta:
      'Porque el arte colectivo y la gestión se piensan como mundos separados: los artistas crean, pero nadie diseña cómo se organiza, financia y replica lo que se produce.',
  },
  {
    num: '03',
    pregunta: '¿Por qué el arte y la gestión se piensan separados?',
    respuesta:
      'Porque los modelos de gestión cultural existentes llegan después del proceso creativo, como algo externo, y no nacen integrados desde el diseño del sistema.',
  },
  {
    num: '04',
    pregunta: '¿Por qué los modelos de gestión no nacen desde el inicio?',
    respuesta:
      'Porque no existe una metodología que articule simultáneamente creación colectiva, producción de objetos y gestión, lo que impide que la comunidad sea coautora.',
  },
  {
    num: '05',
    pregunta: '¿Por qué no existe esa metodología articulada?',
    respuesta:
      'Porque los espacios culturales de Bogotá están diseñados para circular, no para permanecer y crear. La ciudad concentra su economía naranja en eventos masivos, sin laboratorios permanentes.',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Problema() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <section id="problema" className="problema" ref={sectionRef}>
      <div className="problema__container">
        {/* Header */}
        <div className={`problema__header ${sectionInView ? 'visible' : ''}`}>
          <span className="section-tag">Método de los 5 Porqués</span>
          <h2 className="problema__title">
            El problema no es la falta<br />
            de arte. Es la falta de{' '}
            <em>sistema.</em>
          </h2>
          <p className="problema__intro">
            Los procesos artísticos comunitarios en Bogotá son efímeros, aislados y no logran
            sostenerse ni replicarse en el tiempo. ¿Por qué? La respuesta tiene cinco capas.
          </p>
        </div>

        {/* Chain */}
        <div className="porques">
          {porques.map((p, i) => (
            <div
              key={p.num}
              className={`porque ${sectionInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="porque__num">{p.num}</div>
              <div className="porque__body">
                <p className="porque__pregunta">{p.pregunta}</p>
                <p className="porque__respuesta">{p.respuesta}</p>
              </div>
              {i < porques.length - 1 && (
                <div className="porque__arrow">
                  <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
                    <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-naranja)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M4 16l6 8 6-8" stroke="var(--color-naranja)" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Causa raíz */}
        <div className={`causa-raiz ${sectionInView ? 'visible' : ''}`} style={{ transitionDelay: '0.75s' }}>
          <div className="causa-raiz__label">
            <span className="section-tag">Causa Raíz Identificada</span>
          </div>
          <blockquote className="causa-raiz__quote">
            "La ausencia de un sistema que integre desde su origen la creación colectiva,
            la producción de objetos y un modelo de gestión cultural hace que los procesos
            artísticos comunitarios no puedan sostenerse ni replicarse."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
