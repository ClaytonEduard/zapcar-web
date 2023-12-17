import IconPhone from "@/app/atoms/icon_phone";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/IconPhone",
  component: IconPhone,
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
        {<IconPhone {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconPhone>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconPhone no stories
export const IconPhon: Story = {
  args: {},
};
