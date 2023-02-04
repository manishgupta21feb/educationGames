import React from "react";

const Content = (props) => {
  const { initialTexts } = props;

  return (
    <div role="heading" aria-level="1" className="content">
      <p className="instruction-text">{initialTexts.text1}</p>
      <p className="instruction-text">{initialTexts.text2}</p>
    </div>
  );
};

export default Content;
