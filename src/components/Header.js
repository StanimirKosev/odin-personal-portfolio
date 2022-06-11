import React from "react";
import stockPhoto1 from "../images/stock_photos/stock_photo1.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import goodreadsLogo from "../images/goodreads-logo.png";

function Header() {
  return (
    <header>
      <span className="clipped-background-wrap">
        <div className="clipped-background"></div>
      </span>
      <div className="header-content-wrapper">
        <div className="image-container">
          <img src={stockPhoto1} alt="" className="stock-photo-first" />
          <div className="image-text-container">
            <p>Stanimir Kosev</p>
          </div>
        </div>
        <div className="text-container">
          <h1>About me</h1>
          <p>
            I am a aspiring self-taught Web Developer who's doing The Odin
            Project Full Stack JavaScript course. For this project i will be
            implementing responsive design for the first time and also
            showcasing some of my best front-end works till date.
          </p>
          <div className="text-container-footer">
            <a href="https://twitter.com/stanimir_kosev">
              <TwitterIcon className="material-ui-icon twitter-logo" />
            </a>
            <a href="https://www.goodreads.com/user/show/124508945-stanimir-kosev">
              <img src={goodreadsLogo} alt="" className="goodreads-logo" />
            </a>
            <a href="https://github.com/StanimirKosev">
              <GitHubIcon className="material-ui-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
