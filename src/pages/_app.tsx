import { Provider } from "next-auth/client";

import { AuthProvider } from "../contexts/AuthContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
