import { OneToFour } from "../types/OneToFour";
import { SpaceValues } from "../types/SpaceValues";
import { style } from "./style";

export type SpacingStyles = {
  padding?: OneToFour<SpaceValues>;
  margin?: OneToFour<SpaceValues>;
};

export const spacingStyles = ({
  padding,
  margin,
}: {
  padding?: OneToFour<SpaceValues>;
  margin?: OneToFour<SpaceValues>;
}) => {
  const [
    paddingTop = 100,
    paddingRight = paddingTop,
    paddingBottom = paddingTop,
    paddingLeft = paddingRight,
  ]: OneToFour<SpaceValues> = padding ?? [100];
  const paddingStyles = padding
    ? `
    padding-top: var(--spacing-${paddingTop});
    padding-right: var(--spacing-${paddingRight});
    padding-bottom: var(--spacing-${paddingBottom});
    padding-left: var(--spacing-${paddingLeft});
  `
    : ``;
  const [
    marginTop = 100,
    marginRight = marginTop,
    marginBottom = marginTop,
    marginLeft = marginRight,
  ]: OneToFour<SpaceValues> = margin ?? [100];
  const marginStyles = margin
    ? `
    margin-top: var(--spacing-${marginTop});
    margin-right: var(--spacing-${marginRight});
    margin-bottom: var(--spacing-${marginBottom});
    margin-left: var(--spacing-${marginLeft});
  `
    : ``;

  const spaceStyles = {
    ...style(paddingStyles), // Apply primary styles
    ...style(marginStyles), // Apply secondary styles (this will override any duplicates)
  };
  return spaceStyles;
};
