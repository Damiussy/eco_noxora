import Image from "next/image";

export default function LogoEcoNexora() {
  return (
    <div className="size-[100px] rounded-full overflow-hidden relative">
      <Image
        src="/econoxora.png"
        alt="EcoNexora logo"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
