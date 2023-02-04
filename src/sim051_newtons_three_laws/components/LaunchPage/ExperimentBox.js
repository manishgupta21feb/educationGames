import React from "react";
import Arrow from "../common/Arrow";
import Arrows from "../common/Arrows";

export default (props) => {
  const { leftText, rightText, altText } = props;
  return (
    <div className={`experiment-box ${props.id}`}>
      <img className="sr-only sr-image" alt={altText} />
      <div className="box-img"></div>
      <div className="bottom-tab"></div>
      <Arrows leftText={leftText} rightText={rightText}></Arrows>
    </div>
  );
};
