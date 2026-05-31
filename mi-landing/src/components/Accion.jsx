import { useEffect, useRef, useState } from 'react';
import './Accion.css';

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

export default function Accion() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ nombre: '', colectivo: '', perfil: '', email: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre && form.email) {
      setEnviado(true);
    }
  };

  return (
    <section id="accion" className="accion" ref={ref}>
      <div className="accion__bg">
        <div className="accion__glow" />
      </div>

      <div className="accion__container">
        {/* Left: manifesto */}
        <div className={`accion__left ${inView ? 'visible' : ''}`}>
          <span className="section-tag" style={{ color: 'rgba(245,239,224,0.5)' }}>
            El siguiente paso
          </span>
          <h2 className="accion__title">
            ¿Tu barrio<br />
            también necesita<br />
            <em>este sistema?</em>
          </h2>
          <p className="accion__sub">
            Entre y Parche está buscando a las primeras comunidades, artistas y gestores
            que quieran ser parte del piloto. No necesitas tener todo resuelto —
            necesitas querer crear con otros.
          </p>

          <div className="accion__manifesto">
            <div className="manifesto-item">
              <span className="manifesto-item__icon">→</span>
              <span>Si perteneces a un colectivo que quiere estructura</span>
            </div>
            <div className="manifesto-item">
              <span className="manifesto-item__icon">→</span>
              <span>Si eres artista que quiere que su trabajo trascienda</span>
            </div>
            <div className="manifesto-item">
              <span className="manifesto-item__icon">→</span>
              <span>Si eres gestor cultural buscando modelos replicables</span>
            </div>
            <div className="manifesto-item">
              <span className="manifesto-item__icon">→</span>
              <span>Si crees que la cultura comunitaria puede sostenerse sola</span>
            </div>
          </div>

          {/* Design Factory context */}
          <div className="accion__context">
            <div className="accion__context-badge">
              <span>Design Factory</span>
              <span>·</span>
              <span>Pontificia Universidad Javeriana</span>
              <span>·</span>
              <span>2025–2026</span>
            </div>
            <p>
              Proyecto de diseño estratégico desarrollado por Sara Yulianna Vargas Cubillos
              como laboratorio cultural permanente para Bogotá.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className={`accion__right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {!enviado ? (
            <form className="accion__form" onSubmit={handleSubmit}>
              <div className="form__header">
                <h3>Únete al parche</h3>
                <p>Cuéntanos quién eres. Te contactamos cuando lancemos el piloto.</p>
              </div>

              <div className="form__field">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__field">
                <label htmlFor="colectivo">Colectivo u organización (opcional)</label>
                <input
                  id="colectivo"
                  name="colectivo"
                  type="text"
                  placeholder="Nombre de tu colectivo"
                  value={form.colectivo}
                  onChange={handleChange}
                />
              </div>

              <div className="form__field">
                <label htmlFor="perfil">¿Con qué perfil te identificas?</label>
                <select
                  id="perfil"
                  name="perfil"
                  value={form.perfil}
                  onChange={handleChange}
                >
                  <option value="">Selecciona uno</option>
                  <option value="artista">Artista / Creador/a</option>
                  <option value="gestor">Gestor/a cultural</option>
                  <option value="colectivo">Colectivo barrial</option>
                  <option value="comunidad">Miembro de comunidad</option>
                  <option value="academia">Academia / Universidad</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form__field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form__submit">
                Quiero ser parte del piloto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="accion__gracias">
              <div className="accion__gracias-icon">✦</div>
              <h3>¡Bienvenido/a al parche!</h3>
              <p>
                Recibimos tu información. Cuando lancemos el piloto en Bogotá,
                serás de los primeros en saberlo. Gracias por creer en que
                la cultura comunitaria puede sostenerse sola.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
