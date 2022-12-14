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
      "grayBg": "#EFEFEF",
      "warning": "#F46262",
      "Input":  "#CFDFEC",
      "TextSelectInput": "#6796BF"
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
      "header": "url('/images/background.png')",
      "teste": "url('/images/teste.png')",
      "place": "url('https://images.unsplash.com/photo-1653161752453-0e00805678b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80')"
    }
  },
  },
  plugins: [],
}
