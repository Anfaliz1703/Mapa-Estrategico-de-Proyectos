# Mapa Estratégico de Proyectos

Radar visual para organizar los proyectos de **Andrés Lizcano Corrales**: docencia, recursos educativos, IA, marca personal, Sinapsis, formación, vida familiar, consultoría y automatización.

> Versión de interfaz: Hub radial + Tarjetas interactivas con porcentajes.

## Vista web con GitHub Pages

La vista principal está preparada para funcionar desde cualquiera de estas rutas:

```text
/index.html
/docs/index.html
```

URL esperada del radar:

```text
https://anfaliz1703.github.io/Mapa-Estrategico-de-Proyectos/
```

## Interfaz actual

La app visual ahora tiene dos modos principales:

1. **Hub central**  
   Vista inspirada en la opción 4: centro radial con áreas estratégicas, relaciones visuales, plan operativo, último avance enfocado, radar de balance y acceso al cierre diario.

2. **Tarjetas con porcentajes**  
   Vista inspirada en la opción 9: tarjetas por proyecto con porcentaje de avance, prioridad, estado, categorías, dolores, subproyectos y siguiente acción.

También incluye:

- Filtros por educación, IA, software, monetización, vida personal, consultoría y prioridad alta.
- Buscador por proyecto, dolor, categoría o siguiente acción.
- Diseño responsive para escritorio, tablet y celular.
- Librerías externas por CDN: Phosphor Icons y Chart.js.
- Botón para copiar plantilla de cierre diario.

## Activación recomendada de GitHub Pages

Para evitar que se muestre solo el README, usar esta configuración:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
→ Branch: main
→ Folder: /root
→ Save
```

También existe una versión equivalente en `/docs`, por si se prefiere publicar desde esa carpeta.

## Proyectos cargados

| Proyecto | Área | Estado | Prioridad |
|---|---|---:|---:|
| Docencia IE El Recreo | Educación institucional | Activo permanente | Alta |
| Recursos Educativos con IA y Tecnología | Recursos educativos | Activo | Alta |
| ORIÓN · Agentes Docentes | Software, IA y automatización | Conceptual / en diseño | Media |
| El Profe Que Aprende | Marca personal y monetización | Activo estratégico | Alta |
| Sinapsis / Lighthouse | Educación institucional | En operación | Alta |
| Plataforma Educativa Integral | Software, IA y automatización | Idea avanzada | Media |
| Formación Personal y Profesional | Formación y crecimiento | Activo | Media |
| Vida, Familia y Sostenibilidad | Vida personal y sostenibilidad | Activo permanente | Alta |
| Tecnología, Automatización y Experimentación | Software, IA y automatización | Activo | Media |
| Consultoría HR Suite / Nómina | Consultoría técnica | Ocasional | Media |
| Mapa Estratégico de Proyectos | Software, IA y automatización | En construcción | Alta |

## Corrección aplicada

Los juegos estudiantiles de **Martín, Samantha, Emanuel y otros estudiantes** pertenecen a **Sinapsis / Lighthouse**, no al proyecto de recursos del colegio.

## Estructura del repositorio

```text
.
├── README.md
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── projects.yml
├── docs/
│   ├── .nojekyll
│   ├── index.html
│   ├── mapa.mmd
│   └── assets/
│       ├── styles.css
│       └── app.js
├── scripts/
│   └── generate_mermaid.py
└── data/
    ├── avances.yml
    ├── pendientes.yml
    ├── decisiones.yml
    └── bloqueos.yml
```

## Cómo se usa

1. Abrir la URL de GitHub Pages.
2. Usar el **Hub central** para ver las áreas estratégicas.
3. Usar **Tarjetas con porcentajes** para revisar avance, pendientes y siguiente acción.
4. Filtrar por área o prioridad.
5. Usar el cierre diario programado para alimentar avances, pendientes, decisiones y bloqueos.

## Siguiente evolución

La siguiente fase es conectar visualmente los archivos `data/avances.yml`, `data/pendientes.yml`, `data/decisiones.yml` y `data/bloqueos.yml` para que los porcentajes no sean estimados sino calculados desde el registro real de trabajo.