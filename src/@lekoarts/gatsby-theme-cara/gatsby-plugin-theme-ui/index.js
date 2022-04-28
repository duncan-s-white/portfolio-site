import theme from "@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui/index";
import { tailwind } from "@theme-ui/presets";

theme.colors.tech_background = tailwind.colors.gray[2];
theme.colors.tech_text = tailwind.colors.gray[8];
theme.colors.link_text = tailwind.colors.purple[5];
theme.colors.modes.light.link_text = tailwind.colors.purple[9];

export default theme;
