import Image from "next/image";

import imageFile from "../../../../public/search.svg";

const icon = {
  src: imageFile,
  alt: "Pesquisar",
};

export default function IconSearch() {
  return <Image src={icon.src} alt={icon.alt} width={100} height={100} />;
}
