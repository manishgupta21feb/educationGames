import Overfishing from '../components/TopSection/OverFishing';
import { connect } from "react-redux";
import data from '../data';

const mapState = (state) => ({
  overfishingAlt: data.overfishingAlt,
  chartAriaLabel: data.chartAriaLabel
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Overfishing);
