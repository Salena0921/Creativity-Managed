import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#1a3c34", border: "#1a3c34", color:"#007485"}} className="btn btn-success">
    {props.children}
  </button>
);
