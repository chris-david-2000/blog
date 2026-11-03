import React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import Layout from "../components/Layout"

const formatDate = value => {
  const date = new Date(`${value}T00:00:00`)
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

const prefixAssetPaths = html =>
  html.replace(
    /(src|href)="(\/images\/[^"]+)"/g,
    (match, attribute, path) => `${attribute}="${withPrefix(path)}"`
  )

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { title, description, date, image, tags } = post.frontmatter

  return (
    <Layout>
      <article className="article">
        <div className="container">
          <header className="article-header">
            <Link to="/#entradas" className="breadcrumb">
              <span aria-hidden="true">←</span> Volver a las entradas
            </Link>
            <h1>{title}</h1>
            <p className="article-description">{description}</p>
            <div className="article-meta">
              <time dateTime={date}>{formatDate(date)}</time>
              <span aria-hidden="true">·</span>
              <span>Christian David Munar Benitez</span>
              {tags && tags.length > 0 && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{tags.join(" / ")}</span>
                </>
              )}
            </div>
          </header>

          <figure className="article-cover">
            <img
              src={withPrefix(image)}
              alt={`Ilustración de portada: ${title}`}
              width="1200"
              height="675"
            />
          </figure>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: prefixAssetPaths(post.html) }}
          />

          <footer className="article-footer">
            <Link to="/#entradas" className="read-more">
              <span aria-hidden="true">←</span> Todas las entradas
            </Link>
            <Link to="/acerca/" className="read-more">
              Sobre el proyecto <span aria-hidden="true">→</span>
            </Link>
          </footer>
        </div>
      </article>
    </Layout>
  )
}

export default PostTemplate

export const Head = ({ data }) => {
  const { title, description, image } = data.markdownRemark.frontmatter
  return (
    <>
      <html lang="es" />
      <title>{title} · Bitácora Digital</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={withPrefix(image)} />
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
`
