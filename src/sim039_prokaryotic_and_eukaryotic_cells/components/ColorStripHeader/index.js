import React from "react";
import "./style.scss";

const ColorStripHeader = (props) => {
  const { colorHeader } = props;
  return (
    <div className="color-strip-header">
      <div></div>
      {/* {colorHeader.map((col, index) => {
        return <span key={index}>{col}</span>;
      })} */}
    </div>
  );
};

export default ColorStripHeader;
