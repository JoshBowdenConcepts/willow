import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: "radio",
      options: ["a", "button"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Text",
  },
};
