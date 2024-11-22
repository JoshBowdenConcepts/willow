export const brandColors = [
  0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export type BrandColors = (typeof brandColors)[number];
