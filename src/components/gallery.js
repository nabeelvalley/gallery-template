import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useWindowSize } from "./useWindowSize";

import { Gallery as PGallery, Item as PItem } from "react-photoswipe-gallery";

export const Gallery = () => {
  const { width } = useWindowSize();

  const count = width > 1200 ? 3 : width > 900 ? 2 : 1;

  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: { original: { src: { glob: "**/*.{png,jpg,jpeg}" } } }
      ) {
        edges {
          node {
            fluid(maxWidth: 2400) {
              aspectRatio
              presentationHeight
              presentationWidth
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
      <PGallery
        options={{
          bgOpacity: "0.75",
          mainClass: "photoswipe-custom-main",
          shareButtons: [
            {
              id: "download",
              label: "Download",
              download: true,
              url: "{{raw_image_url}}",
            },
          ],
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
                className="expand"
                style={{
                  gridColumn: "span 6",
                  gridRow: image.aspectRatio > 1 ? "span 8" : "span 4",
                }}
                key={image.src}
              >
                <PItem
                  original={image.src}
                  height={image.presentationHeight}
                  width={image.presentationWidth}
                >
                  {({ ref, open }) => (
                    <div onClick={open} ref={ref}>
                      <Img src={image.src} fluid={image} />
                    </div>
                  )}
                </PItem>
              </div>
            ))}
          </div>
        ))}
      </PGallery>
    </div>
  );
};
