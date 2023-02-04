import DndTable from "../components/FullView/DndTable";
import { connect } from "react-redux";

import { common } from "../actions";
import simData from "../data";

const mapState = (state) => {
  return {
    testBtnText: simData.buttonLabels.finish,
    dndData: simData.dndData,
    dragData: state.getDragData,
    emptyShell: simData.emptyShell,
  };
};

const mapDispatch = (dispatch) => ({
  onAnswerSubmit: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("COMPLETION_SCREEN");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapState, mapDispatch)(DndTable);
