import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./typography";

const meta = {
  title: "Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <div style={{ background: "black", padding: "6px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story = {
  args: {},
};
