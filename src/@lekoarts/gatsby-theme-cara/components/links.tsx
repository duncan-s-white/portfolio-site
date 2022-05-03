/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function links() {
  return (
    <div
      sx={{
        display: `grid`,
        position: `absolute`,
        right: [20, 20, 50],
        top: 20,
        zIndex: 100,
        "& a": {
          color: `link_text`,
        },
        "@media screen and (max-width: 600px)": {
          gridTemplateColumns: `1fr 1fr`,
          borderWidth: 1,
          borderColor: `link_text`,
          borderStyle: `solid`,
          borderRadius: 5,
          "& a": {
            p: "5px 10px",
            display: `block`,
            lineHeight: `1.8em`,
            textAlign: `center`,
          },
          "& a:nth-of-type(-n + 2)": {
            borderBottom: "1px solid black",
            borderColor: `link_text`,
          },
          "& a:nth-of-type(even)": {
            borderLeft: "1px solid black",
            borderColor: `link_text`,
          },
          "& .link_desc": { display: [`none`, `none`, `inline`] },
          "& svg": {
            height: `1.2em`,
          },
        },
      }}
    >
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/duncan-s-white"
      >
        <FontAwesomeIcon icon={faGithub} />{" "}
        <span className="link_desc">duncan-s-white</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/duncan-white-4a9171223/"
      >
        <FontAwesomeIcon icon={faLinkedin} />{" "}
        <span className="link_desc">LinkedIn</span>
      </a>
      <a href="mailto: duncanstanleywhite@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />{" "}
        <span className="link_desc">duncanstanleywhite@gmail.com</span>
      </a>
      <a href="Duncan_White_CV.pdf" download>
        <span sx={{ display: [`block`, `block`, `none`] }}> CV</span>
        <span className="link_desc">
          <FontAwesomeIcon icon={faFilePdf} /> Download my CV
        </span>
      </a>
    </div>
  );
}
