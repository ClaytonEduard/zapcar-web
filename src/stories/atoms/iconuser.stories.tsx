import IconUser from "@/app/atoms/icon_user";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/IconUser",
  component: IconUser,
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
        {<IconUser {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconUser>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconMsn no stories
export const IconUse: Story = {
  args: {},
};
