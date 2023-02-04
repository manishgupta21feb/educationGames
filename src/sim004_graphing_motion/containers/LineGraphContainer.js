import { connect } from "react-redux";
import LineGraph from "../components/activity/Graph";

import data from "../data";

const mapStateToProps = (state) => ({
  animationState: state.animationState,
  graphValue: state.graphValue,
  graphValueforTime: state.graphValueforTime,
  carCurrentPosition: state.carCurrentPosition,
  data: data,
  time: state.selectedTime,
  tripCount: state.tripCount,
  pointerImages: data.pointerImages,
  chartDataSetText: data.chartDataSetText,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
