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
  children: React.ReactNode;
  bg: string;
  image: string;
};

const ExerciseCard = ({
  link,
  repoLink,
  title,
  children,
  bg,
  image,
}: ExerciseCardProps) => {
  return (
    <div
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        p: ["1.5em", "2em"],
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
      <div sx={{ backgroundColor: "white", borderRadius: "5px", padding: 3 }}>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <img src={image} width="100%" />
        </a>
      </div>
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          py: 3,
          fontSize: [2, 3],
          fontWeight: `medium`,
          lineHeight: 1,
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
      <div>
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
        {repoLink ? (
          <>
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
          </>
        ) : (
          ""
        )}
      </div>
      <div
        sx={{
          pt: 2,
          opacity: 0.85,
          textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
          fontSize: "15px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ExerciseCard;
