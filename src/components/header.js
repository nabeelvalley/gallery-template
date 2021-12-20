import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Twitter } from "./twitter";
import { Instagram } from "./instagram";
import { Download } from "./download";

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          instagram
          twitter
        }
      }
    }
  `);

  const { title, author, instagram, twitter } = data.site.siteMetadata;

  return (
    <header
      style={{
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "500px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "12px", fontWeight: 400 }}>
        {title}
      </h1>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 300,
          marginBottom: "24px",
          fontWeight: 300,
        }}
      >
        by {author}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "24px",
          justifyContent: "center",
        }}
      >
        <a
          target="__blank"
          rel="noopener noreferrer"
          style={{ display: "block", paddingRight: "12px" }}
          href={`https://www.instagram.com/${instagram}`}
        >
          <Instagram />
        </a>
        <a
          target="__blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
          href={`https://www.twitter.com/${twitter}`}
        >
          <Twitter />
        </a>
      </div>
      <div
        style={{
          marginBottom: "48px",
        }}
      >
        <Download />
      </div>
    </header>
  );
};
