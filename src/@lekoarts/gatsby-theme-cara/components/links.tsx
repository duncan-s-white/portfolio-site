/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

// color: `#805ad5` dark mode link color?? (secondary)

export default function links() {
  return (
    <div
      sx={{
        position: `absolute`,
        right: 50,
        top: 20,
        zIndex: 100,
        "& a": { color: `link_text` },
      }}
    >
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/duncan-s-white"
      >
        <FontAwesomeIcon icon={faGithub} /> duncan-s-white
      </a>
      <br />
      <a href="mailto: duncanstanleywhite@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> duncanstanleywhite@gmail.com
      </a>
      <br />
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/duncan-white-4a9171223/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      <br />
      <a href="Duncan_White_CV.pdf" download>
        <FontAwesomeIcon icon={faFilePdf} /> Download my CV
      </a>
    </div>
  );
}
