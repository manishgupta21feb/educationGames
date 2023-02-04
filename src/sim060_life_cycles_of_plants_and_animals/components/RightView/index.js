import React from "react";
import Draggable from "../../containers/DraggableContainer";

const RightView = (props) => {
  return (
    <>
      <h2 className="paragraph paragraph--top-gap">{props.question}</h2>
      <Draggable />
    </>
  );
};

export default RightView;
