import * as React from "react";
import { Link } from "react-scroll";
import { HiChevronDoubleDown } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import Social from "../components/Social.js";
import "./Landing.css";

const backgroundAnimation = keyframes`
 0% { --my-angle: 0deg; }
 100% { --my-angle: 360deg; }`;

const Container = styled.div`
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  --my-angle: 0deg;
  background: #ff8008;
  background-image: -webkit-linear-gradient(var(--my-angle), #ffc837, #ff8008);
  background-image: linear-gradient(var(--my-angle), #ffc837, #ff8008);

  background-size: 100% 100%;
  animation: ${backgroundAnimation} 8s linear infinite;
`;

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
  marginTop: ".75em",
};

const descriptionStyles = {
  marginTop: "20px",
  fontFamily: "PT Sans, monospace",
};

const Landing = () => {
  return (
    <>
      <Container>
        <div style={boxStyles}>
          kerry <br />
          laval
        </div>
        <div style={descriptionStyles}>Frontend Enthusiast</div>
        <Social
          flexDirection={"row"}
          color="white"
          size="1.5em"
          gap="1rem"
          leftMargin="0"
        />
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-44}
          duration={500}
        >
          <div className="arrowBounce">
            <HiChevronDoubleDown />
          </div>
        </Link>
      </Container>
    </>
  );
};

export default Landing;
