import { createTheme } from 'vite-pages-theme-doc'
import './page.scss'

export default createTheme({
  logo: '⌨ React Keyboard Navigator',
  topNavs: [
    {
      label: 'Source of examples',
      href: 'https://github.com/zheeeng/react-keyboard-navigator/tree/main/packages/react-keyboard-navigator-example/pages',
    },
    {
      label: 'Github ⭐',
      href: 'https://github.com/zheeeng/react-keyboard-navigator',
    },
  ],
})
