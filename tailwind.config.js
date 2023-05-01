/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#5FB477",
        brown: "#514242",
        red: "#EA3939",
        "light-gray": "#D1D1D1",
        "half-black": "#00000080",
      },
    },

    borderRadius: {
      medium: "2.3rem",
    },

    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
  },
  plugins: [],
};
