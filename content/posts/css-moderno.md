---
slug: "css-moderno"
title: "Diseño web con CSS moderno: de la maqueta al detalle"
date: "2026-10-21"
description: "Variables, Grid, Flexbox y diseño adaptable: las herramientas con las que construí la interfaz de este blog sin frameworks de estilo."
image: "/images/post-2.png"
tags: ["CSS", "Diseño web"]
---

Durante mucho tiempo, maquetar un sitio implicaba pelearse con flotados y alturas fijas. El CSS actual ofrece herramientas que permiten describir la interfaz con mucha más claridad: variables para el sistema de diseño, Grid para la estructura y Flexbox para la alineación interna de los componentes.

Este blog está construido únicamente con CSS personalizado, sin frameworks de estilo, para demostrar que estas características bastan para lograr un resultado cuidado.

## Un sistema de diseño con variables

Definir colores, tipografías y radios en `:root` permite cambiar la apariencia del sitio desde un solo lugar. Además, los nombres semánticos —`--paper`, `--ink`, `--rule`— comunican el rol de cada valor y no su color literal.

```css
:root {
  --paper: #f7f4ec;
  --ink: #16130f;
  --muted: #6c6457;
  --accent: #8c1d18;
}
```

Cuando el sistema está centralizado, mantener la coherencia entre tarjetas, botones y formularios deja de ser una tarea manual.

## Grid para la estructura, Flexbox para el contenido

La portada organiza las entradas con `display: grid` y tres columnas. En pantallas medianas la cuadrícula pasa a dos columnas y en móviles a una sola. Cada tarjeta, por su parte, usa Flexbox para empujar la fecha y el enlace hacia la parte inferior, de modo que todas las tarjetas mantengan la misma altura aunque los textos varíen.

<figure>
  <img src="/images/post-2-detail.png" alt="Esquema de una página web con barra de navegación, sección principal y tres tarjetas" loading="lazy" />
  <figcaption>La estructura se compone de regiones claras: cabecera, héroe, rejilla de tarjetas y pie de página.</figcaption>
</figure>

## Diseño adaptable sin duplicar estilos

La técnica que utilicé combina unidades relativas con `clamp()` y dos puntos de quiebre principales. `clamp(2.5rem, 5vw, 4rem)` permite que un título crezca con la ventana sin superar un límite legible. Los medios de consulta solo ajustan lo necesario: el número de columnas y la dirección de algunos contenedores.

- Un punto de quiebre en 980 px reorganiza el héroe y la rejilla.
- Otro en 720 px simplifica la navegación y el pie de página.
- Las imágenes usan `aspect-ratio` para reservar espacio y evitar saltos de diseño.

## Detalles que mejoran la experiencia

Los pequeños detalles son los que hacen que un sitio se sienta terminado: transiciones suaves al pasar el cursor por una tarjeta, reglas tipográficas que ordenan la lectura y una capitular que abre el primer párrafo. Todos son efectos de CSS, sin bibliotecas adicionales.

También conviene respetar la preferencia `prefers-reduced-motion`: si una persona configura su sistema para reducir animaciones, el sitio debe desactivar las transiciones. Es una muestra de accesibilidad sencilla de implementar.

## Contraste y legibilidad

Un diseño atractivo no está reñido con la accesibilidad. El texto principal mantiene un contraste alto sobre el papel claro, los enlaces se distinguen por color y subrayado al enfocar, y cada imagen incluye un texto alternativo descriptivo. La legibilidad es parte del diseño, no un añadido posterior.

## Conclusión

CSS moderno permite construir interfaces expresivas con menos código y más intención. Variables, Grid, Flexbox y funciones como `clamp()` cubren la mayoría de las necesidades de un blog, siempre que se piense primero en la estructura y después en el detalle.
