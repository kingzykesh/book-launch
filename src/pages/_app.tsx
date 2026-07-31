import type { AppProps } from "next/app";
import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <main
      className={`${manrope.variable} ${cormorant.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}