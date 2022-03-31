module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fedra_sans_pro': ['Fedra Sans Pro', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '15': '3.75rem', // 60px
        '2.5': '0.625rem', // 10px
        '0.5': '0.125rem', // 2px
      },
      colors: {
        'black': '#0d0d0d',
        'gray': '#3d3d3d',
        'gray-1': '#3A3A3A',
      },
      backgroundImage: {
        'map': "url('/src/asset/images/Vue.png')",
      },
      boxShadow: {
        'me': '0px 3px 20px rgba(0, 0, 0, 0.2)',
        'me-2': '0px 10px 20px -5px rgba(0, 0, 0, 0.1)',
        'me-3': '0px 5px 20px 2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'menu-in': 'menu-in 0.3s linear forwards alternate', //infinite
        'menu-out': 'menu-out 0.3s linear forwards alternate', //infinite
      },
      keyframes: {
        'menu-in': {
          '0%': { transform: 'translate(-100%, 0)', opacity: '0%' },
          '100%': { transform: 'translate(0%, 0)', opacity: '100%' },
        },
        'menu-out': {
          '0%': { transform: 'translate(0%, 0)', opacity: '100%' },
          '100%': { transform: 'translate(-100%, 0)', opacity: '0%' },
        }
      }
    },
  },
  plugins: [],
}
