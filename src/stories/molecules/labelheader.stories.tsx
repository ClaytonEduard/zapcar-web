import LabelHeader from "@/app/molecules/label_header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/LabelHeader",
  component: LabelHeader,
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
        {<LabelHeader {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof LabelHeader>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o LabelHeade no stories
export const LabelHeade: Story = {
  args: {
    value: "Label Default",
  },
};
