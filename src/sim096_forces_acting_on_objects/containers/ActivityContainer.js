import Activity from "../components/activity";
import { connect } from "react-redux";

import simData from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentSection: state.getCurrentSection,
    parentId:
      state.getCurrentFriction == ""
        ? "mainContianer"
        : simData[state.getCurrentSection][state.getCurrentFriction][
            state.getCurrentLevel
          ].id,
    simData,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(Activity);
