import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { green, orange, purple } from '@mui/material/colors';

export default function App({ Component, pageProps }) {

  const mainTheme = createTheme({
    palette: {
      primary: {
        main: '#7054e4'
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
      <ThemeProvider theme={mainTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
