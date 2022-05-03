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

//adapted the code here using the comments from carlosvicient to improve responsiveness
// https://github.com/LekoArts/gatsby-themes/issues/423

// breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
// The template is not responsive and the parallax effect brokens the containers.
// As a work around, use react hooks (useEffect) to calculate the size of the window
// and change number of pages and offset. This should be done calculating the size of each section first
// but in this version is hardcoded based on different tests

const Cara = () => {
  // Client-side Runtime fetch browser width
  const {
    pages,
    projectsScroll,
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
        <Hero offset={0} factor={1} scroll={() => scroll(projectsScroll)} />
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
    pages: 6,
    projectsScroll: 1.6,
    projectsOffset: 1.4,
    projectsFactor: 2,
    techOffset: 3.4,
    techFactor: 0.6,
    aboutOffset: 4,
    aboutFactor: 1,
    contactOffset: 5,
    contactFactor: 1,
    width: width,
  };

  if (exists(window)) {
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    switch (true) {
      case width <= 400:
        breakpoints.pages = 9;

        breakpoints.projectsScroll = 1.7;
        breakpoints.projectsOffset = 1.75;
        breakpoints.projectsFactor = 2.4;

        breakpoints.techOffset = 4.4;
        breakpoints.techFactor = 0.6;

        breakpoints.aboutOffset = 5;
        breakpoints.aboutFactor = 1;

        breakpoints.contactOffset = 6;
        breakpoints.contactFactor = 1;
        break;
      case width <= 600:
        breakpoints.pages = 7.4;

        breakpoints.projectsScroll = 1.68;
        breakpoints.projectsOffset = 1.7;
        breakpoints.projectsFactor = 2.4;

        breakpoints.techOffset = 4;
        breakpoints.techFactor = 0.6;

        breakpoints.aboutOffset = 5;
        breakpoints.aboutFactor = 1.5;

        breakpoints.contactOffset = 6.5;
        breakpoints.contactFactor = 1;
        break;
      case width <= 900:
      case width <= 1200:
      case width > 1600:
        break;
    }
  }

  // console.log(
  //   "breakpoints",
  //   breakpoints.pages,
  //   breakpoints.projectsOffset,
  //   breakpoints.projectsFactor,
  //   breakpoints.aboutOffset,
  //   breakpoints.aboutFactor,
  //   breakpoints.contactOffset,
  //   breakpoints.contactFactor
  // );

  return breakpoints;
}

export default Cara;
