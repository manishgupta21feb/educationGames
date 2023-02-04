import { connect } from "react-redux";
import Bottom from "../components/Bottom/index";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    screenData: screenData,
    totalScreen: screenData && screenData.totalScreen,
  };
};

const mapDispatch = (dispatch) => ({
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
});

export default connect(mapState, mapDispatch)(Bottom);
