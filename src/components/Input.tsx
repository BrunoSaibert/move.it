import { useState } from "react";

import styles from "../styles/components/Input.module.css";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Digite seu username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="button" disabled={!value}>
        <img src="/icons/arrow-right.svg" alt="Entrar" />
      </button>
    </div>
  );
}
