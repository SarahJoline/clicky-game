import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <div className="navigation">
      <div className="nav-title">
        <h2>Bojack Clicky Game</h2>
      </div>
      <div className="scores">
        <h2>
          {props.counter} | {props.highscore}
        </h2>
      </div>
    </div>
  );
}

export default Nav;
