import Image from "next/image";

import imageFile from "../../../../public/msn.svg";

const icon = {
  src: imageFile,
  alt: "Mensagem",
};

export default function IconMsn() {
  return <Image src={icon.src} alt={icon.alt} width={100} height={100} />;
}
