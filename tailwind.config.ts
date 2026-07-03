import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        steel: "#6B7280",
        navy: "#0B1F33",
        orange: "#F7931E"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "Inter", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Cairo", "IBM Plex Sans Arabic", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px -40px rgba(11, 31, 51, 0.45)",
        lift: "0 18px 45px -30px rgba(11, 31, 51, 0.5)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(107,114,128,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(107,114,128,.13) 1px, transparent 1px)",
        "precision-radial": "radial-gradient(circle at 20% 20%, rgba(247,147,30,.18), transparent 34%), radial-gradient(circle at 82% 10%, rgba(77, 111, 143,.16), transparent 31%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
