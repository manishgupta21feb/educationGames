import { connect } from "react-redux";
import Button from "../../app/components/Button";

import { thunks } from "../actions";

const mapState = (state) => ({});
const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectHotspot(e.target.id));
  },
});

export default connect(mapState, matchDispatch)(Button);
