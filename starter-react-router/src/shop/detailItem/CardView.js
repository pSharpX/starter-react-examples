import React from "react";

const CardView = (props) => {
  return (
    <div {...props} className="card-columns">
      <div>{props.children}</div>
    </div>
  );
};
export default CardView;
