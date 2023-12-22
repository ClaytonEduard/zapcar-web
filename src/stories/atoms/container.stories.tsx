import Container from "@/app/atoms/container";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Container",
  component: Container,
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
        {<Container {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o Container no stories
export const Containe: Story = {
  args: {
    width: 300,
    height: 300,
    children: <></>,
    color: "primary",
  },
};

// Renderizar o Container no stories
export const ContaineChildrem: Story = {
  args: {
    width: 100,
    height: 100,
    children: (
      <div>
        <p>Olá React</p>
      </div>
    ),
    color: "primary",
  },
};
