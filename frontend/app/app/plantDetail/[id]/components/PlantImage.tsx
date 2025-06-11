import Image from 'next/image';

export const PlantImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={400} // más ancho
    height={400}
    className="rounded-2xl object-cover shadow-lg"
  />
);
