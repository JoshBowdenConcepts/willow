import { render, screen } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import { TextField } from "./TextField";

test("TextField component should have no accessibility violations", async () => {
  const { container } = render(<TextField label="Label" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("renders the TextField with the correct label", () => {
  const label = "Label";
  render(<TextField label={label} />);
  expect(screen.getByText(label)).toBeInTheDocument();
});
