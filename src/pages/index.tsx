import React from "react";
import "prismjs/themes/prism.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <main>
        <HomepageFeatures />
        <section id="portfolio" className="container margin-top--xl">
          <div className="row">
            <div className="font--lg col">
              <h2>Portfolio</h2>
              <p className="margin-bottom--md">
                Throughout my 10+ years as a Lead Frontend Engineer, I have architected and delivered enterprise-grade React applications across diverse industries including E-commerce, Fintech, and Travel technology. My career highlights include driving scalable design systems for global SaaS platforms, pioneering API-first frontend strategies, and mentoring cross-functional teams to elevate code quality and innovation.
              </p>
              <p className="margin-bottom--md">
                Notable projects involve building highly resilient, user-centric interfaces at Sabre, optimizing complex workflows for millions of users, and integrating cutting-edge web analytics and accessibility practices. I am passionate about transforming complex business problems into elegant technical solutions that unlock value and drive growth.
              </p>
              <p className="margin-bottom--md">
                Explore some of my featured projects demonstrating advanced frontend architecture, seamless cloud integrations, and rich user experiences.
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
              <p className="margin-bottom--md">
              Interested in collaborating on cutting-edge frontend development, enterprise design systems, or scalable web architecture? Whether you are a recruiter looking for a proven React expert or a client seeking innovative digital solutions, I’m open to new opportunities and partnerships.
              </p>
              <div className="buttons">
                <a className="button button--secondary button--md" href="mailto:balaji@dhbalaji.dev">
                  Email
                </a>
                <a
                  className="button button--secondary button--md margin-left--sm"
                  href="https://www.linkedin.com/in/dhbalaji/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn
                </a>
                <a
                  className="button button--secondary button--md margin-left--sm"
                  href="https://www.github.com/dhbalaji/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
                <a
                  className="button button--secondary button--md margin-left--sm"
                  href="https://www.x.com/dhbalaji/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout >
  );
}
