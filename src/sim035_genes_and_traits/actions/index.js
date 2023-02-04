import * as actions from "../../app/actions";

export const common = { ...actions };
const { updateResetBtnState } = common;

export const ALL_SCREENS = "ALL_SCREENS";
export const NEXT_BUTTON = "NEXT_BUTTON";
export const HOTSPOTS_DATA = "HOTSPOTS_DATA";
export const CURRENT_TRAIT = "CURRENT_TRAIT";
export const RESET_GAME_GT = "RESET_GAME_GT";
export const GENE_FUNCTIONS = "GENE_FUNCTIONS";
export const VISITED_HOTSPOTS = "VISITED_HOTSPOTS";
export const HOTSPOT_VISIT_COUNT = "HOTSPOT_VISIT_COUNT";

export const updateScreensData = (val) => ({
  val,
  type: ALL_SCREENS,
});

export const updateGeneFunctions = (val) => ({
  val,
  type: GENE_FUNCTIONS,
});

export const updateHotspotData = (val) => ({
  val,
  type: HOTSPOTS_DATA,
});

export const updateNextBtn = (val) => ({
  val,
  type: NEXT_BUTTON,
});

export const updateHotspotVisitCount = (val) => ({
  val,
  type: HOTSPOT_VISIT_COUNT,
});

export const updateVisitedHotspots = (val) => ({
  val,
  type: VISITED_HOTSPOTS,
});

export const updateCurrentTrait = (val) => ({
  val,
  type: CURRENT_TRAIT,
});

export const updateResetGame = (val) => ({
  val,
  type: RESET_GAME_GT,
});

export const thunk = {
  clickHotspot: (index) => {
    return (dispatch, getState) => {
      const { hotspots, visitedHotspots, hotspotVisitCount, resetBtnState } =
        getState();
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
      const _hotspots = hotspots.map((h) => ({ ...h }));
      _hotspots[index].active = true;
      if (visitedHotspots !== -1) {
        _hotspots[visitedHotspots].visited = true;
      }
      dispatch(updateHotspotData([..._hotspots]));
      dispatch(updateVisitedHotspots(index));
      if (_hotspots[index].visited !== true) {
        dispatch(updateHotspotVisitCount(hotspotVisitCount + 1));
        TincanManager.data.percentage = ((hotspotVisitCount + 1) / 7) * 100;
        TincanManager.saveTincanData();
      }
      if (getState().hotspotVisitCount == 4) {
        dispatch(updateNextBtn(true));
      }
    };
  },

  resetGame: () => {
    return (dispatch, getState) => {
      const { hotspots } = getState();
      const _hotspots = hotspots.map((h) => ({ ...h }));
      for (let keys in _hotspots) {
        _hotspots[keys].visited = false;
        _hotspots[keys].active = false;
      }
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      dispatch(updateHotspotData([..._hotspots]));
      dispatch(updateHotspotVisitCount(0));
      dispatch(updateVisitedHotspots(-1));
      dispatch(updateCurrentTrait(0));
      dispatch(updateNextBtn(false));
      dispatch(updateResetBtnState(true));
    };
  },
};
