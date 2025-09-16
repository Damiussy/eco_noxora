import Image from "next/image";
import ItineraryMap from "../components/ItineraryMap";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          {/* Back arrow placeholder */}
          <span className="text-2xl">&#8592;</span>
          <h1 className="text-2xl font-bold">R3s3@u-G3S</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Plus icon placeholder */}
          <span className="text-2xl">+</span>
          {/* Menu/More icon placeholder */}
          <span className="text-2xl">&#8942;</span>
        </div>
      </header>

      <main className="flex flex-col items-center flex-grow w-full max-w-4xl py-8">
        {/* EcoNexor and Bienvenu section */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2">EcoNexor</h1>
          <h2 className="text-4xl font-semibold">Bienvenu</h2>
        </section>

        {/* Route/Progress Section */}
        <section className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
          <div className="flex items-center justify-between mb-4 w-full px-4">
            {/* Placeholder for route path */}
            <ItineraryMap />
            {/* Current location pin placeholder */}
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-xs"></div>
          </div>
          <div className="text-lg font-medium">
            Nicolas @ 45 Rue A Sm
          </div>
        </section>

        {/* Entreprise Bus ds 5min Section */}
        <section className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
          <div className="text-xl font-bold mb-2">Entreprise</div>
          <div className="text-lg">Bus ds 5min</div>
        </section>

        {/* Tiens toi prêt Section */}
        <section className="text-2xl font-semibold mb-8 text-center">
          <p>Tiens toi prêt</p>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full max-w-4xl border-t border-gray-200 py-4 flex justify-around items-center mt-auto">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
          <span className="text-sm">Hub</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
          <span className="text-sm">Covoiturage</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
          <span className="text-sm">Économie</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
          <span className="text-sm">Profil</span>
        </div>
      </footer>
    </div>
  );
}
