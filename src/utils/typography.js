import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'


import doelgerTheme from 'typography-theme-doelger'


doelgerTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  '*': {
    color: 'white',
  },
  'h1': {
    color: 'white',
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
