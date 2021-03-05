import styles from "../styles/components/Loading.module.css";

export default function Loading() {
  return (
    <section className={styles.loadingContainer}>
      <img src="/icons/logo.svg" alt="Move it" />
    </section>
  );
}
