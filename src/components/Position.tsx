import styles from "../styles/components/Position.module.css";

export function Position() {
  return (
    <div className={styles.positionItem}>
      <span className={styles.positionNumber}>1</span>

      <div className={styles.positionProfile}>
        <img
          src="https://github.com/BrunoSaibert.png"
          alt="Bruno Henrique Saibert"
        />

        <div>
          <strong>Bruno Henrique Saibert</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level 2
          </p>
        </div>
      </div>

      <p className={styles.positionDetails}>
        <span>127</span> completados
      </p>
      <p className={styles.positionDetails}>
        <span>154000</span> xp
      </p>
    </div>
  );
}
