import Container from "@/app/atoms/container";
import Input from "@/app/atoms/input";
import Label from "@/app/atoms/label";

type Props = {
  title: string;
  event: () => void;
  value: string;
};

export default function InputText({ title, event, value }: Props) {
  return (
    <Container width={300} height={60} color="secondary">
      <div style={{ width: 200 }}>
        <Label value={title} />
        <Input value={value} changeValue={event} textAlign="left" type="text" />
      </div>
    </Container>
  );
}
