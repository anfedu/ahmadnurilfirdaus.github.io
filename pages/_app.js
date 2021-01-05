import React from "react";
import "../styles/globals.less";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/profileCrop.png" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
