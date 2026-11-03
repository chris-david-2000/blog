import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => (
  <Layout>
    <section className="not-found">
      <div className="container">
        <p className="code">404</p>
        <h1>Esta página no existe</h1>
        <p style={{ color: "var(--muted)" }}>
          Puede que el enlace haya cambiado o que la dirección esté mal
          escrita.
        </p>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

export const Head = () => (
  <>
    <html lang="es" />
    <title>Página no encontrada · Bitácora Digital</title>
    <meta name="robots" content="noindex" />
  </>
)
