import { connect } from "react-redux";
import data from "../data";
import { thunks } from "../actions";
import Right from "../components/Right";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    buttonLabels: data.buttonLabels,
    departmentData: state.selectedDepartment,
    globalDeptText: data.globalDeptText
  };
};

const mapDispatch = (dispatch) => ({
  onBackClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.onBackClick());
  },
});

export default connect(mapState, mapDispatch)(Right);
