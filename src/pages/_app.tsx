import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import MobileProvider from "@/Providers/MobileHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <MantineProvider theme={{ fontFamily: "'Lato', sans-serif" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </MobileProvider>
  );
}
