#!/usr/bin/env python3
"""
Generador básico de Mermaid desde projects.yml.

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
    value = value.upper()
    value = re.sub(r"[^A-Z0-9]+", "_", value)
    value = value.strip("_")
    return value or "PROYECTO"


def safe_label(value: str) -> str:
    return str(value).replace('"', "'")


def main() -> None:
    data = yaml.safe_load(SOURCE.read_text(encoding="utf-8"))
    persona = data.get("persona", {})
    proyectos = data.get("proyectos", [])

    lines = []
    lines.append("flowchart TD")
    lines.append(f'    CENTRO["{safe_label(persona.get("nombre", "Centro"))}<br/>{safe_label(persona.get("vision", "Mapa estratégico"))}"]:::center')
    lines.append("")

    for proyecto in proyectos:
        pid = node_id(proyecto.get("id", proyecto.get("nombre", "proyecto")))
        nombre = safe_label(proyecto.get("nombre", pid))
        tipo = safe_label(proyecto.get("tipo", "Proyecto"))
        estado = safe_label(proyecto.get("estado", "Sin estado"))
        lines.append(f'    CENTRO --> {pid}["{nombre}<br/><small>{tipo} · {estado}</small>"]:::project')

        alcance = proyecto.get("alcance", [])
        if alcance:
            aid = f"{pid}_ALCANCE"
            alcance_text = "<br/>".join(f"• {safe_label(item)}" for item in alcance)
            lines.append(f'    {pid} --- {aid}["Alcance:<br/>{alcance_text}"]:::scope')

        entregables = proyecto.get("entregables", [])
        if entregables:
            eid = f"{pid}_ENTREGABLES"
            entregables_text = "<br/>".join(f"• {safe_label(item)}" for item in entregables)
            lines.append(f'    {pid} --- {eid}["Entregables:<br/>{entregables_text}"]:::deliverable')

    lines.append("")
    for proyecto in proyectos:
        pid = node_id(proyecto.get("id", proyecto.get("nombre", "proyecto")))
        for rel in proyecto.get("relaciones", []):
            rid = node_id(rel)
            lines.append(f"    {pid} --> {rid}")

    lines.append("")
    lines.append("    classDef center fill:#111827,stroke:#38bdf8,color:#ffffff,stroke-width:2px;")
    lines.append("    classDef project fill:#2563eb,stroke:#1e3a8a,color:#ffffff;")
    lines.append("    classDef scope fill:#f8fafc,stroke:#94a3b8,color:#0f172a;")
    lines.append("    classDef deliverable fill:#ecfeff,stroke:#0891b2,color:#164e63;")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Mapa generado en {OUTPUT}")


if __name__ == "__main__":
    main()
