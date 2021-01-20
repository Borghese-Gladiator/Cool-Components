import React from 'react';
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "grid",
  placeItems: "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64
}
const headingAccentStyles = {
  color: "#663399",
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#757de8",
  fontWeight: "bold",
  fontSize: "20px",
  verticalAlign: "5%",
}

const secondaryLinkStyle = {
  color: "#ff7961",
  fontWeight: "bold",
  fontSize: "14px",
  verticalAlign: "5%",
}

const descriptionStyle = {
  marginTop: "8px",
  marginBottom: "16px",
  color: "#232129",
  fontSize: "14px",
}

const flexSpaceBetween = {
  display: "flex",
  justifyContent: "space-between"
}
// data
const links = [
  {
    text: "Glass Credit Card",
    url: "/credit_card/",
    secondaryURL: "https://dev.to/dailydevtips1/css-frosted-glass-credit-card-3lak",
    description:
      "CSS Frosted glass credit card - Created the Frosted blurry glass effect by using a backdrop-filter && a two-step animation transforming the elements to rotate from 0 to 360 degrees (a full circle). It also offsets the translateX axis to make it move.",
    color: "#E95800",
  },
  {
    text: "Vanilla JavaScript Particle Smoke",
    url: "/particle_smoke/",
    secondaryURL: "https://codepen.io/franksLaboratory/pen/ZEprPKx",
    description:
      "Particle Smoke animation over an image - Created by editing brightness & color of pixels of an image on a canvas with MANY arc patterns.",
    color: "#1099A8",
  },
  {
    text: "Glass Credit Card",
    url: "/credit_card/",
    secondaryURL: "https://dev.to/dailydevtips1/css-frosted-glass-credit-card-3lak",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Glass Credit Card",
    url: "/credit_card/",
    secondaryURL: "https://dev.to/dailydevtips1/css-frosted-glass-credit-card-3lak",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Glass Credit Card",
    url: "/credit_card/",
    secondaryURL: "https://dev.to/dailydevtips1/css-frosted-glass-credit-card-3lak",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        {"Found and Experimented with "}
        <span style={headingAccentStyles}>Cool Components</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <div style={flexSpaceBetween}>
                <Link style={linkStyle} to={`${link.url}`}>
                  {link.text}
                </Link>
                <a style={secondaryLinkStyle} href={`${link.secondaryURL}`}>
                  see original component
                </a>
              </div>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
