import Container from "@/app/atoms/container";
import Header from "../../molecules/header/index";

type Props = {
  title: string;
  backTo: () => void;
};

export default function OrganisHeader({ title, backTo }: Props) {
  return (
      <Header title={title} backTo={backTo}></Header>
  );
}
