import Image from "next/image";

import imageFile from "../../../../public/logo.svg";

import Link from "next/link";

const icon = {
  src: imageFile,
  alt: "Logo",
};

type Props = {
  value: string;
};

export default function IconLogo({ value }: Props) {
  return (
    <Link href={value}>
      <Image src={icon.src} alt={icon.alt} width={100} height={100} />,
    </Link>
  );
}
