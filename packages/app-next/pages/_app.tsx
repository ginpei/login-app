import "../src/misc/tailwind.css";
import "@login-app/ui/out/styles.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
