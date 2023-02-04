import PieChart from "../components/PieChart";
import data from "../data/data.en";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    pieChartData: data.pieChartData[state.selectedTab],
    pieChartDataTwo: data.pieChartDataTwo[state.selectedTab],
    selected: state.selectedTab,
    graphColor: data.graphColor,
    currentSpace: data.currentSpace,
    earlySpace: data.earlySpace,
    currentTab: data.mainScreenData[state.selectedTab],
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(PieChart);
