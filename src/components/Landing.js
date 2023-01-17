import * as React from "react";
import Social from "../components/Social.js";

const pageStyles = {
  minHeight: "100vh",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#e96443" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #904e95, #e96443)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #904e95, #e96443)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

  webkitAnimation: "Animation 5s ease infinite",
  mozAnimation: "Animation 5s ease infinite",
  animation: "Animation 5s ease infinite",
};

const boxStyles = {
  border: "6px solid",
  fontSize: "500%",
  fontFamily: "Anonymous Pro, monospace",
  color: "white",
  paddingLeft: "50px",
  paddingRight: "50px",
  paddingTop: "60px",
  paddingBottom: "60px",
  textAlign: "center",
};

const descriptionStyles = {
  marginTop: "20px",
  fontFamily: "PT Sans, monospace",
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

const Landing = () => {
  return (
    <>
      <div style={pageStyles}>
        <div style={boxStyles}>
          kerry <br />
          laval
        </div>
        <div style={descriptionStyles}>Frontend Enthusiast</div>
        <Social />
      </div>
    </>
  );
};

export default Landing;
