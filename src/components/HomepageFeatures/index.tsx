import React, { useEffect } from "react";
import Prism from "prismjs";

import styles from "./styles.module.css";
const whoami = `{
  fullName: "Balaji D",
  alias: "dhbalaji",
  designation: "Lead Design Technologist",
  employer: "Sabre",
  location: "Near Bangalore, India",
  tags: [
    "Lead Frontend Engineer",
    "React Design Systems",
    "EDL Library Maintainer",
    "Life Long Learner",
    "Passionate Geek"
  ]
}`;

export default function HomepageFeatures(): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <section className={styles.features}>
      <div className="container">
        <article className="whoami">
          <div className={"grid-container"}>
            <div className={"grid-item-left"}>whoami</div>
            <div className={"grid-item-right"}>
              <pre>
                <code className="language-js">{whoami}</code>
              </pre>
            </div>
          </div>
        </article>
        <section
          style={{
            borderTop: "1px solid lightgrey",
            paddingTop: "2rem",
            marginTop: "5rem",
            textAlign: "center",
          }}
        >
          <p>
            Here are my{" "}
            <a href="/news">compilation of newsletters, podcasts and videos</a>{" "}
            to keep you updated in frontend technologies
          </p>
        </section>
      </div>
    </section>
  );
}
