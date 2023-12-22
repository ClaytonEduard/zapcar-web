import Container from "@/app/atoms/container";
import ImgBanner from "@/app/atoms/img_banner";

export default function Banner() {
  return (
    // ver com o Alessandro pois não está obedecendo o tambenho da Imagem
    /** o tamano do banner e 400 p 840 */
    <Container color="secondary" width={400} height={840}>
      <ImgBanner width={400} height={840}></ImgBanner>
    </Container>
  );
}
