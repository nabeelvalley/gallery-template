import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footer
        }
      }
    }
  `);

  const { footer } = data.site.siteMetadata;

  return (
    <footer>
      <p style={{ textAlign: "center", marginTop: "48px", fontWeight: 300 }}>
        {footer}
      </p>
    </footer>
  );
};
