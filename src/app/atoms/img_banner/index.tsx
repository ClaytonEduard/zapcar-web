import Image from "next/image";

import imageFile from "../../../../public/img.svg";

type Props = {
  width: number;
};

const img = {
  src: imageFile,
  alt: "Banner",
};

export default function ImgBanner({ width }: Props) {
  return <Image src={img.src} alt={img.alt} width={width} height={width} />;
}
