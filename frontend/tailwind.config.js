const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      "bgBlue": "#CFDFEC",
      "bgDivBlue": "#DFEAF4",
      "textTitle": "#40A798",
      "textInput":  "rgba(64, 167, 152, 0.58)",
      "optionWhite": "#FAFAFA",
      "Input2": "#F5F5F5",
      "grayText": "#626562",
      "grayBg": "#EFEFEF",
      "warning": "#F46262",
      "Input":  "rgba(67, 65, 88, 0.13)",
    },
    fontSize: {
      
    },
    width: {
      "997": "62.3125",
      "982": "61.375rem",
      "953": "59.5625rem",
      "821": "51.3125rem",
      "559": "34.9375rem",
      "471": "29.4375rem",
      "462": "28.875rem",
      "90": "5.625rem"
    },
    height: {
      "997": "62.3125",
      "982": "61.375rem",
      "953": "59.5625rem",
      "821": "51.3125rem",
      "559": "34.9375rem",
      "471": "29.4375rem",
      "462": "28.875rem",
      "90": "5.625rem"
    },
    backgroundImage: {
      "logo": "url('/images/logo.png')",
      "header": "url('/images/header.png')",
    }
  },
  },
  plugins: [],
}
