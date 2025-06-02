// src/pages/api/save-tjm.ts
import { PrismaClient } from '@prisma/edge';

import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { email, objectifMensuel, joursParMois, tjmCalcule } = req.body;

    if (!email || !objectifMensuel || !joursParMois || !tjmCalcule) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    const freelance = await prisma.freelance.upsert({
      where: { email },
      update: { objectifMensuel, joursParMois, tjmCalcule },
      create: { email, objectifMensuel, joursParMois, tjmCalcule },
    });

    res.status(200).json({ message: 'TJM sauvegardé', data: freelance });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Prisma error:', error.message, error.stack);
    }
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
