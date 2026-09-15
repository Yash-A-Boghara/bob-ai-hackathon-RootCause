const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { processAlert, getIncidentCampaign, getLedger } = require('./correlationEngine');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || 'defense_secret_key_2026';

app.use(cors());
app.use(express.json());

// Ingestion Endpoint (Requires JWT from verified defense sensors)
app.post('/api/alerts/ingest', (req, res) => {
  const authHeader = req.headers['authorization'];
  let jwtStatus = 'INVALID_OR_MISSING';

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      jwt.verify(token, SECRET_KEY);
      jwtStatus = 'VALID_AUTHENTICATED';
    } catch (err) {
      jwtStatus = 'INVALID_SIGNATURE';
    }
  }

  const alertPayload = req.body;
  const processedResult = processAlert(alertPayload, jwtStatus);

  return res.status(200).json({
    status: 'PROCESSED',
    jwtStatus,
    threatScore: processedResult.threatScore,
    escalated: processedResult.escalated
  });
});

// Endpoint for Dashboard metrics & active campaigns
app.get('/api/dashboard/overview', (req, res) => {
  res.json(getIncidentCampaign());
});

// Endpoint for Immutable Ledger table
app.get('/api/dashboard/ledger', (req, res) => {
  res.json(getLedger());
});

// Containment Trigger (Simulating IBM Bob executing via Bob Shell)
app.post('/api/containment/execute', (req, res) => {
  const { nodeId } = req.body;
  console.log(`[IBM Bob Shell] Executing MCP script: Isolate target ${nodeId}...`);
  res.json({
    status: 'CONTAINED',
    message: `Node ${nodeId || 'Telemetry-4'} successfully isolated. External traffic severed via Bob automated subagent.`,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Defense Ingestion Node running on http://localhost:${PORT}`);
});