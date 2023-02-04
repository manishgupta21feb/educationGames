import { connect } from "react-redux";
import Screen3Top from '../components/activity/TopBottomScreen/TopSection/Screen3Top';
import data from '../data';

const mapState = (state) => ({
  screen3InstructionText: data.screen3InstructionText,
  screen3Strand1Data: data.screen3Strand1Data,
  screen3Strand2Data: data.screen3Strand2Data,
  imgAltTexts: data.imgAltTexts 
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Screen3Top);
