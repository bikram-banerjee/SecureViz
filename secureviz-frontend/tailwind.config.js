/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "dark": '#0B0C10',
          "dark-light": '#1F2833',
          "whitish": '#C5C6C7',
          "light-cyan": '#66FCF1',
          "dark-cyan": '#45A29E',
        },
      },
      fontFamily: {
        poppins: ["poppins"]
      },
      backgroundImage: {
        'giffy': "url('/securevizgif.GIF')"
      },
      backgroundSize: {
        '100%': '100%',
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
