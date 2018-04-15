import React from "react";
import "./Card.css"

const Card = props => (
  <div className="row card">
    <div className="col col-xl-12">
      <div className="card-header row">
        {props.headertext}

      </div>
      <div className="card-body row">
        {props.children}
      </div>
    </div>
  </div>
);

export default Card;