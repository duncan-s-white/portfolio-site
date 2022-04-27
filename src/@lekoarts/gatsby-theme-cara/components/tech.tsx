/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
// @ts-ignore
import TechMDX from "../sections/tech";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide";

const Tech = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  useEffect(() => {
    new Glide(".tech-glide", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 3000,
      animationTimingFunc: "linear",
      hoverpause: true,
      perView: 6,
      gap: 20,
      breakpoints: {
        1200: {
          perView: 4,
        },
        900: {
          perView: 3,
        },
        600: {
          perView: 2,
        },
        400: {
          perView: 1,
        },
      },
    }).mount();
  }, []);
  return (
    <div>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <Svg
            icon="box"
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <Svg
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <Svg
            icon="circle"
            hiddenMobile
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
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
        <Svg
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h2>Technologies</h2>
          <div className="tech-glide">
            <div
              className="glide__track"
              sx={{ padding: "1rem" }}
              data-glide-el="track"
            >
              <div className="glide__slides" sx={{ overflow: "visible" }}>
                <TechMDX />
              </div>
            </div>
          </div>
        </Inner>
      </Content>
    </div>
  );
};

export default Tech;
