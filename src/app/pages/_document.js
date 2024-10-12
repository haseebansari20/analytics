// _document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const GA_TRACKING_ID = 'G-E9KSFS3GG8'; // Replace with your own GA ID

  return (
    <Html>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${G-E9KSFS3GG8}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${G-E9KSFS3GG8}');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
