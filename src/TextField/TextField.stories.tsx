import React from "react";
import { TextField } from "./TextField";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconCalendar, IconChevronLeft, IconChevronRight } from "../svg";
import { Button } from "../Button";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const TextFieldAndButton: Story = {
  render: () => (
    <div
      style={{
        display: "inline-grid",
        gap: 10,
        gridAutoFlow: "column",
        alignItems: "flex-start",
      }}
    >
      <TextField label="Enter your email:" />
      <Button variant="primary" style={{ marginTop: 20 }}>
        Submit
      </Button>
    </div>
  ),
};
