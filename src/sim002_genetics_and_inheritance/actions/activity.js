import { ariaLiveText } from ".";
import data from "../data";
import EventManager from "../../app/events/manager";

export const PERFORM_CROSS = "PERFORM_CROSS";
export const RESET = "RESET";
export const SET_FLOWER_COUNT = "SET_FLOWER_COUNT";
export const SELECT_FLOWER = "SELECT_FLOWER";
export const TOGGEL_GENOTYPE = "TOGGEL_GENOTYPE";
export const HIGHLIGHTE_FLOWER = "HIGHLIGHTE_FLOWER";
export const SET_SELECTED_FLOWER = "SET_SELECTED_FLOWER";
export const SET_SHOW_GENO_LIST = "SET_SHOW_GENO_LIST";
export const SET_FOCUSED_FLOWER = "SET_FOCUSED_FLOWER";
export const HIDE_GENOTYPE = "HIDE_GENOTYPE";
export const SET_SHOW_LIMIT_WARNING = "SET_SHOW_LIMIT_WARNING";
export const SET_AUDIO_STOPPED = "SET_AUDIO_STOPPED";
const MAX_FLOWER_COUNT = 36;
const MAX_GEN_COUNT = 2;

export const cross = (data) => ({ type: PERFORM_CROSS, data });

export const reset = () => ({ type: RESET });

export const toggelGenotype = () => ({ type: TOGGEL_GENOTYPE });

export const hideGenotype = () => ({ type: HIDE_GENOTYPE });

export const highlighteFlower = (val) => ({ type: HIGHLIGHTE_FLOWER, val });

export const setSelectedFlowers = (val) => ({ type: SET_SELECTED_FLOWER, val });

export const setShowGenoList = (value) => ({ type: SET_SHOW_GENO_LIST, value });

export const setFocusedFlower = (value) => ({
  type: SET_FOCUSED_FLOWER,
  value,
});

export const setShowLimitWarning = (value) => ({
  type: SET_SHOW_LIMIT_WARNING,
  value,
});

export const setFlowerCount = (count) => ({
  type: SET_FLOWER_COUNT,
  count,
});

export const setAudioStopped = (stopped) => ({
  stopped,
  type: SET_AUDIO_STOPPED,
});

export const thunk = {
  performCross: () => {
    return (dispatch, getState) => {
      if (
        TincanManager.data.completed ||
        TincanManager.data.percentage == 100
      ) {
        TincanManager.resetTincanData();
        TincanManager.saveTincanData();
      }
      const val = getState().selectedFlowers;
      let values = [val[0].type, val[1].type].sort();
      const crossCombinatios = getState().appData.crossCombinatios;
      //Here we comparing predefine cross array with requested cross array
      const groups = [val[0].group, val[1].group].sort();
      let gen = 0;
      const res = crossCombinatios.filter((c) => {
        if (groups.includes(c.crossType)) {
          gen = gen > c.generation ? gen : c.generation;
        }
        return (
          values.length === c.cross.length &&
          values.every((v, i) => v === c.cross[i])
        );
      });
      dispatch(setSelectedFlowers([]));
      dispatch(hideGenotype());
      const count = getState().flowerCount;
      if (!res.length) {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
        dispatch(setShowLimitWarning(true));
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 200);
      } else {
        const totalCount = res[0].result.length + count;
        if (totalCount > MAX_FLOWER_COUNT || gen > MAX_GEN_COUNT) {
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
          dispatch(setShowLimitWarning(true));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 200);
          return;
        }

        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(
          ariaLiveText(
            data.crossedLiveText.replace("-1-", res[0].result.length)
          )
        );
        setTimeout(() => {
          dispatch(ariaLiveText(""));
        }, 300);
        const final = { [res[0].crossType]: [...res[0].result] };
        dispatch(setFlowerCount(totalCount));
        dispatch(cross(final));
      }
    };
  },
  flowerSelection: (check, flower) => {
    return (dispatch, getState) => {
      const selectedFlowers = getState().selectedFlowers;

      EventManager.broadcast("PRIMARY_CLICK");

      if (check) {
        const filteredFlower = selectedFlowers.filter(
          (sf) => sf.unique != flower.unique
        );
        dispatch(setSelectedFlowers(filteredFlower));
      } else {
        if (selectedFlowers.length === 2) {
          dispatch(setSelectedFlowers([selectedFlowers[0], flower]));
        } else {
          dispatch(setSelectedFlowers([...selectedFlowers, flower]));
        }
      }
    };
  },
  reset: () => (dispatch) => {
    dispatch(reset());
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
  },
};
