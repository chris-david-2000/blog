---
slug: "generadores-sitios-estaticos"
title: "Cómo funciona un generador de sitios estáticos"
date: "2026-10-28"
description: "Markdown, GraphQL y una fase de compilación: así transforma Gatsby el contenido en páginas HTML listas para publicar."
image: "/images/post-3.png"
tags: ["Gatsby", "Arquitectura web"]
---

Un generador de sitios estáticos (SSG, por sus siglas en inglés) toma el contenido y las plantillas de un proyecto y produce archivos HTML, CSS y JavaScript antes de que el visitante llegue a la página. El servidor solo entrega archivos ya construidos, sin consultar una base de datos en cada solicitud.

Gatsby lleva este enfoque un paso más allá al integrarse con React y GraphQL. En esta entrada explico el recorrido que sigue una entrada de este blog, desde el archivo Markdown hasta la página publicada.

## El contenido como fuente de verdad

Cada entrada vive en un archivo `.md` dentro de `content/posts`. La parte superior del archivo, entre guiones, contiene metadatos: título, fecha, descripción, imagen y etiquetas. Ese bloque se denomina *frontmatter* y permite que el contenido sea legible para una persona y procesable por el generador.

```yaml
---
slug: "css-moderno"
title: "Diseño web con CSS moderno"
date: "2026-10-21"
image: "/images/post-2.png"
---
```

## Del archivo a los datos

Durante la compilación, `gatsby-source-filesystem` localiza los archivos y `gatsby-transformer-remark` convierte el Markdown en HTML. El resultado queda disponible en una capa de datos que se consulta con GraphQL. Las páginas declaran qué necesitan mediante una consulta y Gatsby les entrega exactamente esos datos.

<figure>
  <img src="/images/post-3-detail.png" alt="Diagrama de tres etapas: archivos Markdown, compilación con Gatsby y salida de HTML y CSS" loading="lazy" />
  <figcaption>El flujo de compilación transforma contenido y plantillas en un sitio estático listo para desplegar.</figcaption>
</figure>

## Generación de rutas

El archivo `gatsby-node.js` recorre todas las entradas y crea una página por cada una. La ruta se arma con el campo `slug`, de modo que una entrada con `slug: "css-moderno"` se publica en `/blog/css-moderno/`. La plantilla recibe ese valor como contexto y ejecuta una consulta filtrada para obtener el contenido correspondiente.

```js
createPage({
  path: `/blog/${node.frontmatter.slug}/`,
  component: template,
  context: { slug: node.frontmatter.slug },
})
```

Este mecanismo evita mantener una lista manual de páginas: agregar un archivo Markdown es suficiente para publicar una entrada nueva.

## Las ventajas del resultado estático

- **Velocidad:** el HTML se sirve directamente desde una red de distribución de contenido.
- **Seguridad:** no hay una base de datos expuesta ni un servidor de aplicaciones que comprometer.
- **Costo:** el sitio puede alojarse en servicios gratuitos como GitHub Pages o Netlify.
- **Portabilidad:** el resultado son archivos que se pueden mover a cualquier hosting.

La contrapartida es que el contenido se actualiza al volver a compilar. Para un blog académico o personal esto no representa un problema; para un sistema con cambios en tiempo real, probablemente convenga otra arquitectura.

## Publicar el sitio

El comando `npm run build` genera la carpeta `public`, que contiene el sitio completo. Esa carpeta se puede subir a un repositorio y publicar con GitHub Pages, o conectar el repositorio a Netlify para que cada cambio se compile automáticamente. En ambos casos, el enlace público se obtiene al finalizar el despliegue.

## Conclusión

Entender el flujo de un generador estático ayuda a aprovechar sus ventajas y a reconocer sus límites. Gatsby convierte contenido estructurado en páginas rápidas y seguras, y deja el diseño en manos de componentes reutilizables. Para este blog, el resultado es un sitio de tres entradas que se mantiene fácil de actualizar y de publicar.
