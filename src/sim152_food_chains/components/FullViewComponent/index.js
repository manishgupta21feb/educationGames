import React, { useState, useEffect, useRef } from "react";

import Button from "../../../app/components/Button";
import FarmInteractiveComponent from "./FarmInteractiveComponent";
// import Draggables from "./Draggables/Draggables";
// import Droppables from "./Droppables/Droppables";

import "./style.scss";
import DraggableContainer from "../../containers/DraggableContainer";
import DroppableContainer from "../../containers/DroppableContainer";
import SubmitButtonContainer from "../../containers/SubmitButtonContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";

const FullView = (props) => {
  const { addVisitedButtons, changeScreen, headingLevelTwo, imageAlt } = props;
  const buttonRef = useRef(null);

  useEffect(() => {}, [changeScreen]);

  return (
    <div className={`full-view ${changeScreen ? "" : "farm"}`}>
      {changeScreen ? null : (
        <img className="sr-only sr-image" alt={imageAlt} />
      )}
      <div className="heading">
        <h2>{headingLevelTwo}</h2>
      </div>
      {!changeScreen ? (
        <FarmInteractiveComponent {...props} />
      ) : (
        <div className="dndArea">
          <DraggableContainer />
          <DroppableContainer />
          <div className="submit-button">
            <SubmitButtonContainer />
          </div>
          <FinishButtonContainer />
        </div>
      )}
    </div>
  );
};

export default FullView;
