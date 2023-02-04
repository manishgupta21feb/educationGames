import { connect } from "react-redux";
import ActivityArea from "../components/ActivityArea";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  optionItems: state.optionItems,
  mainImageAlt: data.mainImageAlt,
  selectedItems: state.selectedItems,
  questionAnswered: state.questionAnswered,
  isPopupActive: !!state.currentPopup.length,
  selectedSubquestion: state.selectedSubquestion,
});

const matchDispatch = (dispatch) => ({
  onItemClick: (e) => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 50);
    dispatch(thunks.toggleSelectedItem(e.target.id));
  },
});

export default connect(mapState, matchDispatch)(ActivityArea);
