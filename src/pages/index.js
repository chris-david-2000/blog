import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const formatDate = value => {
  const date = new Date(`${value}T00:00:00`)
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const [lead, ...rest] = posts

  return (
    <Layout>
      <section className="frontpage">
        <div className="container frontpage-grid">
          <article>
            <span className="kicker">Entrada destacada</span>
            <h1 className="lead-title">
              <Link to={`/blog/${lead.frontmatter.slug}/`}>
                {lead.frontmatter.title}
              </Link>
            </h1>
            <p className="lead-deck">{lead.frontmatter.description}</p>

            <figure className="lead-figure">
              <img
                src={lead.frontmatter.image}
                alt=""
                width="1200"
                height="675"
              />
              <figcaption>
                Ilustración de portada de la entrada destacada. Bitácora
                Digital, edición 2026.
              </figcaption>
            </figure>

            <div className="lead-footer">
              <p className="meta">
                <span className="byline">Christian David Munar Benitez</span>
                <span className="dot">·</span>
                <time dateTime={lead.frontmatter.date}>
                  {formatDate(lead.frontmatter.date)}
                </time>
                <span className="dot">·</span>
                <span>{lead.frontmatter.tags[0]}</span>
              </p>
              <Link
                className="read-on"
                to={`/blog/${lead.frontmatter.slug}/`}
              >
                Leer la entrada completa →
              </Link>
            </div>
          </article>

          <aside className="rail">
            <h2 className="rail-title">También en esta edición</h2>
            <ul className="rail-list">
              {rest.map(post => (
                <li key={post.frontmatter.slug}>
                  <h3>
                    <Link to={`/blog/${post.frontmatter.slug}/`}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p>{post.frontmatter.description}</p>
                  <p className="meta">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    <span className="dot">·</span>
                    <span>{post.frontmatter.tags[0]}</span>
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" id="entradas">
        <div className="container">
          <div className="section-head">
            <h2>Entradas del blog</h2>
            <p>
              Tres recorridos por las prácticas que hacen sostenible un proyecto
              web: escribir código claro, diseñar interfaces y publicar con un
              generador de sitios.
            </p>
          </div>

          <div className="post-grid">
            {posts.map(post => {
              const { title, description, date, image, tags, slug } =
                post.frontmatter
              return (
                <article className="post-card" key={slug}>
                  <Link
                    to={`/blog/${slug}/`}
                    className="post-card-media"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img src={image} alt="" loading="lazy" width="1200" height="750" />
                  </Link>
                  <span className="tag">{tags[0]}</span>
                  <h3>
                    <Link to={`/blog/${slug}/`}>{title}</Link>
                  </h3>
                  <p>{description}</p>
                  <div className="post-meta">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <Link to={`/blog/${slug}/`} className="read-more">
                      Leer entrada →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-strip">
            <div>
              <span className="kicker">Nota de la redacción</span>
              <h2>Un proyecto académico, construido paso a paso</h2>
              <p>
                Bitácora Digital nace como entregable de la asignatura
                Desarrollo de Aplicaciones en Red. El sitio se genera de forma
                estática a partir de archivos Markdown, lo que mantiene el
                contenido separado del diseño y facilita su publicación.
              </p>
              <p>
                La edición reúne tres notas sobre código legible, hojas de
                estilo y generadores de sitios, escritas y maquetadas como parte
                del mismo ejercicio.
              </p>
              <ul className="chip-list">
                <li>Gatsby 5</li>
                <li>React 18</li>
                <li>GraphQL</li>
                <li>Markdown</li>
                <li>CSS moderno</li>
              </ul>
            </div>
            <div className="info-card">
              <h2>Ficha de la edición</h2>
              <p>
                <strong>Autor:</strong> Christian David Munar Benitez,
                estudiante de Ingeniería de Software en la Fundación
                Internacional de la Rioja.
              </p>
              <p>
                <strong>Docente:</strong> Juan Carlos Reyes Figueroa.
              </p>
              <Link className="read-more" to="/acerca/">
                Más sobre el proyecto →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <html lang="es" />
    <title>Bitácora Digital · Creación de un blog con Gatsby</title>
    <meta
      name="description"
      content="Blog estático de tres entradas sobre desarrollo web, construido con Gatsby y React."
    />
    <meta property="og:title" content="Bitácora Digital" />
    <meta
      property="og:description"
      content="Blog estático de tres entradas sobre desarrollo web, construido con Gatsby y React."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/post-1.png" />
  </>
)

export const query = graphql`
  query HomePage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          description
          date
          image
          tags
          slug
        }
      }
    }
  }
`
