import Back from "@/app/molecules/back";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Back",
  component: Back,
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
        {<Back {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Back>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Back no stories
export const Bac: Story = {
  args: {
    oncliCk() {
      alert("Ola");
    },
  },
};
