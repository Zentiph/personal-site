import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      const filterDecl = {
        filter:
          "drop-shadow(0 0 var(--tw-glow-size, 0px) var(--tw-glow-color, currentColor))",
      };

      // size
      matchUtilities(
        {
          glow: (value) => ({
            "--tw-glow-size": value,
            ...filterDecl,
          }),
        },
        { values: theme("spacing"), type: "length" },
      );

      // flatten colors so glow-red works
      const rawColors = theme("colors") as Record<string, any>;
      const glowColors: Record<string, string> = {};

      for (const [name, val] of Object.entries(rawColors)) {
        if (typeof val === "string") {
          // e.g. white, black
          glowColors[name] = val;
        } else if (val && typeof val === "object") {
          // prefer DEFAULT, else 500, else first available shade
          glowColors[name] = val.DEFAULT ?? val["500"] ?? Object.values(val)[0];
        }
      }

      matchUtilities(
        {
          glow: (value) => ({
            "--tw-glow-color": value,
            ...filterDecl,
          }),
        },
        { values: glowColors },
      );
    }),
  ],
};

export default config;
