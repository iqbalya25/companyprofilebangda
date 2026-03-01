import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
}

export default function Logo({ size = 36, showText = true, textSize = "text-[14px]" }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/favicon.ico"
        alt="Bangda Bertiga Karya Logo"
        width={size}
        height={size}
        className="rounded"
        priority
      />
      {showText && (
        <div className={`font-display font-bold ${textSize} leading-tight text-white tracking-wide`}>
          Bangda Bertiga<br />
          <span className="text-[#F5A623]">Karya</span>
        </div>
      )}
    </div>
  );
}
