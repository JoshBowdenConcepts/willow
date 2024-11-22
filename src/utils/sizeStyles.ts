export type SizeProps = Partial<{
  heigh: number;
  maxHeight: number;
  width: number;
  maxWidth: number;
}>;

export function createSizeStyles({
  height,
  maxHeight,
  width,
  maxWidth,
}: {
  height?: number;
  maxHeight?: number;
  width?: number;
  maxWidth?: number;
}): { [key: string]: string } {
  return {
    ...(height ? { height: height + "px" } : {}),
    ...(maxHeight ? { maxHeight: maxHeight + "px" } : {}),
    ...(width ? { width: width + "px" } : {}),
    ...(maxWidth ? { maxWidth: maxWidth + "px" } : {}),
  };
}
