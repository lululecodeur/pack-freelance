// src/pages/api/save-tjm.ts
import { PrismaClient } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // On accepte seulement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, objectifMensuel, joursParMois, tjmCalcule } = req.body;

    // Vérifications basiques
    if (!email || !objectifMensuel || !joursParMois || !tjmCalcule) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    // Sauvegarde en base (ou mise à jour si l'email existe déjà)
    const freelance = await prisma.freelance.upsert({
      where: { email },
      update: {
        objectifMensuel,
        joursParMois,
        tjmCalcule,
      },
      create: {
        email,
        objectifMensuel,
        joursParMois,
        tjmCalcule,
      },
    });

    console.log('✅ Freelance sauvegardé:', freelance);

    res.status(200).json({
      success: true,
      message: 'TJM sauvegardé avec succès !',
      data: freelance,
    });
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
