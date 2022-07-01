import React from "react";
import styles from "./styles.module.css";
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <h1 className={styles.h1}>dhbalaji.dev website under construction</h1>
          <p>
            Meanwhile visit
            <ol>
              <li>
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
