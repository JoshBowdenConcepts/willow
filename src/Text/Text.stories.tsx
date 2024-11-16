import React from "react";
import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Text",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid" }}>
      <Text as="h1">This is an H1 Heading</Text>
      <Text as="h2">This is an H2 Heading</Text>
      <Text as="h3">This is an H3 Heading</Text>
      <Text as="h4">This is an H4 Heading</Text>
      <Text as="h5">This is an H5 Heading</Text>
      <Text as="h6">This is an H5 Heading</Text>
      <Text as="p">This is a paragraph element</Text>
      <Text as="span">This is a span element</Text>
      <Text as="strong">This is a strong element</Text>
      <Text as="em">This is an emphasized element</Text>
      <Text as="small">This is an small element</Text>
    </div>
  ),
};

export const TextSpanAsH1: Story = {
  args: {
    children: "Text",
    as: "span",
    variant: "h1",
  },
};
