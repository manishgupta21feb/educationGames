import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import { common,setLayout} from "../actions";
import data from "../data";

const mapState = (state) => ({
  id: "3",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
    TincanManager.data.percentage = 66.7;
    TincanManager.saveTincanData();
    setTimeout(() =>{dispatch(common.setResetFocusState(true))},100);
    dispatch(setLayout("full"));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
