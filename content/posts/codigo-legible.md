---
slug: "codigo-legible"
title: "El arte de escribir código legible"
date: "2026-10-14"
description: "Escribir código que otras personas entiendan es tan importante como hacerlo funcionar. Estas son las prácticas que aplico en cada proyecto."
image: "/images/post-1.png"
tags: ["Buenas prácticas", "JavaScript"]
---

Cuando un proyecto crece, el código se lee muchas más veces de las que se escribe. Por eso, la legibilidad no es un detalle estético: es una decisión de diseño que reduce errores, facilita el mantenimiento y permite que varias personas trabajen sobre el mismo repositorio sin fricciones.

En esta entrada reúno las prácticas que considero más valiosas, tanto en JavaScript como en cualquier lenguaje.

## Nombrar es diseñar

Un buen nombre elimina la necesidad de un comentario. Comparar `x` con `tiempoTranscurrido` cambia por completo la comprensión de una línea. La regla que intento seguir es simple: si al leer el nombre necesito revisar la implementación para entender qué hace, el nombre todavía puede mejorar.

- Usar sustantivos para variables y verbos para funciones.
- Evitar abreviaturas que solo entiende quien escribió el código.
- Mantener un vocabulario coherente en todo el proyecto.

## Funciones pequeñas y con una sola responsabilidad

Una función que valida, transforma y guarda datos al mismo tiempo es difícil de probar. Dividirla en tres funciones más pequeñas permite entender cada paso y reutilizarlo. No se trata de imponer un número de líneas, sino de que cada bloque responda a una sola pregunta.

```js
const normalizarTitulo = titulo => titulo.trim().toLowerCase()

const generarSlug = titulo =>
  normalizarTitulo(titulo)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
```

En el ejemplo, la primera función describe una intención y la segunda la compone. Cada una puede probarse por separado y el resultado se lee casi como una frase.

## Formato consistente

La discusión sobre espacios, comas finales o comillas dobles consume tiempo valioso. Herramientas como Prettier o ESLint automatizan esas decisiones y permiten que el equipo se concentre en los problemas reales. Un formato uniforme también hace que los cambios en el historial de Git sean más fáciles de revisar.

> El código limpio no es el que se escribe rápido, sino el que se puede modificar con confianza seis meses después.

## Comentarios con propósito

Los comentarios deberían explicar el porqué, no el qué. Un comentario que repite lo que la línea ya dice termina desactualizado y confunde. En cambio, documentar una decisión, una limitación de una API externa o una regla de negocio aporta contexto que el código por sí solo no puede transmitir.

<figure>
  <img src="/images/post-1-detail.png" alt="Simulación de un editor de código con líneas resaltadas y numeración" loading="lazy" />
  <figcaption>Un formato consistente y nombres descriptivos hacen que el archivo se pueda recorrer visualmente.</figcaption>
</figure>

## Revisión entre pares

La revisión de código es una conversación sobre el diseño, no una auditoría. Comentar con preguntas —«¿qué ocurre si el arreglo llega vacío?»— suele ser más útil que señalar un error de forma directa, porque invita a razonar sobre el caso límite.

## Conclusión

La legibilidad se construye con decisiones pequeñas y constantes: nombres claros, funciones acotadas, formato automatizado y comentarios que aportan contexto. Aplicar estas prácticas en un blog o en una aplicación empresarial produce el mismo efecto: menos tiempo perdido y más confianza al cambiar el código.
