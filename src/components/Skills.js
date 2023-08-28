import * as React from "react";
import "./Skills.css";
import styled from "styled-components";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const Container = styled.div`
  text-align: center;
  font-family: Nanum Gothic, sans-serif;
  color: "rgb(65, 64, 66)";
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const logoStyles = {
  fontSize: "3rem",
};

const Skills = () => {
  return (
    <>
      <Container>
        <h3>My all-time favorite tech</h3>
        <div style={logoStyles}>
          <FaReact
            style={{
              background: "-webkit-linear-gradient(45deg, #ffc837, #ff8008)",
              color: "white",
              fontSize: "4rem",
              marginRight: "2rem",
            }}
          />
          <IoLogoJavascript
            style={{
              background: "-webkit-linear-gradient(135deg, #ffc837, #ff8008)",
              color: "white",
              fontSize: "4rem",
            }}
          />
        </div>
        <div>
          <h3>And some others</h3>
          <ul className="skillsList">
            <li>TypeScript</li>
            <li>Jest</li>
            <li>Playwright</li>

            <li>TeamCity</li>
            <li>Ember</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Skills;
