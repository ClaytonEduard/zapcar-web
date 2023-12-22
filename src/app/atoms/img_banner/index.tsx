import Image from "next/image";

import imageFile from "../../../../public/img.svg";

type Props = {
  width: number;
  height: number;
};

const img = {
  src: imageFile,
  alt: "Banner",
};

export default function ImgBanner({ width, height }: Props) {
  return <Image src={img.src} alt={img.alt} width={width} height={height} />;
}
