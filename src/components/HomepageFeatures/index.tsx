import React, { useEffect } from "react";
import Prism from "prismjs";

import styles from "./styles.module.css";
const whoami = `{
  name: "Balaji",
  skilledAt: [
    "Frontend Consulting",
    "Technical Speaker"
  ],
  tags: [
    "Lead Frontend Engineer",
    "React Design Systems"
  ],
  location: "Bangalore, India",
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
        <section>
          <h2>Certifications</h2>
          <ul>
            <li style={{ listStyle: "none" }}>
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/72350171" alt="Google analytics" />
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
