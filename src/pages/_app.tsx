import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-h5-audio-player/lib/styles.css";

import Layout from "../components/Layout";
import GlobalStyle from "../styles/Global";
import "~/styles/_fonts.css";
import { ContextProvider } from "~/utils";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
