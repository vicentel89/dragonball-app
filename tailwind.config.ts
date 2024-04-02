import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#fbc02d",
          secondary: "#fbc02d",
          accent: "#fbc02d",
          neutral: "#ffffff",
          "base-100": "#272b33",
          "base-200": "#3B3E44",
          info: "#008fff",
          success: "#00bc84",
          warning: "#d45600",
          error: "#ff003d",
          "--bc": "98% 0.003144 264.290563",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

export default config;
