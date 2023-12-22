import IconMsn from "@/app/atoms/icon_msn";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/IconMsn",
  component: IconMsn,
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
        {<IconMsn {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconMsn>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconMsn no stories
export const IconMs: Story = {
  args: {
    width: 200,
    onclick: () => alert("Ola"),
  },
};
