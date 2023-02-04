import { connect } from "react-redux";
import { common} from "../actions";
import data from "../data";
import Bottom from "../components/Screens/ScreenTwo/Bottom/Bottom";

const mapState = (state) => ({
    isPopupActive:!!state.currentPopup.length,
    activeHotspot:state.fetchHotspots.activeHotspot,
    isScreenToggle:state.isScreenToggle
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Bottom);
