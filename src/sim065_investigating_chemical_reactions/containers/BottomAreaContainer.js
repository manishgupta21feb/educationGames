import { connect } from "react-redux";
import BottomArea from "../components/activity/BottomArea/BottomArea";
import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  selectedOptions: state.selectedOptions,
  checkboxes: data.equationOptions,
  data: data,
  returnAnswer: state.submittedAnswer,
  isNextButtonEnable: state.isNextButtonEnable,
  question: state.selectedQuestion,
});

const mapDispatch = (dispatch) => ({
  onStartActivity: () => dispatch(thunks.setQuestion()),
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  toggleOption: (id) => {
    dispatch(thunks.toggleOption(id));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(BottomArea);
