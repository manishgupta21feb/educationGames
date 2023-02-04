import { connect } from "react-redux";
import { ariaLiveText } from "../actions";
import CarbonDataTable from "../components/CarbonDataTable";
import { thunk } from "../actions/activity";
import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    buttonLabels: data.buttonLabels,
    labels: data.labels
  };
};

const mapDispatch = (dispatch) => ({
  ariaLiveText: (val) => {
    dispatch(ariaLiveText(val));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
  },
  onCalculatedClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.onCalculatedClick());
  },
});

export default connect(mapState, mapDispatch)(CarbonDataTable);
