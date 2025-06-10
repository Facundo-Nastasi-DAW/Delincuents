import Image from "next/image";

export const PlantImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image src={src} alt={alt} width={300} height={300} className="rounded-xl object-cover" />
);
