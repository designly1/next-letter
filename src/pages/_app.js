// @/pages/_app.js

import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ['latin'] });

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <NextNProgress />
      <ThemeProvider theme={darkTheme}>
        <Component className={inter.className} {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
