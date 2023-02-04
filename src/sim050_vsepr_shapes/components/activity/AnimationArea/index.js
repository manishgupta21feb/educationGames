import React from "react";

import "./style.scss";

export default (props) => {
  const {
    question: { srNo, altText },
  } = props;

  return (
    <div
      role="img"
      className={`img question${srNo}`}
      aria-label={altText}
    ></div>
  );
};
