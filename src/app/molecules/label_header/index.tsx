import Container from "@/app/atoms/container";
import Label from "@/app/atoms/label";

type Props = {
  value: string;
};

export default function LabelHeader({ value }: Props) {
  return (
    <Container color="secondary" width={800} height={32}>
      <Label value={value}></Label>
    </Container>
  );
}
