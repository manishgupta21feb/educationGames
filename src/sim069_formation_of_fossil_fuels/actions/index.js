import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import data from "../data";

export const OPERATABLES_DATA = "OPERATABLES_DATA";
export const CURRENT_OPERATABLE = "OPERATABLE_NAME";
export const RESET_PLACEMENT_ZONES = "RESET_PLACEMENT_ZONES";
export const UPDATE_PLACEMENT_ZONES = "UPDATE_PLACEMENT_ZONES";
export const ADD_DND_PAIR = "ADD_DND_PAIR";
export const ACCEPT = "ACCEPT";
export const RESULT = "RESULT";
export const FOSSIL = "FOSSIL";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const CURRECT_ANSWERS = "CURRECT_ANSWERS";
export const ACTIVITY_END = "ACTIVITY_END";
export const VIEW_PLAYED = "VIEW_PLAYED";
export const TOGGLE_DESCRIPTION_BOX = "TOGGLE_DESCRIPTION_BOX";
export const SET_LIVE_TEXT_ASSERTIVE = "SET_LIVE_TEXT_ASSERTIVE";
export const SET_DROPPED_ITEM = "SET_DROPPED_ITEM";

export const common = { ...actions };

export const setOperatablesData = (item) => ({
  item,
  type: OPERATABLES_DATA,
});

export const setFossil = (val) => ({
  val,
  type: FOSSIL,
});

export const setCurrentOperatable = (val) => ({
  val,
  type: CURRENT_OPERATABLE,
});

export const setResetPlacementZones = (items) => ({
  items,
  type: RESET_PLACEMENT_ZONES,
});

export const setUpdatePlacementZones = (items) => ({
  items,
  type: UPDATE_PLACEMENT_ZONES,
});

export const setAccept = (val) => ({
  val,
  type: ACCEPT,
});

export const setResult = (val) => ({
  val,
  type: RESULT,
});

export const setUpdateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setActivityEnd = () => ({
  type: ACTIVITY_END,
});

export const setToggleDesciptionBox = () => ({
  type: TOGGLE_DESCRIPTION_BOX,
});

export const setViewPlayed = (value) => ({
  type: VIEW_PLAYED,
  value,
});

export const helper = {
  shuffle: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  runFocus: () => {},
};

export const setDroppedItem = (item) => ({
  item,
  type: SET_DROPPED_ITEM,
});

export const thunk = {
  onFossil: () => {
    return (dispatch, getState) => {
      const { getOperatablesData, resetBtnState, getFossil } = getState();
      if (resetBtnState) {
        dispatch(common.updateResetBtnState(false));
      }
      setTimeout(() => {
        dispatch(common.setResetFocusState(true));
      });

      helper.shuffle(getOperatablesData[getFossil]);
    };
  },

  onOperatable: () => {
    return (dispatch, getState) => {
      const { getCurrentOperatable: currentOperatable } = getState();
      const { getPlacementZones, getOperatablesData, getFossil } = getState();
      dispatch(setDroppedItem(null));
      const length = getOperatablesData[getFossil].length;
      let _placementZones = [...getPlacementZones];
      _placementZones = _placementZones.slice(0, length);

      _placementZones
        .filter((item) => item.disabled)
        .map((item, index) => {
          _placementZones[index] = { ..._placementZones[index] };
          _placementZones[index].disabled = false;
        });

      const _operatables = { ...getOperatablesData };
      _operatables[getFossil][currentOperatable.indexVal] = {
        ..._operatables[getFossil][currentOperatable.indexVal],
      };

      for (let i in _operatables[getFossil]) {
        _operatables[getFossil][i].active = false;
      }
      _operatables[getFossil][currentOperatable.indexVal].active = true;

      const wrongAnswers = _placementZones.filter((item) => !item.answer);
      const _tempPlacementZones = [
        ...new Set([..._placementZones, ...wrongAnswers]),
      ];

      _tempPlacementZones.map((item) => {
        if (!item.answer) {
          item.disabled = false;
          item.hidden = false;
          item.answer = false;
          item.active = "";
        }
      });

      const wrongPlacements = _operatables[getFossil].filter(
        (item) => !item.isPlacement
      );

      wrongPlacements.map((item) => {
        if (!item.isPlacement) {
          item.disabled = false;
        }
      });

      dispatch(setOperatablesData(_operatables));
      dispatch(setUpdatePlacementZones(_placementZones));

      setTimeout(() => {
        dispatch(
          common.thunks.ariaLiveAssertive(
            getOperatablesData[getFossil][currentOperatable.indexVal]
              .description
          )
        );
      }, 150);
    };
  },

  onPlacement: (accept) => {
    return (dispatch, getState) => {
      const { getCurrentOperatable: currentOperatable } = getState();

      dispatch(setAccept(accept));

      const { getPlacementZones, getOperatablesData, getFossil } = getState();
      const _placementZones = [...getPlacementZones];
      const _operatables = { ...getOperatablesData };

      const index = _placementZones.findIndex((item) => item.accept == accept);

      dispatch(setToggleDesciptionBox());

      for (let i in _placementZones) {
        _placementZones[i].disabled = true;
      }

      dispatch(
        setDroppedItem({
          index,
          active: currentOperatable.source,
        })
      );

      if (index !== -1) {
        _placementZones[index] = { ..._placementZones[index] };
        _placementZones[index].hidden = true;
        _placementZones[index].answer = true;
        _placementZones[index].active = currentOperatable.source;
        _placementZones[index].placedText =
          _operatables[getFossil][currentOperatable.indexVal].description;

        _operatables[getFossil] = [..._operatables[getFossil]];
        _operatables[getFossil][currentOperatable.indexVal] = {
          ..._operatables[getFossil][currentOperatable.indexVal],
        };
        _operatables[getFossil][currentOperatable.indexVal].disabled = true;
        _operatables[getFossil][currentOperatable.indexVal].active = false;

        dispatch(setUpdatePlacementZones(_placementZones));
        dispatch(setOperatablesData(_operatables));

        if (accept != currentOperatable.source) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");

          _placementZones[index] = { ..._placementZones[index] };
          _placementZones[index].answer = false;
          _placementZones[index].hidden = false;
          _placementZones[index].active = "";
          _operatables[getFossil] = [..._operatables[getFossil]];
          _operatables[getFossil][currentOperatable.indexVal] = {
            ..._operatables[getFossil][currentOperatable.indexVal],
          };
          _operatables[getFossil][currentOperatable.indexVal].disabled = false;

          dispatch(setUpdatePlacementZones(_placementZones));
          dispatch(setOperatablesData(_operatables));
          dispatch(setResult(false));
          dispatch(common.toggleToastMessage(true));
        } else {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          _operatables[getFossil][
            currentOperatable.indexVal
          ].isPlacement = true;
          dispatch(setOperatablesData(_operatables));
          dispatch(setResult(true));
          dispatch(common.toggleToastMessage(true));
        }
      }
    };
  },

  // onToastMessage: () => {
  //   return (dispatch, getState) => {
  //     const { getCurrentOperatable: currentOperatable } = getState();
  //     const {
  //       getPlacementZones,
  //       showToastMessage,
  //       getAccept,
  //       getOperatablesData,
  //       getFossil,
  //     } = getState();

  //     const _placementZones = [...getPlacementZones];
  //     const _operatables = { ...getOperatablesData };

  //     const index = _placementZones.findIndex(
  //       (item) => item.accept == getAccept
  //     );

  // if (!showToastMessage) {
  // _placementZones[index] = { ..._placementZones[index] };
  // _placementZones[index].hidden = false;
  // _placementZones[index].active = "";

  // _operatables[getFossil][currentOperatable.indexVal] = {
  //   ..._operatables[getFossil][currentOperatable.indexVal],
  // };
  // _operatables[getFossil][currentOperatable.indexVal].disabled = false;

  // dispatch(setUpdatePlacementZones(_placementZones));
  // dispatch(setOperatablesData(_operatables));
  // helper.runFocus();
  // }
  //   };
  // },

  goToHomePage: () => {
    return (dispatch, getState) => {
      const { getOperatablesData, getFossil, getViewPlayed } = getState();

      dispatch(setActivityEnd());
      dispatch(setCurrentOperatable(null));
      dispatch(setAccept(""));
      dispatch(setResult(false));
      dispatch(setResetPlacementZones(data.placements.map((q) => ({ ...q }))));

      const _operatables = { ...getOperatablesData };

      for (let i in _operatables[getFossil]) {
        _operatables[getFossil][i].disabled = false;
        _operatables[getFossil][i].active = false;
      }

      dispatch(setOperatablesData(_operatables));

      setTimeout(() => {
        dispatch(setFossil(""));
      });

      if (getViewPlayed.length == 3) {
        TincanManager.data.percentage = 100;
        TincanManager.data.completed = true;
        TincanManager.saveTincanData();
      }
    };
  },

  onReset: () => {
    return (dispatch) => {
      dispatch(common.updateResetBtnState(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.togglePopup(1));
      dispatch(thunk.goToHomePage());
      dispatch(common.ariaLiveText(data.resetLiveText));

      TincanManager.data.percentage = 0;
      TincanManager.data.completed = false;
      TincanManager.resetTincanData();
      TincanManager.saveTincanData();
    };
  },
};
