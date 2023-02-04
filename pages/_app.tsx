import { Head } from '@/components/Head';;
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Component {...pageProps} /> 
    </>
  )
}
