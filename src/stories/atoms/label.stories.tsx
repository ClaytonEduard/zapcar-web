import Label from "@/app/atoms/label";
import "../../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["atoms"],
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
        {<Label {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;
// Renderizar o label no stories
export const LabelInput: Story = {
  args: {
    value: "",
  },
};
