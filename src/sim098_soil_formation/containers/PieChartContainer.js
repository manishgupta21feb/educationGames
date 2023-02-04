import PieChart from "../components/Main/pieChart";
import data from "../data";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    pieChartData: data.pieChartData[state.selectedTab],
    selected: state.selectedTab,
    graphColor: data.graphColor,
    currentTab: data.mainScreenData[state.selectedTab],
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(PieChart);
