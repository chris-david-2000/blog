# Bitácora Digital

Blog estático de tres entradas construido con **Gatsby 5** y **React 18** para la actividad «Creación de un blog» de la asignatura *Desarrollo de Aplicaciones en Red*.

- **Autor:** Christian David Munar Benitez
- **Docente:** Juan Carlos Reyes Figueroa
- **Institución:** Fundación Internacional de la Rioja
- **Año:** 2026

## Requisitos

- Node.js 18 o superior (probado con Node.js 24)
- npm 9 o superior

## Puesta en marcha

```bash
npm install
npm run develop
```

El sitio de desarrollo queda disponible en `http://localhost:8000`.

## Compilación y vista previa

```bash
npm run build
npm run serve
```

La compilación genera la carpeta `public/`, que contiene el sitio estático listo para publicar. La vista previa se sirve en `http://localhost:9000`.

## Estructura

```text
blog-gatsby/
├── content/posts/        # Entradas en Markdown con frontmatter
├── src/components/       # Componentes compartidos (Layout)
├── src/pages/            # Inicio, Acerca y página 404
├── src/templates/        # Plantilla de entrada individual
├── src/styles/           # Hoja de estilos global
├── static/images/        # Imágenes de portada, figuras e icono
├── gatsby-config.js      # Metadatos y plugins
├── gatsby-node.js        # Generación dinámica de rutas
└── gatsby-browser.js     # Importación de estilos globales
```

## Agregar una entrada

1. Crear un archivo `.md` en `content/posts/`.
2. Añadir el frontmatter:

```yaml
---
slug: "nueva-entrada"
title: "Título de la entrada"
date: "2026-11-10"
description: "Resumen breve que aparece en la portada."
image: "/images/post-1.png"
tags: ["Etiqueta"]
---
```

3. Escribir el contenido en Markdown. La ruta `/blog/nueva-entrada/` se genera automáticamente.

## Publicación

### Netlify

1. Subir el proyecto a un repositorio de GitHub.
2. En Netlify, elegir **Add new site → Import an existing project**.
3. Configurar:
   - Build command: `npm run build`
   - Publish directory: `public`
4. Desplegar. Netlify entrega un enlace público con el formato `https://nombre-del-sitio.netlify.app`.

### GitHub Pages

Para un repositorio de proyecto (`https://usuario.github.io/nombre-repo/`) hay que indicar el prefijo de ruta. En `gatsby-config.js`:

```js
module.exports = {
  pathPrefix: "/nombre-repo",
  // ...
}
```

Luego:

```bash
npm run build -- --prefix-paths
npx gh-pages -d public
```

En **Settings → Pages** del repositorio, seleccionar la rama `gh-pages` como origen. El enlace público será `https://usuario.github.io/nombre-repo/`.

> Al publicar, actualizar `siteMetadata.siteUrl` en `gatsby-config.js` con la dirección definitiva y pegar ese enlace en el documento de entrega.
