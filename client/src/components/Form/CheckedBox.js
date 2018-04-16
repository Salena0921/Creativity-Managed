import React from "react";

export const CheckedBox = props =>(
<div className="btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary active">
    {props.children}
  </label>
</div>

);
