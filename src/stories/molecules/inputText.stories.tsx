import InputText from "@/app/molecules/input_text";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/InputText",
  component: InputText,
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
        {<InputText {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Back no stories
export const InputTex: Story = {
  args: {
    title: "Cadastro:",
    value: "",
    event: () => {},
  },
};
