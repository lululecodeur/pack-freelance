export default function Dashboard() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎯 Espace Freelance</h1>

      <p className="mb-8 text-gray-700">
        Bienvenue dans votre espace personnel. Ici, vous pouvez générer vos documents juridiques et
        gérer votre activité freelance en quelques clics.
      </p>

      <div className="grid gap-6">
        <a
          href="#"
          className="block p-6 rounded-xl shadow-md bg-white border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">📋 CGV / Mentions légales</h2>
          <p className="text-gray-600">
            Générez automatiquement vos mentions légales conformes RGPD.
          </p>
        </a>

        <a
          href="/offre"
          className="block p-6 rounded-xl shadow-md bg-white border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">💰 Générateur de Devis IA</h2>
          <p className="text-gray-600">Créez vos devis professionnels en quelques secondes.</p>
        </a>

        <a
          href="#"
          className="block p-6 rounded-xl shadow-md bg-white border hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">📝 Contrat Freelance</h2>
          <p className="text-gray-600">Un contrat type adapté à vos prestations.</p>
        </a>
      </div>
    </main>
  );
}
