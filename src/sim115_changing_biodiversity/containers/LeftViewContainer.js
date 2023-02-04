import LeftView from "../components/LeftView";
import { connect } from "react-redux";
import { thunk, common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    observationMotive: data.observationMotive,
    names: data.names,
    ecosystemData: data.ecosystemScreen[state.getEcosystemScreen],
    ecosystems: data.ecosystem,

    //----> From State
    screenType: state.getEcosystemScreen,
    nextSection: state.nextSection,
    hotspotData: data.hotspotData,
    clickedButtonValue: state.clickedButtonValue,
    disabledButton: state.disabledButton,
    correctOptions: state.correctOptions,
    isPopupActive: !!state.currentPopup.length,
    triangles: data.triangles,
  };
};

const mapDispatch = (dispatch) => ({
  hotspotClick: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    dispatch(thunk.onButtonClick(value));
  },
});

export default connect(mapState, mapDispatch)(LeftView);
