// generateCSSTokenObject.test.ts
import { generateCSSTokenObject } from "./generateCssTokenObject";

describe("generateCSSTokenObject", () => {
  it("returns a CSS variable string for primitive values", () => {
    const input = {
      color: {
        primary: "blue",
      },
    };

    const output = generateCSSTokenObject(input);
    expect(output).toEqual({
      color: {
        primary: "--color-primary",
      },
    });
  });

  it("skips reserved and special keys", () => {
    const input = {
      color: {
        default: "blue",
        light: "lightblue",
        dark: "darkblue",
        "@media": {
          sm: "value",
        },
        ".class": {
          nested: "value",
        },
        actual: {
          value: "something",
        },
      },
    };

    const output = generateCSSTokenObject(input);
    expect(output).toEqual({
      color: {
        actual: {
          value: "--color-actual-value",
        },
      },
    });
  });

  it("generates token for empty object after skipping all keys", () => {
    const input = {
      spacing: {
        default: {},
      },
    };

    const output = generateCSSTokenObject(input);
    expect(output).toEqual({
      spacing: "--spacing",
    });
  });

  it("returns token path for null", () => {
    const input = {
      border: {
        radius: null,
      },
    };

    const output = generateCSSTokenObject(input);
    expect(output).toEqual({
      border: {
        radius: "--border-radius",
      },
    });
  });

  it("handles nested structure with mix of valid and invalid keys", () => {
    const input = {
      theme: {
        ".foo": {
          bar: "baz",
        },
        palette: {
          primary: {
            base: "#000",
          },
        },
      },
    };

    const output = generateCSSTokenObject(input);
    expect(output).toEqual({
      theme: {
        palette: {
          primary: {
            base: "--theme-palette-primary-base",
          },
        },
      },
    });
  });
});
