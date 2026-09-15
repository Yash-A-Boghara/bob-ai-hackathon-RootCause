# Solution: Sentinel D2

## Core Mechanism
Sentinel D2 acts as an intelligent, automated filter between raw security feeds and military commanders. Rather than simply displaying a list of alerts, it utilizes a multi-phase correlation engine to group isolated events into unified "Attack Campaigns".

## Key Design Decisions & Differentiation
1. **Zero-Trust Ingestion:** Instead of blindly accepting logs, our Node.js API requires JWT authentication from sensors. This prevents adversaries from flooding the dashboard with fake alerts to create a distraction.
2. **Immutable Ledger Logging:** To prevent attackers from covering their tracks, critical alerts are written to a cryptographic ledger using SHA-256 chaining. If a log is altered, the hash breaks, alerting the team to tampering.
3. **Active AI vs. Passive AI:** Instead of only using AI to summarize text, we integrated IBM Bob to act as an automated incident responder. The system generates Bob Shell containment scripts via MCP to actively isolate compromised nodes.