import React, { Fragment, useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
185387434;
const Homepage = (props) => {
  const [homepageState, setHomepageState] = useState({
    heroData: {},
    aboutData: {},
    projectsData: {},
    contactData: {},
  });

  return (
    <Fragment>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Homepage;
