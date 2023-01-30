import { React } from "react";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "../src/assets/globals.scss";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Component {...pageProps} />;
    </AnimatePresence>
  );
}

export default appWithTranslation(App);
