import { connect } from "react-redux";
import { setPlot } from "../actions";
import Graph from "../components/ViewArea/TwoGraphAnimation/index";
import data from "../data";

const mapState = (state) => {
  return {
    dataItem: data.graphData[0],
    graphLabel: data.graphData[0].graphlabel,
    timeVal: state.selectDistance,
    distanceVal: state.selectTime,
    plot: state.plot,
    isPopupActive: !!state.currentPopup.length,
    dataVal: data,
    selectDistance: state.selectDistance,
    selectTime: state.selectTime,
  };
};

const mapDispatch = (dispatch) => ({
  doPlotFalse: () => {
    dispatch(setPlot(false));
  },
});

export default connect(mapState, mapDispatch)(Graph);
