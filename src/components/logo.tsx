import Image from "next/image";

export default function LogoEcoNexora() {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 relative">
      <Image
        src="/econoxora.png"
        alt="EcoNexora logo"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
