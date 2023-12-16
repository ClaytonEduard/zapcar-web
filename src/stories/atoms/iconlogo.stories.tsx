import IconLogo from "@/app/atoms/icon_logo";
import { Meta, StoryObj } from "@storybook/react";
import imageFile from "../../../public/back.svg";

const meta = {
  title: "Atoms/IconLogo",
  component: IconLogo,
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
        {<IconLogo {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconLogo>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconBack no stories
export const IconLog: Story = {
  args: {
    value: "/",
  },
};
