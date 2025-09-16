import Image from "next/image";

export default function ItineraryMap() {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer relative transition-all duration-300 hover:h-96">
      <Image
        src="/reseau mistral.jpg"
        alt="Map with Itinerary"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
