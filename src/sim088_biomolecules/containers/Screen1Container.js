import { connect } from "react-redux";
import Screen1 from "../components/Top/screens/Screen1.js";

import data from "../data";
import { thunks } from "../actions";
import { getNumbers } from "../helper.js";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    screenData: screenData,
    screenNo: getNumbers(screenData.id),
    currentScreen: screenData.currentScreen,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen1);
