#!/usr/bin/env python3
"""
Generador de Mermaid desde projects.yml.

Uso local:
    python scripts/generate_mermaid.py

Salida:
    docs/mapa.mmd
"""

from pathlib import Path
import re
import sys

try:
    import yaml
except ImportError:
    print("Falta PyYAML. Instala con: pip install pyyaml", file=sys.stderr)
    raise

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "projects.yml"
OUTPUT = ROOT / "docs" / "mapa.mmd"


def node_id(value: str) -> str:
    value = str(value).upper()
    value = re.sub(r"[^A-Z0-9]+", "_", value)
    value = value.strip("_")
    return value or "NODO"


def safe_label(value: str) -> str:
    return str(value).replace('"', "'").replace("\n", " ")


def short(value: str, limit: int = 90) -> str:
    value = safe_label(value)
    return value if len(value) <= limit else value[: limit - 1].rstrip() + "…"


def class_for_priority(priority: str) -> str:
    p = (priority or "").lower()
    if "alta" in p:
        return "alta"
    if "media" in p:
        return "media"
    if "baja" in p:
        return "baja"
    return "project"


def main() -> None:
    data = yaml.safe_load(SOURCE.read_text(encoding="utf-8"))
    persona = data.get("persona", {})
    areas = data.get("areas", [])
    proyectos = data.get("proyectos", [])

    area_lookup = {area.get("id"): area for area in areas}
    projects_by_area = {}
    project_ids = set()

    for proyecto in proyectos:
        pid_raw = proyecto.get("id", proyecto.get("nombre", "proyecto"))
        project_ids.add(pid_raw)
        area_id = proyecto.get("area_principal", "sin-area")
        projects_by_area.setdefault(area_id, []).append(proyecto)

    lines = []
    lines.append("flowchart LR")
    lines.append(f'    CENTRO["{safe_label(persona.get("nombre", "Centro"))}<br/><small>{short(persona.get("vision", "Mapa estratégico"), 120)}</small>"]:::center')
    lines.append("")

    for area_id, area_projects in projects_by_area.items():
        area = area_lookup.get(area_id, {"nombre": area_id})
        area_node = f"AREA_{node_id(area_id)}"
        lines.append(f'    subgraph {area_node}["{safe_label(area.get("nombre", area_id))}"]')
        for proyecto in area_projects:
            pid = node_id(proyecto.get("id", proyecto.get("nombre", "proyecto")))
            nombre = safe_label(proyecto.get("nombre", pid))
            tipo = safe_label(proyecto.get("tipo", "Proyecto"))
            estado = safe_label(proyecto.get("estado", "Sin estado"))
            prioridad = safe_label(proyecto.get("prioridad", "Sin prioridad"))
            css = class_for_priority(prioridad)
            lines.append(f'        {pid}["{nombre}<br/><small>{tipo} · {estado} · Prioridad {prioridad}</small>"]:::{css}')
        lines.append("    end")
        lines.append(f"    CENTRO --> {area_node}")
        lines.append("")

    lines.append("    %% Relaciones entre proyectos")
    for proyecto in proyectos:
        pid_raw = proyecto.get("id", proyecto.get("nombre", "proyecto"))
        pid = node_id(pid_raw)
        for rel in proyecto.get("relaciones", []):
            if rel in project_ids:
                rid = node_id(rel)
                lines.append(f"    {pid} --> {rid}")

    lines.append("")
    lines.append("    %% Próximas acciones")
    for proyecto in proyectos:
        siguiente = proyecto.get("siguiente_accion")
        if siguiente:
            pid = node_id(proyecto.get("id", proyecto.get("nombre", "proyecto")))
            aid = f"{pid}_SIG"
            lines.append(f'    {pid} -.-> {aid}["Siguiente:<br/>{short(siguiente, 100)}"]:::next')

    lines.append("")
    lines.append("    classDef center fill:#111827,stroke:#38bdf8,color:#ffffff,stroke-width:2px;")
    lines.append("    classDef alta fill:#2563eb,stroke:#1e3a8a,color:#ffffff,stroke-width:2px;")
    lines.append("    classDef media fill:#0f766e,stroke:#134e4a,color:#ffffff;")
    lines.append("    classDef baja fill:#64748b,stroke:#334155,color:#ffffff;")
    lines.append("    classDef project fill:#475569,stroke:#1e293b,color:#ffffff;")
    lines.append("    classDef next fill:#f8fafc,stroke:#94a3b8,color:#0f172a;")
    lines.append("    style AREA_EDUCACION fill:#eff6ff,stroke:#93c5fd,color:#0f172a")
    lines.append("    style AREA_RECURSOS fill:#ecfeff,stroke:#67e8f9,color:#0f172a")
    lines.append("    style AREA_MARCA fill:#fff7ed,stroke:#fdba74,color:#0f172a")
    lines.append("    style AREA_SOFTWARE fill:#f5f3ff,stroke:#c4b5fd,color:#0f172a")
    lines.append("    style AREA_FORMACION fill:#f0fdf4,stroke:#86efac,color:#0f172a")
    lines.append("    style AREA_VIDA fill:#fdf2f8,stroke:#f9a8d4,color:#0f172a")
    lines.append("    style AREA_CONSULTORIA fill:#f8fafc,stroke:#cbd5e1,color:#0f172a")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Mapa generado en {OUTPUT}")


if __name__ == "__main__":
    main()
