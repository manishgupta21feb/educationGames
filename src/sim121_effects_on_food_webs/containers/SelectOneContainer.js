import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDropDownOne } from "../actions";

const mapState = (state) => {
  const heading = data.dropDown1[state.setQuestionValue];
  return {
     heading,
    options: data.dropDown,
    value: state.dropDownOne,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setDropDownOne({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
