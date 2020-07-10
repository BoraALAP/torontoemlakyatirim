// I'm using rgb numbers here for easily using rgba styling throughout the app
// You can put hexcodes, names, or any other definitions that fits the context of your app
const colorPalette = {
  white: "hsla(0,0%,100%,1)",
  black: "hsla(0,0%,0%,1)",
  accent: "hsla(206,92%,20%,1)",
  link: "hsla(206,92%,20%,1)",

  bodyCopy: "hsla(0,0%,40%,1)",

  border: "hsla(0,0%,86%,1)",

  lightShade: "hsla(0, 0%, 95%, 1)",
  lightAccent: "hsla(220,25%,90%,1)",

  lightOpacity: "hsla(0, 0%, 0%, 0.15)",

  mainBrand: "140, 100, 88",
  darkAccent: "133, 129, 137",
  darkShades: "32, 30, 32",

  success: "95, 153, 81",
  warning: "221, 136, 25",
  error: "244, 67, 54",
}

export const themeBase = {
  gutter: "2.5vw",
  margin: "5vw",
  menuBg: colorPalette.white,
  color: {
    white: colorPalette.white,
    black: colorPalette.black,
    accent: colorPalette.accent,
    link: colorPalette.link,
    border: colorPalette.border,
    lightbg: colorPalette.lightShade,
    lightaccent: colorPalette.lightAccent,
    bodyCopy: colorPalette.bodyCopy,
    lightOpacity: colorPalette.lightOpacity
  },
  font: {
    familyH: "'Playfair Display', serif",
    familyB: "'Poppins', sans-serif",
    weight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
      black: "800",
    },
  },
}
