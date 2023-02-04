import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import {
  common,
  setSelectedPhysicalProperty,
  setPriviousSelectedPhysicalProperties,
} from "../actions";

const mapState = (state) => {
  return {
    ariaHidden: !!state.currentPopup.length,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onClick: (e) => {
    dispatch(setSelectedPhysicalProperty(e.target.id));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.onChangeScreen(1));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(setPriviousSelectedPhysicalProperties(e.target.id));
    data.mainScreenButtons.map((i) => {
      if (i.id == e.target.id) {
        i.visited = true;
      }
    });
  },
});

export default connect(mapState, mapDispatch)(Button);
