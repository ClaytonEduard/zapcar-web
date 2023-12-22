import Logo from "@/app/molecules/logo";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Logo",
  component: Logo,
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
        {<Logo {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Log: Story = {
  args: {},
};
