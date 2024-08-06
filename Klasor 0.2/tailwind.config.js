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
        customNavBg: "#fff" || "#C1F8CF",
        customNavBgHover: "rgb(68 64 60)" || "#f6dcc8",
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
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          /* For WebKit browsers */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
        },
        ".scrollbar-thumb": {
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "5px",
          },
        },
        ".scrollbar-track": {
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
            borderRadius: "10px",
          },
        },
        ".scrollbar": {
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
