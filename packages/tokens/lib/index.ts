import { font } from "./font";
import { space } from "./space";
import { shape } from "./shape";
import { color } from "./color";
export const theme = {
  font,
  space,
  shape,
  color,
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
