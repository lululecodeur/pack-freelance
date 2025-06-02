import Head from 'next/head';

export default function Offer() {
  return (
    <>
      <Head>
        <title>Pack Freelance Complet</title>
        <meta name="description" content="Tous vos documents juridiques en 5 minutes" />
      </Head>

      <div className="bg-gray-50">
        <div>
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary to-purple-700 text-white">
            <div className="container mx-auto px-6 py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 leading-tight">🚀 Pack Freelance Complet</h1>
                <p className="text-xl mb-8 opacity-90">
                  Tous vos documents juridiques générés par IA en quelques clics
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <p>⏰ Plus besoin de payer 500€+ d&apos;avocat</p>

                  <p className="text-lg mt-2 opacity-90">
                    Obtenez tous vos documents professionnels en 5 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* What's Included Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                🎯 Ce que vous obtenez
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">CGU/CGV Personnalisées</h3>
                  <p className="text-gray-800 mb-4">
                    Conditions générales d&apos;utilisation et de vente adaptées à votre activité
                    freelance, générées par IA.
                  </p>

                  <ul className="text-sm text-gray-800 space-y-2">
                    <li>✓ Conformes au droit français</li>
                    <li>✓ Personnalisées selon votre secteur</li>
                    <li>✓ Mises à jour automatiques</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Contrats Freelance</h3>
                  <p className="text-gray-800 mb-4">
                    Modèles de contrats prêts à l&apos;emploi pour sécuriser vos missions.
                  </p>
                  <ul className="text-sm text-gray-800 space-y-2">
                    <li>✓ Contrat de prestation de service</li>
                    <li>✓ Contrat de développement web</li>
                    <li>✓ Contrat de conseil/formation</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Mentions Légales</h3>
                  <p className="text-gray-800 mb-4">
                    Mentions légales complètes pour votre site web et communications.
                  </p>
                  <ul className="text-sm text-gray-800 space-y-2">
                    <li>✓ RGPD compliant</li>
                    <li>✓ Politique de confidentialité</li>
                    <li>✓ Cookies et tracking</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Générateur de Devis IA</h3>
                  <p className="text-gray-800 mb-4">
                    Créez des devis professionnels en quelques secondes avec l&apos;IA.
                  </p>
                  <ul className="text-sm text-gray-800 space-y-2">
                    <li>✓ Templates personnalisables</li>
                    <li>✓ Calculs automatiques</li>
                    <li>✓ Export PDF professionnel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">💎 Choisissez votre accès</h2>
                <p className="text-xl text-gray-800">Abonnement ou pack à vie</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Option Abonnement */}
                <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-600 p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-md">
                      🔁 Accès mensuel
                    </span>
                  </div>
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-purple-600 mb-2">9€/mois</div>
                    <div className="text-gray-800">Sans engagement</div>
                  </div>
                  <ul className="space-y-4 mb-8 text-gray-800">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Accès complet aux 4 produits</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Mises à jour et nouveautés incluses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Résiliation libre à tout moment</span>
                    </li>
                  </ul>
                  <a
                    href="https://buy.stripe.com/6oU00i2L17eD90qdUl6AM00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    📆 S’abonner maintenant
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Paiement sécurisé par Stripe • Sans engagement
                  </p>
                </div>

                {/* Option Pack à vie */}
                <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-600 p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-md">
                      🔥 Offre à vie
                    </span>
                  </div>
                  <div className="text-center mb-8">
                    <div className="text-gray-400 text-lg line-through mb-2">197€</div>
                    <div className="text-5xl font-bold text-purple-600 mb-2">67€</div>
                    <div className="text-gray-900 font-medium">Paiement unique • Accès à vie</div>
                  </div>
                  <ul className="space-y-4 mb-8 text-gray-800">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Pack complet 4 produits</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Génération IA instantanée</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Mises à jour incluses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span>Support email 7j/7</span>
                    </li>
                  </ul>
                  <a
                    href="https://buy.stripe.com/9B6dR84T9fL96Si9E56AM01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🚀 Acheter le Pack à Vie
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Paiement sécurisé par Stripe • Sans abonnement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                💪 Pourquoi choisir notre pack ?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gain de temps</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fini les heures perdues à chercher des modèles ou consulter un avocat.
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Économies énormes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Évitez les 500 à 1000€+ de frais juridiques pour ces documents.
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité juridique</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Documents conformes au droit français et régulièrement mis à jour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                💬 Ce qu&apos;en pensent les freelances
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-900 font-semibold">Marie, Dev Web</h4>
                      <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    “Incroyable ! J&apos;ai économisé 800€ d&apos;avocat et j&apos;ai eu tous mes
                    documents en 10 minutes. Le générateur de devis est un game-changer !”
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold">
                      T
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-900 font-semibold">Thomas, Consultant</h4>
                      <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    “Parfait pour débuter en freelance ! Tout est clair, professionnel et conforme.
                    Je recommande à 100%.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                ❓ Questions fréquentes
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Les documents sont-ils vraiment conformes ?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Oui, tous nos modèles sont créés par des juristes et régulièrement mis à jour
                    selon la législation française.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Puis-je personnaliser les documents ?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Absolument ! L&apos;IA adapte automatiquement les documents selon votre secteur
                    d&apos;activité et vos besoins spécifiques.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Y a-t-il des frais cachés ?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Non, c&apos;est soit un paiement unique de 67€, soit un abonnement résiliable à
                    tout moment. Aucun frais supplémentaire, jamais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="py-16 bg-gradient-to-br from-purple-700 to-primary text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6">
                🚀 Prêt à professionnaliser votre activité de freelance ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez plus de <span className="font-semibold text-white">1000 freelances</span>{' '}
                conquis
              </p>
              <button
                id="buyButtonFinal"
                className="bg-white text-purple-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Obtenir le Pack Complet – 67€
              </button>
              <p className="text-sm opacity-80 mt-4">💳 Paiement sécurisé</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 text-center">
              <p>© 2025 Pack Freelance Complet. Tous droits réservés.</p>
              <div className="mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  CGV
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </footer>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n        @keyframes fadeInUp {\n            from {\n                opacity: 0;\n                transform: translateY(30px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        .animate-fadeInUp {\n            animation: fadeInUp 0.6s ease-out forwards;\n        }\n\n        /* Smooth hover effects */\n        .hover\\:scale-105:hover {\n            transform: scale(1.05);\n        }\n\n        /* Custom gradient animations */\n        .bg-gradient-to-r {\n            background-size: 200% 200%;\n            animation: gradientShift 3s ease infinite;\n        }\n\n        @keyframes gradientShift {\n            0%, 100% {\n                background-position: 0% 50%;\n            }\n            50% {\n                background-position: 100% 50%;\n            }\n        }\n    ',
            }}
          />
        </div>
        ;
      </div>
    </>
  );
}
