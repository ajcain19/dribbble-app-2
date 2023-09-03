import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "dribbble-app";
import { Hero } from "dribbble-app";
import { Callout } from "dribbble-app";
import { Footer } from "dribbble-app";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Dribbble-App | App #2 | Design System by Anthony Cain</h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h2>Button</h2>
      <Button label="This is a Button" />
      <hr />
      <h2>Callout</h2>
      <Callout
        heading="This is a Callout"
        blurb="This is blurb text"
        linkDescription="This is a Link NOW"
      />
      <hr />
      <h2>Hero</h2>
      <Hero
        heading="This is a Hero"
        blurb="This is a blurb"
        linkDescription="This is a link"
      />
      <hr />
      <h2>Footer</h2>
      <Footer label="This is a Footer" />

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
