import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="this is a complete functional template for next.js project with: tailwindcss, tailwindcss scroll hide, material-ui/core, material-ui/icons, jsconfig.json, .env.local, next.config, all fixed and functionning perfectly." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
