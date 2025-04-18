import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextProps, TextTags } from "../Text";
import { Link } from "./Link";

const meta = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "Overwritten description",
      control: {
        type: "select",
      },
      options: TextTags,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Link",
    href: "#",
  },
};

export const AllTypes: Story = {
  render: () => {
    const components = TextTags.map((tag) => (
      <Link variant={tag as TextProps["as"]} href="#">
        {tag}
      </Link>
    ));
    return <>{components}</>;
  },
};
