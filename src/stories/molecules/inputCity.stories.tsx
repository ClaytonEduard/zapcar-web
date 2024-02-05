import InputCity from "@/app/molecules/input_city";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/InputCity",
  component: InputCity,
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
        {<InputCity {...props} />}
      </div>
    );
  },
} satisfies Meta<typeof InputCity>;

export default meta;

type Story = StoryObj<typeof meta>;
// Renderizar o InputSe no stories
export const InputCit: Story = {
  args: {
    title: "",
    ufSelect: "GO",
    findCity: "",
  },
};
