import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import {
  accessibleListVisible,
  thunks,
  updateAccessibleList,
} from "../actions";
import data from "../data/data.en";

const mapState = (state) => {
  return {
    list: state.setDroppable.filter((d) => {
      return d.id == state.selectedQuestion.id;
    })[0]?.dropZone,

    opened: state.accessibleListVisible,
    classes: "accessible-container",
  };
};

const matchDispatch = (dispatch) => ({
  closeList: () => {
    setTimeout(() => {
      dispatch(updateAccessibleList(false));
    }, 20);
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
