type ThemeValue = string | { key?: string; default?: any; [key: string]: any };
type Theme = Record<string, Record<string, ThemeValue>>;

interface Token {
  name: string;
  value: string;
}

interface ConvertedItem {
  qualifiers: Qualifiers;
  tokens: Token[];
}

type ConvertedTheme = ConvertedItem[];

type Qualifiers = string[];

const theme: Theme = {
  font: {
    h1: {
      default: "bold 3rem/3.5rem Default, sans-serif",
      "@1024": {
        default: "bold 3rem/3.5rem Desktop, sans-serif",
        ".newFlag": "bold 3rem/3.5rem FeatureFlag, sans-serif",
      },
    },
    h2: {
      default: "bold 2.5rem/3rem Default, sans-serif",
      "@800": "bold 2.7rem/3rem iPad, sans-serif",
      "@1024": "bold 2.5rem/3rem Desktop, sans-serif",
    },
    h3: "bold 2rem/2.5rem Default, sans-serif",
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

/* GENERATE TOKENS */
const isQualifierKey = (key: string): boolean =>
  key.startsWith(".") ||
  key.startsWith("@") ||
  // TODO: These two below should not be starts with
  key.startsWith("light") ||
  key.startsWith("dark");

function convertTheme(theme: Theme): ConvertedTheme {
  let result: ConvertedTheme = [];

  function traverse(
    obj: any,
    qualifiers: Qualifiers,
    levels: string[] = [],
    tokens: ConvertedItem[]
  ) {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        // Check if value starts with a dot (.)
        if (isQualifierKey(key)) {
          // Add the key as a qualifier
          traverse(value, [...qualifiers, key], [...levels], tokens);
        } else {
          // Handle the case where it is a level not a qualifier
          traverse(value, [...qualifiers], [...levels, key], tokens);
        }
      } else if (typeof value === "string") {
        if (key === "default") {
          const newToken = `--${[...levels].join("-")}`;
          findAndPushToken(result, qualifiers, {
            name: newToken,
            value: value,
          });
        } else if (isQualifierKey(key)) {
          const newToken = `--${[...levels].join("-")}`;
          findAndPushToken(result, [...qualifiers, key], {
            name: newToken,
            value: value,
          });
        } else {
          const newToken = `--${[...levels, key].join("-")}`;
          findAndPushToken(result, qualifiers, {
            name: newToken,
            value: value,
          });
        }
      }
    }
  }

  traverse(theme, [], [], []);

  return result;
}

function findAndPushToken(
  arr: ConvertedTheme,
  qualifiersToMatch: Qualifiers,
  newToken: Token
) {
  const sortedQualifiersToMatch = [...qualifiersToMatch].sort();

  const found = arr.find(
    (obj) =>
      obj.qualifiers.length === qualifiersToMatch.length &&
      [...obj.qualifiers]
        .sort()
        .every((q, i) => q === sortedQualifiersToMatch[i])
  );

  if (found) {
    found.tokens.push(newToken);
  } else {
    arr.push({
      qualifiers: qualifiersToMatch,
      tokens: [newToken],
    });
  }
}

/* GENERATE CSS */
function generateCSSFromTokens(convertedList: ConvertedItem[]): string {
  const base: string[] = [];
  const mediaQueries: Record<number, string[]> = {};
  const dataAttributes: Record<string, string[]> = {};
  const classSelectors: Record<string, string[]> = {};

  for (const item of convertedList) {
    let tokens: Token[] = [];
    for (const token of item.tokens) {
      if (typeof token === "object" && !("name" in token)) {
        tokens.push(...flattenTokens("", token));
      } else {
        tokens.push(token as Token);
      }
    }

    const cssRules = tokens.map(
      (token) => `    ${token.name}: ${token.value};`
    );

    if (item.qualifiers.length === 0) {
      base.push(...cssRules);
    } else {
      const data: string[] = [];
      const media: number[] = [];
      const classes: string[] = [];

      for (const qualifier of item.qualifiers) {
        if (qualifier === "light") {
          // This is defaulting out system to light mode.
          data.push(`:root, [data-colormode=${qualifier}]`);
        } else if (qualifier === "dark") {
          data.push(`[data-colormode=${qualifier}]`);
        } else if (qualifier.startsWith("@")) {
          const mediaQuery = Number(qualifier.slice(1)); // Get the number from @800, @1024, etc.
          media.push(mediaQuery);
        } else if (typeof qualifier === "string") {
          if (qualifier.startsWith(".")) {
            classes.push(qualifier); // Keep the class names as they are.
          }
        }
      }

      const scope = data.join("");
      let nestedClass = classes.length
        ? `  ${classes.join("}, .")} {\n${cssRules.join("\n")}\n  }`
        : null;

      if (media.length > 0) {
        const mediaKey = Math.min(...media);
        if (!mediaQueries[mediaKey]) {
          mediaQueries[mediaKey] = [];
        }
        let block = scope
          ? `${scope} {\n${cssRules.join("\n")}\n}`
          : `${cssRules.join("\n")}`;
        if (nestedClass) block += `\n${nestedClass}`;
        mediaQueries[mediaKey].push(block);
      } else if (data.length > 0) {
        if (!dataAttributes[scope]) {
          dataAttributes[scope] = [];
        }
        dataAttributes[scope].push(...cssRules);
        if (nestedClass) {
          dataAttributes[scope].push(nestedClass);
        }
      } else if (classes.length > 0) {
        for (const className of classes) {
          if (!classSelectors[className]) {
            classSelectors[className] = [];
          }
          classSelectors[className].push(...cssRules);
        }
      }
    }
  }

  let css = `:root {\n${base.join("\n")}\n}\n`;

  for (const [selector, rules] of Object.entries(dataAttributes)) {
    css += `${selector} {\n${rules.join("\n")}\n}\n`;
  }

  for (const [selector, rules] of Object.entries(classSelectors)) {
    css += `${selector} {\n${rules.join("\n")}\n}\n`;
  }

  for (const [media, rules] of Object.entries(mediaQueries)) {
    css += `@media (min-width: ${media}px) {\n${rules.join("\n")}\n}\n`;
  }

  return css;
}

function flattenTokens(prefix: string, obj: Record<string, any>): Token[] {
  const result: Token[] = [];
  for (const key in obj) {
    const newPrefix = prefix ? `${prefix}-${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result.push(...flattenTokens(newPrefix, obj[key]));
    } else {
      result.push({ name: `--${newPrefix}`, value: obj[key] });
    }
  }
  return result;
}

// Step 1: Convert the theme to tokens
const convertedList2 = convertTheme(theme);
// console.log(JSON.stringify(convertedList2, null, 2));

// Step 2: Generate CSS from the tokens
const cssOutput2 = generateCSSFromTokens(convertedList2);
console.log(cssOutput2);
