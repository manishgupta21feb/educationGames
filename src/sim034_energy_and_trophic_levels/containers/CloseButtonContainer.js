import { connect } from "react-redux";
import CloseButton from "../../app/components/Button";
import { resetOrganism } from "../actions";

import data from "../data";

const mapState = (state) => ({
  text: data.buttonClose,
  classes: "hotspot-btn close",
  disabled: !!state.currentPopup.length,
  ariaHidden: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(resetOrganism(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CloseButton);
