import React from "react";
import { Card } from "./Card";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "inline-grid",
          gap: 10,
          padding: 50,
          background: "#222222",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card Content",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "inline-grid", gap: 10 }}>
      <Card>Card Content</Card>
    </div>
  ),
};

export const CardPadding: Story = {
  args: {
    children: "Card Content",
    padding: [100, 200, 300, 400],
  },
};

export const CardMargin: Story = {
  args: {
    children: "Card Content",
    margin: [100, 200, 300, 400],
  },
};
