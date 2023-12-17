import Image from "next/image";

import imageFile from "../../../../public/phone.svg";

const icon = {
  src: imageFile,
  alt: "Phone",
};

export default function IconPhone() {
  return <Image src={icon.src} alt={icon.alt} width={100} height={100} />;
}
