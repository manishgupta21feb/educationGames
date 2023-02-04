import Button from "../../app/components/Button";
import { connect } from "react-redux";
import data from "../data";
import { common, setDegree, setContinueButton } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;

  return {
    preventAutoHide,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,

    text: data.setDegreeButton,
    classes: "primary",
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setDegree(false));
    dispatch(setContinueButton(true));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
