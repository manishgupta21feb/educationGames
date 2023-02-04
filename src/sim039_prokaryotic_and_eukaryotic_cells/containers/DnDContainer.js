import { connect } from "react-redux";
import DnDContainer from "../../app/components/DnD/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  classes: data.stage1.dropZones,
});

const matchDispatch = (dispatch) => ({
  onClick: (item) => {
    dispatch(thunks.onCorrectDrop({ ...item }));
  },
});

export default connect(mapState, matchDispatch)(DnDContainer);
