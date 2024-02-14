import BodyInput from "@/app/organisms/bodyInput";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/BodyInput",
  component: BodyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["organisms"],
  argTypes: {},
  render: (props: any) => {
    return (
      <div
        style={{
          fontFamily: "Inter",
          backgroundColor: "lightgrey",
          width: "90vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {<BodyInput {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof BodyInput>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar
export const BodyInpu: Story = {
  args: {
    titleModelo: "Nome",
    valueModelo: "",
    titlePlaca: "Placa",
    valuePlaca: "",
    titleCor: "Cor",
    valueCor: "Vermelho",
    titleButton1: "Ligar",
    eventBut1: () => {
      alert("Enviou 1");
    },
    titleButton2: "Mensagem",
    eventBut2() {
      alert("Enviou 2");
    },
  },
};
