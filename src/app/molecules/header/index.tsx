import Container from "@/app/atoms/container";
import Back from "../back";
import LabelHeader from "../label_header";

type Props = {
  title: string;
  backTo: () => void;
};

export default function Header({ title, backTo }: Props) {
  return (
    <Container color="secondary" width={800} height={32}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Back oncliCk={backTo} />
        <LabelHeader value={title}></LabelHeader>
      </div>
    </Container>
  );
}
