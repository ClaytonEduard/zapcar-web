import OrganisHeader from "@/app/organisms/header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/Header",
  component: OrganisHeader,
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
        {<OrganisHeader {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof OrganisHeader>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Back no stories
export const OrganisHeade: Story = {
  args: {
    title: "Cadastro",
    backTo: () => {
      alert("Voltar");
    },
  },
};
