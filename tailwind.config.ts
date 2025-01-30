import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "yekan-sans": ["var(--font-yekan-sans)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundColor: {
        container: "#1C1C1F",
        header: "#29292D",
        button: "#EF9241",
      },
      backgroundImage: {
        contact: "url('/images/linear.png')",
        footer: "url('/images/footer.png')",
      },
    },
  },
  plugins: [],
};
export default config;
