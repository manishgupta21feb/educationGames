import { connect } from "react-redux";
import LineGraph from "../components/graph/lineGraph";

import data from "../data/index";

const mapStateToProps = (state) => {
  return {
    animationState: state.animationState,
    graphValue: state.graphValue,
    graphValueforTime: state.graphValueforTime,
    carCurrentPosition: state.carCurrentPosition,
    data: data,
    time: state.selectedTime,
    tripCount: state.tripCount,
    pointerImages: data.pointerImages,
    chartDataSetText: data.chartDataSetText,
    legendArea: data.legendArea,
    icon: data.icon,
    lineChartColor: data.lineChartColor,
    selectedTab: state.selectedTab,
    globalData: data,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
