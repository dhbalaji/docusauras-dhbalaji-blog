import React, { useEffect } from "react";
import Prism from "prismjs";
import Link from '@docusaurus/Link';

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
            borderBottom: "1px solid lightgrey",
            paddingTop: "2rem",
            paddingBottom: "1rem",
            marginTop: "5rem",
            marginBottom: "4rem",
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
            <Link to="docs/certifications/marketing/GA4">
              <img src={"img/ga4-certified.png"} alt="Google analytics" />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
