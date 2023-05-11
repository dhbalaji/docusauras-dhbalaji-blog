import React, { useEffect } from "react";
import Prism from "prismjs";
import Link from "@docusaurus/Link";
import classnames from "classnames";

import styles from "./styles.module.css";

const whoami = `{
    "id": 1234567890,
    "name": "Balaji",
    "username": "dhbalaji",
    "email": "balaji@dhbalaji.dev",
    "role": "lead frontend developer at Sabre.",
    "location": "Bangalore, India",
    "skills": [
      "JavaScript",
      "TypeScript",
      "React JS",
      "Web Analytics",
      "Accessibility",
      "Public Speaking"
    ]
}`;

export default function HomepageFeatures(): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Balaji"}</h1>
          <p className={classnames("hero__subtitle", styles.subTitle)}>
            {
              "A seasoned Frontend Engineer, Design Technologist, and Developer Evangelist who excels in the art of oratory and savors the written word of non-fiction!"
            }
          </p>
          <div className={styles.buttons}>
            <a
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              href={"/files/dhbalaji-frontend-short-resume-v23-05-11.pdf"}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row margin-top--xl ">
          <div className="col margin-bottom--xl">
            <h2 className="font--xl">Bio</h2>
            <p className="font--lg">
              Balaji is a Lead Frontend Developer with 9+ years of experience in
              the IT industry. He is currently working at Sabre, a global
              technology company that powers the world's travel industry. Balaji
              has a strong background in JavaScript, TypeScript, React JS, Web
              Analytics, and Accessibility. He is also proficient in Enterprise
              Design Language, E-commerce, Fin-tech, and Enterprise application
              development. Balaji has a BE degree from PES University. He has
              worked at Sabre, Landmark Group, Rare mile tech, and Tata
              Consultancy Services.
            </p>
            <div className="row text--center">
              <a
                className={
                  "col--3 col--offset-1 button button--primary button--md"
                }
                href="files/dhbalaji-frontend-detailed-resume-v23-05-11.pdf"
                target="_blank"
              >
                Download Detailed Resume
              </a>
              <a
                className={classnames(
                  "col--3 col--offset-1 button button--primary button--md"
                )}
                href={"/files/dhbalaji-frontend-short-resume-v23-05-11.pdf"}
                target="_blank"
              >
                Download Short Resume
              </a>
            </div>
          </div>
          <div className="col margin-bottom--xl">
            <h2 className="font--xl">
              <code>whoami</code>
            </h2>
            <pre>
              <code className="language-js">{whoami}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
