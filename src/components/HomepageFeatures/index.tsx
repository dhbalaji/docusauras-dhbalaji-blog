import React, { useEffect } from "react";
import Prism from "prismjs";
import classnames from "classnames";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const whoami = `{
    "name": "Balaji",
    "designation": "Lead Design Technologist",
    "location": "Bangalore, India",
    "website": "https://dhbalaji.dev",
    "github": "https://github.com/dhbalaji",
    "linkedin": "https://www.linkedin.com/in/dhbalaji/",
    "experience": "10+ years",
    "email": "balaji@dhbalaji.dev",
    "employer": "Sabre",
    "skills": [
        "React Application Development",
        "Enterprise Design Language",
        "Team Leadership",
    ],
    "tagline": "Unlock Business Value. Realize Your Dreams.",
}`;

export default function HomepageFeatures(): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Hi, I'm Balaji"}</h1>
          <p className={classnames("hero__subtitle", styles.subTitle)}>
            {"Design, Code, Lead"}
          </p>
          <div className={styles.buttons}>
            <a
              className={classnames(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              style={{ display: "none" }}
              href={customFields.singlePageResume}
              target="_blank"
            >
              Resume
            </a>
            <Link
              className={classnames("button button--secondary button--lg")}
              href={"/docs/experience/portfolio"}
            >
              Portfolio ☆
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row margin-top--xl ">
          <div className="col margin-bottom--xl">
            <h2 className="font--xl">About</h2>
            <div className="font--lg margin-bottom--lg">
              <p>
                Balaji is a Lead Frontend Developer & Tech Educator with 10+
                years of experience in JavaScript, TypeScript, React, Web
                Analytics, and Accessibility. At Sabre, he builds
                enterprise-grade solutions, from E-commerce and Fintech to
                large-scale design systems, driving business impact through
                technology.
              </p>
              <p>
                Passionate about mentoring and content creation, he helps
                professionals upskill and navigate career growth. A lifelong
                learner and entrepreneur, he also explores agriculture and
                sustainable business models.
              </p>
            </div>
            <div className={"text--center"}>
              <a
                className={"button button--primary button--md font-md"}
                href={customFields.detailedResume}
                target="_blank"
              >
                Descriptive Resume
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
                href={customFields.singlePageResume}
                target="_blank"
              >
                One Page Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
