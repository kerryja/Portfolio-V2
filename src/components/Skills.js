import * as React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const skillsStyles = {
  textAlign: "center",
  fontSize: "20px",
};

const listStyles = {
  listStyle: "none",
  margin: "0",
  padding: "0",
};

const logoStyles = {
  fontSize: "3rem",
};

const Skills = () => {
  return (
    <>
      <div style={skillsStyles}>
        <div style={logoStyles}>
          <FaReact />
          <IoLogoJavascript />
          <SiRedux />
        </div>
        <div>
          <h3>And some others...</h3>
          <ul style={listStyles}>
            <li>Playwright</li>
            <li>Jest</li>
            <li>Octopus</li>
            <li>Team City</li>
            <li>Ember</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
