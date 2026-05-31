import { useEffect, useRef, useState } from 'react';
import './Sistema.css';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const pilares = [
  {
    icon: '◎',
    title: 'Encuentro colectivo',
    desc: 'No solo un taller o evento: un espacio permanente donde el encuentro se convierte en práctica comunitaria sostenida.',
    color: 'var(--color-naranja)',
  },
  {
    icon: '◈',
    title: 'Producción de objetos',
    desc: 'El proceso colectivo materializa objetos y mobiliario con valor simbólico y económico. La comunidad es coautora de lo que produce.',
    color: 'var(--color-ocre)',
  },
  {
    icon: '◉',
    title: 'Gestión cultural integrada',
    desc: 'El modelo de gestión nace junto al proceso creativo. Financiación, replicabilidad y estructura desde el día uno.',
    color: 'var(--color-verde-claro)',
  },
];

const comparacion = [
  { criterio: 'Costo / precio', ep: 'Accesible, comunitario, autofinanciable', c1: 'Gratuito pero limitado', c2: 'Alto costo' },
  { criterio: 'Usuario', ep: 'Colectivos, artistas, comunidad', c1: 'Público general sin foco', c2: 'Espectadores' },
  { criterio: 'Accesibilidad', ep: 'En el barrio mismo', c1: 'Centralizado', c2: 'Puntual' },
  { criterio: 'Producción', ep: 'Creación + gestión + objeto', c1: 'Programación externa', c2: 'Solo resultado final' },
  { criterio: 'Experiencia', ep: 'El usuario es coautor', c1: 'Consumidor', c2: 'Espectador' },
  { criterio: 'Escalabilidad', ep: 'Diseñado para replicarse', c1: 'Depende del presupuesto', c2: 'Cada evento desde cero' },
];

export default function Sistema() {
  const [ref, inView] = useInView();

  return (
    <section id="sistema" className="sistema" ref={ref}>
      <div className="sistema__container">
        {/* Header */}
        <div className={`sistema__header ${inView ? 'visible' : ''}`}>
          <span className="section-tag">La Propuesta · Golden Circle</span>
          <h2 className="sistema__title">
            No un evento más.<br />
            <em>El sistema que faltaba.</em>
          </h2>
        </div>

        {/* Golden Circle visual */}
        <div className={`golden-circle ${inView ? 'visible' : ''}`}>
          <div className="golden-circle__rings">
            <div className="gc-ring gc-ring--what">
              <span className="gc-ring__label">QUÉ</span>
              <p className="gc-ring__text">Laboratorio cultural que acompaña colectivos barriales: encuentro, producción de objetos y estructura replicable.</p>
            </div>
            <div className="gc-ring gc-ring--how">
              <span className="gc-ring__label">CÓMO</span>
              <p className="gc-ring__text">Integrando desde el origen creación colectiva y gestión cultural, como laboratorio permanente.</p>
            </div>
            <div className="gc-ring gc-ring--why">
              <span className="gc-ring__label">POR QUÉ</span>
              <p className="gc-ring__text">Porque el mundo está dominado por el individualismo y las comunidades necesitan espacios vitales y sostenibles.</p>
            </div>
          </div>
        </div>

        {/* Tres pilares */}
        <div className="pilares">
          {pilares.map((p, i) => (
            <div
              key={p.title}
              className={`pilar ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className="pilar__icon" style={{ color: p.color }}>{p.icon}</div>
              <h3 className="pilar__title">{p.title}</h3>
              <p className="pilar__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Hipótesis central */}
        <div className={`hipotesis ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <span className="section-tag">Hipótesis Central</span>
          <p className="hipotesis__text">
            Creemos que si los colectivos comunitarios tienen acceso a un sistema que integre
            <strong> creación, producción y gestión desde el inicio</strong>, entonces los procesos
            artísticos dejarán de ser efímeros y se convertirán en estructuras sostenibles
            con valor simbólico y económico viable.
          </p>
          <div className="hipotesis__success">
            <span className="section-tag">Sabremos que funciona cuando:</span>
            <p>Un colectivo barrial complete un ciclo completo dentro del laboratorio, produzca un objeto tangible y el modelo sea replicado de forma autónoma.</p>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className={`comparacion ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'flex' }}>¿Por qué Entre y Parche?</span>
          <div className="tabla">
            <div className="tabla__head">
              <div>Criterio</div>
              <div className="tabla__col--ep">Entre y Parche</div>
              <div>Casas Culturales</div>
              <div>Festivales / Eventos</div>
            </div>
            {comparacion.map((row, i) => (
              <div key={row.criterio} className="tabla__row" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="tabla__criterio">{row.criterio}</div>
                <div className="tabla__col--ep tabla__value--ep">{row.ep}</div>
                <div className="tabla__value">{row.c1}</div>
                <div className="tabla__value">{row.c2}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
