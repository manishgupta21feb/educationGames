import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import { setAccessibleListVisible, thunk ,currentDropZoneIndex} from "../actions";

const mapState = (state) => {
  return {
    list: state.questionsList,
    opened: state.isAccessibleListVisible,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (source) => {
    dispatch(thunk.onDropFull(source.answerId));
  },
  closeList: () => {
    dispatch(setAccessibleListVisible(false));

  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
