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
        darkgray: '#272727',
        lightgrayCustome: '#595959',
        grayCustome: "#454545"
      },
      boxShadow: {
        'customered':'0px 0px 30px rgba(255, 13, 56, 0.21)'
      }
    },
  },
  plugins: [],
}
