export default {
  primary: "#FCDB2C",
  primaryVeryDark: "#F4C449",
  primaryDark: "#F8DA8D",
  primaryLight: "#FCF0D2",
  primaryVeryLight: "#FEF8E8",

  primaryText: "#4F4D4D",
  secondaryText: "#8B8B97",
  secondaryLightText: "#A4A4A4",

  mercury: "#E5E5E5",
  whiteSmoke: "#F6F6F6",
  gray: "#C4C4C4",
  white: "#FFFFFF",
  black: "#000000",
  success: "#68D148",
  error: "#E61F10",
  errorBox: "#F3C4C1",
  transparent: "transparent",

  withAlpha: (color: string, alpha: number) => {
    const alphaHex = Math.round(alpha * 255).toString(16);
    return color.concat(alphaHex);
  },
};
