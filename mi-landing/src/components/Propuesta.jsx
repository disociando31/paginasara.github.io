import { useEffect, useRef, useState } from 'react';
import './Propuesta.css';

function useInView(t = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, inView];
}

const actores = [
  {
    anillo: '1',
    label: 'Usuario directo',
    actores: 'Colectivos, artistas y gestores comunitarios',
    color: 'var(--color-naranja)',
  },
  {
    anillo: '2',
    label: 'Apoya / Financia',
    actores: 'Secretaría de Cultura de Bogotá, convocatorias y financiadores',
    color: 'var(--color-ocre)',
  },
  {
    anillo: '3',
    label: 'Impactado / Interesado',
    actores: 'Casas de cultura, universidades, proyectos de diseño',
    color: 'var(--color-verde-claro)',
  },
];

const recursos = [
  { item: 'Tiempo', tengo: true, necesito: 'Tiempo de comunidades para el piloto', saberComo: null },
  { item: 'Dinero', tengo: false, necesito: 'Financiación para el primer ciclo', saberComo: 'Acceder a convocatorias distritales' },
  { item: 'Personas', tengo: false, necesito: '1 gestor cultural + 1 artista ancla en el barrio', saberComo: 'Cómo estructurar el equipo mínimo viable' },
  { item: 'Materiales', tengo: true, necesito: 'Espacio físico + materiales para producción', saberComo: 'Cómo conseguir el espacio sin costo inicial' },
  { item: 'Conocimiento', tengo: true, necesito: 'Gestión cultural, modelo de financiación sostenible', saberComo: 'Cómo estructurar el modelo económico' },
  { item: 'Tecnología', tengo: true, necesito: 'Plataformas para documentar y replicar el modelo', saberComo: 'Cómo hacerlo accesible y simple' },
  { item: 'Contactos', tengo: null, necesito: 'Aliados en Secretaría de Cultura', saberComo: 'Cómo llegar a tomadores de decisión' },
];

export default function Propuesta() {
  const [ref, inView] = useInView();

  return (
    <section id="propuesta" className="propuesta" ref={ref}>
      <div className="propuesta__container">
        {/* Header */}
        <div className={`propuesta__header ${inView ? 'visible' : ''}`}>
          <span className="section-tag">Viabilidad · Stakeholders · PMI</span>
          <h2 className="propuesta__title">
            Quién está<br />
            <em>dentro del sistema.</em>
          </h2>
          <p className="propuesta__intro">
            Entre y Parche no es un proyecto solitario. Tiene una red de actores, recursos identificados
            y un plan de acción claro. Aquí está la arquitectura del ecosistema.
          </p>
        </div>

        {/* Stakeholders */}
        <div className="stakeholders-section">
          <div className={`stakeholders ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="stakeholders__center">
              <div className="stakeholders__label-center">Entre y Parche</div>
            </div>
            {actores.map((a) => (
              <div key={a.anillo} className="stakeholder-ring">
                <div className="stakeholder-ring__num" style={{ background: a.color }}>{a.anillo}</div>
                <div className="stakeholder-ring__content">
                  <div className="stakeholder-ring__label">{a.label}</div>
                  <div className="stakeholder-ring__actores">{a.actores}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos */}
        <div className={`recursos ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'flex' }}>¿Qué necesitas para la primera versión?</span>
          <div className="recursos__tabla">
            <div className="recursos__head">
              <div>Recurso</div>
              <div>Estado</div>
              <div>Necesito</div>
              <div>No sé cómo</div>
            </div>
            {recursos.map((r) => (
              <div key={r.item} className="recursos__row">
                <div className="recursos__item">{r.item}</div>
                <div className="recursos__estado">
                  {r.tengo === true && <span className="estado--si">✓ Tengo</span>}
                  {r.tengo === false && <span className="estado--no">✗ Falta</span>}
                  {r.tengo === null && <span className="estado--parcial">~ Parcial</span>}
                </div>
                <div className="recursos__necesito">{r.necesito}</div>
                <div className="recursos__como">{r.saberComo || '—'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
