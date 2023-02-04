import { connect } from "react-redux";
import Left from "../components/Screens/Screen3/Left";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  hertzsprungRussellImageAlt:data.hertzsprungRussellImageAlt,
  hotspots: data.hotspots,
  graphAxes: data.graphAxes,
  selectedHotspot: state.selectedHotspot,
});

const matchDispatch = (dispatch) => ({
  selectHotspot: (id) => {
  
    dispatch(thunks.selectHotspot(id));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Left);
