import { useEffect, useRef, useState } from 'react';
import './Evidencia.css';

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

const datos = [
  {
    cifra: '92%',
    fuente: 'Invest in Colombia',
    desc: 'de la industria creativa del país está concentrada en Bogotá, pero sin raíces barriales.',
    accent: 'var(--color-naranja)',
  },
  {
    cifra: '↑',
    fuente: 'Encuesta Bienal de Culturas 2025',
    desc: 'El aislamiento doméstico en Bogotá va en aumento según la Secretaría de Cultura (mayo 2026).',
    accent: 'var(--color-ocre)',
  },
  {
    cifra: '0',
    fuente: 'Diagnóstico propio',
    desc: 'Laboratorios culturales permanentes en barrios que integren creación + gestión + producción.',
    accent: 'var(--color-verde-claro)',
  },
];

const feedbackItems = [
  {
    icono: '✓',
    tipo: 'Oportunidad',
    texto: 'Entre y Parche llena un vacío real: muchas personas nunca han tenido acceso a un espacio que integre creación y gestión de forma permanente, no por falta de interés sino porque no existe.',
    color: 'var(--color-verde-claro)',
  },
  {
    icono: '✓',
    tipo: 'Alcance',
    texto: 'El proyecto tiene potencial de ampliarse más allá de los colectivos artísticos tradicionales, incorporando comunidades indígenas, LGBT+, neurodivergentes y personas en situación de calle.',
    color: 'var(--color-ocre)',
  },
  {
    icono: '!',
    tipo: 'Por resolver',
    texto: 'El modelo operativo debe ser más concreto y visible. Varios encuestados dijeron que participarían "dependiendo de cómo funciona".',
    color: 'var(--color-naranja)',
  },
  {
    icono: '!',
    tipo: 'Por resolver',
    texto: 'La sostenibilidad económica es la principal barrera percibida. La landing debe explicar cómo el proyecto se sostiene sin depender de convocatorias externas.',
    color: 'var(--color-tierra)',
  },
];

const riesgos = [
  {
    nivel: 'Gestionar urgente',
    color: '#c44',
    bg: 'rgba(204, 68, 68, 0.08)',
    desc: 'Sin financiación clara desde el inicio es probable que se convierta en proceso efímero — destruye la credibilidad del modelo y su promesa de sostenibilidad.',
  },
  {
    nivel: 'Plan de contingencia',
    color: 'var(--color-ocre)',
    bg: 'rgba(212, 149, 42, 0.08)',
    desc: 'Conseguir espacio físico sin costo inicial. Acceder a convocatorias distritales de la Secretaría de Cultura.',
  },
];

export default function Evidencia() {
  const [ref, inView] = useInView();

  return (
    <section id="evidencia" className="evidencia" ref={ref}>
      <div className="evidencia__container">
        {/* Header */}
        <div className={`evidencia__header ${inView ? 'visible' : ''}`}>
          <span className="section-tag">Validación · Evidencia del problema</span>
          <h2 className="evidencia__title">
            Los datos confirman<br />
            lo que las comunidades<br />
            <em>ya saben.</em>
          </h2>
        </div>

        {/* Datos duros */}
        <div className="datos-grid">
          {datos.map((d, i) => (
            <div
              key={d.fuente}
              className={`dato-card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="dato-card__num" style={{ color: d.accent }}>{d.cifra}</div>
              <p className="dato-card__desc">{d.desc}</p>
              <div className="dato-card__fuente">{d.fuente}</div>
            </div>
          ))}
        </div>

        {/* Evidencia observada */}
        <div className={`evidencia-observada ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="evidencia-observada__grid">
            <div className="evidencia-item">
              <div className="evidencia-item__icon">◎</div>
              <h4>Observación directa</h4>
              <p>Desde el pregrado fue evidente: los espacios de encuentro eran generados directamente por docentes, no por las propias comunidades. El encuentro con cada colectivo llevaba a la misma conclusión: faltan espacios donde aprender sea conjunto.</p>
            </div>
            <div className="evidencia-item">
              <div className="evidencia-item__icon">◈</div>
              <h4>Datos y estadísticas</h4>
              <p>La economía naranja de Bogotá vive de eventos masivos y no de procesos comunitarios (Distrito de Bogotá / Nuevo Siglo). Bogotá concentra el 92% de la industria creativa del país, pero sin raíces barriales (Invest in Colombia).</p>
            </div>
            <div className="evidencia-item">
              <div className="evidencia-item__icon">◉</div>
              <h4>Validación con usuarios</h4>
              <p>Colectivos y personas de distintos círculos sociales, intelectuales y culturales coinciden: no hay espacios o lugares donde crear. Cuando se desean realizar intervenciones, es muy difícil encontrar un medio directo para gestionarlas.</p>
            </div>
          </div>
        </div>

        {/* Feedback del prototipo */}
        <div className={`feedback ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.55s' }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'flex', color: 'var(--color-ocre)' }}>
            Feedback recibido · Prototipo wireframe
          </span>
          <span className="section-tag--sub" style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', color: 'rgba(245,239,224,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
            Perfiles: colectivos barriales · personas del contexto cercano · personas ajenas al mundo cultural
          </span>
          <div className="feedback__grid">
            {feedbackItems.map((f) => (
              <div key={f.texto} className="feedback__item">
                <div className="feedback__icono" style={{ color: f.color, borderColor: f.color }}>{f.icono}</div>
                <div>
                  <div className="feedback__tipo" style={{ color: f.color }}>{f.tipo}</div>
                  <p className="feedback__texto">{f.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Riesgos */}
        <div className={`riesgos ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'flex', color: 'var(--color-ocre)' }}>Mayor Riesgo Identificado</span>
          {riesgos.map((r) => (
            <div key={r.nivel} className="riesgo-card" style={{ background: r.bg, borderColor: r.color }}>
              <span className="riesgo-card__nivel" style={{ color: r.color }}>{r.nivel}</span>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
