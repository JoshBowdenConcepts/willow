import React from "react";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconChevronUp } from "../svg/IocnChevronUp";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "inline-grid", gap: 10 }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
  ),
};

export const DisabledVariants: Story = {
  render: () => (
    <div style={{ display: "inline-grid", gap: 10 }}>
      <Button disabled>Primary Button</Button>
      <Button disabled variant="secondary">
        Secondary Button
      </Button>
      <Button disabled variant="tertiary">
        Tertiary Button
      </Button>
    </div>
  ),
};

export const StartIcon: Story = {
  args: {
    children: "Button",
    StartIcon: <IconChevronUp />,
  },
};

export const EndIcon: Story = {
  args: {
    children: "Button",
    EndIcon: <IconChevronUp />,
  },
};
