// src/pages/api/save-tjm.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('✅ API appelée');
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  return res.status(200).json({ message: 'API OK sans Prisma' });
}
