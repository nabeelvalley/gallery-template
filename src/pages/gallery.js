import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useWindowSize } from "./useWindowSize";

export const Gallery = () => {
  const { width } = useWindowSize();

  const count = width > 1200 ? 3 : width > 900 ? 2 : 1;

  const data = useStaticQuery(graphql`
    query AllImages {
      allImageSharp(
        filter: { original: { src: { glob: "**/*.{png,jpg,jpeg}" } } }
      ) {
        edges {
          node {
            fluid(maxWidth: 2400) {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const fluids = data.allImageSharp.edges.map((e) => e.node.fluid);

  const cols = [...Array(count)].map((arr) => []);

  console.log({ width, count, cols });

  fluids.forEach((image, index) => {
    cols[index % count].push(image);
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${count}, 1fr)`,
        gap: "20px",
      }}
    >
      {cols.map((row) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px",
            marginBottom: "auto",
          }}
        >
          {row.map((image) => (
            <div
              style={{
                gridColumn: "span 6",
                gridRow: image.aspectRatio > 1 ? "span 8" : "span 4",
              }}
            >
              <Img fluid={image} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
