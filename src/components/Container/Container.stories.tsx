import React from "react";
import { Container } from "./Container";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Container Content",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "inline-grid", gap: 10 }}>
      <Container>Container Content</Container>
    </div>
  ),
};

export const ContainerPadding: Story = {
  args: {
    children: "Container Content",
    padding: [100, 200, 300, 400],
  },
};

export const ContainerMargin: Story = {
  args: {
    children: "Container Content",
    margin: [100, 200, 300, 400],
  },
};
