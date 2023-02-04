import React from "react";
import RightBody from "./RightBody";

const RightComponent = (props) => {
  const { dragElement, setDrag, dragPlate } = props;
  return (
    <div className="right-container">
      <RightBody
        {...props}
        dragElement={dragElement}
        setDrag={setDrag}
        dragPlate={dragPlate}
      />
    </div>
  );
};

export default RightComponent;
