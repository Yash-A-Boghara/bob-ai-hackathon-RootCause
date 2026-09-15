## Sub-Directory Breakdown

### 1. `src/backend/`
* Contains the core Express server (`server.js`).
* Handles Zero-Trust JWT authentication for sensor and SIEM feeds.
* Manages the SHA-256 immutable cryptographic threat ledger and IBM Bob MCP containment triggers.

### 2. `src/frontend/`
* Contains the user interface assets (`index.html`, styling, and frontend logic).
* Visualizes active threat feeds, MITRE ATT&CK mappings, and BLUF summary cards.

### 3. `src/shared/`
* Holds shared helper scripts, utilities, and validation schemas used across both client and server boundaries.

## Important Files Included
* `package.json` — Dependency manifest for the Node.js backend.
* `.env.example` — Template for required environment variables (`PORT`, `JWT_SECRET`).
* `server.js` — Main execution entry point for the threat intelligence API.

## What NOT to Include in `src/`
* `.env` files containing live production secrets or private keys.
* Large binary files or local media assets (use external links or Git LFS).
* `node_modules/` or local virtual environments (automatically ignored via `.gitignore`).
* Build artifacts, compilation outputs, or local cache directories (`dist/`, `build/`, `__pycache__/`).