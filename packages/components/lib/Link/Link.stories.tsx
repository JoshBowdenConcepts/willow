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
    size: {
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

export const AsNavItem: Story = {
  args: {
    type: "nav",
    href: "#",
    children: "As Nav Item",
  },
};

export const AsButton: Story = {
  args: {
    type: "button",
    href: "#",
    children: "As Button",
  },
};

export const AsSecondaryButton: Story = {
  args: {
    type: "button",
    href: "#",
    variant: "secondary",
    children: "As Secondary Button",
  },
};

export const AllTypes: Story = {
  render: () => {
    const components = TextTags.map((tag) => (
      <Link size={tag as TextProps["as"]} href="#">
        {tag}
      </Link>
    ));
    return <>{components}</>;
  },
};
