import { SideBar } from "../components/SideBar";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
