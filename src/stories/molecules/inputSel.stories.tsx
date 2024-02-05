import InputSel from "@/app/molecules/input_sel";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/InputSel",
  component: InputSel,
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
        {<InputSel {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof InputSel>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o InputSe no stories
export const InputSe: Story = {
  args: {
    title: "Estado:",
  },
};
