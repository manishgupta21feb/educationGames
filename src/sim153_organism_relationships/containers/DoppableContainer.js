import Droppable from "../components/activity/FirstScreen/Droppable";
import { connect } from "react-redux";

import { thunks } from "../actions";


const mapState = (state) => ({
  matchedItems: state.matchedItems,
  droppableItems: state.dropzones,
  isPopupActive: !!state.currentPopup.length,
  clickcountvalue:state.clickCount,
});
const mapDispatch = (dispatch) => ({
  onDrop: (value) => {
  
    dispatch(thunks.dropCheck(value));
   
  },
});

export default connect(mapState, mapDispatch)(Droppable);
