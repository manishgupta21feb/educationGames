import { connect } from "react-redux";
import LiveText from "../../app/components/LiveText";
import data from "../data";
const mapState = (state) => {
    const ariaText=state.selectedDraggable+" "+ data.screen2.aria
  return {
    message:data.screen2.aria
  };
};

const matchDispatch = (dispatch) => ({

});

export default connect(mapState, matchDispatch)(LiveText);
