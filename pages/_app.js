import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { green, orange, purple } from '@mui/material/colors';
import Head from 'next/head';

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
        <Head>
           <title>Create Next App</title>
        </Head>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
