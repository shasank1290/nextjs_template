import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#661FFF", // Main brand color (Electric Indigo)
        darkBlue: "#140A3E", // Background color (Deep Midnight Blue)
        neonOrange: "#FF9100", // Call-to-action color (Neon Amber)
        softBlack: "#121212", // Navbar & UI elements (Pure Charcoal)
        offWhite: "#F5F5F5",
        darkBg: "#0A0F1F",
        goldenAmber: "#D19028",
        electricBlue: "#3D78C0",
        brightWhite: "#FFFFFF",
        coolGray: "#EAEAEA",
        cyberYellow: "#F6B700",
        darkCharcoal: "#1C1C1C",
        vibrantRed: "#CE2E20",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}, 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        title:["Sigmar","sans-serif"],
        playwrite:["Playwrite IT Moderna","cursive"],
        body:[
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        sans:[
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
      },
    },
  },
  plugins: [require('tailwindcss-motion')], 
} satisfies Config;
