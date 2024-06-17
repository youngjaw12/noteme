const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors:{
     bgcolor: "#F8EEE2",
     buttoncolor: "#D9614C",
     black: "#000000",
     header: "#403B36",
     text: "#595550",
     textbg: "#FFFDFA",
     white: "#ffffff",
     red: "#FF0505",
     blue: "#1d4ed8"

    },
    extend: {
      fontFamily: {
        sans: ['sans var', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito','sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
