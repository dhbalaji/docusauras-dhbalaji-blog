import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

function ResumeDownloadLinks() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  return (
    <p>
      Download{" "}
      <a href={customFields.detailedResume} target="_blank">
        Detailed Resume
      </a>{" "}
      |{" "}
      <a href={customFields.singlePageResume} target="_blank">
        Short Resume
      </a>
    </p>
  );
}

export default ResumeDownloadLinks;
