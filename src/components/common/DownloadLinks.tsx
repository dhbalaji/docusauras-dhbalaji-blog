import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

type ResumeDownload = {
  isInLine: boolean;
};

function ResumeDownloadLinks({ isInLine = true }: ResumeDownload): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const Wrapper = isInLine ? "span" : "p";
  const downloadText = isInLine ? "download" : "Download";

  return (
    <Wrapper>
      {downloadText}{" "}
      <a href={customFields.detailedResume} target="_blank">
        Detailed resume
      </a>{" "}
      or{" "}
      <a href={customFields.singlePageResume} target="_blank">
        One page resume
      </a>{" "}
      pdf.
    </Wrapper>
  );
}

export default ResumeDownloadLinks;
