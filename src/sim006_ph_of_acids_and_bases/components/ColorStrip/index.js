import React from "react";
import ColorBox from "../ColorBox";
import ColorStripFooter from "../ColorStripFooter";
import ColorStripHeader from "../ColorStripHeader";
import "./style.scss";

export default (props) => {
  const { colors, colorHeader } = props;

  return (
    <div className="color-strip-container">
      <ColorStripHeader colorHeader={colorHeader}></ColorStripHeader>
      <div className="color-box-container">
        {colors.map((color, index) => {
          return <ColorBox index={index} key={index} color={color} />;
        })}
      </div>
      <ColorStripFooter colors={colors} />
    </div>
  );
};
