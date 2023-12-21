import Image from "next/image";

import imageFile from "../../../../public/user.svg";

const icon = {
  src: imageFile,
  alt: "User",
};

export default function IconUser() {
  return <Image src={icon.src} alt={icon.alt} width={100} height={100} />;
}
