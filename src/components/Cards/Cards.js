import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card-container">
      <img
        onClick={() => props.clickHandler()}
        src={props.image}
        alt={props.id}
      />
    </div>
  );
}

export default Cards;
