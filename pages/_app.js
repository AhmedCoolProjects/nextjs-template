import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "@comp/utils/Layout";
import { AppProvider } from "contexts/AppContext";

function MyApp({ Component, pageProps }) {
  return (
   <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout></AppProvider> 
  );
}

export default MyApp;
