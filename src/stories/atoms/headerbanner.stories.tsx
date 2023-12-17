import HeaderBanner from "@/app/atoms/header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/HeaderBanner",
  component: HeaderBanner,
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
        {<HeaderBanner {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof HeaderBanner>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Header no stories
export const HeaderBanne: Story = {
  args: {
    width: "600",
    height: "400",
  },
};
