import LeftArea from "../components/ViewArea/LeftArea";
import { connect } from "react-redux";
import data from "../data/data.en";

const mapState = (state) => {
  const lastElement = state.matchedItems.length - 1;
  return {
    secondScreen: state.secondScreenValue,
    isPopupActive: !!state.currentPopup.length,
    imageAltText:
      !state.matchedItems.length > 0
        ? state.secondScreenValue
          ? data.imageAltScreen2
          : data.imageAltScreen1
        : state.matchedItems[lastElement].imageAltText,
  };
};
const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftArea);
