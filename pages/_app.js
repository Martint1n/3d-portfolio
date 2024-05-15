import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/capsule-icon.svg" />
        <title>3d_Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
