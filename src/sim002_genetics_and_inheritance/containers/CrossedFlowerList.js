import CrossedFlowersList from "../components/flower/CrossedFlowersList";
import { connect } from "react-redux";
import {
  setFocusedFlower,
  highlighteFlower,
  setShowGenoList,
} from "../actions/activity";

import {ariaLiveText} from "../actions";

const mapState = (state) => ({
  crossedFlowers: state.crossedFlowers,
  showGenoList: state.showGenoList,
  plantTypes: state.appData.plantTypes,
});

const mapDispatch = (dispatch) => ({
  setFocusedFlower: (value) => {
    dispatch(setFocusedFlower(value));
  },
  onFlowerHighlighte: (value) => {
    dispatch(highlighteFlower(value));
  },
  setShowGenoList: (value) => {
    dispatch(setShowGenoList(value));
  },
  ariaLiveText:(text) => {
    dispatch(ariaLiveText(text))
  }
});

export default connect(mapState, mapDispatch)(CrossedFlowersList);
