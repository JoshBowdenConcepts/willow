import { render, screen, fireEvent } from "@testing-library/react";
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

test("renders the TextField with the correct label", () => {
  const label = "Label";
  render(<TextField label={label} />);
  expect(screen.getByText(label)).toBeInTheDocument();
});

test("updates the input value when the user types", () => {
  const labelText = "Label";
  // Render the component
  render(<TextField label={labelText} />);

  // Find the input element
  const inputElement = screen.getByLabelText(labelText);
  expect(inputElement).toBeInTheDocument();

  // Simulate typing into the input field
  fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

  // Assert the input value is updated
  expect(inputElement).toHaveValue("Hello, World!");
});

test("calls onChange with the correct value when user types", () => {
  const labelText = "Label";
  // Mock onChange function
  const mockOnChange = jest.fn();

  // Render the component with the mock function
  render(<TextField label={labelText} onChange={mockOnChange} />);

  // Find the input element
  const inputElement = screen.getByLabelText(labelText);

  // Simulate typing into the input
  fireEvent.change(inputElement, { target: { value: "Testing onChange" } });

  // Verify onChange was called with the correct value
  const calledEvent = mockOnChange.mock.calls[0][0];
  expect(calledEvent.target.value).toBe("Testing onChange");
});
