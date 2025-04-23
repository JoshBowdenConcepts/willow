export const generateIconComponent = (
	name: string,
	svgJSX: string,
) => `import React from 'react';
import { IconProps } from '../types/iconTypes';
import { tokens } from '../scripts/helpers/tokens';

export const ${name} = ({ titleAccess, size = 200, style, ...rest }: IconProps) => {
  const computedStyle = {
    height: tokens.size.icon[size],
    width: tokens.size.icon[size],
    ...style,
  };

  return (
    ${svgJSX}
  );
};
`
