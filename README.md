# Mapa Estratégico de Proyectos

Radar visual para organizar los proyectos de **Andrés Lizcano Corrales**: docencia, recursos educativos, IA, marca personal, Sinapsis, formación, vida familiar, consultoría y automatización.

> Versión real inicial. Se retiró el nodo ficticio de prueba y se cargó la estructura refinada a partir de la conversación del 2 de septiembre de 2026.

## Vista conceptual

```mermaid
flowchart LR
    A["Andrés Lizcano Corrales<br/>Radar estratégico personal"]:::center

    A --> EDU["Educación institucional"]:::area
    A --> REC["Recursos educativos"]:::area
    A --> MARCA["Marca personal y monetización"]:::area
    A --> SOFT["Software, IA y automatización"]:::area
    A --> FOR["Formación y crecimiento"]:::area
    A --> VIDA["Vida personal y sostenibilidad"]:::area
    A --> CONS["Consultoría técnica"]:::area

    EDU --> DOC["Docencia IE El Recreo"]:::alta
    EDU --> SIN["Sinapsis / Lighthouse"]:::alta
    REC --> RES["Recursos Educativos con IA y Tecnología"]:::alta
    MARCA --> EPQA["El Profe Que Aprende"]:::alta
    SOFT --> ORION["ORIÓN · Agentes Docentes"]:::media
    SOFT --> PLAT["Plataforma Educativa Integral"]:::media
    SOFT --> TEC["Tecnología, Automatización y Experimentación"]:::media
    SOFT --> MAPA["Mapa Estratégico de Proyectos"]:::alta
    FOR --> FORM["Formación Personal y Profesional"]:::media
    VIDA --> SOST["Vida, Familia y Sostenibilidad"]:::alta
    CONS --> HR["Consultoría HR Suite / Nómina"]:::media

    DOC --> RES
    RES --> EPQA
    RES --> SIN
    ORION --> RES
    EPQA --> ORION
    PLAT --> DOC
    TEC --> MAPA
    SOST --> DOC
    SOST --> EPQA
    HR --> TEC
    MAPA --> DOC
    MAPA --> EPQA
    MAPA --> SIN

    classDef center fill:#111827,stroke:#38bdf8,color:#ffffff,stroke-width:2px;
    classDef area fill:#f8fafc,stroke:#94a3b8,color:#0f172a;
    classDef alta fill:#2563eb,stroke:#1e3a8a,color:#ffffff,stroke-width:2px;
    classDef media fill:#0f766e,stroke:#134e4a,color:#ffffff;
```

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
├── projects.yml
├── docs/
│   ├── index.html
│   └── mapa.mmd
├── scripts/
│   └── generate_mermaid.py
└── data/
    ├── avances.yml
    ├── pendientes.yml
    ├── decisiones.yml
    └── bloqueos.yml
```

## Cómo se usa

1. Editar `projects.yml`.
2. Ajustar proyectos, categorías, relaciones, prioridades o próximas acciones.
3. Ejecutar `python scripts/generate_mermaid.py` o dejar que GitHub Actions regenere `docs/mapa.mmd`.
4. Abrir `docs/index.html` para usar la vista filtrable.

## Campos principales

```yaml
id:
nombre:
area_principal:
categoria:
tipo:
estado:
prioridad:
objetivo:
alcance:
subproyectos:
acciones_recurrentes:
entregables:
dolores:
siguiente_accion:
relaciones:
```

## Siguiente evolución

La siguiente fase es alimentar `data/avances.yml`, `data/pendientes.yml`, `data/decisiones.yml` y `data/bloqueos.yml` desde el cierre diario programado de ChatGPT.
