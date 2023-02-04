import { connect } from "react-redux";
import FishChart from '../components/LeftSection/FishChart';
import data from '../data';

const mapState = (state) => ({
  chartData: state.questionNo <2 ? data.chartData[0] : data.chartData[1],
  chartAriaLabel: state.questionNo <2 ? data.chartAriaLabelFirst : data.chartAriaLabelSecond,
  chartLabels: data.chartLabels
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(FishChart);
