export const config = {
  runtime: 'nodejs',
};

import { PrismaClient } from '@/../prisma/edge';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('📦 DATABASE_URL =', process.env.DATABASE_URL);

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
  } catch (error) {
    const err = error as Error;
    console.error('❌ Prisma error:', err.message, err.stack);
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
}
