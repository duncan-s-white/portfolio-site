/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
// @ts-ignore
import ProjectsMDX from "../sections/projects";
// @ts-ignore
import ExercisesMDX from "../sections/exercises";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";
import { useEffect } from "react";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 2,
      gap: 40,
      peek: 100,
      breakpoints: {
        1200: {
          perView: 1,
          peek: 150,
          gap: 40,
        },
        900: {
          perView: 1,
          peek: 80,
          gap: 20,
        },
        600: {
          perView: 1,
          peek: 0,
        },
      },
    }).mount();
  }, []);

  return (
    <div>
      <Divider
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
        speed={-0.2}
        offset={1.1}
        factor={factor}
      />
      <Content speed={0.4} offset={offset + 0.2} factor={factor}>
        <Inner>
          <div className="glide">
            <h2
              sx={{
                color: `white !important`,
                fontSize: [4, 5, 6],
                mb: 0,
              }}
            >
              Projects
            </h2>
            <div
              className="glide__bullets"
              data-glide-el="controls[nav]"
              sx={{ top: "50px" }}
            >
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
              <button className="glide__bullet" data-glide-dir="=3"></button>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <FontAwesomeIcon
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
                icon={faAngleLeft}
                sx={{ left: `35%`, top: "50px" }}
              />
              <FontAwesomeIcon
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
                icon={faAngleRight}
                sx={{ right: `35%`, top: "50px" }}
              />
            </div>
            <div
              className="glide__track"
              sx={{ padding: "2rem 0" }}
              data-glide-el="track"
              id="projects"
            >
              <div className="glide__slides" sx={{ overflow: "visible" }}>
                <ProjectsMDX />
              </div>
            </div>
          </div>
        </Inner>
        <Inner>
          <div
            sx={{
              pt: "2em",
              display: `grid`,
              gridGap: ["20px", "20px", "20px", "20px", "40px"],
              gridTemplateColumns: [
                `1fr`,
                `1fr`,
                `repeat(2, 1fr)`,
                `repeat(4, 1fr)`,
              ],
              h2: { gridColumn: `-1/1`, color: `white !important` },
            }}
          >
            <ExercisesMDX />
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg
            icon="box"
            width={6}
            color="icon_brightest"
            left="85%"
            top="75%"
          />
          <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
          <Svg
            icon="triangle"
            width={8}
            stroke
            color="icon_orange"
            left="25%"
            top="5%"
          />
          <Svg
            icon="circle"
            hiddenMobile
            width={24}
            color="icon_brightest"
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_green"
            left="20%"
            top="90%"
          />
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="90%"
            top="30%"
          />
          <Svg
            icon="circle"
            width={16}
            color="icon_yellow"
            left="70%"
            top="90%"
          />
          <Svg
            icon="triangle"
            hiddenMobile
            width={16}
            stroke
            color="icon_teal"
            left="18%"
            top="75%"
          />
          <Svg
            icon="circle"
            width={6}
            color="icon_brightest"
            left="75%"
            top="10%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_green"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <Svg
          icon="hexa"
          width={16}
          stroke
          color="icon_red"
          left="75%"
          top="30%"
        />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_yellow"
          left="80%"
          top="70%"
        />
      </Divider>
    </div>
  );
};

export default Projects;
