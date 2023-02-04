import DescriptionBox from "../components/activity/FirstScreen/DescriptionBox";
import { connect } from "react-redux";
import data from "../data";
import { descriptionShow, thunks, common } from "../actions";

const mapState = (state) => ({
  descriptionBoxContent:
    state.matchedItems.length > 0
      ? state.matchedItems[state.matchedItems.length - 1].popupMessage
      : "",
  buttonValue: data.buttonLabels.close,
  isPopupActive: !!state.currentPopup.length,
});
const mapDispatch = (dispatch) => ({
  closePopUp: () => {
    dispatch(thunks.nextQuestion());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DescriptionBox);
