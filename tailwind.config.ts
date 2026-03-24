import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        background: "#F2ECE4",
        foreground: "#1C1917",
        card: {
          DEFAULT: "#FAF9F6",
          foreground: "#1C1917",
        },
        primary: {
          DEFAULT: "#1C1917",
          foreground: "#F2ECE4",
        },
        accent: {
          DEFAULT: "#FF7D7D",
          foreground: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
