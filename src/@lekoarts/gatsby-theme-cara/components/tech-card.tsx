/** @jsx jsx */
import { jsx } from "theme-ui";

const TechCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `space-around`,
        backgroundColor: "tech_background",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        position: `relative`,
        borderRadius: `lg`,
        p: 1,
        width: [120, 150],
        height: [120, 150],
      }}
    >
      <div>
        <img src={image} sx={{ width: "100%", maxWidth: [60, 75] }} />
      </div>
      <div
        sx={{
          color: `tech_text`,
          letterSpacing: `wide`,
          fontSize: [1, 2],
          fontWeight: `medium`,
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default TechCard;
