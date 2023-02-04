import React, { useEffect } from "react";
import DraggableContainer from "../../../containers/DraggableContainer";
import "./style.scss";
import AccessibleList from "../../../containers/AccessibleList";
import DroppableContainer from "../../../containers/DroppableList";
import CheckButtonContainer from "../../../containers/CheckButtonContainer";
const ScreenTwo = (props) => {
  const { data, fetchElements } = props;
  useEffect(() => {
    fetchElements();
  }, []);
  return (
    <div className="layout_2">
      <div className="layout_inside">
        <h2 className={"heading"}>{data.venDiagramData.instructionText}</h2>
        <div className="dragable_Container">
          <div className="dropbox">
            <div className="contain-draggable">
              <DraggableContainer />
            </div>
          </div>
        </div>
        <AccessibleList />
        <div className="droppable_container">
          <DroppableContainer />
        </div>
        <CheckButtonContainer />
      </div>
    </div>
  );
};

export default ScreenTwo;
