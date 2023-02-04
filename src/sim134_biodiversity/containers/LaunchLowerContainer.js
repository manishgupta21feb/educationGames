import { connect } from "react-redux";
import LaunchScreen from "../components/launchScreen/lowerSection";

import data from "../data";

const mapState = (state) => {
  return {
    mainScreenData: data.mainScreen.content,
    legendData: data.mainScreen.legends,
  };
};

const matchDispatch = (dispatch) => ({
  onOptionUpdate: (data) => {
    dispatch(currentOptionState(data));
  },
});

export default connect(mapState, matchDispatch)(LaunchScreen);
