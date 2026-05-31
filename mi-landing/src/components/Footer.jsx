import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-ep">E&P</span>
              <div>
                <div className="footer__logo-name">Entre y Parche</div>
                <div className="footer__logo-sub">Laboratorio Cultural</div>
              </div>
            </div>
            <p className="footer__tagline">
              El sistema que faltaba para que los procesos comunitarios en Bogotá
              puedan sostenerse, crecer y replicarse.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <div className="footer__col-title">Secciones</div>
              <a href="#problema">El Problema</a>
              <a href="#sistema">El Sistema</a>
              <a href="#usuario">El Usuario</a>
              <a href="#propuesta">La Propuesta</a>
              <a href="#evidencia">Evidencia</a>
            </div>
            <div className="footer__col">
              <div className="footer__col-title">Proyecto</div>
              <a href="#accion">Únete al piloto</a>
              <span>Design Factory</span>
              <span>P. Univ. Javeriana</span>
              <span>2025 – 2026</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__credits">
            <span>Sara Yulianna Vargas Cubillos</span>
            <span className="footer__dot">·</span>
            <span>Design Factory · PUJ</span>
            <span className="footer__dot">·</span>
            <span>Bogotá, 2025</span>
          </div>
          <div className="footer__quote">
            "No solo un evento. Un modelo vivo."
          </div>
        </div>
      </div>
    </footer>
  );
}
