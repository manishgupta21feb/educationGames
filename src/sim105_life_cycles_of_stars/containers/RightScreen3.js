import { connect } from "react-redux";
import Right from "../components/Screens/Screen3/Right";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  hotspots: data.hotspots,
  selectedHotspot: state.selectedHotspot,
  ostInstruction: data.screen3RightSectionOST,
  showContinueButton: state.visitedHotspots.length == data.hotspots.length,
});

const matchDispatch = (dispatch) => ({
  selectHotspot: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.selectHotspot(id));
  },
});

export default connect(mapState, matchDispatch)(Right);
