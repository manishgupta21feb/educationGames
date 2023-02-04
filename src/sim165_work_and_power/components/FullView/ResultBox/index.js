import React from "react";
import "./style.scss";

const ResultBox = (props) => {
  const { content, ariaContent } = props;
  return (
    <>
      <div className="resultBox">
        <div className="sr-only sr-Boundary">{ariaContent}</div>
        <p aria-hidden="true">{content}</p>
      </div>
    </>
  );
};
export default ResultBox;
