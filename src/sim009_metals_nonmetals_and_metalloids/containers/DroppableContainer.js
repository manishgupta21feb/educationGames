import { connect } from "react-redux";
import Droppables from "../components/Screens/Screen0/Droppables/Drop";

import { thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatch = (dispatch) => ({
  onDrop: (item) => {
    dispatch(thunks.onDrop(item));
  },
});

export default connect(mapState, mapDispatch)(Droppables);
