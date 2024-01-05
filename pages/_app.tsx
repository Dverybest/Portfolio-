import { GlobalStyle } from "@/components";
import { theme } from "@/utils";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="Charles Best portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Charles Best</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
