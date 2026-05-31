import { useEffect, useRef, useState } from 'react';
import './Usuario.css';

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

const empatia = [
  {
    cuadrante: 'Piensa y desea',
    icono: '💭',
    items: [
      '"Tenemos ideas pero nunca sabemos cómo hacerlas realidad juntos"',
      'Quiere que su barrio sea algo más que donde duerme',
      'Sueña con un proceso colectivo que trascienda',
    ],
  },
  {
    cuadrante: 'Ve en su entorno',
    icono: '👁',
    items: [
      'Colectivos que empiezan con energía y desaparecen',
      'Eventos culturales grandes y costosos que no lo incluyen',
      'Otros haciendo cosas increíbles en redes sin impacto territorial',
    ],
  },
  {
    cuadrante: 'Dice y hace',
    icono: '🗣',
    items: [
      'Organiza reuniones informales que no llegan a ningún lado',
      'Busca alianzas pero no sabe cómo formalizarlas',
      'Asiste a talleres sueltos sin hilo conductor',
    ],
  },
  {
    cuadrante: 'Siente y oye',
    icono: '❤',
    items: [
      'Frustración porque los proyectos colectivos caen',
      'Siente que el arte que hace no llega a nadie más allá de su círculo',
      'Ansiedad por no saber cómo sostener económicamente lo que crea',
    ],
  },
];

const journey = [
  { fase: 'Reunión espontánea', icon: '✦', estado: 'neutro', desc: 'Energía inicial, ideas, entusiasmo colectivo.' },
  { fase: 'Falta de gestión', icon: '▽', estado: 'negativo', desc: 'Sin estructura, nadie sabe quién hace qué.' },
  { fase: 'Reuniones inconsistentes', icon: '▽▽', estado: 'negativo', desc: 'El compromiso se erosiona. Asistencia cae.' },
  { fase: 'El proceso desaparece', icon: '✕', estado: 'crisis', desc: 'El colectivo muere. Sin registro, sin huella.' },
];

const transformacion = [
  { antes: 'Los procesos nacen y mueren sin dejar huella', despues: 'Los procesos se convierten en sistemas replicables con vida propia' },
  { antes: 'El arte y la gestión se piensan separados', despues: 'Creación + gestión ocurren al mismo tiempo desde el inicio' },
  { antes: 'Los colectivos se agotan sin recursos ni estructura', despues: 'Los colectivos tienen un modelo sostenible y producen objetos con valor' },
  { antes: 'El encuentro depende de que alguien tome la iniciativa', despues: 'El laboratorio existe permanentemente como contenedor del encuentro' },
];

export default function Usuario() {
  const [ref, inView] = useInView();

  return (
    <section id="usuario" className="usuario" ref={ref}>
      <div className="usuario__container">
        {/* Header */}
        <div className={`usuario__header ${inView ? 'visible' : ''}`}>
          <span className="section-tag">El Usuario · Mapa de Empatía</span>
          <h2 className="usuario__title">
            Conoce a <em>Julián</em>,
            <br />el corazón del laboratorio.
          </h2>
          <div className="usuario__perfil">
            <div className="usuario__avatar">J</div>
            <div>
              <p className="usuario__nombre">Julián</p>
              <p className="usuario__rol">Estudiante de pregrado · 23 años · Bogotá</p>
              <p className="usuario__desc">
                Vive en un barrio con historia cultural pero sin espacios donde esa historia se construya juntos.
                Tiene ideas, energía y ganas de crear comunidad. Le falta el sistema.
              </p>
            </div>
          </div>
        </div>

        {/* Mapa de empatía */}
        <div className="empatia">
          {empatia.map((e, i) => (
            <div
              key={e.cuadrante}
              className={`empatia__card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="empatia__icon">{e.icono}</div>
              <h3 className="empatia__cuadrante">{e.cuadrante}</h3>
              <ul>
                {e.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Journey sin EP */}
        <div className={`journey ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <span className="section-tag" style={{ marginBottom: '24px', display: 'flex' }}>
            El ciclo sin Entre y Parche
          </span>
          <div className="journey__steps">
            {journey.map((j, i) => (
              <div key={j.fase} className={`journey__step journey__step--${j.estado}`}>
                <div className="journey__icon">{j.icon}</div>
                <div className="journey__fase">{j.fase}</div>
                <div className="journey__desc">{j.desc}</div>
                {i < journey.length - 1 && <div className="journey__connector" />}
              </div>
            ))}
          </div>
        </div>

        {/* Transformación */}
        <div className={`transformacion ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.65s' }}>
          <h3 className="transformacion__titulo">
            ¿Qué cambia en la vida de Julián<br />si Entre y Parche funciona?
          </h3>
          <div className="transformacion__tabla">
            <div className="transformacion__col transformacion__col--antes">
              <div className="transformacion__col-label">Antes</div>
              {transformacion.map((t) => (
                <div key={t.antes} className="transformacion__item">{t.antes}</div>
              ))}
            </div>
            <div className="transformacion__flecha">
              {transformacion.map((_, i) => (
                <div key={i} className="transformacion__arrow-row">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M0 8h28M22 2l8 6-8 6" stroke="var(--color-naranja)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
            <div className="transformacion__col transformacion__col--despues">
              <div className="transformacion__col-label">Con Entre y Parche</div>
              {transformacion.map((t) => (
                <div key={t.despues} className="transformacion__item transformacion__item--despues">{t.despues}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
