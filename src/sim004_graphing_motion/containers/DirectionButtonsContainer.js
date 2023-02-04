import { connect } from "react-redux";
import { selectDirection } from "../actions/activity";
import Button from "../../app/components/Button";

const mapState = (state) => ({
  selectedOption: state.selectedDirection,
  disabled: state.animationState || state.tripCount > 5,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(selectDirection(id));
  },
});

export default connect(mapState, matchDispatch)(Button);
