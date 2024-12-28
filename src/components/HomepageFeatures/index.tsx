import React, { useEffect } from "react";
import Prism from "prismjs";
import classnames from "classnames";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const whoami = `{
    "name": "D.Balaji",
    "designation": "Lead Design Technologist",
    "experience": "10+ years",
    "email": "balaji@dhbalaji.dev",
    "employer": "Sabre",
    "skills": [
        "React Application Development",
        "Enterprise Design Language",
        "Team Leadership",
    ],
    "tagline": "Relentlessly seek business value.
     Tirelessly solve challenges with technology.",
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
            {
              "Relentlessly seek business value. Tirelessly solve challenges with technology."
            }
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
              href={"/docs/portfolio"}
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
                Balaji is a seasoned Lead Frontend Developer with over a decade of experience in the IT industry. Currently, he contributes his expertise at Sabre, a global technology leader shaping the future of the travel industry.
              </p>
              <p>
                With a strong foundation in JavaScript, TypeScript, React JS, Web Analytics, and Accessibility, Balaji has successfully delivered enterprise-grade solutions across diverse domains, including E-commerce, Fintech, and large-scale enterprise applications. His proficiency extends to developing Enterprise Design Systems and creating seamless digital experiences.
              </p>
              <p>
                Balaji holds a Bachelor of Engineering degree from PES University and has gained valuable experience working with esteemed organizations like Sabre, Landmark Group, Rare Mile Technologies, and Tata Consultancy Services.
              </p>
              <p>
                A passionate lifelong learner, he balances his professional pursuits with personal interests such as reading thought-provoking books and visiting the serene countryside.
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
