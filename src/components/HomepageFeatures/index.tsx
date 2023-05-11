import React, { useEffect } from "react";
import Prism from "prismjs";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

const whoami = `{
    "id": 1234567890,
    "name": "Balaji",
    "username": "dhbalaji",
    "email": "balaji@dhbalaji.dev",
    "role": "lead frontend developer at Sabre.",
    "location": "Bangalore, India",
    "experience": "9+ years",
    "skills": [
      "JavaScript",
      "TypeScript",
      "React JS",
      "Web Analytics",
      "Accessibility",
    ],
    "domains": [
      "Enterprise Design Language",
      "E-commerce",
      "Fin-tech",
      "Enterprise application development"
    ],
    "education": ["BE, PES University"],
    "work_experience": [
      "Sabre",
      "Landmark Group",
      "Rare mile tech",
      "Tata Consultancy Services"
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
            paddingTop: "2rem",
            paddingBottom: "1rem",
            textAlign: "center",
          }}
        >
          <p>
            I have compiled a{" "}
            <a href="/news">list of newsletters, podcasts, and videos</a> that
            will keep you up-to-date on the latest frontend technologies.
          </p>
        </section>
        <section>
          <ul style={{ textAlign: "center" }}>
            <li style={{ listStyle: "none" }}>
              <Link to="docs/certifications/marketing/GA4">
                <img src={"img/ga4-certified.png"} alt="Google analytics" />
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.mtop2}>
          <div className={styles.flexContainer}>
            <button
              className={"clean-btn button button--primary margin-left--md"}
            >
              Short Resume
            </button>
            <button
              className={"clean-btn button button--primary margin-right--md"}
            >
              Detailed Resume
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
