import Image from "next/image";

import imageFile from "../../../../public/logo.svg";

import Link from "next/link";

const icon = {
  src: imageFile,
  alt: "Logo",
};

type Props = {
  width: number;
};

export default function IconLogo({ width }: Props) {
  return <Image src={icon.src} alt={icon.alt} width={width} height={width} />;
}
