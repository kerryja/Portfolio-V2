import * as React from "react";

const pageStyles = {
  color: "rgb(65, 64, 66)",
  fontFamily: "PT Sans, sans-serif",
  fontSize: "17px",
};

const headingStyles = {
  fontFamily: "Nanum Gothic, sans-serif",
};

const flexContainerStyles = {
  display: "flex",
  flexDirection: "row",
};

const leftColumnStyles = {
  width: "50%",
  flexWrap: "wrap",
  marginRight: "6px",
};

const rightColumnStyles = {
  width: "50%",
  marginLeft: "6px",
};

const heartStyles = {
  color: "rgb(146,79,146)",
};

const About = () => {
  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>
        HELLO. I'M KERRY, AND I <span styles={heartStyles}>♥️</span> FRONTEND
        DEVELOPMENT.{" "}
      </h1>
      <div style={flexContainerStyles}>
        <div style={leftColumnStyles}>
          <p>
            I am based just outside Boston, MA and I currently work for Olo
            {/* <a href="https://www.olo.com/" style={linkStyle}>
              Olo
            </a> */}
            , an industry leader in building online ordering experiences for
            restaurants. I work on a team of 3 front-end devs, where we build
            the UI for Olo's newest product, Olo Pay. Olo Pay is an end-to-end
            payment solution, providing our brands with payment processing,
            reporting, and fraud prevention.
          </p>
          <p>
            I have been at Olo since mid-2021, working on onboarding apps for
            our customers to sign onto Olo Pay. Our React apps are all very
            modern, but I am always needing to jump into other repos and help
            out, and some of these are very old Ember apps built 10+ years ago.
            This has given me great, well-rounded experience working in older
            repos, as well as
          </p>
          <p>
            The more I work in React, the more I love it. And I am here to stay
            in the front-end world. I love the challenges it brings and seeing
            my work come to life on screen. My belief is that you can succeed in
            being a fullstack engineer, however, it is better to have a
            specialty.
          </p>
        </div>
        <div style={rightColumnStyles}>
          <p>
            My biggest passion is traveling. I've traveled to 10 countries so
            far, and across the US, and the travel bucket list grows each day! I
            live with my husband, 2 guinea pigs, 2 chinchillas, and the most
            adorable Burmese cat you could ever meet.
          </p>
          <p>Please feel free to check out my resume</p>
        </div>
      </div>
    </div>
  );
};

export default About;
