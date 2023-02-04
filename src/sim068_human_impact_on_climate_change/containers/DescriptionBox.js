import DescriptionBox from "../components/DescriptionBox";
import { connect } from "react-redux";

import { common, descriptionShow, showResponse } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    closeLabel: data.descriptionBoxContent[state.selectedTimeline].closeButton,
    isPopupActive: !!state.currentPopup.length,
    helpHintContent: state.showResponse
      ? data.descriptionBoxContent[state.selectedTimeline].buttonContent
      : data.descriptionBoxContent[state.selectedTimeline].content,
    response:
      data.descriptionBoxContent[state.selectedTimeline].response &&
      !state.showResponse,
    buttonText: data.buttonName,
    showResponse: state.showResponse,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(descriptionShow(false));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
  },
  responseClick: () => {
    dispatch(showResponse(true));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DescriptionBox);
