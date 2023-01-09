import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";

const lato = Lato({ weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
