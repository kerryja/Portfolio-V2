import * as React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import "./index.css";

const IndexPage = () => {
  return (
    <>
      <Landing />
      <main className="main">
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
