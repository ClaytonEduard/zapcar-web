import TemplateInput from "@/app/template/templateInput";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Template/TemplateInput",
  component: TemplateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["templateInput"],
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
        {<TemplateInput {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof TemplateInput>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar
export const TemplateInpu: Story = {
  args: {
    titleHeader: "Resultado",
    eventBackHeader() {
      alert("Voltar");
    },
    titleModelo: "Modelo",
    titleCor: "Cor",
    valueCor: "Preto",
    titlePlaca: "Placa",
    valuePlaca: "GMS-3561",
    valueModelo: "GM",
    titleButton1: "Ligar",
    titleButton2: "Mensagem",
    eventBut1() {
      alert("Botao 1");
    },
    eventBut2() {
      alert("Botao 2");
    },
  },
};
