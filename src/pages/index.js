import * as React from "react";
import "../components/index.css";
import { Gallery } from "../components/gallery";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useStaticQuery, graphql } from "gatsby";
import { useWindowSize } from "../components/useWindowSize";

const IndexPage = () => {
  const { width } = useWindowSize();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          textColor
        }
      }
    }
  `);

  const { title, textColor } = data.site.siteMetadata;

  const padding = width > 1200 ? 48 : width > 900 ? 24 : 12;

  return (
    <main
      style={{
        color: textColor,
        padding,
      }}
    >
      <title>{title}</title>
      <Header />
      <Gallery />
      <Footer />
    </main>
  );
};

export default IndexPage;
