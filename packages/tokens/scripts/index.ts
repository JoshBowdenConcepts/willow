import {
  convertTheme,
  generateCss,
  generateCSSTokenObject,
  writeOrCreate,
} from "./helpers";
import { theme } from "../lib/index";

writeOrCreate({
  filePath: "./dist/tokens.scss",
  templateString: generateCss(convertTheme(theme)),
});

writeOrCreate({
  filePath: "./dist/tokens.css",
  templateString: generateCss(convertTheme(theme)),
});

writeOrCreate({
  filePath: "./dist/index.ts",
  templateString: `export const tokens = ${JSON.stringify(
    generateCSSTokenObject(theme),
    null,
    2
  ).replace(/"([^"]+)":/g, "$1:")};`,
});
