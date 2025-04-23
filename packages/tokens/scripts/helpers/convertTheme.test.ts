import { convertTheme } from "./convertTheme";

describe("convertTheme", () => {
  it("should convert a flat theme with no qualifiers", () => {
    const theme = {
      color: {
        primary: {
          default: "#ff0000",
          hover: "#cc0000",
        },
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [],
        tokens: [
          { name: "--color-primary", value: "#ff0000" },
          { name: "--color-primary-hover", value: "#cc0000" },
        ],
      },
    ]);
  });

  it("should handle qualifier keys like .dark", () => {
    const theme = {
      color: {
        primary: {
          default: "#ff0000",
          ".dark": {
            default: "#aa0000",
            hover: "#880000",
          },
        },
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [],
        tokens: [{ name: "--color-primary", value: "#ff0000" }],
      },
      {
        qualifiers: [".dark"],
        tokens: [
          { name: "--color-primary", value: "#aa0000" },
          { name: "--color-primary-hover", value: "#880000" },
        ],
      },
    ]);
  });

  it("should merge light qualifiers into base group", () => {
    const theme = {
      color: {
        primary: {
          light: {
            default: "#eeeeee",
          },
        },
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [],
        tokens: [{ name: "--color-primary", value: "#eeeeee" }],
      },
    ]);
  });

  it("should handle nested qualifiers and levels", () => {
    const theme = {
      color: {
        background: {
          "@800": {
            ".dark": {
              default: "#000000",
            },
          },
        },
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [".dark", "@800"],
        tokens: [{ name: "--color-background", value: "#000000" }],
      },
    ]);
  });

  it("should sort and merge equivalent qualifier groups", () => {
    const theme = {
      color: {
        primary: {
          "@800": {
            ".dark": {
              default: "#123456",
            },
          },
          ".dark": {
            "@800": {
              hover: "#654321",
            },
          },
        },
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [".dark", "@800"],
        tokens: [
          { name: "--color-primary", value: "#123456" },
          { name: "--color-primary-hover", value: "#654321" },
        ],
      },
    ]);
  });

  it("should handle a qualifier key pointing to a string", () => {
    const theme = {
      color: {
        ".dark": "#000000",
      },
    };

    const result = convertTheme(theme as any);

    expect(result).toEqual([
      {
        qualifiers: [".dark"],
        tokens: [{ name: "--color", value: "#000000" }],
      },
    ]);
  });

  it("should remove 'light' when it's the first or last qualifier in a multi-qualifier group", () => {
    const theme = {
      color: {
        ".dark": {
          light: {
            default: "#123123",
          },
        },
        light: {
          ".dark": {
            default: "#321321",
          },
        },
      },
    };

    const result = convertTheme(theme as any);

    // Both cases should collapse to `.dark` only
    expect(result).toEqual([
      {
        qualifiers: [".dark"],
        tokens: [
          { name: "--color", value: "#123123" },
          { name: "--color", value: "#321321" },
        ],
      },
    ]);
  });

  it("should push tokens into an existing qualifier group", () => {
    const theme = {
      color: {
        ".dark": {
          default: "#000000",
          hover: "#111111",
        },
      },
    };

    const result = convertTheme(theme as any);

    // Ensures `.dark` group accumulates both tokens (exercises `found` path)
    expect(result).toEqual([
      {
        qualifiers: [".dark"],
        tokens: [
          { name: "--color", value: "#000000" },
          { name: "--color-hover", value: "#111111" },
        ],
      },
    ]);
  });
});
