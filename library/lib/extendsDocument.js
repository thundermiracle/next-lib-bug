import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const makeDocument = (applyBootStrap = true) => DocumentComponent => {
  class withMakeDocument extends DocumentComponent {
    static async getInitialProps(ctx) {
      const initialProps = await super.getInitialProps(ctx);
      return { ...initialProps };
    }

    render() {
      return (
        <Html>
          <Head>
            {applyBootStrap && (
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
              />
            )}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  return withMakeDocument;
};

export default makeDocument;
