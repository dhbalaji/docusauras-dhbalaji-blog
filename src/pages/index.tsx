import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Frontend Revision Book (FRB)"}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
