import Image from "next/image";

import imageFile from "../../../../public/back.svg";
import Link from "next/link";

const icon = {
  src: imageFile,
  alt: "icon voltar",
};

type Props = {
  value: string;
  destiny: "_parent" | "_blank"; // meio de renderizar
};

export default function IconBack({ value, destiny }: Props) {
  return (
    <Link href={value} target={destiny}>
      <Image src={icon.src} alt={icon.alt} width={100} height={100} />;
    </Link>
  );
}
