import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Palette sampled from the client's "Option" mockup
      colors: {
        cream: "#F6EFE8", // page base
        sand: "#EDE8DD", // alternate band
        blush: "#FBFCF9", // cards and polaroid frames
        ink: "#0B0B0B",
        taupe: "#766B60",
        ornament: "#E3D9CC", // background line art
        oxblood: "#3F1214", // maroon section background
        maroon: "#6E1F24", // brighter maroon for thin lines, where oxblood reads as black
        gold: "#B19462",
        stone: "#BDB3A3",
        ivory: "#F3F2EC",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
        display: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "marquee-right": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
