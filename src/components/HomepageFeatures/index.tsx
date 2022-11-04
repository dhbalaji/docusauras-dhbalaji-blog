import React, { useEffect } from "react";
import KeepUpdated from "../common/KeepUpdated";
import PastWorks from "../common/Assignments";
import styles from "./styles.module.css";
import Whoami from "./Whoami";
import Clients from "../common/Clients";
import Specialization from "../common/Specialization";
import CoreTechnologies from "../common/CoreTech";
import Footer from "../common/Footer";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Whoami />
        <KeepUpdated />
        <PastWorks />
        <Clients />
        <Specialization />
        <CoreTechnologies />
        <Footer />
      </div>
    </section>
  );
}
