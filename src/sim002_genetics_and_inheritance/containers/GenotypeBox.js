import { connect } from "react-redux";
import GenotypeBox from "../components/GenotypeBox";
import { highlighteFlower, toggelGenotype } from "../actions/activity";
import EventManager from "../../app/events/manager";

import data from "../data";

const mapState = (state) => {
  return {
    close: data.close,
    genotypeAnalyzer: data.genotypeAnalyzer,
    plant: state.appData.plantTypes[state.highlightedFlower],
  };
};

const matchDispatch = (dispatch) => ({
  onFlowerHighlighte: (val) => {
    dispatch(highlighteFlower(val));
  },
  onCloseClick: (event) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(toggelGenotype());
  },
});

export default connect(mapState, matchDispatch)(GenotypeBox);
