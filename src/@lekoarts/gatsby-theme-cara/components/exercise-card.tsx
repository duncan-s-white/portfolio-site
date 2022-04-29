/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

type ExerciseCardProps = {
  link: string;
  repoLink: string;
  title: string;
  bg: string;
  image: string;
};

const ExerciseCard = ({
  link,
  repoLink,
  title,
  bg,
  image,
}: ExerciseCardProps) => {
  return (
    <div
      sx={{
        textAlign: `center`,
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [3, 3, 3, 3],
        py: [2, 3, 4],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
      <div sx={{ display: `flex`, flexDirection: [`row`, `row`, `column`] }}>
        <div
          sx={{
            alignSelf: [`flex-start`, `flex-start`, `center`],
            justifySelf: [`flex-start`, `flex-start`, `center`],
            backgroundColor: "white",
            borderRadius: "5px",
            padding: [`10px`, `15px`, `25px`],
            width: "100%",
            maxWidth: [`60px`, `90px`, `150px`],
          }}
        >
          <a href={link} target="_blank" rel="noreferrer noopener">
            <img src={image} sx={{ maxWidth: [`40px`, `60px`, `100px`] }} />
          </a>
        </div>
        <div>
          <div
            sx={{
              textAlign: `left`,
              textTransform: `uppercase`,
              letterSpacing: `wide`,
              p: ["1.5rem 0 1.3rem", "0 0 0.2em 0.8em", "1.5rem 0 1.3rem"],
              fontSize: [2, `1.2em`],
              fontWeight: `medium`,
              lineHeight: [0.8, 0.9, 1],
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                color: "white",
                "&:hover": {
                  color: "textMuted",
                },
              }}
            >
              {title}
            </a>
          </div>
          <div
            sx={{
              textAlign: `left`,
              px: [2, 3, 0],
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                color: "white",
                "&:hover": {
                  color: "textMuted",
                },
              }}
            >
              <FontAwesomeIcon icon={faServer} /> Hosted Exercise
            </a>
            <br />
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                color: "white",
                "&:hover": {
                  color: "textMuted",
                },
              }}
            >
              <FontAwesomeIcon icon={faGithub} /> ReadMe & Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
