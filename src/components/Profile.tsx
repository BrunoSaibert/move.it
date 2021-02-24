import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/BrunoSaibert.png"
        alt="Bruno Henrique Saibert"
      />

      <div>
        <strong>Bruno Henrique Saibert</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
