import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const disable =
    (state.oxygens.length ||
      state.oxygenProduct.length ||
      state.oxygenProductTwo.length ||
      state.hydrogens.length ||
      state.hydrogenProduct.length ||
      state.carbons.length ||
      state.carbonProduct.length) > 0;

  return {
    text: data.check,
    classes: "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: disable ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.verifyItem());
  },
});

export default connect(mapState, matchDispatch)(Button);
