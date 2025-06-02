const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3002',
  'https://pack-freelance.vercel.app',
];

// Middleware CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Body parser
app.use(bodyParser.json());

// Preflight OPTIONS handler
app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.post('/api/save-tjm', async (req, res) => {
  const { email, objectifMensuel, joursParMois, tjmCalcule } = req.body;

  if (!email || !objectifMensuel || !joursParMois || !tjmCalcule) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  try {
    const result = await prisma.freelance.upsert({
      where: { email },
      update: { objectifMensuel, joursParMois, tjmCalcule },
      create: { email, objectifMensuel, joursParMois, tjmCalcule },
    });

    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error('❌ Erreur Prisma :', err);
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('✅ Backend opérationnel');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
