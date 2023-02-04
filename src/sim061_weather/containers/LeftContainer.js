import { connect } from "react-redux";
import { common } from "../actions";
import LeftView from "../components/ViewArea/LeftArea/LeftView";
import EventManager from "../../app/events/manager";
import data from "../data";
import { clickedValue, thunks, showFinishButton } from "../actions";
const mapState = (state) => {
  return {
    buttonsInfo: state.buttonLabels,
    buttonPressed: state.clickedValue,
    buttonList: state.showFinishButton,
    altText: data.imageAltText,
    isPopupActive: !!state.currentPopup.length,
  };
};
const mapDispatch = (dispatch) => ({
  isClick: (value) => {
    dispatch(clickedValue(value));
    dispatch(common.updateResetBtnState(false));
  },
  onClickValue: (value) => {
    dispatch(thunks.cityBackButton(value));
  },
});
export default connect(mapState, mapDispatch)(LeftView);
