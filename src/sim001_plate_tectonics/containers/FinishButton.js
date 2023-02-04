import { connect } from "react-redux";
import Button from "../../app/components/Button";

// import data from "../data";
import TextData from "../config/index";
import { common } from "../actions";

const mapState = (state) => ({
  text: TextData.finish,
  isPopupActive: !!state.currentPopup.length,
  classes: "toast-secondary-button positive",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, matchDispatch)(Button);
