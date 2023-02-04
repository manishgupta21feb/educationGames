import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDropDownThree } from "../actions";

const mapState = (state) => {
  const heading = data.dropDown3[state.setQuestionValue];
  return {
   heading,
    options: data.dropDown,
    value: state.dropDownThree,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setDropDownThree({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
