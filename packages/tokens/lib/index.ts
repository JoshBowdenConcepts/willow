import { font } from "./font";
import { space } from "./space";
export const theme = {
  font,
  space,
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
