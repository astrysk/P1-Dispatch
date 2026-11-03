require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const app = express();
const port = Number(process.env.PORT || 4000);
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/api/health', async (_req, res) => {
  try { await pool.query('SELECT 1'); res.json({ ok: true, database: 'connected' }); }
  catch (e) { res.status(503).json({ ok: false, error: 'Database unavailable' }); }
});
app.get('/api/state', async (_req, res) => {
  try {
    const r = await pool.query('SELECT state FROM dispatch_app_state WHERE id = 1');
    if (!r.rowCount) return res.status(200).json(null);
    res.json(r.rows[0].state);
  } catch (e) { console.error(e); res.status(503).json({ error: 'Could not load Dispatch data. Check PostgreSQL and DATABASE_URL.' }); }
});
app.put('/api/state', async (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) return res.status(400).json({ error: 'Expected a JSON object.' });
  try {
    await pool.query(`INSERT INTO dispatch_app_state (id, state, updated_at) VALUES (1, $1::jsonb, NOW()) ON CONFLICT (id) DO UPDATE SET state = EXCLUDED.state, updated_at = NOW()`, [JSON.stringify(req.body)]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(503).json({ error: 'Could not save Dispatch data. Check PostgreSQL and DATABASE_URL.' }); }
});
async function start() {
  await pool.query(`CREATE TABLE IF NOT EXISTS dispatch_app_state (id integer PRIMARY KEY CHECK (id = 1), state jsonb NOT NULL, updated_at timestamptz NOT NULL DEFAULT NOW())`);
  app.listen(port, () => console.log(`Dispatch running at http://localhost:${port}`));
}
start().catch(e => { console.error('Startup failed. Check DATABASE_URL and PostgreSQL.', e.message); process.exit(1); });
