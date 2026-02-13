import React from "react";
import "prismjs/themes/prism.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <main>
        <HomepageFeatures />
        <section id="portfolio" className="container margin-top--md">
          <div className="row">
            <div className="font--lg col">
              <h2>Portfolio</h2>
              <p className={`margin-bottom--md ${styles.paragraph}`}>
                Balaji is a Lead Frontend Engineer with 10+ years of experience building scalable, high-performance, and secure web applications for enterprise platforms. He specializes in frontend architecture, system design, and modern JavaScript frameworks, with deep expertise in React, component libraries, design systems, and cloud-integrated UI solutions.
              </p>
              <p className={`margin-bottom--md ${styles.paragraph}`}>
                At Sabre Travel Technologies, he plays a key role in delivering AI-powered products and enterprise UI platforms. As a founding member of the CRO AI product and the Spark design system, he has led end-to-end frontend development, from technical planning, framework selection to implementation, testing, and large-scale deployment. His work emphasizes clean code, maintainable architecture, reusable components, and CI/CD-driven delivery.
              </p>
              <p className={`margin-bottom--md ${styles.paragraph}`}>
                Balaji brings strong hands-on engineering skills alongside technical leadership. He evaluates technologies, manages dependencies, and balances custom development with enterprise-grade third-party solutions to optimize performance, stability, and time-to-market. His platforms support responsive design, accessibility standards, cross-browser compatibility, and automated testing using modern tools.
              </p>
              <p className={`margin-button--md ${styles.paragraph}`}>
                He actively drives AI adoption in frontend engineering. He designed MCP-based developer platforms, implemented AI assistants, structured Copilot workflows, and introduced automated code review and quality assurance pipelines to improve developer productivity and code reliability.
              </p>
              <p className={`margin-button--md ${styles.paragraph}`}>
                Beyond individual products, Balaji has led enterprise-wide initiatives such as portfolio rebranding, working within boundaries of Non Disclosure Agreements (NDA) and large-scale UI migrations. He works closely with product, UX, cloud, and automation teams to ensure smooth transitions with minimal disruption. By creating reference implementations and clear documentation, he helps teams adopt new standards efficiently.
              </p>
              <p className={`margin-button--md ${styles.paragraph}`}>
                Known for strong communication and stakeholder management, supported by his Toastmasters background, Balaji combines technical excellence with collaborative leadership. He consistently delivers scalable, user-centric, and future-ready frontend solutions that drive business impact.
              </p>
              <a
                className="button button--primary button--md"
                href="/docs/experience/portfolio"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="font--lg col">
              <h2>Contact me</h2>
              <p className={`margin-bottom--md`}>
                If you need reliable frontend leadership, let’s talk!
              </p>
              <div className="buttons">
                <a className="button button--primary button--md" href="mailto:balaji@dhbalaji.dev">
                  Email
                </a>
                <a
                  className="button button--primary button--md margin-left--sm"
                  href="https://www.linkedin.com/in/dhbalaji/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout >
  );
}
