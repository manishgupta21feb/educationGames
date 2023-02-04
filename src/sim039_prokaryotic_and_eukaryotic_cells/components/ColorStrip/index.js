import React from "react";
import ColorStripHeader from "../ColorStripHeader";
import "./style.scss";

export default (props) => {
  const { colorHeader } = props;

  return (
    <div className="color-strip-container">
      <ColorStripHeader colorHeader={colorHeader}></ColorStripHeader>
    </div>
  );
};
