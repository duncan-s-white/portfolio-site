/** @jsx jsx */
import { jsx } from "theme-ui";

const TechCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        borderRadius: `lg`,
        p: 3,
      }}
    >
      <div>
        <img src={image} width="100%" />
      </div>
      <div
        sx={{
          letterSpacing: `wide`,
          py: 3,
          fontSize: [2, 3],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default TechCard;
