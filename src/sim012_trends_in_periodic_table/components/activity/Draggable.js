import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DragElement from "../../containers/DragElementContainer";
import { isIOS } from "react-device-detect";

const Draggable = (props) => {
  const {
    showHint,
    updateAttemptData,
    dropElement,
    droppableAltText,
    showToastMessage,
    elementData,
    resetBtnState,
    droppedItems,
    currentDraggables,
    setCurrentDraggables,
    updateDropItems,
    updateResetBtnState,
  } = props;

  const ref = useRef(null);
  const listRef = useRef(false);
  const currentTargetRef = useRef(null);
  const droppedElement = useRef(dropElement);
  const droppedItemsRef = useRef(droppedItems);
  const resetBtnStateRef = useRef(resetBtnState);
  const CheckForAttempt = useRef(updateAttemptData);
  const [accessibleList, setAccessibleList] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState("");

  useEffect(() => {
    CheckForAttempt.current = updateAttemptData;
    droppedElement.current = dropElement;
    resetBtnStateRef.current = resetBtnState;
  }, [updateAttemptData, dropElement, resetBtnState]);

  const accessibleButtonOption = (e, element, index) => {
    updateResetBtnState(false);
    setAccessibleList(true);
    setCurrentDraggables({ ...element, index });
    currentTargetRef.current = e.currentTarget;
  };

  const onKeyUpHandle = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      setAccessibleList(true);
      currentTargetRef.current = e.currentTarget; // @desc store mystery clicked element
      setTimeout(() => {
        ref.current.children[0].querySelector("a").focus(); // @desc Set focus to first remaining option
      });
    } else if (e.keyCode === 9) {
      setAccessibleList(false);
    }
  };

  const keyDownList = (e) => {
    switch (e.which) {
      case 9:
        setAccessibleList(false);
        currentTargetRef.current.focus();
        break;
      case 27:
        setAccessibleList(false);
        currentTargetRef.current.focus();
        break;
      case 39:
      case 40:
        if (
          e.currentTarget.parentNode.nextSibling &&
          e.currentTarget.parentNode.nextSibling.querySelector("a")
        ) {
          e.currentTarget.parentNode.nextSibling.querySelector("a").focus();
        }
        break;
      case 37:
      case 38:
        if (
          e.currentTarget.parentNode.previousSibling &&
          e.currentTarget.parentNode.previousSibling.querySelector("a")
        ) {
          e.currentTarget.parentNode.previousSibling.querySelector("a").focus();
        }
        break;
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

  useEffect(() => {
    if (!listRef.current && accessibleList) {
      if (ref.current) {
        const listItem = ref.current.querySelector('a[aria-hidden="false"]');
        if (listItem) {
          listItem.focus();
        }
      }
    }
    listRef.current = accessibleList;
  }, [accessibleList]);

  const onFocus = () => {
    clearTimeout(blurTimeout);
  };

  const onBlur = (e) => {
    if (isIOS) {
      const time = setTimeout(() => {
        if (accessibleList) {
          setAccessibleList(false);
        }
      }, 100);
      setBlurTimeout(time);
    }
    showToastMessage(false);
  };

  return (
    <div className="option-container draggable" ref={ref}>
      <div className="draggable-btn-wrapper">
        {elementData?.map((element, index) => {
          return (
            <div key={index}>
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
        <ul className="dropdown" role="menu">
          {droppedItems?.map((element, index) => {
            return !element.length ? (
              <li
                role="none"
                key={`ul${index}`}
                className={`menuitem menuitem-${index + 1}`}
              >
                <a
                  href="#"
                  role="menuitem"
                  data-accept="xyz"
                  onKeyDown={(e) => keyDownList(e)}
                  aria-hidden={!!droppedItems[index]}
                  onClick={(e) => checkForDrop(e, index)}
                  onBlur={onBlur}
                  onFocus={onFocus}
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
  elementArray: PropTypes.array.isRequired,
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
