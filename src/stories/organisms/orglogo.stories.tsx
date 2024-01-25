import OrgLogo from "@/app/organisms/logo";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/OrgLogo",
  component: OrgLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["organisms"],
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
        {<OrgLogo {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof OrgLogo>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Logo no stories
export const OrgLog: Story = {
  args: {},
};
