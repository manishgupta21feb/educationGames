import DescriptionBox from "../components/ViewArea/LeftArea/DescriptionBox";
import { connect } from "react-redux";
import data from "../data";
import { descriptionShow, showResponse } from "../actions";

const mapState = (state) => ({
  descriptionBoxContent: !state.secondScreen
    ? data.descriptionBoxContentScreen1
    : data.descriptionBoxContentScreen2,
  buttonValue: data.radioButtons,
  isPopupActive: !!state.currentPopup.length,
});
const mapDispatch = (dispatch) => ({
  closePopUp: () => {
    console.log("true");
    dispatch(descriptionShow(false));
    dispatch(showResponse(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DescriptionBox);
