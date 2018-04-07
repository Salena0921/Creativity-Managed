import React from "react";
import "./Card.css"

const Card = props => (
    <div className="card">
       <div className="card-header">
        {props.headertext}

       </div>
       <div className="card-body">
       {props.children}
       </div>
    </div>
  );

  export default Card;