import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import { Text } from "../../index";

import "./TextField.css";
import clsx from "clsx";

export type TextFieldProps = HTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  labelClassName?: string;
};

export const TextField = ({
  label,
  className,
  placeholder,
  labelClassName,
  onChange,
  ...props
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  return (
    <label className={clsx("txt-field-label", labelClassName)}>
      <Text variant="caption">{label}</Text>
      <input
        value={inputValue}
        onChange={handleChange}
        className={clsx("txt-field", className)}
        type="text"
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};
