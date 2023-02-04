import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DragElement from "../../containers/DragElementContainer";

const Draggable = (props) => {
  const {
    showHint,
    updateAttemptData,
    dropElement,
    droppableAltText,
    showToastMessage,
    elementData,
    resetBtnState,
    updateResetBtnState,
    droppedItems,
    currentDraggables,
    setCurrentDraggables,
    updateDropItems,
    listItemsLength,
  } = props;

  const CheckForAttempt = useRef(updateAttemptData);
  const droppedElement = useRef(dropElement);
  const [accessibleList, setAccessibleList] = useState(false);
  const accessibleListRef = useRef(null);
  const currentTargetRef = useRef(null);
  const resetBtnStateRef = useRef(resetBtnState);
  const droppedItemsRef = useRef(droppedItems);

  useEffect(() => {
    CheckForAttempt.current = updateAttemptData;
    droppedElement.current = dropElement;
    resetBtnStateRef.current = resetBtnState;
  }, [updateAttemptData, dropElement, resetBtnState]);

  const accessibleButtonOption = (e, element, index) => {
    if (resetBtnStateRef.current) {
      updateResetBtnState(false);
    }
    setCurrentDraggables({ ...element, index });
    setAccessibleList(true);
    currentTargetRef.current = e.currentTarget;
    setTimeout(() => {
      accessibleListRef.current.children[0].querySelector("a").focus();
    });
  };

  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setAccessibleList(true);
      currentTargetRef.current = e.currentTarget; // @desc store mystery clicked element
      setTimeout(() => {
        accessibleListRef.current.children[0].querySelector("a").focus(); // @desc Set focus to first remaining option
      });
    } else if (e.keyCode === 9) {
      setAccessibleList(false);
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
      currentTargetRef.current.focus();
    } else if (e.which == 9) {
      //set focus back on clicked draggable
      setAccessibleList(false);
      currentTargetRef.current.focus();
    }
  };

  const checkForDrop = (e, index) => {
    e.preventDefault();
    setAccessibleList(false);
    updateDropItems(currentDraggables.shortName, index);
  };

  useEffect(() => {
    if (
      droppedItems.filter((el) => !!el).length >
      droppedItemsRef.current.filter((el) => !!el).length
    ) {
      const fetchAllDragElement = document.querySelectorAll(
        ".draggable .accessible-button"
      );
      let _el = null;
      for (let el of fetchAllDragElement) {
        if (el.getAttribute("disabled") == null) {
          _el = el;
          break;
        }
      }
      if (_el) {
        _el.focus();
      }
    }
    droppedItemsRef.current = droppedItems;
  }, [droppedItems]);

  return (
    <div className="option-container draggable">
      <div className="draggable-btn-wrapper">
        {elementData?.map((element, index) => {
          return (
            <div key={index} className="buttonLabel-wrapper">
              <DragElement
                index={index}
                dotCounts={element.dots}
                elementName={element.elementName}
                shortName={element.shortName}
                showHint={showHint}
                droppedElement={droppedElement}
                onKeyUpHandle={onKeyUpHandle}
                accessibleButtonOption={accessibleButtonOption}
                element={element}
              />
            </div>
          );
        })}
      </div>
      {accessibleList && (
        <ul className="dropdown" role="menu" ref={accessibleListRef}>
          {droppedItems?.map((element, index) => {
            return !element.length ? (
              <li
                key={index}
                role="none"
                className={`menuitem menuitem-${
                  index + 1
                } content-${listItemsLength}`}
              >
                <a
                  key={index}
                  href="#"
                  role="menuitem"
                  data-accept="xyz"
                  onKeyDown={(e) => keyDownList(e)}
                  onClick={(e) => checkForDrop(e, index)}
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
  onCorrectDrop: PropTypes.func.isRequired,
  onInCorrectDrop: PropTypes.func.isRequired,
  updateAttempt: PropTypes.func.isRequired,
  updateAttemptData: PropTypes.array.isRequired,
  dropElement: PropTypes.object.isRequired,
  droppableAltText: PropTypes.array.isRequired,
  showToastMessage: PropTypes.func.isRequired,
  elementData: PropTypes.array.isRequired,
};

export default Draggable;
