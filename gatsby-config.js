/**
 * Configuración principal del sitio.
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Bitácora Digital",
    titleTemplate: "%s · Bitácora Digital",
    description:
      "Blog estático sobre desarrollo web, buenas prácticas y generadores de sitios, creado con Gatsby.",
    siteUrl: "https://christian-munar.github.io/bitacora-digital",
    author: "Christian David Munar Benitez",
    lang: "es",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Bitácora Digital",
        short_name: "Bitácora",
        description:
          "Blog estático sobre desarrollo web creado con Gatsby.",
        start_url: "/",
        background_color: "#0b1020",
        theme_color: "#0b1020",
        display: "standalone",
        icon: "static/images/icon.png",
      },
    },
  ],
}
