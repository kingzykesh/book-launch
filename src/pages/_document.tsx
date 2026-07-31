import {
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en-NG">
      <Head>
        <meta charSet="utf-8" />

        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="manifest"
          href="/site.webmanifest"
        />

        <meta
          name="msapplication-TileColor"
          content="#590A4E"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Spiritual Maturity"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}