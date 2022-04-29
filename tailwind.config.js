module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max':'992px'},
      'md': {'max':'786px'},
      'sm': {'max':'460px'},
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        lightblack: '#4D4244',
        Lightred: '#FF0D38',
        darkred: '#D70026',
        Lightgray: '#747474',
        darkgray: '# 272727',
      }
    },
  },
  plugins: [],
}
