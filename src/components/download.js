import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const download = (uri, name) => {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const Download = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  const handleDownload = () => download("download.zip", `${title}.zip`);

  return (
    <div style={{ textAlign: "center" }}>
      <button className="button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};
