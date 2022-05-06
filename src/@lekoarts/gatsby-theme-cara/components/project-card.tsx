/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  link: string;
  repoLink: string;
  title: string;
  children: React.ReactNode;
  bg: string;
  image: string;
};

const ProjectCard = ({
  link,
  repoLink,
  title,
  children,
  bg,
  image,
}: ProjectCardProps) => {
  const imageElm = (
    <img
      src={image}
      sx={{ width: `100%`, maxWidth: `400px`, margin: `0 auto` }}
    />
  );
  return (
    <div
      className="glide__slide"
      sx={{
        height: `auto`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: [3, 3, 4],
        pb: [4, 5],
        pt: [5, "100px", 5],
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
      <div sx={{ textAlign: `center` }}>
        {link || repoLink ? (
          <a href={link || repoLink} target="_blank" rel="noreferrer noopener">
            {imageElm}
          </a>
        ) : (
          imageElm
        )}
      </div>

      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          py: 3,
          fontSize: [3, 3, 4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {link || repoLink ? (
          <a
            href={link || repoLink}
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
        ) : (
          title
        )}
      </div>
      <div>
        {link ? (
          <>
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
              <FontAwesomeIcon icon={faServer} /> View the Hosted Project
            </a>
          </>
        ) : (
          ""
        )}
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
              <FontAwesomeIcon icon={faGithub} /> View the ReadMe & Code on
              GitHub
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
          "& ul": {
            listStyleType: "circle",
            padding: `0 20px`,
          },
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
