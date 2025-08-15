import React, { useEffect } from "react";
import Prism from "prismjs";
import classnames from "classnames";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const whoami = `{
    "name": "Balaji",
    "designation": "Lead Design Technologist",
    "email": "balaji@dhbalaji.dev",
    "employer": "Sabre Corporation",
    "experience": "10+ years",
    "location": "Bangalore, India",
    "skills": [
        "React application development",
        "Enterprise design language",
        "Lead large scale UI projects",
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
            {"Frontend Lead by craft, Toastmaster by choice, Indie Builder at heart."}
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
            <div style={{ textAlign: "center", marginBottom: "20px" }}> 
            <img src="/img/dhbalaji.jpg" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="font--lg margin-bottom--lg">
              <p>
               Balaji is a frontend architect at Sabre Travel Tech, building scalable enterprise user interfaces from ITPL Bangalore office. A proud Toastmasters leader and self-confessed nerd, he channels his passion for clarity into UI, AI experiments, and indie tech projects—always eager to share what he learns with the tech community.
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

      <div className="container">
        <h2>AI Generated Audio Summary of Recent Article</h2>
        <iframe title="The Art of Felicitation: A Toastmasters Tale" allowtransparency="true" height="300" width="100%" style={{border: "none", minWidth: "min(100%, 430px)",height:"175px", marginBottom: "20px"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?from=embed&i=6aki4-193504b-pb&square=1&share=1&download=1&fonts=Arial&skin=1&font-color=auto&rtl=0&logo_link=episode_page&btn-skin=3ab278&size=300" loading="lazy" allowfullscreen=""></iframe>
      </div>
    </>
  );
}


