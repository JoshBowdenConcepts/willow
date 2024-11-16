import type { Preview } from "@storybook/react";
import "./preview.css";
import "./theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Components", "Utilities"],
      },
    },
  },
};

export default preview;
