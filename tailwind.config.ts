import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        terminal: {
          bg: "hsl(var(--terminal-bg))",
          border: "hsl(var(--terminal-border))",
          glow: "hsl(var(--terminal-glow))",
          cursor: "hsl(var(--terminal-cursor))",
          selection: "hsl(var(--terminal-selection))",
          prompt: "hsl(var(--terminal-prompt))",
          error: "hsl(var(--terminal-error))",
          warning: "hsl(var(--terminal-warning))",
          success: "hsl(var(--terminal-success))",
          info: "hsl(var(--terminal-info))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "terminal-flicker": {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.8" },
          "94%": { opacity: "1" },
          "97%": { opacity: "0.9" },
          "98%": { opacity: "1" },
        },
        gridFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        ringPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.2" },
          "50%": { transform: "scale(1.05)", opacity: "0.4" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "50%": { opacity: "0.7" },
          "100%": {
            transform: "translateY(-100px) translateX(50px)",
            opacity: "0",
          },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        expandWidth: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },

        "glitch-fast": {
          "0%, 100%": { transform: "translate(0)", clipPath: "inset(0 0 0 0)" },
          "10%": {
            transform: "translate(-2px, 1px)",
            clipPath: "inset(10% 0 20% 0)",
          },
          "20%": {
            transform: "translate(1px, -1px)",
            clipPath: "inset(20% 0 10% 0)",
          },
        },
        "glitch-slow": {
          "0%, 100%": { transform: "translate(0)", clipPath: "inset(0 0 0 0)" },
          "15%": {
            transform: "translate(1px, -2px)",
            clipPath: "inset(15% 0 25% 0)",
          },
          "25%": {
            transform: "translate(-1px, 2px)",
            clipPath: "inset(25% 0 15% 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "terminal-flicker": "terminal-flicker 4s ease-in-out infinite",

        "grid-flow": "gridFlow 20s linear infinite",
        "ring-pulse": "ringPulse 4s ease-in-out infinite",
        "particle-float": "particleFloat 3s ease-in-out infinite",
        "slide-in": "slideIn 0.3s ease-out",
        "expand-width": "expandWidth 1s ease-out 0.5s both",
        "fade-in-up": "fadeInUp 0.8s ease-out 0.3s both",
        "loading-bar": "loadingBar 1.5s ease-in-out infinite",
        "glitch-fast": "glitch-fast 0.3s ease-in-out",
        "glitch-slow": "glitch-slow 0.4s ease-in-out 0.1s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
