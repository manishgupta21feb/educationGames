import React, { useState, useRef, useEffect } from "react";
import Button from "../../../app/components/Button";
import { isIOS, isAndroid } from "react-device-detect";
const Draggables = (props) => {
  const {
    closeInfoBtn,
    audioStatePlay,
    selectedDraggable,
    draggableItems,
    dropDown,
    onDrop,
    forceAnimalHighlight,
    forcePlantHighlight,
    setPreviousSound,
    isPopupActive,
  } = props;

  const positionMarkers = {
    top: { 0: 147, 1: 200, 2: 253, 3: 306 },
    right: { 0: 100, 1: 48, 2: 0, 3: 0 },
  };

  const ref = useRef(null);
  const flag = useRef(false);
  const dragItemRef = useRef([]);
  const dropZoneRef = useRef([]);
  const timeoutRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [isAccessible, setAccessible] = useState(false);
  const [showDropZone, setShowDropZone] = useState(false);
  const isDraggableSelected =
    selectedDraggable && Object.keys(selectedDraggable).length;
  const showDropzoneRef = useRef(showDropZone);
  const isAccessibleRef = useRef(isAccessible);
  const draggableItemsRef = useRef(draggableItems);
  const isDraggableSelectedRef = useRef(isDraggableSelected);
  const temp = useRef(-1);

  useEffect(() => {
    if (audioStatePlay && isDraggableSelected) {
      setTimeout(() => {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          id: selectedDraggable.audioLabel,
        });
      }, 100);
    }
  }, [audioStatePlay]);

  useEffect(() => {
    if (isDraggableSelected && !isAccessible) {
      closeButtonRef.current.focus();
    }
  }, [selectedDraggable]);

  const selectDraggable = (i) => {
    temp.current = i;
    props.selectDraggable(draggableItems[i]);
    EventManager.broadcast("PRIMARY_CLICK");
    if (audioStatePlay) {
      setPreviousSound(draggableItems[i].audioLabel);
      setTimeout(() => {
        EventManager.broadcast("PLAY_AUDIO_NARRATION", {
          id: draggableItems[i].audioLabel,
        });
      }, 100);
    }
  };

  const closeDialog = () => {
    props.selectDraggable({});
    EventManager.broadcast("STOP_ALL_AND_PLAY", { id: "SECONDARY_CLICK" });

    // give focus on last selected item
    dragItemRef.current[selectedDraggable.srNo].focus();
    setPreviousSound("SECONDARY_CLICK");
    forcePlantHighlight(false);
    forceAnimalHighlight(false);
  };

  const onKeyDownHandler = (event) => {
    const keyCode = event.keyCode || event.which;
    switch (keyCode) {
      case 9:
      case 27:
        setShowDropZone(false);
        setAccessible(false);
        props.selectDraggable({});
        forcePlantHighlight(false);
        forceAnimalHighlight(false);
        break;
      case 35:
      case 39:
      case 40:
        dropZoneRef.current[1].focus();
        forcePlantHighlight(true);
        forceAnimalHighlight(false);
        break;
      case 36:
      case 37:
      case 38:
        dropZoneRef.current[0].focus();
        forcePlantHighlight(false);
        forceAnimalHighlight(true);
        break;
    }
  };

  const checkForDrop = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    dropZoneRef.current[index].focus();
    onDrop(index == 0);
    setAccessible(false);
    forcePlantHighlight(false);
    forceAnimalHighlight(false);
    props.selectDraggable({});
  };

  const onKeyDownButtonHandler = (i) => {
    flag.current = false;
    temp.current = -1;
    setShowDropZone(true);
    selectDraggable(i);
    setAccessible(true);
  };

  const onBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setAccessible(false);
    }, 100);
  };

  const onFocus = (event) => {
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!showDropZone && showDropzoneRef.current && ref.current) {
      const queryString =
        ".option-container.draggable button.not-accessible-button";
      const buttons = ref.current.querySelectorAll(queryString);
      if (buttons && buttons.length) {
        for (let button of buttons) {
          if (button.getAttribute("disabled") == null) {
            button.focus();
            break;
          }
        }
      }
    }
    showDropzoneRef.current = showDropZone;
  }, [showDropZone]);

  useEffect(() => {
    if (
      draggableItems !== draggableItemsRef.current &&
      draggableItems.filter((d) => d.isSelected).length
    ) {
      setShowDropZone(false);
      flag.current = true;
    }
    draggableItemsRef.current = draggableItems;
  }, [draggableItems]);

  useEffect(() => {
    if (
      !isDraggableSelected &&
      isDraggableSelectedRef.current &&
      !flag.current
    ) {
      setShowDropZone(false);
    }
    isDraggableSelectedRef.current = isDraggableSelected;
  }, [isDraggableSelected]);

  useEffect(() => {
    console.log("isAccessible is updated: ", isAccessible);
    if (isAccessible && !isAccessibleRef.current) {
      if (dropZoneRef.current[0]) {
        dropZoneRef.current[0].focus();
        forceAnimalHighlight(true);
      }
    }
    if (!isAccessible && isAccessibleRef.current) {
      forcePlantHighlight(false);
      forceAnimalHighlight(false);
      props.selectDraggable({});
    }
    isAccessibleRef.current = isAccessible;
  }, [isAccessible]);

  return (
    <>
      <div ref={ref} className="wrapper">
        {draggableItems.map((item, i) => {
          return (
            <div className="option-container draggable" key={item.srNo}>
              <Button
                ariaHidden="true"
                label={item.label}
                isPopupActive={true}
                disabled={item.isSelected}
                onClick={() => {
                  setAccessible(false);
                  setShowDropZone(false);
                  selectDraggable(i);
                }}
                classes={`accessible-button ${item.id}  ${item.srNo}`}
              ></Button>

              {/* This is Accessible button don't get confused by its class name */}
              <Button
                dataToggle="dropdown"
                disabled={item.isSelected}
                isPopUpOpen={isPopupActive}
                ariaLable={item.altText.thumbnailAltText}
                classes="option dragItems not-accessible-button"
                onFocus={() => {
                  if (showDropZone && isAccessible && !isIOS) {
                    setShowDropZone(false);
                    props.selectDraggable({});
                  }
                }}
                onClick={() => {
                  onKeyDownButtonHandler(i);
                }}
                ref={(ref) => {
                  dragItemRef.current[item.srNo] = ref;
                }}
                ariaExpanded={
                  isAccessible &&
                  showDropZone &&
                  selectedDraggable.srNo === item.srNo
                }
              />
            </div>
          );
        })}
        {isAccessible ? (
          <ul
            role="menu"
            className="dropdown"
            style={{
              top: positionMarkers.top[Math.floor(temp.current / 4)] + "px",
              right: positionMarkers.right[Math.floor(temp.current % 4)] + "px",
            }}
          >
            {dropDown.map((list, index) => {
              return (
                <li className="option" role="none" key={list.srNo}>
                  <a
                    href="#"
                    role="menuitem"
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDownHandler}
                    ref={(ref) => (dropZoneRef.current[index] = ref)}
                    onClick={(e) => {
                      checkForDrop(e, index);
                    }}
                  >
                    {list.label}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      {!isAccessible && isDraggableSelected ? (
        <div
          className={`wrapper-1 show`}
          role="dialog"
          aria-describedby="dialogheading"
          aria-hidden={!isDraggableSelected}
        >
          <p
            id="dialogheading"
            dangerouslySetInnerHTML={{ __html: selectedDraggable.infoText }}
          ></p>

          <Button
            classes={"hotspot-btn close"}
            text={closeInfoBtn}
            tabIndex={isPopupActive ? -1 : 0}
            isPopUpOpen={isPopupActive || !selectedDraggable}
            onClick={() => closeDialog()}
            ref={closeButtonRef}
          />
        </div>
      ) : null}
    </>
  );
};

export default Draggables;
