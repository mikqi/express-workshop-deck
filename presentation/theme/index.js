import createTheme from '../../createTheme'

const colors = {
  primary: 'white',
  secondary: '#22446d', // almost black w/ blueish tint
  tertiary: '#4589dc', // bright blue
  quaternary: '#a1a9b3' // pale gray
}

const theme = createTheme(
  colors,
  {
    primary: 'Arial',
    secondary: 'Helvetica'
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  }
)

export default theme
