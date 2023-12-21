import Button from "@/app/atoms/button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["atoms"],
  argTypes: {
    onClick: () => {},
    value: {
      defaultValue: "",
    },
  },

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
        {<Button {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
// Renderizar o button no stories

export const ButtonDefault: Story = {
  args: {
    value: "Submit",
    onClick: () => {
      alert("Clicou");
    },
  },
};
