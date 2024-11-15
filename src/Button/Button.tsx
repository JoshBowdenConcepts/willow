import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};
