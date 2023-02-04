import Activity from "../components/activity";
import { connect } from "react-redux";

import data from "../data";
import { common, answerSubmitted } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    currentWindow: state.currentWindow,
    answerSubmit: state.answerSubmitted,
    quesState: state.getAnswer,
    isToastActive: state.showToastMessage,
    imagesArray: data.imagesArr,
    data,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
  },
  onSubmitUpdate: (data) => {
    dispatch(answerSubmitted(data));
  },
});

export default connect(mapState, mapDispatch)(Activity);
