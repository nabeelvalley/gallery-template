import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brandColor
        }
      }
    }
  `);

  const { brandColor } = data.site.siteMetadata;

  return (
    <svg
      height="32px"
      width="32px"
      viewBox="0 0 100 100"
      version="1.1"
      id="svg8"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(0,-197)">
        <g
          id="g945"
          transform="matrix(1.2775157,0,0,1.2775157,-27.5161,103.31663)"
        >
          <rect
            ry="39.138462"
            y="73.332458"
            x="21.538757"
            height="78.276924"
            width="78.276924"
            id="rect826"
            style={{
              fill: brandColor,
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.56488496,
              strokeOpacity: 1,
            }}
          />
          <g transform="translate(-25.702387,-5.1026805)" id="g857">
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.26577345,
                strokeOpacity: 1,
              }}
              id="rect828"
              width="50.472683"
              height="50.472683"
              x="61.143265"
              y="92.337257"
              ry="15.517208"
            />
            <rect
              ry="11.187097"
              y="97.108353"
              x="65.91436"
              height="40.930473"
              width="40.930473"
              id="rect832"
              style={{
                fill: brandColor,
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.21552713,
                strokeOpacity: 1,
              }}
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.13572419,
                strokeOpacity: 1,
              }}
              id="rect834"
              width="25.7752"
              height="25.7752"
              x="73.492004"
              y="104.686"
              ry="12.8876"
            />
            <rect
              ry="7.9761686"
              y="109.59743"
              x="78.403442"
              height="15.952337"
              width="15.952337"
              id="rect836"
              style={{
                fill: brandColor,
                fillOpacity: 0.96862745,
                stroke: "none",
                strokeWidth: 0.08400005,
                strokeOpacity: 1,
              }}
            />
            <rect
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0.03264538,
                strokeOpacity: 1,
              }}
              id="rect838"
              width="6.1996384"
              height="6.1996384"
              x="96.319061"
              y="101.50504"
              ry="3.0998192"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
