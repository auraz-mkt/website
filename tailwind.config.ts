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
        dark: colors.slate[900],
        light: colors.neutral[100],
      },
    },
  },
};
