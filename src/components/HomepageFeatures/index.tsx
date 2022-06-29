import React from "react";
import styles from "./styles.module.css";
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <h1>Frontend Revision Book (FRB)</h1>
          <h2>under development...</h2>
          <h3>
            <a href="tools-tech/2022">Tech for application developers</a>
          </h3>
        </div>
      </div>
    </section>
  );
}
