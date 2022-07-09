import React from "react";
import stockPhoto1 from "../images/stock_photos/stock_photo1.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import goodreadsLogo from "../images/goodreads-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";

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
            I am an aspiring self-taught Web Developer who started his coding
            journey with{" "}
            <a href="https://certificates.saylor.org/profile/stanimirkosev551704/wallet#gs.59fom3">
              a couple of courses
            </a>{" "}
            from <a href="https://www.saylor.org/">saylor.org academy</a> and{" "}
            <a href="https://www.theodinproject.com/">The Odin Project</a>{" "}
            <a href="https://www.theodinproject.com/paths/full-stack-javascript">
              Full Stack JavaScript curriculum.
            </a>{" "}
            Besides coding, i like to read books, listen to podcasts, invest and
            lift weights.
          </p>
          <div className="text-container-footer">
            <a href="https://www.facebook.com/profile.php?id=100007097650520">
              <FacebookIcon className="material-ui-icon fb-logo" />
            </a>
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
