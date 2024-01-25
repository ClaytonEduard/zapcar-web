import Container from "@/app/atoms/container";
import Header from "../../molecules/header/index";

type Props = {
  title: string;
  backTo: () => void;
};

export default function OrganisHeader({ title, backTo }: Props) {
  return (
    <Container width={350} height={32} color="secondary">
      <Header title={title} backTo={backTo}></Header>
    </Container>
  );
}
