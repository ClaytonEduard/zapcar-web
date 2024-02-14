import Container from "@/app/atoms/container";
import InputTel from "@/app/molecules/input_Tel";
import InputText from "@/app/molecules/input_Text";
import ButtonMolec from "@/app/molecules/button";
import InputSel from "@/app/molecules/input_sel";

type Props = {
  titleNome: string;
  eventNome: () => void;
  valueNome: string;
  titleCel: string;
  eventCel: () => void;
  valueCel: string;
  titleSel: string;
  valueSel: Array<string>;
  eventSel: () => void;
  titleCidade: string;
  valueCidade: string;
  titleButton: string;
  eventBut: () => void;
};

export default function BodySelect({
  titleNome,
  eventNome,
  valueNome,
  titleCel,
  eventCel,
  valueCel,
  titleSel,
  titleCidade,
  titleButton,
  eventBut,
  valueCidade,
}: Props) {
  return (
    <Container color="secondary" height={450} width={600}>
      <div>
        <InputText title={titleNome} event={eventNome} value={valueNome} />
        <InputTel title={titleCel} event={eventCel} value={valueCel} />

        <div style={{ width: "100%" }}>
          <InputSel
            title={titleSel}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          <InputText
            title={titleCidade}
            event={function (): void {
              throw new Error("Function not implemented.");
            }}
            value={valueCidade}
          ></InputText>
        </div>

        <ButtonMolec value={titleButton} event={eventBut}></ButtonMolec>
      </div>
    </Container>
  );
}
