import { connect } from "react-redux";
import LeftArea from "../components/Screens/Screen1/Left/ImageArea";

import { thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedMcq: state.fetchMcqs.selectedMcq,
  };
};

const mapDispatch = (dispatch) => ({
  mcq: () => {
    dispatch(thunks.mcq());
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
