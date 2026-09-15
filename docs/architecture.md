# System Architecture

## Component Flow Diagram

```mermaid
graph TD
    A[SIEM / Cyber Sensors] -->|JWT Auth POST| B(Node.js Ingestion API)
    B --> C{Correlation Engine}
    C -->|False Positive| D[Suppressed/Ignored]
    C -->|Genuine Threat| E[Immutable Ledger Hash Chain]
    E --> F[Threat Priority Scoring & MITRE Mapping]
    F --> G[Commander Tactical Dashboard]
    G -->|Execute Containment| H(IBM Bob MCP Subagent)
    H -->|Isolate Node| I[Defense Perimeter]
    