import Container from "@/app/atoms/container";
import IconBack from "@/app/atoms/icon_back";

type Props = {
  oncliCk: () => void;
};

export default function Back({ oncliCk }: Props) {
  return (
    <Container color="secondary" width={32} height={32}>
      <IconBack width={32} onClick={oncliCk}></IconBack>
    </Container>
  );
}
