import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import DragBox from "../../containers/DragBoxContainer";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const simLanguage = getSimLanguage();
const Draggable = (props) => {
  const {
    data,
    elementData,
    dropElement,
    draggableRef,
    onCorrectDrop,
    updateAttempt,
    resetBtnState,
    selectedStage,
    simulationEnd,
    onInCorrectDrop,
    droppableDetail,
    showToastMessage,
    updateResetBtnState,
    updateAccessibleList,
  } = props;

  const droppedElement = useRef(dropElement);
  const [accessibleList, setAccessibleList] = useState(false);
  const accessibleListRef = useRef(null);
  const currentTargetRef = useRef(null);

  const resetBtnStateRef = useRef(resetBtnState);

  useEffect(() => {
    droppedElement.current = dropElement;
    resetBtnStateRef.current = resetBtnState;

    if (simulationEnd) {
      setAccessibleList(false);
    }
  }, [dropElement, resetBtnState, simulationEnd]);

  const accessibleButtonOption = (e) => {
    if (!resetBtnStateRef.current) {
      updateResetBtnState(true);
    }
    setAccessibleList(true);
    updateAccessibleList(true);
    currentTargetRef.current = e.currentTarget;
    setTimeout(() => {
      accessibleListRef.current.children[0].querySelector("a").focus();
    }, 150);
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
        e.currentTarget.parentNode.previousElementSibling &&
        e.currentTarget.parentNode.previousElementSibling.querySelector("a")
      ) {
        e.currentTarget.parentNode.previousElementSibling
          .querySelector("a")
          .focus();
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
    e.preventDefault();
    e.stopPropagation();
    const { dataset } = currentTargetRef.current;
    if (dataset.target === e.currentTarget.dataset.accept) {
      updateAttempt(currentTargetRef.current.getAttribute("data-value"));
      setTimeout(() => {
        setAccessibleList(false);
        updateAccessibleList(false);
        $(
          `.draggable .not-accessible-button-${selectedStage} [data-target="' + e.target.dataset.accept + '"]`
        ).draggable("destroy");
        onCorrectDrop(currentTargetRef.current.dataset.target);

        const index = dataset.index;
        if (index != undefined && index != null) {
          let newIndex = -1;
          const aButtons = document.querySelectorAll(
            ".draggable-btn-wrapper .drag-box .accessible-button"
          );
          for (let i = +index + 1; i < aButtons.length; i++) {
            if (aButtons[i].getAttribute("disabled") == null) {
              newIndex = i;
              break;
            }
          }
          if (newIndex == -1) {
            for (let i = 0; i < +index; i++) {
              if (aButtons[i].getAttribute("disabled") == null) {
                newIndex = i;
                break;
              }
            }
          }
          if (newIndex != -1) {
            aButtons[newIndex].focus();
          }
        }
      }, 200);
    } else {
      // inCorrect
      if (currentTargetRef && currentTargetRef.current) {
        currentTargetRef.current.focus();
      }
      onInCorrectDrop();
    }
  };
  return (
    <div className={`option-container draggable`}>
      <div
        className={`draggable-btn-wrapper ${
          selectedStage == "stage2" ? simLanguage : ""
        }`}
      >
        {elementData?.map((element, index) => {
          return (
            <Fragment key={index}>
              <DragBox
                draggableRef={draggableRef}
                index={index}
                element={element}
                onKeyUpHandle={onKeyUpHandle}
                accessibleButtonOption={accessibleButtonOption}
              />
            </Fragment>
          );
        })}
      </div>
      {accessibleList ? (
        selectedStage === "stage1" ? (
          <ul
            role="menu"
            ref={accessibleListRef}
            className={`dropdown-${selectedStage}`}
          >
            {data.elements?.map((element, index) => {
              return !droppedElement.current[element.name] ? (
                <li
                  key={index}
                  role="none"
                  className={`menuitem menuitem-${index + 1}`}
                >
                  <a
                    role="menuitem"
                    href="#"
                    data-accept={element.name}
                    onKeyDown={(e) => keyDownList(e)}
                    onClick={(e) => checkForDrop(e)}
                    onBlur={() => showToastMessage(false)}
                    disabled={droppedElement.current[element.name]}
                    aria-label={`${data.dropRegionDetail} ${data.droppableAltText[index]}`}
                  ></a>
                </li>
              ) : null;
            })}
          </ul>
        ) : (
          <ul
            role="menu"
            ref={accessibleListRef}
            className={`dropdown-${selectedStage} ${simLanguage}`.trim()}
          >
            {droppableDetail?.map((element, index) => {
              return (
                <li
                  role="none"
                  className={`menuitem menuitem-${index + 1}`}
                  key={index}
                >
                  <a
                    href="#"
                    role="menuitem"
                    data-accept={element.name}
                    disabled={droppedElement.current[element.name]}
                    onKeyDown={(e) => keyDownList(e)}
                    onClick={(e) => checkForDrop(e)}
                    onBlur={() => showToastMessage(false)}
                    aria-label={`${data.dropRegionDetail} ${element.title}`}
                  ></a>
                </li>
              );
            })}
          </ul>
        )
      ) : null}
    </div>
  );
};

Draggable.propTypes = {
  onCorrectDrop: PropTypes.func.isRequired,
  onInCorrectDrop: PropTypes.func.isRequired,
  updateAttempt: PropTypes.func.isRequired,
  dropElement: PropTypes.object.isRequired,
  showToastMessage: PropTypes.func.isRequired,
};

export default Draggable;
