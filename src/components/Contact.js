import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import stockPhoto2 from "../images/stock_photos/stock_photo2.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <div className="email-container">
          <MailOutlineIcon />
          <p>stanimirkosev00@gmail.com</p>
        </div>
        <div className="contact-footer">
          <a href="https://twitter.com/stanimir_kosev">
            <TwitterIcon className="material-ui-icon twitter-logo contact-icon" />
          </a>
          <a href="https://github.com/StanimirKosev">
            <GitHubIcon className="material-ui-icon github-footer contact-icon" />
          </a>
        </div>
      </div>
      <img src={stockPhoto2} alt="" className="stock-photo-second" />
    </div>
  );
}

export default Contact;
