import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DragElement from "../../containers/DragElementContainer";

const Draggable = (props) => {
  const {
    showHint,
    dropElement,
    elementData,
    elementArray,
    simulationEnd,
    onCorrectDrop,
    updateAttempt,
    resetBtnState,
    onInCorrectDrop,
    droppableAltText,
    showToastMessage,
    updateAttemptData,
    updateResetBtnState,
    updateAccessibleList,
  } = props;

  const CheckForAttempt = useRef(updateAttemptData);
  const droppedElement = useRef(dropElement);
  const [accessibleList, setAccessibleList] = useState(false);
  const accessibleListRef = useRef(null);
  const currentTargetRef = useRef(null);

  const resetBtnStateRef = useRef(resetBtnState);

  useEffect(() => {
    CheckForAttempt.current = updateAttemptData;
    droppedElement.current = dropElement;
    resetBtnStateRef.current = resetBtnState;

    if (simulationEnd) {
      setAccessibleList(false);
    }
  }, [updateAttemptData, dropElement, resetBtnState, simulationEnd]);

  const accessibleButtonOption = (e) => {
    if (resetBtnStateRef.current) {
      updateResetBtnState(false);
    }
    setAccessibleList(true);
    updateAccessibleList(true);
    currentTargetRef.current = e.currentTarget;
    setTimeout(() => {
      accessibleListRef.current.children[0].querySelector("a").focus();
    });
  };

  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setAccessibleList(true);
      updateAccessibleList(true);
      currentTargetRef.current = e.currentTarget; // @desc store mystery clicked element
      setTimeout(() => {
        accessibleListRef.current.children[0].querySelector("a").focus(); // @desc Set focus to first remaining option
      });
    } else if (e.keyCode === 9) {
      setAccessibleList(false);
      updateAccessibleList(false);
    }
  };

  const keyDownList = (e) => {
    if (e.which == 39 || e.which == 40) {
      if (
        e.currentTarget.parentNode.nextSibling &&
        e.currentTarget.parentNode.nextSibling.querySelector("a")
      ) {
        e.currentTarget.parentNode.nextSibling.querySelector("a").focus();
      }
    } else if (e.which == 37 || e.which == 38) {
      if (
        e.currentTarget.parentNode.previousSibling &&
        e.currentTarget.parentNode.previousSibling.querySelector("a")
      ) {
        e.currentTarget.parentNode.previousSibling.querySelector("a").focus();
      }
    } else if (e.which == 27) {
      //set focus back on clicked draggable
      setAccessibleList(false);
      updateAccessibleList(false);
      currentTargetRef.current.focus();
    } else if (e.which == 9) {
      //set focus back on clicked draggable
      setAccessibleList(false);
      updateAccessibleList(false);
      currentTargetRef.current.focus();
    }
  };

  const checkForDrop = (e) => {
    e.persist();
    if (
      currentTargetRef.current.dataset.target === e.currentTarget.dataset.accept
    ) {
      // Correct
      updateAttempt(e.currentTarget.dataset.accept);

      setTimeout(() => {
        setAccessibleList(false);
        updateAccessibleList(false);
        $(
          '.draggable .option[data-target="' + e.target.dataset.accept + '"]'
        ).draggable("destroy");
        onCorrectDrop(currentTargetRef.current.dataset.target);

        const fetchAllDragElement = document.querySelectorAll(
          ".draggable .accessible-button"
        );
        const filteredDragElement = Array.from(fetchAllDragElement).filter(
          (e) => e.disabled === false
        );

        if (filteredDragElement.length) {
          filteredDragElement[0].focus();
          showHint(filteredDragElement[0].getAttribute("data-target"));
        }
      }, 200);
    } else {
      // inCorrect
      onInCorrectDrop();
    }
  };

  return (
    <div className="option-container draggable">
      <div className="draggable-btn-wrapper">
        {elementArray?.map((element, index) => {
          return (
            <Fragment key={index}>
              <DragElement
                index={index}
                dotCounts={element.dots}
                elementName={element.elementName}
                showHint={showHint}
                droppedElement={droppedElement}
                onKeyUpHandle={onKeyUpHandle}
                accessibleButtonOption={accessibleButtonOption}
              />
            </Fragment>
          );
        })}
      </div>
      {accessibleList && (
        <ul className="dropdown" role="menu" ref={accessibleListRef}>
          {elementData?.map((element, index) => {
            return !droppedElement.current[element.elementName] ? (
              <li
                role="none"
                className={`menuitem menuitem-${index + 1}`}
                key={index}
              >
                <a
                  href="#"
                  role="menuitem"
                  data-accept={element.elementName}
                  disabled={droppedElement.current[element.elementName]}
                  onKeyDown={(e) => keyDownList(e)}
                  onClick={(e) => checkForDrop(e)}
                  onBlur={() => showToastMessage(false)}
                  aria-label={droppableAltText[index]}
                ></a>
              </li>
            ) : null;
          })}
        </ul>
      )}
    </div>
  );
};

Draggable.propTypes = {
  showHint: PropTypes.func.isRequired,
  elementData: PropTypes.array.isRequired,
  elementArray: PropTypes.array.isRequired,
  onCorrectDrop: PropTypes.func.isRequired,
  dropElement: PropTypes.object.isRequired,
  updateAttempt: PropTypes.func.isRequired,
  onInCorrectDrop: PropTypes.func.isRequired,
  showToastMessage: PropTypes.func.isRequired,
  droppableAltText: PropTypes.array.isRequired,
  updateAttemptData: PropTypes.array.isRequired,
};

export default Draggable;
