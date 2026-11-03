import React from "react"
import { Link } from "gatsby"

const EDITION_DATE = "Lunes, 2 de noviembre de 2026"

const Layout = ({ children }) => (
  <div className="site">
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>

    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{EDITION_DATE}</span>
          <span className="edition">Edición digital · Año I · N.º 3</span>
        </div>
      </div>

      <div className="container masthead">
        <Link to="/" className="brand" aria-label="Bitácora Digital, ir al inicio">
          <span className="brand-title">
            Bitácora <em>Digital</em>
          </span>
          <span className="brand-sub">Cultura del código y diseño web</span>
        </Link>
      </div>

      <div className="masthead-rule" />
    </header>

    <div className="nav-bar">
      <nav className="container site-nav" aria-label="Navegación principal">
        <Link to="/" activeClassName="is-active">
          Portada
        </Link>
        <Link to="/#entradas">Entradas</Link>
        <Link to="/acerca/" activeClassName="is-active">
          Acerca
        </Link>
      </nav>
    </div>

    <main id="contenido">{children}</main>

    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">Bitácora Digital</p>
          <p className="footer-meta">
            Blog estático construido con Gatsby y React.
          </p>
        </div>
        <div className="footer-meta footer-right">
          <p>Christian David Munar Benitez</p>
          <p>Desarrollo de Aplicaciones en Red · 2026</p>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout
