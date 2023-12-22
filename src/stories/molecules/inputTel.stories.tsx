import InputTel from "@/app/molecules/input_Tel";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/InputTel",
  component: InputTel,
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
        {<InputTel {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof InputTel>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Back no stories
export const InputTe: Story = {
  args: {
    title: "Telefone:",
    value: "",
    event: () => {},
  },
};
