import React, { useEffect, useRef, useState } from "react";
import View from "../../../app/components/View";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";

const Background = (props) => {
  const {
    fetchQuestion,
    resetYesClicked,
    continentData,
    selectedYear,
    isPopupActive,
    mapCompleted,
    onInCorrectDrop,
    updateLiveText,
    dropPlatesOnCanvas,
    canvasData,
    updateCanvasData,
    resetBtnState,
    toastMsg,
    droppedPlates,
    currentPopup,
  } = props;

  const [submit, setSubmit] = useState(false);
  const [dragPlate, setDragPlate] = useState("");
  const [focusDropZone, setFocusDropZone] = useState(null);
  const [dropPlateAY, setDropPlateAY] = useState("");
  const [overDrop, setOverDrop] = useState(false);
  const [dropAccept, setDropAccept] = useState("");
  const [labels, toggleLabels] = useState(false);
  const [dropDown, showDropDown] = useState(false);
  let dragElement = useRef(new Map());
  let dropZone = useRef(new Map());
  const dropZ = useRef([]);
  const rotateFocus = useRef(null);
  const focusYears = useRef(null);
  const popupRef = useRef(currentPopup);
  const [videoScreen, showVideoScreen] = useState(false);

  //fetch question on component mount
  useEffect(() => {
    fetchQuestion();
  }, []);

  //key code actions
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode == 27) {
        canvasData[selectedYear] = null;
        updateCanvasData({ ...canvasData });
        showDropDown(false);
        setFocusDropZone(null);
        setDropPlateAY("");
        setDragPlate("");
      }
      if (e.keyCode == 9) {
        showDropDown(false);
        setFocusDropZone(null);
        setDropPlateAY("");
      }
      if (e.keyCode === 36) {
        dropZ && dropZ.current[1] && dropZ.current[1].focus();
      }
      if (e.keyCode === 35) {
        dropZ &&
          dropZ.current[1] &&
          dropZ.current[dropZ.current.length - 1].focus();
      }
    };

    window.addEventListener("keydown", close);
    // window.addEventListener("onblur", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", close);
      // window.removeEventListener("onblur", handleClickOutside);
    };
  }, [dropDown, dragPlate]);

  // On reset YES click action
  useEffect(() => {
    if (resetYesClicked) {
      setDragPlate("");
      setOverDrop(false);
      setDropAccept("");
      showVideoScreen(false);
      let dropArea = document.getElementsByClassName("grid-block");
      for (let i = 0; i < dropArea.length; i++) {
        dropArea[i].classList.remove("drop-disable");
      }
    }
  }, [resetYesClicked]);
  // on correct drop remove droppable
  useEffect(() => {
    if (toastMsg == "correct") {
      setTimeout(() => {
        const elements = document.getElementsByClassName("drop-disable");
        if (elements && elements.length) {
          const element = elements[0];
          if (element) {
            element.classList.remove("ui-droppable");
          }
        }
      }, 100);
    }
  }, [toastMsg]);

  // draggable & droppable
  useEffect(() => {
    let temp = "";
    if (selectedYear && dropZone.current && dragElement.current) {
      for (let [key, value, list] of dragElement.current) {
        let plates = document.getElementsByClassName(`draggable-wrapper`)[0];
        $(value).draggable({
          cancel: false,
          scroll: false,
          containment: ".gridWapper",
          handle: ".plate-st",
          stack: ".plate-st",
          start: () => {
            temp = "";
          },
          drag: (event, ui) => {
            setOverDrop(false);
            let canvasDragPlate = canvasData && canvasData[selectedYear];
            canvasDragPlate.top = plates.offsetTop;
            canvasDragPlate.left = plates.offsetLeft;
            updateCanvasData({ ...canvasData });
          },
        });
      }

      for (let [key1, value1] of dropZone.current) {
        if (value1) {
          let accept = value1 && value1.getAttribute("data-accept");
          $(value1).droppable({
            hoverClass: "drop-hover",
            tolerance: "intersect",
            greedy: true,

            drop: (event, ui) => {
              const item = droppedPlates[selectedYear];
              if (temp && item && item.indexOf(temp) >= 0) {
                temp = "";
              }

              if (temp) {
                return;
              }
              setDropAccept(accept);
              setOverDrop(true);
              temp = accept;
            },
          });
        }
      }
    }
  }, [
    selectedYear,
    dropZone.current,
    dragElement.current,
    dragPlate,
    canvasData && canvasData[selectedYear],
  ]);

  // useEffect(() => {
  //   if (mapCompleted && !isPopupActive) {
  //     let finalScreen = Object.keys(mapCompleted).every((keys) => {
  //       return mapCompleted[keys] === true;
  //     });
  //     if (finalScreen) {
  //       showVideoScreen(true);
  //     }
  //   }
  // }, [isPopupActive, mapCompleted]);

  useEffect(() => {
    if (currentPopup.indexOf(4) == -1 && popupRef.current.indexOf(4) != -1) {
      let finalScreen = Object.keys(mapCompleted).every((keys) => {
        return mapCompleted[keys] === true;
      });
      if (finalScreen) {
        showVideoScreen(true);
      }
    }
    popupRef.current = currentPopup;
  }, [currentPopup]);

  const visibleData = continentData.find((cb) => cb.id == selectedYear);

  const dropListAtDropZone = (drop, val) => {
    if (drop == val) {
      dropPlatesOnCanvas(
        val,
        selectedYear,
        visibleData[selectedYear][val],
        resetBtnState
      );
      setOverDrop(true);
      showDropDown(false);
      setDropAccept(drop);
      setTimeout(() => {
        rotateFocus && rotateFocus.current.focus();
      });
      let canvasDragPlate = canvasData && canvasData[selectedYear];
      canvasDragPlate.visibility = "visible";
      updateCanvasData({ ...canvasData });
    } else {
      onInCorrectDrop();
      showDropDown(false);
      setFocusDropZone(null);
      setDropPlateAY("");
    }
  };

  return (
    <div className="background-container">
      <div className="background-shell">
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftContainer
            dropZone={dropZone}
            dragElement={dragElement}
            dragPlate={dragPlate}
            visibleData={visibleData}
            overDrop={overDrop}
            dropAccept={dropAccept}
            dragPlate={dragPlate}
            isPopupActive={isPopupActive}
            labels={labels}
            focusDropZone={focusDropZone}
            setFocusDropZone={setFocusDropZone}
            setDropPlateAY={setDropPlateAY}
            showDropDown={showDropDown}
            setDragPlate={setDragPlate}
            dropPlateAY={dropPlateAY}
            videoScreen={videoScreen}
            focusYears={focusYears}
            rotateFocus={rotateFocus}
            setSubmit={setSubmit}
            submit={submit}
          />
          <RightContainer
            visibleData={visibleData}
            setDragPlate={setDragPlate}
            dragPlate={dragPlate}
            resetYesClicked={resetYesClicked}
            isPopupActive={isPopupActive}
            toggleLabels={toggleLabels}
            setDropPlateAY={setDropPlateAY}
            dropPlateAY={dropPlateAY}
            labels={labels}
            setFocusDropZone={setFocusDropZone}
            showDropDown={showDropDown}
            dropDown={dropDown}
            dropListAtDropZone={dropListAtDropZone}
            dropZ={dropZ}
            setDropAccept={setDropAccept}
            updateLiveText={updateLiveText}
            rotateFocus={rotateFocus}
            dropPlatesOnCanvas={dropPlatesOnCanvas}
            videoScreen={videoScreen}
            focusYears={focusYears}
            setSubmit={setSubmit}
            // handleClickOutside={handleClickOutside}
          />
        </View>
      </div>
    </div>
  );
};

export default Background;
