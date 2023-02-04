import { connect } from "react-redux";
import Droppable from "../components/activity/Droppable";

import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    dropElement: state.dropElement,
    accessibleListVisible: state.accessibleListVisible,
  };
};

export default connect(mapState)(Droppable);
