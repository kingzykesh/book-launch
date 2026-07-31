import {
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          content="#260321"
        />

        <meta
          name="application-name"
          content="Book Launch"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}