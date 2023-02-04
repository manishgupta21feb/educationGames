import { connect } from "react-redux";
import LeftSection from '../components/LeftSection';
import data from '../data';

const mapState = (state) => {
  
  const { questionNo } = state;

  const equationLeft = data.mcqData[questionNo].equation.equationLeft;
  const equationRight = data.mcqData[questionNo].equation.equationRight;

  const equationLeftRead = data.mcqData[questionNo].equationRead.equationLeftRead;
  const equationRightRead = data.mcqData[questionNo].equationRead.equationRightRead;

  return {
    equationLeft: equationLeft,
    equationRight: equationRight,
    leftEquationHeading: data.leftEquationHeading,
    reactantsClass: data.mcqData[questionNo].reactantsClass,
    reactantsAlt: data.mcqData[questionNo].reactantsAlt,
    equationLeftRead: equationLeftRead,
    equationRightRead: equationRightRead
  }
}


const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftSection);
