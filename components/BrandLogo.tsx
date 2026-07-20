import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export default function BrandLogo({
  className = "h-11 w-auto rounded-md object-contain sm:h-12",
  height = 56,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * (160 / 56));

  return (
    <Image
      src="/logo.png"
      alt="Татьяна Яновская — разработчик ПО"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
