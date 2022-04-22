import React, { useState, useEffect, useRef } from "react";
import { Parallax, IParallax } from "@react-spring/parallax";
import { window, exists } from "browser-monads";

import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "../components/hero";
import Links from "../components/links";
import Projects from "../components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Tech from "../components/tech";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

// breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
// The template is not responsive and the parallax effect brokens the containers.
// As a work around, use react hooks (useEffect) to calculate the size of the window
// and change number of pages and offset. This should be done calculating the size of each section first
// but in this version is hardcoded based on different tests

const Cara = () => {
  // Client-side Runtime fetch browser width
  const {
    pages,
    projectsOffset,
    projectsFactor,
    techOffset,
    techFactor,
    aboutOffset,
    aboutFactor,
    contactOffset,
    contactFactor,
  } = useWindowWidth(); // Our custom Hook

  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Layout>
      <Parallax ref={parallax} pages={pages}>
        <Links />
        <Hero offset={0} factor={1} scroll={() => scroll(1.75)} />
        <Projects offset={projectsOffset} factor={projectsFactor} />
        <About offset={aboutOffset} factor={aboutFactor} />
        <Tech offset={techOffset} factor={techFactor} />
        <Contact offset={contactOffset} factor={contactFactor} />
      </Parallax>
    </Layout>
  );
};

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  let breakpoints = {
    pages: 7,
    projectsOffset: 1.6,
    projectsFactor: 3,
    techOffset: 4.4,
    techFactor: 0.6,
    aboutOffset: 5,
    aboutFactor: 1,
    contactOffset: 6,
    contactFactor: 1,
    width: width,
  };

  if (exists(window)) {
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    switch (true) {
      case width <= 400:
        breakpoints.pages = 8.15;

        breakpoints.projectsOffset = 2.2;
        breakpoints.projectsFactor = 4;

        breakpoints.aboutOffset = 6.2;
        breakpoints.aboutFactor = 1;

        breakpoints.contactOffset = 7.2;
        breakpoints.contactFactor = 1;
        break;
      case width <= 600:
        breakpoints.pages = 10.2;

        breakpoints.projectsOffset = 3.2;
        breakpoints.projectsFactor = 5.6;

        breakpoints.aboutOffset = 8.4;
        breakpoints.aboutFactor = 1;

        breakpoints.contactOffset = 9.4;
        breakpoints.contactFactor = 1;
        break;
      case width <= 900:
        // breakpoints.pages = 7;

        // breakpoints.projectsOffset = 1;
        // breakpoints.projectsFactor = 4;

        // breakpoints.aboutOffset = 5;
        // breakpoints.aboutFactor = 1;

        // breakpoints.contactOffset = 6;
        // breakpoints.contactFactor = 1;
        break;
      case width <= 1200:
        break;
      case width > 1600:
        break;
    }
  }

  console.log(
    "breakpoints",
    breakpoints.pages,
    breakpoints.projectsOffset,
    breakpoints.projectsFactor,
    breakpoints.aboutOffset,
    breakpoints.aboutFactor,
    breakpoints.contactOffset,
    breakpoints.contactFactor
  );

  return breakpoints;
}

export default Cara;
