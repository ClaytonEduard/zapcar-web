import IconSearch from "@/app/atoms/icon_search";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/IconSearch",
  component: IconSearch,
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
        {<IconSearch {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof IconSearch>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o IconMsn no stories
export const IconSearc: Story = {
  args: {},
};
