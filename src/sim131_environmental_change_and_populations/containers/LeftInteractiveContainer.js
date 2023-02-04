import { connect } from "react-redux";
import LeftInteractive from '../components/LeftSection/LeftInteractive';
import data from '../data';

const mapState = (state) => ({
  questionNo: state.questionNo,
  leftFirstImgAlt: data.leftFirstImgAlt,
  leftSecondImgAlt: data.leftSecondImgAlt,
  fishChartTitleFirst: data.fishChartTitleFirst,
  fishChartTitleSecond: data.fishChartTitleSecond,
  fishChartInfo: data.fishChartInfo,
  fishChartInfoLabel: data.fishChartInfoLabel
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftInteractive);
