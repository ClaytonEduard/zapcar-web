import Header from "@/app/molecules/header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/Header",
  component: Header,
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
        {<Header {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Back no stories
export const Heade: Story = {
  args: {
    title: "Cadastro",
    backTo: () => {
      alert("Voltar");
    },
  },
};
