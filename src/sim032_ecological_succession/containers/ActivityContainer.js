import Activity from "../components/activity";
import { connect } from "react-redux";
import data from "../data"
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    startUpDialogBoxText: data.StartUpInfo.content,
    infoDialodBoxText: data.info.content,
    resetDialogBoxText: data.reset.content,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
});

export default connect(mapState, mapDispatch)(Activity);
