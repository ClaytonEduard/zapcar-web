import Banner from "@/app/molecules/banner";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Banner",
  component: Banner,
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
        {<Banner {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banne: Story = {
  args: {},
};
