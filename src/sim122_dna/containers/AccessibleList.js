import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import {
  updateAccessibleList,
  thunks,
} from "../actions";

const mapState = (state) => ({
  list: state.screenStatus == 4 ? state.screen4Dropzones : state.screen6Dropzones,
  opened: state.accessibleListVisible,
  classes: state.screenStatus == 4 ? 'screen4-accessible-list' : 'screen6-accessible-list'
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(thunks.updateAccessiableValue(id));
  },
  closeList: () => {
    dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
