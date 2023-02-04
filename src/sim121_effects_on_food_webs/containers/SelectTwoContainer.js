import { connect } from "react-redux";
import Select from "../../app/components/Select";

import data from "../data";
import { setDropDownTwo } from "../actions";

const mapState = (state) => {
  const heading = data.dropDown2[state.setQuestionValue];
  return {
    heading,
    
    options: data.dropDown,
    value: state.dropDownTwo,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setDropDownTwo({ ...item }));
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
