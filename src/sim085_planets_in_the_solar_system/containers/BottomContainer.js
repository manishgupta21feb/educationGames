import { connect } from "react-redux";
import BottomArea from "../components/ViewArea/BottomArea";
import data from "../data";
import { thunks } from "../actions";
const mapState = (state) => {
  const clueHeading = data.clueCardHeading
    .replace("-1-", state.clueCardCount)
    .replace("-2-", data.clueCards.length);
  return {
    isPopupActive: !!state.currentPopup.length,
    headingData: data.mainHeading,
    clueCardType: state.updateClueCardData[state.clueCardIndex].clue,
    planetName: data.planetName,
    clickButton: state.clickedButtonValue,
    buttonList: state.showFinishButton,
    clueCardHeading: clueHeading,
    planetHeading: data.planetHeading,
  };
};
const mapDispatch = (dispatch) => ({
  clickedValue: (value) => {
    dispatch(thunks.onClickValue(value));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});
export default connect(mapState, mapDispatch)(BottomArea);
