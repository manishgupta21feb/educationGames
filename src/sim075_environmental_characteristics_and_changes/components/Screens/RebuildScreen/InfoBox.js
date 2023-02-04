import React from "react";

export default (props) => {
  const { content, submitted } = props;
  return (
    <div className="infoBox">
      <div className="content" role="alert" aria-labelledby={submitted ? "lbl-0 lbl-1 lbl-2 lbl-3 lbl-4" : null}>
        <p id="content">{content}</p>
      </div>
    </div>
  );
};
