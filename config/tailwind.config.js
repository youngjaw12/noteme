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
     blackcolor: "#000000",
     header: "#403B36",
     text: "#595550",
     textbg: "#FFFDFA",
     white: "#ffffff",
     red: "#FF0505",
     blue: "#1d4ed8",
     deskbg: "#F2E5D5"

    },


    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
    strokeWidth: {
      '2': '2px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
