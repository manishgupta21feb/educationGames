import RightView from "../components/RightView";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    // From Data
    question:
      state.getDndScreenFor == "cricket"
        ? data.istructionText[2]
        : data.istructionText[1],
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RightView);
