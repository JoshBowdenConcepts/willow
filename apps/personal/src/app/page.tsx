import Image from "next/image";
import styles from "./page.module.css";
import { Text } from "components";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Text>Something</Text>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
