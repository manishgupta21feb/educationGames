import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    label: data.buttonLabels.submitAnswer,
    classes: "primary",
    text: data.buttonLabels.submitAnswer,
    disabled: state.disableSubmit,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.submitAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
