/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        
        primary: "var(--color-primary)",
        "on-primary": "var(--color-on-primary)",
        "primary-container": "var(--color-primary-container)",
        "on-primary-container": "var(--color-on-primary-container)",
        
        secondary: "var(--color-secondary)",
        "on-secondary": "var(--color-on-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        
        tertiary: "var(--color-tertiary)",
        "on-tertiary": "var(--color-on-tertiary)",
        "tertiary-container": "var(--color-tertiary-container)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",

        surface: "var(--color-surface)",
        "surface-dim": "var(--color-surface-dim)",
        "surface-bright": "var(--color-surface-bright)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        
        outline: "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        
        error: "var(--color-error)",
        "on-error": "var(--color-on-error)",
        "error-container": "var(--color-error-container)",
        "on-error-container": "var(--color-on-error-container)",
        
        "inverse-surface": "var(--color-inverse-surface)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "inverse-primary": "var(--color-inverse-primary)",
        
        "glass-bg": "var(--color-glass-bg)",
        "glass-border": "var(--color-glass-border)",
        "overlay-bg": "var(--color-overlay-bg)",
        "overlay-bg-hover": "var(--color-overlay-bg-hover)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        
        "display-xl": ["var(--font-heading)", "serif"],
        "display-xl-mobile": ["var(--font-heading)", "serif"],
        "headline-lg": ["var(--font-heading)", "serif"],
        "headline-lg-mobile": ["var(--font-heading)", "serif"],
        "headline-md": ["var(--font-heading)", "serif"],
        
        "body-lg": ["var(--font-body)", "sans-serif"],
        "body-md": ["var(--font-body)", "sans-serif"],
        "label-caps": ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        "margin-desktop": "var(--spacing-margin-desktop)",
        "margin-mobile": "var(--spacing-margin-mobile)",
        gutter: "var(--spacing-gutter)",
        "container-max": "var(--spacing-container-max)",
        "section-gap": "var(--spacing-section-gap)",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
