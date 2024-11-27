import { render, screen } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import { Button } from "./Button";

test("Button component should have no accessibility violations", async () => {
  const { container } = render(<Button>Click Me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("renders the button with the correct label", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
