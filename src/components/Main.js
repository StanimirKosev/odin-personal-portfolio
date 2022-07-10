import React from "react";
import Project from "./Project";
import memoryCard from "../images/project_screenshots/memory-card-screenshot.png";
import shoppingCart from "../images/project_screenshots/shopping-cart-screenshot.png";
import todoList from "../images/project_screenshots/todo-list-screenshot.png";
import twitterClone from "../images/project_screenshots/twitter-clone-screenshot.png";
import blog from "../images/project_screenshots/blog-client.png";
import membersOnly from "../images/project_screenshots/members-only.png";
import html from "../images/skills_tools_images/frontend/html.png";
import css from "../images/skills_tools_images/frontend/css.png";
import js from "../images/skills_tools_images/frontend/js.png";
import react from "../images/skills_tools_images/frontend/react.png";
import nodejs from "../images/skills_tools_images/backend/nodejs-icon.svg";
import express from "../images/skills_tools_images/backend/express.png";
import mongodb from "../images/skills_tools_images/backend/mogodb-lastone.png";
import firebase from "../images/skills_tools_images/backend/firebase-logo.png";
import git from "../images/skills_tools_images/misc/git-last.png";
import webpack from "../images/skills_tools_images/misc/webpack.png";
import jest from "../images/skills_tools_images/misc/jest.png";
import linux from "../images/skills_tools_images/misc/linux.png";

function Main() {
  return (
    <div className="main">
      <h1>
        My Tools <span>&#38;</span> Skills
      </h1>
      <div className="skills-grid">
        <div className="front-end-skills">
          <h2>Front-end</h2>
          <div className="front-end-icons-container">
            <div>
              <img alt="html icon" src={html} />
              <p>HTML</p>
            </div>
            <div>
              <img alt="css icon" src={css} />
              <p>CSS</p>
            </div>
            <div>
              <img alt="js icon" src={js} />
              <p>JavaScript</p>
            </div>
            <div>
              <img alt="react icon" src={react} />
              <p>React</p>
            </div>
          </div>
        </div>
        <div className="back-end-skills">
          <h2>Back-end</h2>
          <div className="back-end-icons-container">
            <div>
              <img alt="nodejs icon" src={nodejs} />
              <p>Node.js</p>
            </div>
            <div>
              <img alt="express icon" src={express} />
              <p>Express</p>
            </div>
            <div>
              <img alt="mongodb icon" src={mongodb} />
              <p>MongoDB</p>
            </div>
            <div>
              <img alt="firebase icon" src={firebase} />
              <p>Firebase</p>
            </div>
          </div>
        </div>
        <div className="misc-tools">
          <h2>Miscellaneous</h2>
          <div className="misc-icons-container">
            <div>
              <img alt="git icon" src={git} />
              <p>Git</p>
            </div>
            <div>
              <img alt="webpack icon" src={webpack} />
              <p>Webpack</p>
            </div>
            <div>
              <img alt="jest icon" src={jest} />
              <p>Jest</p>
            </div>
            <div>
              <img alt="linux icon" src={linux} />
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
      <h1>My 'Proof-of-Work'</h1>
      <div className="projects-grid">
        <Project
          img={blog}
          name="Blog API"
          description="This project was made for The Odin Project's NodeJS course. The goal of the project was to build a restful API that can be used to build a blog client and a blog CMS, it was made with the MERN stack (MongoDB, Express, React, NodeJS)."
          github="https://github.com/StanimirKosev/odin-blog-api"
          project="https://stanimirkosev.github.io/odin-blog-api/"
        />
        <Project
          img={twitterClone}
          name="Twitter Clone"
          description="Last project of The Odin Project's JavaScript course, the goal was to replicate your favorite website, it was built with React and Firebase."
          github="https://github.com/StanimirKosev/odin-twitter-clone"
          project="https://stanimirkosev.github.io/odin-twitter-clone/"
        />
        <Project
          img={membersOnly}
          name="Members Only"
          description="An app that authenticates users and gives them different abilities and permissions. It was created with Express/NodeJS and MongoDB."
          github="https://github.com/StanimirKosev/odin-members-only"
          project="https://gentle-oasis-34070.herokuapp.com/"
        />
        <Project
          img={shoppingCart}
          name="Shopping Cart"
          description="Book e-commerce built with React."
          github="https://github.com/StanimirKosev/odin-shopping-cart"
          project="https://stanimirkosev.github.io/odin-shopping-cart/"
        />
        <Project
          img={memoryCard}
          name="Memory Card"
          description="Memory card game built with React."
          github="https://github.com/StanimirKosev/odin-memory-card"
          project="https://stanimirkosev.github.io/odin-memory-card/"
        />
        <Project
          img={todoList}
          name="To-do List"
          description="To-do list app built with vanilla JavaScript and Webpack."
          github="https://github.com/StanimirKosev/odin-to-do-list"
          project="https://stanimirkosev.github.io/odin-to-do-list/"
        />
      </div>
    </div>
  );
}

export default Main;
