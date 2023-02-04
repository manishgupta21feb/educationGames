import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RightSection from "../components/BottomArea";
import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  hotspots: state.hotspots,
  matchedItems: state.matchedItems,
  isPopupOpen: !!state.currentPopup.length,
  headingOne: data.headingOne,
  headingTwo: data.headingTwo,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.updateHotspotType());
  },
});

export default connect(mapState, matchDispatch)(RightSection);
