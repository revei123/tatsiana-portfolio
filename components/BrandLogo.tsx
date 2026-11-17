import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className = "h-auto w-[132px] sm:w-[168px]",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Татьяна Яновская"
      width={640}
      height={326}
      priority={priority}
      sizes="200px"
      className={className}
    />
  );
}
