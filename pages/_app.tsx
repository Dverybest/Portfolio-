import { GlobalStyle } from "@/components";
import { theme } from "@/utils";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
