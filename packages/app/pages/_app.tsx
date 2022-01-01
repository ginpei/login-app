import "../src/misc/tailwind.css";
import "../src/ui/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
