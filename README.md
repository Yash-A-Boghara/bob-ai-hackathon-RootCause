# 🚀 Sentinel D2: Zero-Trust Threat Intelligence

---

## 👥 Team

| Field | Value |
|---|---|
| **Team Name** | RootCause |
| **Track** | AI |
| **Team Lead** | Krish Gajera — 24dce040@charusat.edu.in |
| **Members** | Yash Boghara, Tejas Butani, Aaryan Jarsaniya |

---

## 🎯 Problem Statement

Defence analysts receive thousands of alerts daily from SIEM systems, satellite feeds, and cyber sensors in different formats. Missing a genuine threat is catastrophic, while chasing false positives wastes critical resources. Commanders require structured BLUF (Bottom Line Up Front) formats to get a clear picture in minutes rather than sifting through raw data.

---

## 💡 Solution

Sentinel D2 is a military-grade correlation assistant. It ingests multi-source threat feeds via a Zero-Trust JWT API, correlates alerts using an immutable cryptographic ledger to prevent hacker tampering, maps attacker techniques to the MITRE ATT&CK framework, and leverages IBM Bob to execute active containment.

---

## ✨ Key Features

- **Feature 1:** Zero-Trust JWT alert ingestion pipeline to reject unauthorized sensor data.
- **Feature 2:** Cryptographic immutable threat ledger using SHA-256 for tamper-proof logging.
- **Feature 3:** IBM Bob Shell MCP integration for active threat containment.
- **Feature 4:** Automated BLUF summary generation for commanders.
- **Feature 5:** MITRE ATT&CK lateral movement mapping (e.g., T1110, T1021).

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | JavaScript, HTML, CSS |
| **Frameworks** | Node.js, Express |
| **IBM Technologies** | IBM Bob, IBM Bob Shell MCP |
| **Databases** | None (In-memory for prototype) |
| **Other** | JWT (JSON Web Tokens), Crypto (SHA-256 Hash Chaining) |

---

## 📁 Repository Structure

```text
├── src/                  # All source code (Node.js API & HTML Dashboard)
├── docs/                 # Written documentation
│   ├── problem-statement.md
│   ├── solution-overview.md
│   ├── architecture.md
│   └── setup-guide.md
├── demo/                 # Demo artifacts
│   ├── screenshots/      # App screenshots
│   └── demo-video-link.txt  # Link to demo video
├── presentation/         # Slide deck
└── submission.yaml       # Structured submission metadata


# 1. Clone the repo and navigate to backend

git clone [https://github.com/Yash-A-Boghara/bob-ai-hackathon-RootCause.git](https://github.com/Yash-A-Boghara/bob-ai-hackathon-RootCause.git)
cd bob-ai-hackathon-RootCause/src/backend

# 2. Install dependencies
npm install

# 3. Configure environment
# Copy .env.example to .env or create one with:
PORT=5000
JWT_SECRET=defense_secret_key_2026

# 4. Run the project
node server.js

# 5. Launch the Dashboard
# Navigate to src/frontend/ and open index.html in your web browser.