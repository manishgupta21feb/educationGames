import data from "../data";
import { connect } from "react-redux";
import FirstScreen from "../components/activity/FirstScreen";

const mapState = (state) => {
  return {
    altimage:
      state.matchedItems.length > 0
        ? state.matchedItems[state.matchedItems.length - 1].imageAltText
        : data.mainImgAlt,
    mainHeading: data.mainHeading,
    dndShow: state.dndShow,
    matchedItems: state.matchedItems,
    descriptionShow: state.descriptionBoxShow,
    matchedId:
      state.matchedItems.length > 0
        ? state.matchedItems[state.matchedItems.length - 1].id
        : "default-image",

    clickcountvalue: state.clickCount,
    getHeading: data.dragAndDropHeading[state.getDNDHeading].headingText,
  };
};

export default connect(mapState)(FirstScreen);