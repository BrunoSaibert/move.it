import Head from "next/head";
import { signIn } from "next-auth/client";
import { IoLogoGoogle } from "react-icons/io";

import { Button } from "../components/Button";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <section className={styles.container}>
        <div className={styles.loginForm}>
          <img src="/logo-white-full.svg" alt="Logo Move.it" />

          <h1>Bem-vindo</h1>

          <p>Faça seu login para começar</p>

          <Button onClick={() => signIn("google")}>
            <IoLogoGoogle /> Conectar com Google
          </Button>
        </div>
      </section>
    </>
  );
}
