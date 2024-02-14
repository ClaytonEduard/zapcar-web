import Container from "@/app/atoms/container";
import InputText from "@/app/molecules/input_Text";
import ButtonMolec from "@/app/molecules/button";

type Props = {
  titleModelo: string;
  eventModelo: () => void;
  valueModelo: string;
  titlePlaca: string;
  eventPlaca: () => void;
  valuePlaca: string;
  titleCor: string;
  valueCor: string;
  eventCor: () => void;
  titleButton1: string;
  eventBut1: () => void;
  titleButton2: string;
  eventBut2: () => void;
};

export default function BodyInput({
  titleModelo,
  eventModelo,
  valueModelo,
  titlePlaca,
  eventPlaca,
  valuePlaca,
  titleCor,
  valueCor,
  eventCor,
  titleButton1,
  eventBut1,
  titleButton2,
  eventBut2,
}: Props) {
  return (
    <Container color="secondary" height={450} width={600}>
      <div>
        <InputText
          title={titleModelo}
          event={eventModelo}
          value={valueModelo}
        />
        <InputText title={titlePlaca} event={eventPlaca} value={valuePlaca} />
        <InputText title={titleCor} event={eventCor} value={valueCor} />

        <ButtonMolec value={titleButton1} event={eventBut1}></ButtonMolec>
        <ButtonMolec value={titleButton2} event={eventBut2}></ButtonMolec>
      </div>
    </Container>
  );
}
