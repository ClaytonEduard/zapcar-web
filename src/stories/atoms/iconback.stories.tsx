import IconBack from "@/app/atoms/icon_back";
import { Meta, StoryObj } from "@storybook/react";
import imageFile from "../../../public/back.svg";

const meta = {
  title: "Atoms/IconBack",
  component: IconBack,
  parameters: {
    layout: "centered",
  },
  tags: ["atoms"],
  argTypes: {
    destiny: {
      options: ["_parent", "_blank"],
      control: { type: "select" },
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
        {<IconBack {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconBack>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconBack no stories
export const IconBac: Story = {
  args: {
    value: "/",
    destiny: "_parent",
  },
};
