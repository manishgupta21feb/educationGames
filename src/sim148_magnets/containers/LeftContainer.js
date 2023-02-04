import LeftArea from "../components/ViewArea/LeftArea";
import { connect } from "react-redux";
import { descriptionShow, common } from "../actions";
import data from "../data";

const mapState = (state) => ({
  description: state.descriptionBoxShow,
  mcqShow: state.mcqShow,
  secondScreen: state.secondScreen,
  sliderValue: state.selectedTimeline,
  buttonLabel: state.secondScreen ? data.buttonLabel2 : data.buttonLabel1,
  imageAltText:data.imageAltText,
  isPopupActive: !!state.currentPopup.length,
});
const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(descriptionShow(true));
    dispatch(common.updateResetBtnState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
