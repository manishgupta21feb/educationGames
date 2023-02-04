import { connect } from "react-redux";
import DepartmentScreen from "../components/Screens/DepartmentScreen";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    departmentData: state.selectedDepartment,
  };
};

const mapDispatch = (dispatch) => ({
  focusToReset: () => {
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 200);
  },
  playStateToggled: (text) => {
    dispatch(common.ariaLiveText(text));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 150);
  },
});

export default connect(mapState, mapDispatch)(DepartmentScreen);
