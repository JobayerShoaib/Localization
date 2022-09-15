import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(MyApp);
//export default MyApp;
