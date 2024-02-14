import BodyInput from "@/app/organisms/bodyInput";
import OrganisHeader from "../../organisms/header";
import OrgLogo from "../../organisms/logo";

type Props = {
  titleHeader: string;
  eventBackHeader: () => void;
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

export default function TemplateInput({
  titleHeader,
  eventBackHeader,
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
    <div>
      <OrganisHeader title={titleHeader} backTo={eventBackHeader} />
      <OrgLogo />
      <BodyInput
        titleModelo={titleModelo}
        eventModelo={eventModelo}
        valueModelo={valueModelo}
        titlePlaca={titlePlaca}
        eventPlaca={eventPlaca}
        valuePlaca={valuePlaca}
        titleCor={titleCor}
        valueCor={valueCor}
        eventCor={eventCor}
        titleButton1={titleButton1}
        eventBut1={eventBut1}
        titleButton2={titleButton2}
        eventBut2={eventBut2}
      />
    </div>
  );
}
