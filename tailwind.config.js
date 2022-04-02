module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fedra_sans_pro: ['Fedra Sans Pro', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '15': '3.75rem', // 60px
        '2.5': '0.625rem', // 10px
        '0.5': '0.125rem', // 2px
        '1.5': '0.375rem', // 6px
      },
      colors: {
        black: '#0d0d0d',
        gray: '#3d3d3d',
        'gray-1': '#bdbdbd',
        'gray-2': '#656565',
        'gray-3': '#cfcfcf',
        'gray-4': '#e7e7e7',
        yellow: '#ff3c08',
        'yellow-2': '#ff3600',
        'yellow-3': '#ffa200',
        'yellow-4': '#ffa920',
        blue: '#00588b',
        'blue-1': '#b2ccdc',
        'blue-2': '#004770',
        'blue-3': '#4f8caf',
        'blue-4': '#357397',
      },
      screens: {
        '2xl': '1440px',
      },
      backgroundImage: {
        bg_top_el: "url('/src/asset/images/bg-top-el.jpg')",
        bg_top_el_sm: "url('/src/asset/images/bg-top-el-sm.jpg')",
      },
      boxShadow: {
        me: '0px 3px 20px rgba(0, 0, 0, 0.2)',
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
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
}
