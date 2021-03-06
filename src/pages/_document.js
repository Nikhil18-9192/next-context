import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/assets/logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Spartan&display=swap" rel="stylesheet"></link>
          <meta
            name="description"
            content="Use Sass to start your Next.js app with CSS superpowers!"
          ></meta>
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
