import { connect } from "react-redux";
import { thunks, common, startSimulation, toggleQuestion } from "../actions";
import EventManager from "../../app/events/manager";
import Home from "../components/Home";
import data from "../data";

const mapState = (state) => ({
  contOne: data.home.titleOne,
  contTwo: data.home.titleTwo,
  hotspotData: data.home.mainScreenData,
  visitedHotspots: state.visitedHotspots,
  isPopupActive: !!state.currentPopup.length,
  selectedHotspot: state.selectedHotspot,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(toggleQuestion(id));
    dispatch(startSimulation(false));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
    dispatch(thunks.selectHotspot(id));
    dispatch(thunks.generateQuestion());
  },
});

export default connect(mapState, mapDispatch)(Home);
