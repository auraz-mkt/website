import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      serif: ["'Cinzel Decorative'"],
      sans: ["'Quicksand'"],
    },
    extend: {
      colors: {
        primary: "#6D6AA6",
        secondary: "#6284BD",
        tertiary: "#ECBF7E",
        dark: "#222323",
        light: colors.neutral[50],
      },
    },
  },
};
