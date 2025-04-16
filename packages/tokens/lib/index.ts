export const theme = {
  font: {
    h1: "bold 3rem / 3.5rem Inter, sans-serif",
    h2: "bold 2.5rem / 3rem Inter, sans-serif",
    h3: "bold 2rem / 2.5rem Inter, sans-serif",
    h4: "bold 1.75rem / 2.25rem Inter, sans-serif",
    h5: "bold 1.5rem / 2rem Inter, sans-serif",
    h6: "bold 1.25rem / 1.75rem Inter, sans-serif",
    p: "normal 1rem / 1.5rem Inter, sans-serif",
    span: "normal 1rem / 1.5rem Inter, sans-serif",
    div: "normal 1rem / 1.5rem Inter, sans-serif",
    strong: "bold 1rem / 1.5rem Inter, sans-serif",
    em: "italic 1rem / 1.5rem Inter, sans-serif",
    caption: "normal 0.875rem / 1.25rem Inter, sans-serif",
    small: "normal 0.75rem / 1rem Inter, sans-serif",
  },
  color: {
    primary: {
      light: "red",
      dark: {
        default: "darkred",
        ".theFlag": "lightred",
      },
    },
    secondary: {
      default: "green",
      ".newFlag": "darkgreen",
    },
    tertiary: {
      default: "blue",
      ".newFlag": {
        light: "lightblue",
        dark: "darkblue",
      },
    },
    test: {
      default: "purple",
      dark: "darkpurple",
      ".theFlag": {
        light: "lightpurple",
        dark: "mediumpurple",
      },
    },
    another: {
      default: "orange",
      ".newFlag": "darkorange",
    },
    blah: {
      default: "yellow",
      "@800": "darkyellow",
    },
  },
  size: {
    100: "1rem",
    200: "2rem",
    300: "3rem",
    400: {
      default: "4rem",
      ".theFlag": "5rem",
    },
    500: {
      default: "5rem",
      ".biggerFlag": "6rem",
      ".biggestFlag": "7rem",
    },
  },
  button: {
    backgroundColor: "primary",
    color: "secondary",
    fontSize: {
      default: "300",
      "@800": "400",
    },
  },
};
