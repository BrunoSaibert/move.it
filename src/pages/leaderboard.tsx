import Head from "next/head";
import React from "react";

import { Position } from "../components/Position";
// import { GetServerSideProps } from "next";

import styles from "../styles/pages/Leaderboard.module.css";

export default function Leaderboard() {
  return (
    <div className={`container ${styles.container}`}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <h1>Leaderboard</h1>

      <section>
        <header>
          <p className={styles.legend}>Posição</p>
          <p className={styles.legend} style={{ marginLeft: "1.5rem" }}>
            Usuário
          </p>
          <p className={styles.legend}>Desafios</p>
          <p className={styles.legend}>Experiência</p>
        </header>

        <Position />
        <Position />
      </section>
    </div>
  );
}
