type DisplayType = "block" | "inline" | "flex" | "grid" | "none";

interface DisplayProps {
  display: DisplayType;
}

interface FlexProps {
  display: "flex";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  // Other flex-specific properties can go here
}

interface GridProps {
  display: "grid";
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  // Other grid-specific properties can go here
}

interface BlockProps {
  display: "block";
  // Add block-specific properties if needed
}

interface InlineProps {
  display: "inline";
  // Add inline-specific properties if needed
}

interface NoneProps {
  display: "none";
  // No other properties allowed when display is none
}

export type DisplayStyles = (DisplayProps &
  (FlexProps | GridProps | BlockProps | InlineProps | NoneProps)) & {
  [key: string]: any;
};
/*
// NOTE: Example:

const styles: DisplayStyles = {
  display: "flex", // Example of usage
  flexDirection: "row", // Works because display is 'flex'
  justifyContent: "center", // Works because display is 'flex'
  gridTemplateColumns: "1fr 1fr", // Will cause error because display is 'flex' not 'grid'
};

*/
