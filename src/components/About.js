import * as React from "react";
import { Element } from "react-scroll";
import Social from "../components/Social.js";
import "./About.css";

import { BsSuitHeartFill } from "react-icons/bs";

const pageStyles = {
  color: "rgb(65, 64, 66)",
  fontFamily: "PT Sans, sans-serif",
  fontSize: "17px",
};

const mainHeadingStyles = {
  fontFamily: "Nanum Gothic, sans-serif",
  textTransform: "uppercase",
};

const headingStyles = {
  fontSize: "17px",
  fontWeight: "bold",
};

const linkStyle = {
  color: "#FF8E15",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
};

const About = () => {
  return (
    <Element name="about">
      <div style={pageStyles}>
        <div className="grid-container">
          <h1 className="header" style={mainHeadingStyles}>
            Hello. I'm Kerry, and I
            <BsSuitHeartFill
              size="1.5ex"
              style={{
                color: "#FFAF29",
                marginLeft: "0.4ch",
                marginRight: "0.4ch",
                verticalAlign: "-0.1ex",
              }}
            />
            frontend development.
          </h1>
          <div className="social">
            <Social
              flexDirection={"column"}
              color="rgb(188, 190, 192)"
              size="2em"
              gap="0"
              leftMargin="2rem"
            />
          </div>
          <div className="left-column">
            <h2 style={headingStyles}>2019</h2>
            <p>
              My coding journey began in 2019 when I started attending a 10
              month coding boot camp called Bloc (now called Thinkful). I
              graduated in October and scored my first engineering job a month
              later. This was working for{" "}
              <a
                style={linkStyle}
                href="https://www.skylla.tech/"
                target="_blank"
                rel="noreferrer"
              >
                Skylla
              </a>
              , a very small robotics startup (7 people) where I helped build
              UI's for robot navigation and mapping.
            </p>
            <h2 style={headingStyles}>2020</h2>
            <p>
              The start of the pandemic, and also the start of working from
              home. This was a game changer for me and the realization that I am
              more productive and happier working remotely.
            </p>
            <h2 style={headingStyles}>2021</h2>
            <p>
              In August, I got my current job working for{" "}
              <a
                href="https://www.olo.com/"
                style={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                Olo
              </a>
              , an industry leader in providing online ordering experiences for
              restaurants. We work with 600+ brands and process on average 2
              million orders per day.
            </p>
          </div>
          <div className="right-column">
            <h2 style={headingStyles}>Now</h2>
            <p>
              I am working on a team of 3 frontend devs, where we build the UI
              for Olo's newest product, Olo Pay. This is an end-to-end payment
              solution, providing our brands with payment processing, reporting,
              and fraud prevention. I am currently building out onboarding
              solutions for our customers to sign onto Olo Pay. Most of our
              repos are very modern React apps, keeping me on top of the latest
              advancements. I am also no stranger to working in more mature
              codebases, as I am frequently helping out in some of Olo's oldest
              Ember apps built 10+ years ago.
            </p>
            <p>
              The more I work in React, the more I love it. And I am here to
              stay in the frontend world. I love the challenges it brings and
              seeing my work come to life.
            </p>
            <p>
              My biggest passion is traveling. I've traveled across the US and
              to 10 countries so far, and the travel bucket list grows each day!
              I live with my husband, 2 guinea pigs, 2 chinchillas, and the most
              adorable Burmese cat you could ever meet 😻.
            </p>
            <p>
              Please feel free to check out my{" "}
              <a
                href="/kerry_laval_resume.pdf"
                style={linkStyle}
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
