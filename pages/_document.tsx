import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body className="bg-sable-white text-sable-brown antialiased selection:bg-sable-terracotta selection:text-sable-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
