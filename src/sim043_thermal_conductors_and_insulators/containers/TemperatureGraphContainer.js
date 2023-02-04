import TemperatureGraph from '../components/LeftSection/TemperatureGraph';
import { connect } from "react-redux";
import data from '../data';

const mapState = (state) => {

  const { graphData } = data;

  const graphDataValue = graphData
    .filter((item) => item.label == state.selectedGlass.id)
    .map((m) => ({
      data: m.data
    }));

  return {
    graphData: state.isDropped ? graphDataValue[0].data : null,
    isDropped: state.isDropped,
    isNext: state.isNext,
    resetBtnState: state.resetBtnState,
    graphLabels: data.graphLabels,
    chartAriaLabel: data.chartAriaLabel,
    selectedGlass: state.selectedGlass
  }
}

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(TemperatureGraph);
