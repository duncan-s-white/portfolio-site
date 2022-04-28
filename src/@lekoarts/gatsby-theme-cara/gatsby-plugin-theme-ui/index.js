import baseTheme from "@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui/index";
import { tailwind } from "@theme-ui/presets";

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    tech_background: tailwind.colors.gray[2],
    tech_text: tailwind.colors.gray[8],
    link_text: tailwind.colors.purple[5],
    modes: {
      ...baseTheme.colors.modes,
      light: {
        ...baseTheme.colors.modes.light,
        link_text: tailwind.colors.purple[9],
      },
    },
  },
};

export default theme;
