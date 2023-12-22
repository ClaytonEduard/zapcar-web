import ImgBanner from "@/app/atoms/img_banner";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/ImgBanner",
  component: ImgBanner,
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
        {<ImgBanner {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof ImgBanner>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconMsn no stories
export const ImgBanne: Story = {
  args: {
    width: 200,
  },
};
