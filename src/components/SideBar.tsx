import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/client";
import { IoMdLogOut } from "react-icons/io";

import styles from "../styles/components/SideBar.module.css";

export function SideBar() {
  const router = useRouter();

  return (
    <header className={styles.sideBarContainer}>
      <img src="/icons/logo.svg" alt="Move it" />

      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.active : null}>
            <img src="/icons/home.svg" alt="Início" />
          </a>
        </Link>

        <Link href="/leaderboard">
          <a
            className={
              router.pathname === "/leaderboard" ? styles.active : null
            }
          >
            <img src="/icons/award.svg" alt="Posições" />
          </a>
        </Link>
      </nav>

      <a href="#" onClick={() => signOut()} title="Sair do move.it">
        <IoMdLogOut />
      </a>
    </header>
  );
}
