import ButtonMolec from "@/app/molecules/button";
import InputTel from "@/app/molecules/input_tel";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/ButtonMolecl",
  component: ButtonMolec,
  parameters: {
    layout: "centered",
  },
  tags: ["molecules"],
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
        {<ButtonMolec {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof ButtonMolec>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o ButtonMoleculas no stories
export const ButtonMole: Story = {
  args: {
    value: "Salvar",
    event: () => {
      alert("Olá");
    },
  },
};
