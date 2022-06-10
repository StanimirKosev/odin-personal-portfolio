import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

function Project({ img, name, description, github, project }) {
  return (
    <div className="project-cards">
      <img className="project-images" src={img} alt="" />
      <div className="project-description">
        <div className="project-title">
          <h2>{name}</h2>
          <div className="icons-container">
            <a href={github}>
              <GitHubIcon className="github-icon project-icon" />
            </a>
            <a href={project}>
              <OpenInBrowserIcon className="project-icon" fontSize="large" />
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
