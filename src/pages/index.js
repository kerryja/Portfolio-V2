import * as React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const pageStyles = {
  minHeight: "100vh",
  marginLeft: "6rem",
  marginTop: "6rem",
  width: "75%",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const IndexPage = () => {
  return (
    <>
      <Landing />
      <main style={pageStyles}>
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Kerry Laval</title>
  </>
);
