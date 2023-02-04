import { connect } from "react-redux";
import Select from "../../app/components/Select";
import data from "../data";
import { common,setSelectValue } from "../actions";
const mapState = (state) => {
   return {
    options:state.getDropdownList,
    value: state.getValueDropdown,
    disabled: state.submitAnswer,
    isPopupActive: !!state.currentPopup.length,
    heading: data.dropdownHeading,
    classes:`dropdown ${!state.submitAnswer && state.answerSubmitted ?"incorrect":""}`
  };
};

const matchDispatch = (dispatch) => {
  return {
    onChange: (item) => {
      dispatch(setSelectValue({ ...item }));
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("SECONDARY_CLICK");
    },
  };
};

export default connect(mapState, matchDispatch)(Select);
