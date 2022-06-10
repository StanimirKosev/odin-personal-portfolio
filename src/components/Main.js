import React from "react";
import Project from "./Project";
import battleship from "../images/project_screenshots/battleship-screenshot.png";
import memoryCard from "../images/project_screenshots/memory-card-screenshot.png";
import shoppingCart from "../images/project_screenshots/shopping-cart-screenshot.png";
import todoList from "../images/project_screenshots/todo-list-screenshot.png";
import twitterClone from "../images/project_screenshots/twitter-clone-screenshot.png";
import wheresWaldo from "../images/project_screenshots/wheres-waldo-screenshot.png";

function Main() {
  return (
    <div className="main">
      <h1>My 'Proof of Work'</h1>
      <div className="projects-grid">
        <Project
          img={twitterClone}
          name="Twitter Clone"
          description="A user can register and post a tweet."
          github="https://github.com/StanimirKosev/odin-twitter-clone"
          project="https://stanimirkosev.github.io/odin-twitter-clone/"
        />
        <Project
          img={wheresWaldo}
          name="Where's Waldo"
          description="A user can play the game of finding the three hidden characters."
          github="https://github.com/StanimirKosev/odin-where-is-waldo"
          project="https://stanimirkosev.github.io/odin-where-is-waldo/"
        />
        <Project
          img={shoppingCart}
          name="Shopping Cart"
          description="Book e-commerce with only the greatest of books."
          github="https://github.com/StanimirKosev/odin-shopping-cart"
          project="https://stanimirkosev.github.io/odin-shopping-cart/"
        />
        <Project
          img={memoryCard}
          name="Memory Card"
          description="A game in which a user must not click on the same card twice."
          github="https://github.com/StanimirKosev/odin-memory-card"
          project="https://stanimirkosev.github.io/odin-memory-card/"
        />
        <Project
          img={battleship}
          name="Battleship"
          description="Naval warfare game versus a computer."
          github="https://github.com/StanimirKosev/odin-battleship"
          project="https://stanimirkosev.github.io/odin-battleship/"
        />
        <Project
          img={todoList}
          name="To-do List"
          description="To-do list that arranges tasks for today or for the week."
          github="https://github.com/StanimirKosev/odin-to-do-list"
          project="https://stanimirkosev.github.io/odin-to-do-list/"
        />
      </div>
    </div>
  );
}

export default Main;
