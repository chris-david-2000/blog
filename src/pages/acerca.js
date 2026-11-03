import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="container">
        <p className="kicker">Acerca del proyecto</p>
        <h1>Bitácora Digital</h1>
        <p>
          Un blog estático de tres entradas creado como actividad de la
          asignatura Desarrollo de Aplicaciones en Red. El objetivo es aplicar
          los fundamentos de HTML, CSS y JavaScript mediante un generador de
          sitios moderno: Gatsby.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container info-grid">
        <div className="info-card">
          <h2>¿Qué contiene el blog?</h2>
          <ul>
            <li>Tres entradas con texto, imágenes y estructura semántica.</li>
            <li>Una página de inicio con el listado de publicaciones.</li>
            <li>Navegación entre la portada, las entradas y esta sección.</li>
            <li>Un diseño adaptable a computadores y dispositivos móviles.</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Stack técnico</h2>
          <ul>
            <li>Gatsby 5 como generador de sitios estáticos.</li>
            <li>React 18 para construir los componentes de la interfaz.</li>
            <li>GraphQL para consultar el contenido en tiempo de compilación.</li>
            <li>Markdown para redactar las entradas.</li>
            <li>CSS personalizado, sin dependencias de diseño externas.</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>Autor</h2>
          <p>
            Christian David Munar Benitez. Estudiante de Ingeniería de Software
            en la Fundación Internacional de la Rioja.
          </p>
        </div>

        <div className="info-card">
          <h2>Contexto académico</h2>
          <p>
            Docente: Juan Carlos Reyes Figueroa. Materia: Desarrollo de
            Aplicaciones en Red. Año: 2026.
          </p>
          <Link className="read-more" to="/#entradas">
            Explorar las entradas <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <>
    <html lang="es" />
    <title>Acerca del proyecto · Bitácora Digital</title>
    <meta
      name="description"
      content="Información sobre Bitácora Digital, un blog estático construido con Gatsby para la asignatura Desarrollo de Aplicaciones en Red."
    />
  </>
)
