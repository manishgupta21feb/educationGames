import { connect } from "react-redux";
import RightArea from "../components/RightLeft/RightArea";
import data from "../data/index"
import {common,setPreviousSound} from "../actions"

const mapState = (state) => {
 
   return {
      introHeading: data.draggableData.introHeading,
      text: data.buttonLabels.next,
      draggableItems: state.draggableItems,
      isPopupActive: !!state.currentPopup.length,
   }

};

const mapDispatch = (dispatch) => ({
   togglePopup: () => {
      dispatch(common.toggleToastMessage(false));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(common.togglePopup(3))
      setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
      }, 300);
      dispatch(setPreviousSound("SECONDARY_CLICK"))
    },
  
  
});

export default connect(mapState, mapDispatch)(RightArea);
