import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

import data from "../data";
import { updateAccessibleList, thunks } from "../actions";

const mapState = (state) => ({
  list: data.venDiagramData.dropZones,
  opened: state.accessibleListVisible,
});

const matchDispatch = (dispatch) => ({
  onClick: (source) => {
   dispatch(thunks.checkDroppedItem(source));
  },
  closeList: () => {
      dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
