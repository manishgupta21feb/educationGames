import React, { useEffect } from "react";
import DraggableContainer from "../../../containers/DraggableContainer";
import "./style.scss";
import AccessibleList from "../../../containers/AccessibleList";
import DroppableContainer from "../../../containers/DroppableList";
import FinishButton from "../../../containers/FinishButtonContainer";

const ScreenTwo = (props) => {
  const { data,fetchElements } = props;
  useEffect(()=>{
    fetchElements()
  },[])
  return (
    <div className="layout_2">
      <div className="layout_inside">
        <h1 className={"heading"}>{data.venDiagramData.instructionText}</h1>
        <div className="dragable_Container">
          <div className="dropbox">
            <div className="title_box">
              <p aria-level="2" role="heading" className="title">{data.boxTitle}</p>
            </div>
            <div className="contain-draggable">
              <DraggableContainer/>
            </div>
          </div>
        </div>
        <AccessibleList/>
        <div className="droppable_container">
            <DroppableContainer/>
        </div>
        <FinishButton/>
      </div>
    </div>
  );
};

export default ScreenTwo;
