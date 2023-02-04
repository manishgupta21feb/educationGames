import { connect } from "react-redux";
import Left from "../components/Main/Left";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  resources: data.resources,
  mainImageAlt: data.mainImageAlt,
  visitedResources: state.visitedResources,
  selectedResource: state.selectedResource,
  isPopupActive: !!state.currentPopup.length,
  mainImageAltDynamic: data.mainImageAltDynamic,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectResource(id));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(state));
  },
});

export default connect(mapState, matchDispatch)(Left);
