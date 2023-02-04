import { connect } from "react-redux";
import CodonChart from "../components/RightView/CodonChart";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    data,
    closeLabel: data.buttonLabels.close,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(CodonChart);
