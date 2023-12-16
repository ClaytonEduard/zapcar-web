import Link from "@/app/atoms/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Link",
  component: Link,
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
        {<Link {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
// Renderizar o link no stories
export const LinkCad: Story = {
  args: {
    value: "",
    link: "",
    destiny: "_parent",
  },
};
