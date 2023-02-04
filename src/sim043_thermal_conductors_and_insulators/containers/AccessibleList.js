import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import data from "../data";
import { 
  updateAccessibleList, 
  thunks, 
} from "../actions";

const mapState = (state) => ({
  list: data.dropzone,
  opened: state.accessibleListVisible,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(thunks.updateAccessiableValue(id));
  },
  closeList: () => {
    dispatch(thunks.setDropzoneLiveText());
    dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
