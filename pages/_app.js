import '../styles/globals.css';
import Head from 'next/head';
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../utilities/i18n';

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <Head>
          <link rel="shortcut icon" href="/capsule-icon.svg" />
          <title>3d_Portfolio</title>
        </Head>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
