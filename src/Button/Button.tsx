import React from "react";
import { Text } from "../Text";
import "./Button.css";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <Text as="span">{label}</Text>
    </button>
  );
};
