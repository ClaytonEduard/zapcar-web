import Image from "next/image";

import imageFile from "../../../../public/img.svg";

const img = {
  src: imageFile,
  alt: "Banner",
};

export default function ImgBanner() {
  return <Image src={img.src} alt={img.alt} width={400} height={600} />;
}
