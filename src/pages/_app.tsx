import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import ResponsiveProvider from "@/Providers/MobileHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveProvider>
      <MantineProvider theme={{ fontFamily: "'Lato', sans-serif" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </ResponsiveProvider>
  );
}
