import React, { Fragment, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DragBox from "../../containers/DragBoxContainer";
import "./style.scss";

const Draggable = (props) => {
  const {
    itemRef,
    dropElement,
    draggableRef,
    elementData,
    resetBtnState,
    simulationEnd,
    selectDraggable,
    updateResetBtnState,
    updateAccessibleList,
    setAccessibleList,
    checkDroppedItem,
    accessibleRef,
  } = props;

  const droppedElement = useRef(dropElement);
  const resetBtnStateRef = useRef(resetBtnState);

  useEffect(() => {
    droppedElement.current = dropElement;
    resetBtnStateRef.current = resetBtnState;

    if (simulationEnd) {
      setAccessibleList(false);
    }
  }, [dropElement, resetBtnState, simulationEnd]);

  const accessibleButtonOption = (e) => {
    const dataset = {
      value: e.currentTarget.dataset.value,
      target: e.currentTarget.dataset.target,
      drop: e.currentTarget.dataset.drop,
    };
    itemRef.current = e.currentTarget;
    updateAccessibleList(true);
    selectDraggable(dataset);
    console.log("Dataset", dataset);
  };

  return (
    <div className={`option-container draggable`}>
      <div className="draggable-btn-wrapper">
        {elementData?.map((element, index) => {
          return (
            <Fragment key={`${index}-${element.name}`}>
              <DragBox
                key={`${index}-${element.name}`}
                index={index}
                element={element}
                // disable={disable}
                draggableRef={draggableRef}
                accessibleButtonOption={accessibleButtonOption}
                accessibleRef={accessibleRef}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

Draggable.propTypes = {
  updateAttempt: PropTypes.func.isRequired,
  onCorrectDrop: PropTypes.func.isRequired,
  onInCorrectDrop: PropTypes.func.isRequired,
  showToastMessage: PropTypes.func.isRequired,
};

export default Draggable;
