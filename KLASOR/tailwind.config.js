/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1.75px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        customNavBg: "#fff" ||  "#C1F8CF",
        customNavBgHover: "#f6dcc8",
        customCmdBg: "#dff5ff",
        customCmdBtn: "#67c6e3",
        customCmdBtnHover: "#0d90a8",
      },
      backdropBlur: {
        xs: "1.5px",
      },
      screens: {
        "nav-sm": "536px",
        "page-lg": "1170px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
