import { connect } from "react-redux";
import RadioButtonArea from "../components/Right/RadioButtonArea";
import { common, thunks, getButtonId } from "../actions";

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => ({
  toggleToastMessage: () => {
    dispatch(common.toggleToastMessage(false));
  },
  submitOption: (id) => {
    dispatch(thunks.submitOption(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButtonArea);
