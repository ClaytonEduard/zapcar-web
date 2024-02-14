import Container from "../../atoms/container";
import BodySelect from "../../organisms/bodyselect";
import OrganisHeader from "../../organisms/header";
import OrgLogo from "../../organisms/logo";

type Props = {
  titleHeader: string;
  eventBackHeader: () => void;
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

export default function TemplateSelect({
  titleHeader,
  eventBackHeader,
  titleNome,
  eventNome,
  valueNome,
  titleCel,
  eventCel,
  valueCel,
  titleSel,
  valueSel,
  eventSel,
  titleCidade,
  titleButton,
  eventBut,
  valueCidade,
}: Props) {
  return (
    <div>
      <OrganisHeader title={titleHeader} backTo={eventBackHeader} />
      <OrgLogo />
      <BodySelect
        titleNome={titleNome}
        eventNome={eventNome}
        valueNome={valueNome}
        titleCel={titleCel}
        eventCel={eventCel}
        valueCel={valueCel}
        titleSel={titleSel}
        valueSel={valueSel}
        eventSel={eventSel}
        titleCidade={titleCidade}
        valueCidade={valueCidade}
        titleButton={titleButton}
        eventBut={eventBut}
      />
    </div>
  );
}
