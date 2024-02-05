import BodySelect from "@/app/organisms/bodyselect";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/BodySelect",
  component: BodySelect,
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
        {<BodySelect {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof BodySelect>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar
export const BodySelec: Story = {
  args: {
    titleNome: "Nome",
    titleButton: "Enviar",
    titleCel: "Telefone",
    titleSel: "Estado:",
    valueCel: "64992118865",
    valueNome: "Clayton",
    valueCidade: "",
    eventBut: () => {
      alert("Enviou");
    },
  },
};
