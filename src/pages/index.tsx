// src/pages/index.tsx
'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  // États pour stocker les valeurs du formulaire
  const [objectifMensuel, setObjectifMensuel] = useState<number>(0);
  const [joursParMois, setJoursParMois] = useState<number>(20);
  const [tjmCalcule, setTjmCalcule] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fonction qui calcule le TJM en temps réel
  const calculerTJM = () => {
    if (objectifMensuel > 0 && joursParMois > 0) {
      const tjm = Math.round(objectifMensuel / joursParMois);
      setTjmCalcule(tjm);
    } else {
      setTjmCalcule(0);
    }
  };

  // Fonction pour sauvegarder en vraie base de données
  const handleSauvegarder = async () => {
    if (!email) {
      alert('Merci de renseigner ton email !');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://pack-freelance-production.up.railway.app/api/save-tjm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            objectifMensuel,
            joursParMois,
            tjmCalcule,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          `Merci ${email} ! Ton TJM de ${tjmCalcule}€/jour a été sauvegardé en base de données.`
        );
        setShowModal(false);
        setEmail(''); // Reset l'email
      } else {
        alert(`Erreur: ${data.error}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la sauvegarde');
    }

    setIsLoading(false);
  };

  // Recalculer à chaque changement
  useEffect(() => {
    calculerTJM();
  }, [objectifMensuel, joursParMois]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 text-gray-900">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculateur TJM</h1>
          <p className="text-gray-600">Calcule ton taux journalier selon tes objectifs</p>
        </div>

        {/* Formulaire */}
        <div className="space-y-6">
          {/* Objectif mensuel */}
          <div>
            <label htmlFor="objectif" className="block text-sm font-medium text-gray-700 mb-2">
              Objectif mensuel (€)
            </label>
            <input
              type="number"
              id="objectif"
              value={objectifMensuel || ''}
              onChange={e => setObjectifMensuel(Number(e.target.value))}
              placeholder="Ex: 5000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          {/* Jours travaillés */}
          <div>
            <label htmlFor="jours" className="block text-sm font-medium text-gray-700 mb-2">
              Jours travaillés par mois
            </label>
            <input
              type="number"
              id="jours"
              value={joursParMois}
              onChange={e => setJoursParMois(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          {/* Résultat */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-center">
              <p className="text-sm text-blue-600 mb-1">Ton TJM recommandé :</p>
              <p className="text-3xl font-bold text-blue-900">
                {tjmCalcule}€ <span className="text-lg font-normal">/jour</span>
              </p>
            </div>
          </div>

          {/* Bouton pour sauvegarder */}
          {tjmCalcule > 0 && (
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              💾 Sauvegarder mon TJM
            </button>
          )}
        </div>

        {/* Explication */}
        <div className="mt-8 text-xs text-gray-500 text-center">
          <p>Le calcul est simple : Objectif mensuel ÷ Jours travaillés = TJM</p>
        </div>
      </div>

      {/* Modal pour l'email */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Sauvegarde ton TJM</h2>

            <div className="mb-4 p-3 bg-blue-50 rounded-lg text-center">
              <p className="text-blue-900 font-semibold">TJM calculé : {tjmCalcule}€/jour</p>
              <p className="text-blue-700 text-sm">
                Pour {objectifMensuel}€/mois sur {joursParMois} jours
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ton email pour recevoir le résultat :
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ton@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleSauvegarder}
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
