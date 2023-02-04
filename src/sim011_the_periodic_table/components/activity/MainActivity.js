import React from "react";
import PropTypes from "prop-types";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import PeriodicTableContainer from "../../containers/PeriodicTableContainer";
import ElementHint from "./ElementHint";

function MainActivity(props) {
  const {
    showHint,
    elementHint,
    elementArray,
    isPopupActive,
    droppedElement,
    playInstructionText,
  } = props;

  return (
    <div className="wrapper">
      <div className="instructor">
        <h1 className="heading">{playInstructionText}</h1>
      </div>
      <Draggable
        showHint={showHint}
        elementArray={elementArray}
        droppedElement={droppedElement}
      />
      <ElementHint elementHint={elementHint} />
      <Droppable />
      <div key={`ptable-wrapper${isPopupActive ? "hide" : "show"}`}>
        <PeriodicTableContainer />
      </div>
    </div>
  );
}

MainActivity.propTypes = {
  showHint: PropTypes.func.isRequired,
  elementArray: PropTypes.array.isRequired,
  elementHint: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  playInstructionText: PropTypes.string.isRequired,
  droppedElement: PropTypes.object.isRequired,
};

export default MainActivity;
