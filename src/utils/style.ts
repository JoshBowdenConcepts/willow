export const style = (templateStyles: string): Record<string, string> => {
  return Object.fromEntries(
    templateStyles
      .split(";") // Split string into individual rules
      .map((rule) => rule.trim()) // Trim whitespace
      .filter(Boolean) // Filter out empty rules
      .map((rule) => {
        const [key, value] = rule.split(":").map((item) => item.trim());
        return key && value ? [key, value] : []; // Ensure valid key-value pairs
      })
      .filter(Boolean) // Filter out empty arrays (invalid entries)
  );
};
