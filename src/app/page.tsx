import Image from "next/image";
import ItineraryMap from "../components/ItineraryMap";
import LogoEcoNexora from "../components/logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <LogoEcoNexora />
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
          <h3 className="text-4xl font-semibold">Le covoiturage simple et efficace, pensé pour vos collaborateurs.</h3>
        </section>

        {/* Route/Progress Section */}
        <section className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
          <div className="w-full mb-4">
            <ItineraryMap />
          </div>
          <div className="text-lg font-medium text-black">
            Nicolas @ 45 Rue A Sm
          </div>
        </section>

        {/* Entreprise Bus ds 5min Section */}
        <section className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
          <div className="text-xl font-bold mb-2 text-black">Entreprise</div>
          <div className="text-lg text-black">Bus ds 5min</div>
        </section>

        {/* Tiens toi prêt Section */}
        <section className="text-2xl font-semibold mb-8 text-center">
          <p>Tiens toi prêt</p>
        </section>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full max-w-4xl border-t border-gray-200 py-4 flex justify-around items-center mt-auto">
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors">
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
          {/* Euro sign for Économie */}
          <span className="text-2xl">&#8364;</span> {/* Euro sign */}
          <span className="text-sm">Économie</span>
        </button>
        <button className="flex flex-col items-center p-2 rounded-md hover:bg-gray-200 transition-colors">
          {/* Bust-up silhouette for Profil */}
          <span className="text-2xl">&#128100;</span> {/* Bust in silhouette emoji */}
          <span className="text-sm">Profil</span>
        </button>
      </footer>
    </div>
  );
}
