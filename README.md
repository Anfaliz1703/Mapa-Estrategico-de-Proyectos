# Mapa Estratégico de Proyectos

Sistema visual para convertir proyectos, alcances, entregables y relaciones en un mapa conceptual vivo.

> MVP de prueba creado para validar la idea antes de cargar los proyectos reales de ChatGPT.

## Vista rápida

```mermaid
flowchart TD
    CENTRO["Andrés Lizcano Corrales<br/>Organizar visualmente proyectos de vida, docencia, tecnología y creación de contenido."]:::center

    CENTRO --> EPQA["El Profe Que Aprende<br/><small>Marca educativa · En crecimiento</small>"]:::project
    CENTRO --> GUIAS_INTERACTIVAS["Guías Interactivas Offline<br/><small>Producto pedagógico · Funcional / iterando</small>"]:::project
    CENTRO --> ORION_AGENTES["ORIÓN · Agentes Docentes<br/><small>Automatización / IA · Prototipo conceptual</small>"]:::project
    CENTRO --> SINAPSIS["Sinapsis / Tecnoclan<br/><small>Formación tecnológica · En operación</small>"]:::project
    CENTRO --> MAPA_ESTRATEGICO["Mapa Estratégico de Proyectos<br/><small>Sistema visual personal · MVP de prueba</small>"]:::project
    CENTRO --> LABORATORIO_VISUAL_PRUEBA["Laboratorio Visual de Prueba<br/><small>Proyecto ficticio de validación · Prueba controlada</small>"]:::test

    EPQA --- EPQA_A["Alcance:<br/>Guiones · Miniaturas · Recursos · Calendario"]:::scope
    GUIAS_INTERACTIVAS --- GUIAS_A["Alcance:<br/>Lectura · Cornell · Laboratorio · Evidencias"]:::scope
    ORION_AGENTES --- ORION_A["Alcance:<br/>Generador · Validador · Organizador · GitHub"]:::scope
    SINAPSIS --- SINAPSIS_A["Alcance:<br/>Niveles · Micro:bit · Pensamiento computacional · Proyectos"]:::scope
    MAPA_ESTRATEGICO --- MAPA_A["Alcance:<br/>YAML · Mermaid · README · Web"]:::scope
    LABORATORIO_VISUAL_PRUEBA --- LAB_A["Alcance:<br/>Nodo nuevo · Relación con ORIÓN · Relación con Mapa · Entregables mínimos"]:::scope

    EPQA --> GUIAS_INTERACTIVAS
    EPQA --> SINAPSIS
    GUIAS_INTERACTIVAS --> ORION_AGENTES
    GUIAS_INTERACTIVAS --> EPQA
    ORION_AGENTES --> GUIAS_INTERACTIVAS
    ORION_AGENTES --> MAPA_ESTRATEGICO
    ORION_AGENTES --> LABORATORIO_VISUAL_PRUEBA
    SINAPSIS --> EPQA
    MAPA_ESTRATEGICO --> ORION_AGENTES
    MAPA_ESTRATEGICO --> EPQA
    MAPA_ESTRATEGICO --> LABORATORIO_VISUAL_PRUEBA
    LABORATORIO_VISUAL_PRUEBA --> MAPA_ESTRATEGICO
    LABORATORIO_VISUAL_PRUEBA --> ORION_AGENTES

    classDef center fill:#111827,stroke:#38bdf8,color:#ffffff,stroke-width:2px;
    classDef project fill:#2563eb,stroke:#1e3a8a,color:#ffffff;
    classDef test fill:#f59e0b,stroke:#92400e,color:#111827,stroke-width:2px;
    classDef scope fill:#f8fafc,stroke:#94a3b8,color:#0f172a;
```

## Prueba realizada

Se agregó el proyecto ficticio **Laboratorio Visual de Prueba** para comprobar que el sistema puede:

- Recibir un proyecto nuevo desde `projects.yml`.
- Crear un nodo visual en Mermaid.
- Conectar ese nodo con otros proyectos.
- Mostrar alcance y entregables sin tocar todavía los proyectos reales.

## ¿Cómo se usa?

1. Edita `projects.yml`.
2. Agrega o ajusta proyectos, alcances, entregables y relaciones.
3. El flujo del repositorio actualiza `docs/mapa.mmd`.
4. Abre este `README.md` para ver el mapa Mermaid renderizado por GitHub.
5. Abre `docs/index.html` para una vista web más visual.

## Estructura del repositorio

```text
.
├── README.md
├── projects.yml
├── docs/
│   ├── index.html
│   └── mapa.mmd
├── scripts/
│   └── generate_mermaid.py
└── .github/
    └── workflows/
        └── build-map.yml
```

## Próximo nivel

La versión inicial permite validar la idea. La siguiente evolución puede incluir:

- Dashboard con estados, prioridades y porcentaje de avance.
- Filtros por proyecto: docencia, contenido, software, vida personal, ingresos.
- Exportación a imagen o PDF.
- Integración futura con agentes para actualizar el mapa desde conversaciones.

## Nota sobre MCP

Este repositorio no es un MCP por sí mismo. Puede convertirse en parte de un sistema más amplio donde un agente lea tus proyectos, actualice archivos y genere visualizaciones. En ese escenario, el repositorio sería la memoria estructurada y la interfaz visual del sistema.
