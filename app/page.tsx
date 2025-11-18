import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Product Jam Assignment</h1>
        <p className={styles.intro}>
          This project includes three main parts, each demonstrating different aspects of web development:
        </p>

        <div className={styles.parts}>
          <div className={styles.part}>
            <h2 className={styles.partTitle}>
              <Link href="/tic-tac-toe">Part 1: Tic-Tac-Toe Game</Link>
            </h2>
            <p className={styles.partDescription}>
              A classic Tic-Tac-Toe game built with React. Features game state management, 
              win detection, and draw handling. Styled with CSS modules for a clean, modern interface.
            </p>
          </div>

          <div className={styles.part}>
            <h2 className={styles.partTitle}>
              <Link href="/art">Part 2: Art Gallery</Link>
            </h2>
            <p className={styles.partDescription}>
              An interactive art gallery that fetches and displays artwork from The Metropolitan 
              Museum of Art API. Includes random selection, error handling, and detailed artwork information.
            </p>
          </div>

          <div className={styles.part}>
            <h2 className={styles.partTitle}>
              <Link href="/design">Part 3: Design Implementation</Link>
            </h2>
            <p className={styles.partDescription}>
              A responsive design implementation based on a Figma design. Features custom typography, 
              mobile-first responsive layout, and accurate visual representation of the original design.
            </p>
          </div>
        </div>

        <p className={styles.footer}>
          Use the navigation bar above to explore the different sections, or click the titles to jump directly.
        </p>
      </div>
    </main>
  );
}
