import { connect } from "react-redux";
import Screen11 from "../components/Top/screens/Screen11.js";

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

export default connect(mapState, mapDispatch)(Screen11);
