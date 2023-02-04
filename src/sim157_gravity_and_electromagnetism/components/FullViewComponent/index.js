import React, { useEffect } from "react";

import FullViewComponent from "./FullViewComponent";

import "./style.scss";

const FullView = (props) => {
  const { changeScreen, headingLevelOne, imageAlt } = props;

  useEffect(() => {}, [changeScreen]);

  return (
    <div className={`full-view`}>
      <div id="heading" className="heading">
        <h2>{headingLevelOne}</h2>
      </div>
      <FullViewComponent {...props} />
    </div>
  );
};

export default FullView;
