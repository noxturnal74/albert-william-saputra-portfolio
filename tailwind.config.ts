import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        electric: "#2563EB",
        skyglow: "#38BDF8",
        mist: "#F8FAFC",
        violetsoft: "#8B5CF6",
      },
      boxShadow: {
        glow: "0 24px 90px rgba(37, 99, 235, 0.16)",
        card: "0 22px 60px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
