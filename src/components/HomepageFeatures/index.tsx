import React from "react";
import styles from "./styles.module.css";
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <h1 className={styles.h1}>dhbalaji.dev website under construction</h1>
          <p>
            You may find some stock content, lipsum etc. Meanwhile visit the
            below links only.
            <ol style={{ marginTop: "2rem" }}>
              <li className={styles.li} style={{ listStyle: "none" }}>
                <a href="tools-tech/2022">
                  Minimal Tech for building real applications in 2022
                </a>
              </li>
            </ol>
          </p>
        </div>
      </div>
    </section>
  );
}
