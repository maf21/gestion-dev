import { Html, Head, Main, NextScript } from 'next/document';

/*Configuraciones globales de la app*/

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://kit.fontawesome.com/afd31a68b2.js" crossOrigin="anonymous" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}