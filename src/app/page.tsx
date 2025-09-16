import Image from "next/image";
import ItineraryMap from "../components/ItineraryMap";
import LogoEcoNexora from "../components/logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Header (Top Status Bar) */}
      <header className="w-full max-w-4xl flex justify-between items-center py-2 text-sm text-gray-700">
        <div className="font-bold">9:30</div>
        <div className="flex items-center space-x-2">
          {/* Placeholder for network/battery icons */}
          <span className="w-4 h-4 bg-gray-300 rounded-sm"></span>
          <span className="w-4 h-4 bg-gray-300 rounded-sm"></span>
        </div>
      </header>

      <main className="flex flex-col items-center flex-grow w-full max-w-4xl py-8">
        {/* EcoNexor Title and Slogan */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2">EcoNexor</h1>
          <h2 className="text-xl font-semibold text-gray-600">Le covoiturage simple et efficace, pensé pour vos collaborateurs.</h2>
        </section>

        {/* Covoiturage avec Gladys Section */}
        <section className="w-full bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex items-center mb-4">
            {/* Gladys's Profile Picture Placeholder */}
            <div className="w-16 h-16 rounded-full bg-pink-300 mr-4 flex-shrink-0"></div>
            <div>
              <p className="text-lg font-bold">Covoiturage avec Gladys</p>
              <p className="text-md text-gray-600">Elle arrive bientôt, prépare toi</p>
            </div>
          </div>

          {/* Itinerary Map Section - now nested */}
          <div className="w-full mb-4">
            <ItineraryMap />
          </div>

          {/* Direction and Time */}
          <div className="mb-4 text-black">
            <p className="text-sm">Direction : Agence de la Bellenergie</p>
            <p className="text-sm">Temps de trajet : 5 minutes</p>
          </div>

          {/* Emissions de Co² évitées */}
          <div className="w-full bg-green-200 text-green-800 text-center py-2 rounded-lg font-bold">
            Emissions de Co² évitées : - 2 kg
          </div>
        </section>

        {/* Bus de l'entreprise Section */}
        <section className="w-full bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-bold text-black">Bus de l'entreprise</div>
            <span className="text-2xl text-gray-500">&#8942;</span> {/* More icon */}
          </div>
          <div className="text-lg text-black">Votre bus est à 25 minutes de chez vous</div>
        </section>

        {/* Passaz au Noxora+ Section */}
        <section className="w-full bg-white p-6 rounded-xl shadow-lg mb-8 flex justify-between items-center">
          <div className="flex items-center">
            {/* Profile Icon Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div>
            <p className="text-lg font-bold">Passez au Noxora+</p>
          </div>
          {/* Noxora+ Logo Placeholder */}
          <div className="w-12 h-12 bg-gray-400 rounded-md"></div>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full max-w-4xl border-t border-gray-200 py-4 flex justify-around items-center mt-auto">
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors border-b-2 border-green-500">
          {/* House icon for Hub */}
          <span className="text-2xl">&#127968;</span> {/* House emoji */}
          <span className="text-sm">Hub</span>
        </button>
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors">
          {/* Car icon for Covoiturage */}
          <span className="text-2xl">&#128663;</span> {/* Car emoji */}
          <span className="text-sm">Covoiturage</span>
        </button>
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors">
          {/* Bus icon for Bus */}
          <span className="text-2xl">&#128652;</span> {/* Bus emoji */}
          <span className="text-sm">Bus</span>
        </button>
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors">
          {/* Leaf icon for NextRest */}
          <span className="text-2xl">&#127810;</span> {/* Leaf emoji */}
          <span className="text-sm">NextRest</span>
        </button>
      </footer>
    </div>
  );
}
