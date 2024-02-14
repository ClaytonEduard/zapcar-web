import TemplateSelect from "@/app/template/templateSelect";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Template/TemplateSelect",
  component: TemplateSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["TemplateSelect"],
  argTypes: {},
  render: (props: any) => {
    return (
      <div
        style={{
          fontFamily: "Inter",
          backgroundColor: "lightgrey",
          width: "70vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {<TemplateSelect {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof TemplateSelect>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar
export const TemplateSelec: Story = {
  args: {
    titleHeader: "Resultado",
    eventBackHeader() {
      alert("Voltar");
    },
    titleNome: "Nome",
    valueNome: "João",
    titleCel: "Telefone",
    valueCel: "9999-5265",
    titleSel: "Estado ",
    titleCidade: "Cidade",
    titleButton: "Salvar",
    valueCidade: "",
    eventSel() {},
    eventBut() {},
    eventCel() {},
    eventNome() {},
    valueSel: [],
  },
};
