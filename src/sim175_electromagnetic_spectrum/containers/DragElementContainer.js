import { connect } from "react-redux";
import DragElement from "../components/activity/DragElement";

import data from "../data";

const mapState = (state) => {
  const { selectedQuestion } = state;
  let listItems;
  if (selectedQuestion == 1) {
    listItems = data.wavelengthList.listitems4;
  } else if (selectedQuestion == 2) {
    listItems = data.frequencyList.listitems4;
  } else if (selectedQuestion == 3) {
    listItems = data.wavelengthList.listitems3;
  } else {
    listItems = data.frequencyList.listitems3;
  }
  return {
    elementDescriptionAltText: data.elementDescription,
    selectedQuestion: state.selectedQuestion,
    showAnimation: state.showAnimation,
    droppedItems: state.droppedItems,
    popupActive: !!state.currentPopup.length,
    listItemsLength: listItems.length,
  };
};

export default connect(mapState)(DragElement);
