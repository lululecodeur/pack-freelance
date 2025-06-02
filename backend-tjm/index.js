const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

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
    console.error('❌ Erreur détaillée :', err); // ← affiche le vrai problème
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('🚀 Backend TJM opérationnel');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
