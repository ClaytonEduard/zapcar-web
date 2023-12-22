import Avatar from "@/app/molecules/avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Avatar",
  component: Avatar,
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
        {<Avatar {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avata: Story = {
  args: {},
};
