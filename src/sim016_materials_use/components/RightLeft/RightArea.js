import React, { useEffect, useState } from "react";
import Button from "../../../app/components/Button";
import DraggablesContainer from "../../containers/DraggablesContainer";

const RightArea = (props) => {
  const { introHeading } = props;

  return (
    <div className="right-area">
      <h1 className="heading-text">{introHeading}</h1>
      <DraggablesContainer />
    </div>
  );
};

export default RightArea;
