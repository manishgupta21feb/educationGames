import React from "react";
import "./style.scss";

const TopSection = (props) => {
  const { data, after, before } = props;

  return (
    <div className="top-main">
      <div className="main-image">
        <img src={data.imgBefore} alt={data.altBefore}></img>
        <p className="before">{before}</p>
        <img src={data.imgAfter} alt={data.altAfter}></img>
        <p className="after">{after}</p>
      </div>
    </div>
  );
};

export default TopSection;
