import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'


import doelgerTheme from 'typography-theme-doelger'


doelgerTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  '*': {
    color: '#616161',
  },
  'h1': {
    fontSize: '1.5em',
    color: '#616161',
  },
  'h2': {
    color: '#616161',
  },
  'a': {
    textShadow: 'none',
    color: '#B6DD14',
    backgroundImage: 'none',
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(doelgerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
