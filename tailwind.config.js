/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#1dbf73",
            // "primary-light": "#5DADE2",
            "primary-dark": "#19a463",
            second: "#F1F1F1",
            "hover-1": "rgba(214, 234, 248,0.5)",
            accent: "#B5B6BA",
         },
         textColor: {
            secondary: "#404145",
         },
         screens: {
            umd: "900px", // => @upper-media (min-width: 900px) { ... }
         },
      },
   },
   plugins: [],
};
