import Image from "next/image";

export default function ItineraryMap() {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 relative">
      <Image
        src="/reseau mistral.jpg"
        alt="Map with Itinerary"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
