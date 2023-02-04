import { connect } from "react-redux";
import Left from "../components/Screens/Screen4/Left";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  hotspots: data.hotspots,
  graphAxes: data.graphAxes,
  dropzones: state.dropzonesScreen4,
  draggables: data.draggables.screen1,
  selectedHotspot: state.selectedHotspot,
  hertzsprungRussellImageAlt:data.hertzsprungRussellImageAlt,
});

const matchDispatch = (dispatch) => ({
  onDrop: (id) => {
    dispatch(thunks.onDropScreen4(id));
  },
});

export default connect(mapState, matchDispatch)(Left);
