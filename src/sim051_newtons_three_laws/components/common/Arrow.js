import React from "react";

export default (props) => {
  const { classes } = props;
  const classNames = classes ? `arrow ` + classes : `arrow`;
  return (
    <div className={classNames}>
      <div className="head"></div>
      <div className="tail"></div>
    </div>
  );
};
