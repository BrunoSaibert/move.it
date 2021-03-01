import Head from "next/head";
import { Input } from "../components/Input";

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

          <p>
            <img src="/icons/github.svg" alt="Github" />
            Faça login com seu Github para começar
          </p>

          <Input />
        </div>
      </section>
    </>
  );
}
