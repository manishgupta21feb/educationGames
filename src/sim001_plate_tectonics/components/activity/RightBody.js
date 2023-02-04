import React, { useEffect, useRef } from "react";
import CheckBox from "../../../app/components/Checkbox";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import FinishButton from "../../containers/FinishButton";
import TextData from "../../config/index";

const years = ["200", "150", "100"];

const RightBody = (props) => {
  const {
    selectedYear,
    onYearBtnClick,
    visibleData,
    setDragPlate,
    isPopupActive,
    toggleLabels,
    dragPlate,
    labels,
    setDropPlateAY,
    mapCompleted,
    dropPlateAY,
    setFocusDropZone,
    dropDown,
    showDropDown,
    dropListAtDropZone,
    dropPlatesOnCanvas,
    updateLiveText,
    updateCanvasData,
    canvasData,
    dropZ,
    setDropAccept,
    videoScreen,
    // handleClickOutside,
    resetBtnState,
    setSubmit,
    toastMsg,
    showToastMessage,
  } = props;
  const ref = useRef(null);

  let canvasDragPlate = canvasData && canvasData[selectedYear];
  const clickYearBtn = (list) => {
    updateLiveText(`${list} ${TextData.selected}`);
    onYearBtnClick(list, resetBtnState);
    EventManager.broadcast("PRIMARY_CLICK");
  };

  const onListItemClick = (e, a, b) => {
    e.stopPropagation();
    e.preventDefault();
    dropListAtDropZone(a, b);
  };

  const onKeyDownHandle = (e, val, highlight) => {
    e.preventDefault();
    e.stopPropagation();
    setDragPlate("");
    canvasData[selectedYear] = null;
    updateCanvasData({ ...canvasData });
    showDropDown(true);
    setDropPlateAY(val);
    setFocusDropZone(highlight);
    setTimeout(() => {
      dropZ && dropZ.current[1] && dropZ.current[1].focus();
    }, 50);
  };
  const showLabels = () => {
    toggleLabels(!labels);
  };

  const onFocusHandle = (e, val) => {
    e.stopPropagation();
    let accept = document
      .getElementsByClassName(`grid-block ${val}-${selectedYear}`)[0]
      .getAttribute("data-accept");
    setDropAccept(accept);
    setFocusDropZone(val);
  };

  const onPlateClick = (e, val, selectedYear, selectedPlate) => {
    e.persist();
    e.stopPropagation();
    setSubmit(false);
    EventManager.broadcast("PRIMARY_CLICK");
    if (e.detail == 0) {
      setDragPlate("");
    } else {
      setDragPlate(val);
      dropPlatesOnCanvas(val, selectedYear, selectedPlate, resetBtnState);
    }
  };

  const keyDownList = (e) => {
    if (e.which == 39 || e.which == 40) {
      if (
        e.target.parentNode.nextSibling &&
        e.target.parentNode.nextSibling.querySelector("a")
      ) {
        e.target.parentNode.nextSibling.querySelector("a").focus();
      } else {
        if (
          e.target.parentNode &&
          e.target.parentNode.parentNode &&
          e.target.parentNode.parentNode.firstChild &&
          e.target.parentNode.parentNode.firstChild.nodeName == "LI" &&
          e.target.parentNode.parentNode.firstChild.querySelector("a")
        ) {
          // e.target.parentNode.parentNode.firstChild.querySelector("a").focus();
        }
      }
    } else if (e.which == 37 || e.which == 38) {
      if (
        e.target.parentNode.previousSibling &&
        e.target.parentNode.previousSibling.querySelector("a")
      ) {
        e.target.parentNode.previousSibling.querySelector("a").focus();
      } else {
        if (
          e.target.parentNode &&
          e.target.parentNode.parentNode &&
          e.target.parentNode.parentNode.lastChild &&
          e.target.parentNode.parentNode.lastChild.nodeName == "LI" &&
          e.target.parentNode.parentNode.lastChild.querySelector("a")
        ) {
          // e.target.parentNode.parentNode.lastChild.querySelector("a").focus();
        }
      }
    } else if (e.which == 9) {
      if (e.shiftKey) {
        if (
          e.target.parentNode.previousSibling &&
          e.target.parentNode.previousSibling.querySelector("a")
        ) {
          e.target.parentNode.previousSibling.querySelector("a").focus();
        }
      } else {
        if (
          e.target.parentNode.nextSibling &&
          e.target.parentNode.nextSibling.querySelector("a")
        ) {
          e.target.parentNode.nextSibling.querySelector("a").focus();
        }
      }
    }
  };

  useEffect(() => {
    if (dragPlate) {
      let canvas = document.getElementsByClassName("gridWapper")[0];
      let plates = document.getElementsByClassName(`draggable-wrapper`)[0];
      let plateHeight = plates.offsetHeight;
      let plateWidth = plates.offsetWidth;
      let canvasWidth = canvas.offsetWidth;
      let canvasHeight = canvas.offsetHeight;
      const maxTop = canvasHeight - plateHeight;
      const maxLeft = canvasWidth - plateWidth - 20;
      (canvasDragPlate.top = `${Math.random() * (maxTop - 0) + 0}px`),
        (canvasDragPlate.left = `${Math.random() * (maxLeft - 0) + 0}px`),
        (canvasDragPlate.visibility = "visible");
      updateCanvasData({ ...canvasData });
    }
  }, [dragPlate]);

  const onBlur = (e) => {
    e.stopPropagation();
    showDropDown(false);
    setFocusDropZone(null);
  };

  const onFocus = (e) => {
    showDropDown(true);
  };

  useEffect(() => {
    if (showToastMessage && ref.current) {
      const hiddenBtns = ref.current.querySelectorAll("button.hiddenBtn");
      if (toastMsg == "correct" || toastMsg == "incorrect") {
        for (let btn of hiddenBtns) {
          if (btn.getAttribute("disabled") == null) {
            btn.focus();
            break;
          }
        }
      }
    }
  }, [toastMsg, showToastMessage]);

  return (
    <div ref={ref} className="right-body-container">
      <h1>{TextData.timePeriod}</h1>
      <p>{TextData.yearAgo}</p>
      <div className="years-radio-wrapper">
        {years.map((list, i) => {
          return (
            <Button
              key={i}
              classes={`primary-invert year-radio-box ${
                selectedYear == list && "selected"
              }`}
              onClick={() => clickYearBtn(list)}
              isPopUpOpen={isPopupActive}
              text={list}
              disabled={videoScreen}
              // ref={focusYears}
              ariaPressed={selectedYear == list}
            ></Button>
          );
        })}
      </div>
      <CheckBox
        id="pt-cb"
        text={TextData.label}
        label={TextData.label}
        onChange={() => showLabels()}
        checked={mapCompleted[selectedYear] && labels}
        disabled={!mapCompleted[selectedYear] || videoScreen}
      />
      <h2>{TextData.plates}</h2>
      <div className="continents-tumbnails">
        {visibleData &&
          visibleData.newList &&
          visibleData.newList.map((list, i) => {
            const plateData = TextData[selectedYear][list];
            let selectedPlate = visibleData[selectedYear][list];
            // if (i != 0)
            return (
              <div className={`plates-wrapper index${i + 1}`} key={i}>
                {/* hidden button for a11y */}

                {/* visible button for mouse click */}
                <Button
                  classes={`draggable-component ${videoScreen ? "disabled" : ""}
                       ${plateData ? plateData.className : ""}-${selectedYear}
                       ${
                         canvasDragPlate && (dragPlate || dropPlateAY) == list
                           ? "active"
                           : ""
                       }
                       ${selectedPlate.showCorrectAnswer ? "green" : ""}`}
                  onClick={(e) =>
                    onPlateClick(
                      e,
                      plateData.className,
                      selectedYear,
                      selectedPlate
                    )
                  }
                  // label={plateData && plateData.label}
                  isPopUpOpen="-1"
                  ariaHidden="true"
                  style={{
                    backgroundImage: `url(${plateData && plateData.thumbData})`,
                  }}
                  disabled={selectedPlate.showCorrectAnswer || videoScreen}
                ></Button>
                <Button
                  classes={`hiddenBtn ${videoScreen ? "disabled" : ""}`}
                  onClick={(e) =>
                    onKeyDownHandle(
                      e,
                      plateData.className,
                      visibleData.newList[0]
                    )
                  }
                  isPopUpOpen={isPopupActive}
                  // id={`dropdownMenuButton`}
                  ariaLable={plateData && plateData.desc}
                  dataToggle="dropdown"
                  // ariaHaspopup="true"
                  ariaExpanded={dropDown && dropPlateAY == list}
                  disabled={selectedPlate.showCorrectAnswer || videoScreen}
                />
                <div
                  className={`checked ${
                    selectedPlate.showCorrectAnswer ? "show" : "hidden"
                  }`}
                />
                {dropDown && dropPlateAY == list ? (
                  <ul
                    role="menu"
                    tabIndex="-1"
                    className="dropdown"
                    style={{
                      right: `${i + 1 == 4 && "0"}`,
                    }}
                  >
                    {visibleData &&
                      visibleData.newList &&
                      visibleData.newList.map((list, i) => {
                        return (
                          <li key={i} className="option" role="none">
                            <a
                              href="#"
                              tabIndex={0}
                              role="menuitem"
                              onFocus={onFocus}
                              onKeyDown={(e) => keyDownList(e)}
                              ref={(el) => (dropZ.current[i + 1] = el)}
                              onKeyUp={(e) => onFocusHandle(e, list)}
                              onClick={(e) =>
                                onListItemClick(e, dropPlateAY, list)
                              }
                            >
                              {`${TextData.continent} ${i + 1}`}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                ) : null}
              </div>
            );
          })}
      </div>
      <ul className="key-labels" role="list">
        {TextData[selectedYear].keys.map((list, i) => {
          return (
            <li key={i} role="listitem">
              <span
                className={"color-box"}
                style={{
                  backgroundImage: `url(${list.img})`,
                }}
                role="img"
                aria-label={list.description}
              ></span>
              <span className="text">{list.text}</span>
            </li>
          );
        })}
      </ul>
      {videoScreen && <FinishButton />}
    </div>
  );
};

export default RightBody;
