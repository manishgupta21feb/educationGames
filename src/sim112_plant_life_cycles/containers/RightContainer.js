import RightArea from "../components/ViewArea/RightArea";
import { connect } from "react-redux";
import data from "../data/data.en";

const mapState = (state) =>
  // console.log(state.secondScreenValue, "((((((("),
  ({
    mainHeading: state.secondScreenValue
      ? data.draggableItemsScreen2[state.scenerioVisitedValue]
          .screenHeading2
      : data.draggableItemsScreen1[state.scenerioVisitedValue]
      .screenHeading,
    matchedItems: state.matchedItems,
    isPopupActive: !!state.currentPopup.length,
  });
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightArea);
