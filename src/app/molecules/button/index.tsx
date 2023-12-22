import Button from "@/app/atoms/button";
import Container from "@/app/atoms/container";

type Props = {
  value: string;
  event: () => void;
};

export default function ButtonMolec({ event, value }: Props) {
  return (
    <Container width={350} height={60} color="secondary">
      <Button value={value} onClick={event} />
    </Container>
  );
}
