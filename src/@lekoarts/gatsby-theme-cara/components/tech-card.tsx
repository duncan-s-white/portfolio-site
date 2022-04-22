/** @jsx jsx */
import { jsx } from "theme-ui";

const TechCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      sx={{
        backgroundColor: "background",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        position: `relative`,
        justifySelf: "center",
        borderRadius: `lg`,
        p: 1,
        width: [120, 150],
        height: [120, 150],
      }}
    >
      <div
        sx={{
          textAlign: "center",
          px: 4,
        }}
      >
        <img src={image} width="100%" sx={{ mx: "auto" }} />
      </div>
      <div
        sx={{
          letterSpacing: `wide`,
          py: 3,
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
