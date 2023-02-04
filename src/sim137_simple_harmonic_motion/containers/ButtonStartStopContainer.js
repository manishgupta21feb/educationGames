import Button from "../../app/components/Button";
import { connect } from "react-redux";
import data from "../data";
import { common, thunks } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;

  return {
    preventAutoHide,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    text: data.buttonLabels.start,

    classes: `primary static ${state.startStop ? "play" : "pause"}`,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.startStop());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
