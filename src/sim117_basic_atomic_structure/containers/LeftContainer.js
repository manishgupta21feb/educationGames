import { connect } from "react-redux";
import Left from "../components/LeftRight/Left/index";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    selectedQuestion: state.selectedQuestion,
    orbitsAlt: data.orbitsAlt,
    data: data,
    images: data.images,
    orbitThreeNoBorder: state.orbitThreeNoBorder,
    orbitTwoNoBorder: state.orbitTwoNoBorder,
    orbitOneNoBorder: state.orbitOneNoBorder,
    numberOfProtons: state.numberOfProtons,
    numberOfValance: state.numberOfValance,
    numberOfNeutrons: state.numberOfNeutrons,
    orbitThreeCount: state.orbitThreeCount,
    orbitTwoCount: state.orbitTwoCount,
    orbitOneCount: state.orbitOneCount,
    showNucleus: state.showNucleus,
  };
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Left);
