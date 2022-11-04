import React, { useEffect } from "react";
import Prism from "prismjs";

const whoami = `{
  fullName: "Balaji D",
  alias: "dhbalaji",
  designation: "Lead Design Technologist",
  employer: "Sabre",
  location: "Near Bangalore, India",
  tags: [
    "Lead Frontend Engineer",
    "React Design Systems",
    "EDL Library Maintainer",
    "Life Long Learner",
    "Passionate Geek"
  ]
}`;

const Whoami = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="whoami">
      <div className={"grid-container"}>
        <div className={"grid-item-left"}>whoami</div>
        <div className={"grid-item-right"}>
          <pre>
            <code className="language-js">{whoami}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Whoami;
