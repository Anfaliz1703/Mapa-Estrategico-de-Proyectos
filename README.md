# Mapa Estratégico de Proyectos

Sistema visual para convertir proyectos, alcances, entregables y relaciones en un mapa conceptual vivo.

> MVP de prueba creado para validar la idea antes de cargar los proyectos reales de ChatGPT.

## Vista rápida

```mermaid
flowchart TD
    A["Andrés Lizcano Corrales<br/>Vida · Docencia · Tecnología · Contenido"]:::center

    A --> EPQA["El Profe Que Aprende<br/><small>Marca educativa</small>"]:::brand
    A --> GUIAS["Guías Interactivas Offline<br/><small>Producto pedagógico</small>"]:::education
    A --> ORION["ORIÓN · Agentes Docentes<br/><small>Automatización / IA</small>"]:::ai
    A --> SINAPSIS["Sinapsis / Tecnoclan<br/><small>Formación tecnológica</small>"]:::business
    A --> MAPA["Mapa Estratégico de Proyectos<br/><small>Sistema visual personal</small>"]:::system

    EPQA -->|contenido y comunidad| GUIAS
    EPQA -->|oferta formativa| SINAPSIS
    GUIAS -->|materiales base| ORION
    ORION -->|automatiza mapas| MAPA
    MAPA -->|claridad estratégica| EPQA

    EPQA --- EPQA_A["Alcance:<br/>Guiones · Miniaturas · Recursos · Calendario"]
    GUIAS --- GUIAS_A["Alcance:<br/>Lectura · Cornell · Laboratorio · Evidencias"]
    ORION --- ORION_A["Alcance:<br/>Generador · Validador · Organizador · GitHub"]
    SINAPSIS --- SINAPSIS_A["Alcance:<br/>Niveles · Micro:bit · PC · Proyectos"]
    MAPA --- MAPA_A["Alcance:<br/>YAML · Mermaid · README · Web"]

    classDef center fill:#111827,stroke:#38bdf8,color:#ffffff,stroke-width:2px;
    classDef brand fill:#f97316,stroke:#7c2d12,color:#ffffff;
    classDef education fill:#2563eb,stroke:#1e3a8a,color:#ffffff;
    classDef ai fill:#7c3aed,stroke:#4c1d95,color:#ffffff;
    classDef business fill:#16a34a,stroke:#14532d,color:#ffffff;
    classDef system fill:#0f766e,stroke:#134e4a,color:#ffffff;
```

## ¿Cómo se usa?

1. Edita `projects.yml`.
2. Agrega o ajusta proyectos, alcances, entregables y relaciones.
3. Abre este `README.md` para ver el mapa Mermaid renderizado por GitHub.
4. Abre `docs/index.html` para una vista web más visual.

## Estructura del repositorio

```text
.
├── README.md
├── projects.yml
├── docs/
│   └── index.html
├── scripts/
│   └── generate_mermaid.py
└── .github/
    └── workflows/
        └── build-map.yml
```

## Próximo nivel

La versión inicial permite validar la idea. La siguiente evolución puede incluir:

- Generación automática del Mermaid desde `projects.yml`.
- Dashboard con estados, prioridades y porcentaje de avance.
- Filtros por proyecto: docencia, contenido, software, vida personal, ingresos.
- Exportación a imagen o PDF.
- Integración futura con agentes para actualizar el mapa desde conversaciones.

## Nota sobre MCP

Este repositorio no es un MCP por sí mismo. Puede convertirse en parte de un sistema más amplio donde un agente lea tus proyectos, actualice archivos y genere visualizaciones. En ese escenario, el repositorio sería la memoria estructurada y la interfaz visual del sistema.
