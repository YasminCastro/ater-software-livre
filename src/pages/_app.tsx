import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ fontFamily: "'Lato', sans-serif" }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
