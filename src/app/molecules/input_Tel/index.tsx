import Container from "@/app/atoms/container";
import Input from "@/app/atoms/input";
import Label from "@/app/atoms/label";

type Props = {
  title: string;
  event: () => void;
  value: string;
};

export default function InputTel({ title, event, value }: Props) {
  return (
    <Container width={350} height={60} color="secondary">
      <div style={{ width: "100%" }}>
        <Label value={title} />
        <Input value={value} changeValue={event} type="tel" />
      </div>
    </Container>
  );
}
