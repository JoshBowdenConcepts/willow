export function generateCSSTokenObject(
  input: Record<string, any>
): Record<string, any> {
  function traverse(obj: any, path: string[] = []): any {
    if (typeof obj === "object" && obj !== null) {
      const result: Record<string, any> = {};
      let hasValidKey = false;
      for (const key in obj) {
        if (
          !key.startsWith(".") &&
          key !== "default" &&
          key !== "light" &&
          key !== "dark" &&
          !key.startsWith("@")
        ) {
          result[key] = traverse(obj[key], [...path, key]);
          hasValidKey = true;
        }
      }
      return hasValidKey ? result : `--${path.join("-")}`;
    } else {
      return `--${path.join("-")}`;
    }
  }
  return traverse(input);
}
