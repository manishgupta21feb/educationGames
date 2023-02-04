import { connect } from "react-redux";
import Screen3 from "../components/Center/screens/Screen3.js";

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
    threenAtomTxt: data.threenAtomTxt,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen3);
