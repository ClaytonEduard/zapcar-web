import Container from "@/app/atoms/container";
import IconUser from "@/app/atoms/icon_user";

export default function Avatar() {
  return (
    <Container color="primary" width={60} height={60}>
      <IconUser width={32}></IconUser>
    </Container>
  );
}
