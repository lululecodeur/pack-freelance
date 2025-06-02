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

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log('⛔ Origin non autorisée:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.use(bodyParser.json());

app.options('*', cors()); // OPTIONS global

app.post('/api/save-tjm', async (req, res) => {
  console.log('📨 POST reçu:', req.body);
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
  res.send('🎉 Backend pack-freelance opérationnel !');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Serveur live sur http://localhost:${PORT}`);
});
