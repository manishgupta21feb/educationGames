import TextData from "../config/index";
import * as actions from "../../app/actions";

export const common = { ...actions };

const { toggleToastMessage, updateResetBtnState } = common;

export const CANVAS_DATA = "CANVAS_DATA";
export const SELECTED_YEAR = "SELECTED_YEAR";
export const DROPPED_PLATE = "DROPPED_PLATE";
export const SET_POSITIONS = "SET_POSITIONS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const MAP_COMPLETED = "MAP_COMPLETED";
export const CONTINENT_DATA = "CONTINENT_DATA";
export const RESET_YES_BUTTON = "RESET_YES_BUTTON";
export const YEAR_PLATES_COUNT = "YEAR_PLATES_COUNT";
export const SIDE_PANNEL_PLATES = "SIDE_PANNEL_PLATES";
export const RESET_DROPPED_PLATE = "RESET_DROPPED_PLATE";
export const UPDATE_DROPPED_PLATE = "UPDATE_DROPPED_PLATE";
export const SET_FINAL_DIALOG_MSG = "SET_FINAL_DIALOG_MSG";

export const updateSelectedYear = (val) => ({ val, type: SELECTED_YEAR });

export const updateContinentData = (val) => ({ val, type: CONTINENT_DATA });

export const updateSidePanelPlates = (val) => ({
  val,
  type: SIDE_PANNEL_PLATES,
});

export const updateToastMsg = (val) => ({ val, type: TOAST_MESSAGE });

export const updateYearPlatesCount = (val) => ({
  val,
  type: YEAR_PLATES_COUNT,
});

export const updateFinalDialogMsg = (val) => ({
  val,
  type: SET_FINAL_DIALOG_MSG,
});

export const updateMapCompleted = (val) => ({ val, type: MAP_COMPLETED });

export const updateCanvasData = (val) => ({ val, type: CANVAS_DATA });

export const updateResetYesClicked = (val) => ({ val, type: RESET_YES_BUTTON });

export const updateDroppedPlate = (country, year) => ({
  year,
  country,
  type: UPDATE_DROPPED_PLATE,
});

const resetDroppedPlate = () => ({
  type: RESET_DROPPED_PLATE,
});

export const thunks = {
  fetchQuestion: () => {
    return (dispatch, getState) => {
      const { continentData } = getState();
      let _continentData = continentData;
      let platesData = _continentData.map((list, index) => {
        let shiftedElement;
        for (let i = list.label.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = list.label[i];
          list.label[i] = list.label[j];
          list.label[j] = temp;
        }
        if (list.label.includes("madagascar")) {
          shiftedElement = list.label[list.label.indexOf("madagascar")];
          list.canvasPlate = shiftedElement;
        } else {
          shiftedElement = list.label[0];
          list.canvasPlate = shiftedElement;
        }
        let newList = list.label.filter((item) => item !== shiftedElement);
        return { ...list, newList };
      });
      dispatch(updateContinentData(platesData));
      dispatch(updateSidePanelPlates(true));
    };
  },

  onRotateClick: () => {
    return (dispatch, getState) => {
      const { selectedYear, canvasData } = getState();
      let selectedPlate = canvasData[selectedYear];
      selectedPlate.angle += 90;
      selectedPlate.angle %= 360;
      dispatch(updateCanvasData(JSON.parse(JSON.stringify(canvasData))));
    };
  },

  dropPlatesOnCanvas: (value, selectedYear, selectedPlate) => {
    return (dispatch, getState) => {
      const { canvasData } = getState();
      dispatch(updateToastMsg(""));
      dispatch(toggleToastMessage(false));
      dispatch(updateResetYesClicked(false));
      canvasData[selectedYear] = selectedPlate;
      dispatch(updateCanvasData(JSON.parse(JSON.stringify(canvasData))));
    };
  },

  submitPlates: (dragPlate, dropAccept, item) => {
    return (dispatch, getState) => {
      const {
        continentData,
        selectedYear,
        yearPlatesCount,
        mapCompleted,
        canvasData,
      } = getState();
      const visibleData = continentData.find((cb) => cb.id == selectedYear);
      if (selectedYear == 200) {
        dispatch(updateFinalDialogMsg(TextData.toastMsg.final200));
      } else if (selectedYear == 150) {
        dispatch(updateFinalDialogMsg(TextData.toastMsg.final150));
      } else {
        dispatch(updateFinalDialogMsg(TextData.toastMsg.final100));
      }

      canvasData[selectedYear].dropped = true;
      if (dragPlate === dropAccept && item.angle == 0) {
        dispatch(updateDroppedPlate(dragPlate, selectedYear));
        canvasData[selectedYear].showCorrectAnswer = true;
        visibleData[selectedYear][item.class].showCorrectAnswer = true;
        if (yearPlatesCount.hasOwnProperty(selectedYear)) {
          dispatch(toggleToastMessage(true));
          dispatch(updateToastMsg("correct"));
          let disableDrop = `${dropAccept}-${selectedYear}`;
          document
            .getElementsByClassName(disableDrop)[0]
            .classList.add("drop-disable");
          yearPlatesCount[selectedYear] = yearPlatesCount[selectedYear] + 1;
          dispatch(
            updateYearPlatesCount(JSON.parse(JSON.stringify(yearPlatesCount)))
          );
          setTimeout(() => {
            EventManager.broadcast("POSITIVE_FEEDBACK");
          }, 500);
        }
        if (
          (selectedYear == 200 &&
            getState().yearPlatesCount[selectedYear] == 6) ||
          (selectedYear == 150 &&
            getState().yearPlatesCount[selectedYear] == 7) ||
          (selectedYear == 100 && getState().yearPlatesCount[selectedYear] == 7)
        ) {
          mapCompleted[selectedYear] = true;
          dispatch(toggleToastMessage(false));
          dispatch(updateToastMsg(`finalToast`));
          dispatch(
            updateMapCompleted(JSON.parse(JSON.stringify(mapCompleted)))
          );
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
      } else {
        canvasData[selectedYear].dropped = false;
        dispatch(toggleToastMessage(true));
        dispatch(updateToastMsg("incorrect"));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
      }
      dispatch(updateContinentData(JSON.parse(JSON.stringify(continentData))));
      dispatch(updateCanvasData(JSON.parse(JSON.stringify(canvasData))));
    };
  },

  resetGamePT: () => {
    return (dispatch, getState) => {
      const { continentData } = getState();
      dispatch(updateResetBtnState(true));
      for (let i = 0; i < continentData.length; i++) {
        continentData[i].canvasPlate = "";
        if (continentData[i][200]) {
          for (let keys in continentData[i][200]) {
            continentData[i][200][keys].dropped = false;
            continentData[i][200][keys].showCorrectAnswer = false;
          }
        } else if (continentData[i][150]) {
          for (let keys in continentData[i][150]) {
            continentData[i][150][keys].dropped = false;
            continentData[i][150][keys].showCorrectAnswer = false;
          }
        } else if (continentData[i][100]) {
          for (let keys in continentData[i][100]) {
            continentData[i][100][keys].dropped = false;
            continentData[i][100][keys].showCorrectAnswer = false;
          }
        }
      }
      dispatch(updateSelectedYear(200));
      dispatch(updateContinentData(JSON.parse(JSON.stringify(continentData))));
      dispatch(updateFinalDialogMsg(""));
      dispatch(
        updateYearPlatesCount({
          200: 0,
          150: 0,
          100: 0,
        })
      );
      dispatch(
        updateMapCompleted({
          200: false,
          150: false,
          100: false,
        })
      );
      dispatch(
        updateCanvasData({
          200: null,
          150: null,
          100: null,
        })
      );
      setTimeout(() => {
        dispatch(thunks.fetchQuestion());
      }, 50);
      dispatch(updateToastMsg);
      dispatch(updateSidePanelPlates(false));
      dispatch(resetDroppedPlate());
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
