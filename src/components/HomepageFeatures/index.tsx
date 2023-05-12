import React, { useEffect } from "react";
import Prism from "prismjs";
import classnames from "classnames";

import styles from "./styles.module.css";

const whoami = `{
    "id": 1234567890,
    "name": "Balaji",
    "username": "dhbalaji",
    "email": "balaji@dhbalaji.dev",
    "role": "lead frontend developer",
    "location": "Bangalore, India",
    "skills": [
      "React Apps",
      "Design Language",
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
          <h1 className="hero__title">{"Hi, Balaji here!"}</h1>
          <p className={classnames("hero__subtitle", styles.subTitle)}>
            {
              "Meet the Senior Frontend Engineer, Design Technologist, Developer Evangelist, Charismatic Speaker and Eclectic Reader"
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
            <p className="font--lg margin-bottom--lg">
              Balaji is a Lead Frontend Developer with over 9 years of
              experience in the IT industry. He is currently working at Sabre, a
              global technology company that powers the world's travel industry.
              He has a strong background in JavaScript, TypeScript, React JS,
              Web Analytics, and Accessibility. He is also proficient in
              Enterprise Design Language, E-commerce, Fin-tech, and Enterprise
              application development. Balaji has a BE degree from PES
              University. He has worked at Sabre, Landmark Group, Rare mile
              tech, and Tata Consultancy Services. He is a lifelong learner who
              enjoys reading books and cycling in peaceful countryside.
            </p>
            <div className={"text--center"}>
              <a
                className={"button button--primary button--md font-md"}
                href="files/dhbalaji-frontend-detailed-resume-v23-05-11.pdf"
                target="_blank"
              >
                Download Detailed Resume
              </a>
            </div>
          </div>
          <div className="col margin-bottom--xl">
            <h2 className="font--xl">
              <code>whoami</code>
            </h2>
            <pre className={"margin-bottom--lg"}>
              <code className="language-js">{whoami}</code>
            </pre>
            <div className={"text--center"}>
              <a
                className={classnames(
                  "button button--primary button--md font-md"
                )}
                href={"/files/dhbalaji-frontend-short-resume-v23-05-11.pdf"}
                target="_blank"
              >
                Download Short Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
