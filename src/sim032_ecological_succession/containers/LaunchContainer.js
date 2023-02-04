import { connect } from "react-redux";
import data from "../data"
import Launch from "../components/Launch";
import { common } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    infoImageAltText: data.infoImageAltText,
    initialTexts: data.initialTexts,
    launchScreenButtons: data.launchScreenButtons
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Launch);
